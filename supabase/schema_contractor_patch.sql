-- ============================================================
--  Contractor table patch — run this in Supabase SQL Editor
--  BEFORE or INSTEAD OF schema_v2.sql during development.
--
--  What this fixes:
--  1. Adds a dev-open ALL policy for contractors (the original
--     schema.sql only added a SELECT policy — inserts were blocked).
--  2. Adds Phase 5 columns safely (IF NOT EXISTS) so the frontend
--     payload doesn't cause "column does not exist" errors.
--
--  Safe to run multiple times (all statements are idempotent).
-- ============================================================

-- ── 1. Add missing dev-open write policy for contractors ──────
-- Drop the read-only policy that was blocking inserts.
DROP POLICY IF EXISTS "dev_contractors_read" ON contractors;
DROP POLICY IF EXISTS "dev_contractors_all" ON contractors;

-- Replace with full dev-open access (matches leads/notes/notifications).
CREATE POLICY "dev_contractors_all" ON contractors
  FOR ALL USING (true) WITH CHECK (true);


-- ── 2. Add Phase 5 columns (safe IF NOT EXISTS) ───────────────
ALTER TABLE contractors
  ADD COLUMN IF NOT EXISTS auth_user_id   UUID,
  ADD COLUMN IF NOT EXISTS is_active      BOOLEAN     DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS invited_at     TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS last_login_at  TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS company_name   TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS contact_name   TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS services       TEXT[]      DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS notes          TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS updated_at     TIMESTAMPTZ DEFAULT NOW();

-- Backfill canonical columns from existing data
UPDATE contractors
SET
  company_name = COALESCE(NULLIF(company_name, ''), name),
  contact_name = COALESCE(NULLIF(contact_name, ''), contact),
  is_active    = (status = 'active')
WHERE TRUE;
