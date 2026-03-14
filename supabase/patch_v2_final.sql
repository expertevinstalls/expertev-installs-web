-- ============================================================
--  PATCH v2 FINAL — Run ONLY this file. Do not rerun any prior migrations.
--  Every statement is idempotent. Safe to run multiple times.
-- ============================================================


-- ════════════════════════════════════════════════════════════
--  PHASE 1: INSPECTION — run these first, review results
--  before running the fix statements below.
-- ════════════════════════════════════════════════════════════

-- 1a. All policies on leads (especially anon_leads_insert)
SELECT
  polname                                              AS policy_name,
  CASE polpermissive WHEN TRUE THEN 'PERMISSIVE' ELSE 'RESTRICTIVE' END AS type,
  polroles::regrole[]                                  AS roles,
  polcmd::text                                         AS command,
  pg_get_expr(polqual,      polrelid)                  AS using_expr,
  pg_get_expr(polwithcheck, polrelid)                  AS with_check_expr
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'leads'
ORDER  BY polname;

-- EXPECTED for anon_leads_insert:
--   policy_name       | with_check_expr
--   anon_leads_insert | true
-- If with_check_expr = '(status = 'new'...' → old policy is still live → patch failed


-- 1b. All policies on notifications
SELECT
  polname,
  pg_get_expr(polqual,      polrelid) AS using_expr,
  pg_get_expr(polwithcheck, polrelid) AS with_check_expr
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'notifications'
ORDER  BY polname;
-- EXPECTED: only admin_notifs_all. No anon policy. This is correct —
-- anon should never write to notifications (code fix handles this).


-- 1c. Table-level grants on leads
SELECT grantee, privilege_type, is_grantable
FROM   information_schema.role_table_grants
WHERE  table_name = 'leads'
ORDER  BY grantee, privilege_type;
-- EXPECTED: anon | INSERT | NO
--           authenticated | ... (various for admin)


-- 1d. Table-level grants on notifications
SELECT grantee, privilege_type
FROM   information_schema.role_table_grants
WHERE  table_name = 'notifications'
ORDER  BY grantee, privilege_type;
-- EXPECTED: authenticated | INSERT (for admin via admin_notifs_all)
-- anon should NOT need INSERT on notifications after the code fix


-- 1e. Triggers on leads (should be none — confirms no trigger is blocking)
SELECT tgname, tgenabled, pg_get_triggerdef(oid)
FROM   pg_trigger
WHERE  tgrelid = 'leads'::regclass;
-- EXPECTED: 0 rows (no triggers on leads table)


-- 1f. Check admin_email in app_settings
SELECT admin_email FROM app_settings WHERE id = 1;
-- EXPECTED: expertevinstalls@gmail.com


-- 1g. Check schema usage grants for anon
SELECT has_schema_privilege('anon', 'public', 'USAGE');
-- EXPECTED: true
-- If false, anon can't do anything — run the GRANT USAGE below


-- ════════════════════════════════════════════════════════════
--  PHASE 2: FIX — run these regardless of inspection results
--  All are idempotent. No harm if already correct.
-- ════════════════════════════════════════════════════════════

-- 2a. Ensure anon can access the public schema
GRANT USAGE ON SCHEMA public TO anon;

-- 2b. is_admin() with email fallback — always safe to re-apply
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT
    (auth.jwt() ->> 'role') = 'admin'
    OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR (
      (auth.jwt() ->> 'email') IS NOT NULL
      AND lower(auth.jwt() ->> 'email') = (
        SELECT lower(admin_email)
        FROM   app_settings
        WHERE  id = 1
        LIMIT  1
      )
    );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- 2c. Recreate anon_leads_insert with no conditions (allows any payload from anon)
DROP POLICY IF EXISTS "anon_leads_insert" ON leads;

CREATE POLICY "anon_leads_insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- 2d. Table-level INSERT grants (additive — no-op if already granted)
GRANT INSERT ON leads TO anon;
GRANT INSERT ON notes TO anon;
GRANT SELECT ON contractors TO anon;
GRANT SELECT ON contractors TO authenticated;

-- 2e. Correct admin_email (no-op if already right)
UPDATE app_settings
SET    admin_email = 'expertevinstalls@gmail.com'
WHERE  id = 1
  AND  lower(coalesce(admin_email, '')) != 'expertevinstalls@gmail.com';


-- ════════════════════════════════════════════════════════════
--  PHASE 3: VERIFY — re-run inspection after fix
-- ════════════════════════════════════════════════════════════

-- 3a. Confirm anon_leads_insert now has with_check = 'true'
SELECT polname, pg_get_expr(polwithcheck, polrelid) AS with_check_expr
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'leads' AND polname = 'anon_leads_insert';
-- MUST show: with_check_expr = 'true'

-- 3b. Confirm anon INSERT grant on leads
SELECT grantee, privilege_type
FROM   information_schema.role_table_grants
WHERE  table_name = 'leads' AND grantee = 'anon';
-- MUST show: anon | INSERT

-- 3c. Confirm admin_email
SELECT admin_email FROM app_settings WHERE id = 1;
-- MUST show: expertevinstalls@gmail.com
