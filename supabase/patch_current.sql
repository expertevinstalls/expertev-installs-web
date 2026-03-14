-- ============================================================
--  MINIMAL IDEMPOTENT PATCH — apply in Supabase SQL Editor
--  All statements are safe to run multiple times.
--  Do NOT rerun schema.sql / schema_v2.sql / schema_v3_rls_fix.sql.
-- ============================================================


-- ─── 1. is_admin() — email-based fallback ────────────────────────────────────
-- CREATE OR REPLACE is always idempotent. Replaces whichever version is live.
-- This version checks JWT role claims AND email match against app_settings.
-- If the JWT trigger is absent, the email fallback keeps admin logins working.

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


-- ─── 2. anon_leads_insert — allow any INSERT (no status/contractor restriction)
-- Drops whatever version exists (old or new) and recreates clean.

DROP POLICY IF EXISTS "anon_leads_insert" ON leads;

CREATE POLICY "anon_leads_insert" ON leads
  FOR INSERT
  WITH CHECK (true);


-- ─── 3. GRANTs — additive, safe to re-run ────────────────────────────────────

GRANT INSERT ON leads        TO anon;
GRANT INSERT ON notes        TO anon;
GRANT SELECT ON contractors  TO anon;
GRANT SELECT ON contractors  TO authenticated;


-- ─── 4. Ensure admin_email is set in app_settings ────────────────────────────
-- is_admin() email fallback only works if this row contains the real email.
-- UPDATE only runs if the current value is wrong/blank. No-op if correct.

UPDATE app_settings
SET    admin_email = 'expertevinstalls@gmail.com'
WHERE  id = 1
  AND  lower(coalesce(admin_email, '')) != 'expertevinstalls@gmail.com';


-- ─── 5. Verify — run these SELECTs and check the Expected column ─────────────

-- 5a. Confirm is_admin() has email fallback (look for 'app_settings' in the body)
SELECT prosrc
FROM   pg_proc
WHERE  proname = 'is_admin';
-- Expected: body contains 'app_settings'

-- 5b. Confirm anon_leads_insert has WITH CHECK (true) — no status/contractor filter
SELECT polname, pg_get_expr(polwithcheck, polrelid) AS with_check
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'leads'
  AND  polname = 'anon_leads_insert';
-- Expected: with_check = 'true'

-- 5c. Confirm admin_email is set correctly
SELECT admin_email FROM app_settings WHERE id = 1;
-- Expected: expertevinstalls@gmail.com

-- 5d. Confirm anon has INSERT on leads and notes
SELECT grantee, table_name, privilege_type
FROM   information_schema.role_table_grants
WHERE  grantee = 'anon'
  AND  table_name IN ('leads','notes','contractors')
ORDER  BY table_name;
-- Expected: anon | leads | INSERT
--           anon | notes | INSERT
--           anon | contractors | SELECT
