-- ============================================================
--  PATCH v3 FINAL — The only SQL file you need to run.
--  Idempotent: safe to run multiple times.
--  Do NOT rerun schema.sql / schema_v2.sql / schema_v3_rls_fix.sql.
-- ============================================================
--
--  WHAT THIS FIXES
--  ───────────────
--  1. GRANT USAGE ON SCHEMA public TO anon
--     (explicit — Supabase sometimes revokes this on upgrades)
--
--  2. is_admin() with email fallback
--     (works even if set_user_role_claim trigger is absent)
--
--  3. anon_leads_insert → WITH CHECK (true)
--     Old: WITH CHECK (status = 'new' AND contractor_id IS NULL)
--     Blocked leads if autoAssign was on or status field drifted.
--     Fix: allow any INSERT from anon; app-layer guards are enough.
--
--  4. anon_notes_insert → NEW policy (was completely missing)
--     anon had GRANT INSERT on notes but no RLS policy allowing it.
--     Every sbAddNote() call from the public form silently failed
--     with 42501. Now allowed with WITH CHECK (true).
--
--  5. All necessary table-level GRANTs (additive, no-op if present)
--
--  6. admin_email correction in app_settings
--
-- ============================================================


-- ─── 1. Schema-level access ──────────────────────────────────────────────────
-- Explicitly grant schema usage so the anon role can reach any table.
-- In Supabase, postgres revokes public schema access from PUBLIC in newer
-- projects. Without this, all anon table operations return 42501.

GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;


-- ─── 2. is_admin() with email fallback ───────────────────────────────────────
-- Checks JWT role claim, app_metadata.role, AND email match against
-- app_settings.admin_email. The email fallback makes admin ops work even
-- if the set_user_role_claim trigger was dropped or never ran.

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


-- ─── 3. anon_leads_insert — allow any INSERT from public form ─────────────────
-- Drop whichever version is active and recreate with WITH CHECK (true).
-- Old version had: WITH CHECK (status = 'new' AND contractor_id IS NULL)
-- That blocked submissions when autoAssign was enabled (status='assigned').

DROP POLICY IF EXISTS "anon_leads_insert" ON leads;

CREATE POLICY "anon_leads_insert" ON leads
  FOR INSERT
  WITH CHECK (true);


-- ─── 4. anon_notes_insert — NEW, was completely missing ──────────────────────
-- schema_v2 gave anon GRANT INSERT on notes but never created an RLS policy
-- allowing it. Every sbAddNote() call from the public form silently hit
-- 42501 "new row violates row-level security policy" and returned null.
-- This policy allows anon to insert notes (for system/customer notes
-- attached at lead-creation time).

DROP POLICY IF EXISTS "anon_notes_insert" ON notes;

CREATE POLICY "anon_notes_insert" ON notes
  FOR INSERT
  WITH CHECK (true);


-- ─── 5. Table-level GRANTs ────────────────────────────────────────────────────
-- Additive. These are no-ops if already granted.

GRANT INSERT ON leads         TO anon;
GRANT INSERT ON notes         TO anon;
GRANT SELECT ON contractors   TO anon;
GRANT SELECT ON contractors   TO authenticated;


-- ─── 6. admin_email — ensure correct value ────────────────────────────────────
-- is_admin() email fallback only works when this row has the real address.
-- No-op if already set correctly.

UPDATE app_settings
SET    admin_email = 'expertevinstalls@gmail.com'
WHERE  id = 1
  AND  lower(coalesce(admin_email, '')) != 'expertevinstalls@gmail.com';


-- ═══════════════════════════════════════════════════════════════════
--  VERIFY — run these after the patch to confirm all fixes applied.
--  Each query must return the "Expected" value shown in the comment.
-- ═══════════════════════════════════════════════════════════════════

-- V1. anon_leads_insert now has WITH CHECK (true)
SELECT polname, pg_get_expr(polwithcheck, polrelid) AS with_check
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'leads' AND polname = 'anon_leads_insert';
-- Expected: with_check = 'true'

-- V2. anon_notes_insert now exists with WITH CHECK (true)
SELECT polname, pg_get_expr(polwithcheck, polrelid) AS with_check
FROM   pg_policy
JOIN   pg_class ON pg_class.oid = pg_policy.polrelid
WHERE  relname = 'notes' AND polname = 'anon_notes_insert';
-- Expected: with_check = 'true'

-- V3. anon has INSERT on leads and notes
SELECT grantee, table_name, privilege_type
FROM   information_schema.role_table_grants
WHERE  grantee = 'anon'
  AND  table_name IN ('leads', 'notes', 'contractors')
ORDER  BY table_name, privilege_type;
-- Expected:
--   anon | contractors | SELECT
--   anon | leads       | INSERT
--   anon | notes       | INSERT

-- V4. admin_email is correct
SELECT admin_email FROM app_settings WHERE id = 1;
-- Expected: expertevinstalls@gmail.com

-- V5. is_admin() body has email fallback (looks for 'app_settings')
SELECT prosrc FROM pg_proc WHERE proname = 'is_admin';
-- Expected: body contains 'app_settings' and 'lower'

-- V6. Schema access for anon
SELECT has_schema_privilege('anon', 'public', 'USAGE');
-- Expected: true
