-- ============================================================
--  Schema v3 — RLS & Auth Fixes
--  Run this in Supabase SQL Editor AFTER schema.sql + schema_v2.sql.
--  Safe to run multiple times (all statements are idempotent).
--
--  What this fixes:
--
--  1. is_admin() — adds email-based fallback so admin reads/writes
--     work even when the JWT role claim is missing (happens when
--     schema_auth_trigger_fix.sql was run after schema_v2.sql, which
--     drops the set_user_role_claim trigger).
--
--  2. anon_leads_insert — removes the status='new'/contractor_id IS NULL
--     restriction that blocked auto-assigned leads (where submitForm sets
--     status='assigned' + contractor_id when autoAssign is enabled).
--     App-level guards (honeypot, rate limiting, required-field validation)
--     are the right place to police public form submissions, not RLS.
--
--  3. GRANT fixes — ensures anon has the permissions it needs.
--
--  4. my_contractor_id() — re-confirmed; no change needed but documented.
-- ============================================================


-- ─── 1. Fix is_admin() with email-based fallback ─────────────────────────────
--
-- Original only checked JWT app_metadata.role = 'admin'.
-- If the set_user_role_claim trigger is absent (dropped by schema_auth_trigger_fix.sql),
-- JWT claims are never written and is_admin() always returns false — silently blocking
-- all admin reads and writes (leads, contractors, settings, notifications).
--
-- The fix adds a third check: does the authenticated user's email match the
-- admin_email configured in app_settings? This is safe because:
--  - auth.email() is set by Supabase Auth (cannot be forged by the client)
--  - admin_email is only writable by admin (admin_settings_all policy)
--  - SECURITY DEFINER runs as the postgres superuser so cross-table lookup works

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT
    -- JWT top-level role claim (legacy / manually set)
    (auth.jwt() ->> 'role') = 'admin'
    -- JWT app_metadata role (set by set_user_role_claim trigger when present)
    OR (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    -- Email fallback: match against the admin_email stored in app_settings.
    -- Uses (auth.jwt() ->> 'email') for maximum version compatibility.
    -- This makes admin ops work even when JWT claims are not configured
    -- (e.g., when schema_auth_trigger_fix.sql dropped the role trigger).
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


-- ─── 2. Fix anon_leads_insert — allow all INSERT payloads from public form ───
--
-- Old policy: WITH CHECK (status = 'new' AND contractor_id IS NULL)
-- Problem:    When autoAssign is on and a matching contractor exists in DB,
--             sbCreateLead() sends status='assigned' + contractor_id=<id>.
--             The old policy silently rejects this row. submitForm() has
--             already shown the visitor a success screen and saved to
--             localStorage — so the insert failure is invisible to everyone
--             and the lead is permanently lost after the next DB hydration.
--
-- Fix:        Allow any INSERT from anon. App-level controls (honeypot field,
--             rate limiter, duplicate detection, required-field validation)
--             are the correct gatekeepers for public form submissions.
--             RLS on INSERT should only block the truly dangerous paths
--             (e.g., anon UPDATING or DELETING leads).

DROP POLICY IF EXISTS "anon_leads_insert" ON leads;

CREATE POLICY "anon_leads_insert" ON leads
  FOR INSERT
  WITH CHECK (true);


-- ─── 3. GRANT fixes ──────────────────────────────────────────────────────────
--
-- Ensure the anon role has the table-level permissions it needs.
-- These are additive — safe to re-run.

-- anon needs INSERT on leads for public form submissions
GRANT INSERT ON leads TO anon;

-- anon needs INSERT on notes because sbCreateLead() also inserts system notes
GRANT INSERT ON notes TO anon;

-- anon needs SELECT on contractors for county-matching in autoAssign
GRANT SELECT ON contractors TO anon;

-- authenticated role needs SELECT on contractors so admin can load the
-- contractor dropdown in Assign Leads. Without this table-level grant,
-- RLS policies are never evaluated and the query is rejected before
-- is_admin() even runs.
GRANT SELECT ON contractors TO authenticated;


-- ─── 4. my_contractor_id() — documentation only, no change ──────────────────
--
-- This function (defined in schema_v2.sql) returns the TEXT primary key of
-- the contractors row linked to the current auth user:
--   SELECT id FROM contractors WHERE auth_user_id = auth.uid() LIMIT 1;
--
-- For this to return a value, the contractor must have logged in at least once
-- after schema_v2.sql was applied — the _resolveAuthUser() function in app.js
-- auto-links auth.uid() to the contractor row on first sign-in via email match.
--
-- No SQL change needed here. Ensure contractors have logged in once to link
-- their auth_user_id, OR manually set it in SQL Editor:
--   UPDATE contractors SET auth_user_id = '<auth-user-uuid>' WHERE email = 'contractor@example.com';
-- Find the auth UUID at: Supabase Dashboard → Authentication → Users


-- ─── Done ─────────────────────────────────────────────────────────────────────
-- After running this file:
--   1. Admin sign-ins will work immediately (email fallback in is_admin())
--   2. Public form inserts will succeed regardless of autoAssign state
--   3. sbFetchActiveContractors() fix is in js/supabase.js (neq is_active false)
--   4. Contractors must have logged in once to link auth_user_id for RLS reads
-- ============================================================
