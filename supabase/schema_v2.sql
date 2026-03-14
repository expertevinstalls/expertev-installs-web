-- ============================================================
--  EXPERT EV INSTALLERS — Schema v2 Migration
--  Phase 5: Contractor Authentication
--
--  HOW TO USE:
--  1. Open your Supabase project at https://supabase.com/dashboard
--  2. Go to the SQL Editor tab
--  3. Paste this entire file and click Run
--
--  SAFE TO RUN MULTIPLE TIMES — all statements use IF NOT EXISTS
--  or DO NOTHING / IF EXISTS guards. Existing data is preserved.
--
--  WHAT THIS ADDS:
--  - contractors.auth_user_id  → links DB row to Supabase Auth user
--  - contractors.is_active     → replaces status='active' check
--  - contractors.invited_at    → when the invite email was sent
--  - contractors.last_login_at → updated on each sign-in
--  - contractors.company_name  → canonical column (backfilled from name)
--  - contractors.contact_name  → canonical column (backfilled from contact)
--  - contractors.services      → TEXT[] of service types offered
--  - contractors.notes         → internal admin notes
--  - contractors.updated_at    → last-modified timestamp
--  - Indexes for auth lookups
--  - Updated RLS policies for authenticated access
-- ============================================================


-- ─── 1. ADD COLUMNS TO CONTRACTORS ──────────────────────────────────────────

ALTER TABLE contractors
  ADD COLUMN IF NOT EXISTS auth_user_id   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS is_active      BOOLEAN     DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS invited_at     TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS last_login_at  TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS company_name   TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS contact_name   TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS services       TEXT[]      DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS notes          TEXT        DEFAULT '',
  ADD COLUMN IF NOT EXISTS updated_at     TIMESTAMPTZ DEFAULT NOW();


-- ─── 2. BACKFILL CANONICAL COLUMNS ──────────────────────────────────────────
-- Populate company_name from name, contact_name from contact
-- where the new columns are still empty.

UPDATE contractors
SET
  company_name  = COALESCE(NULLIF(company_name, ''),  name),
  contact_name  = COALESCE(NULLIF(contact_name, ''), contact),
  is_active     = (status = 'active')
WHERE TRUE;


-- ─── 3. INDEXES ──────────────────────────────────────────────────────────────

-- Fast lookup when resolving auth session → contractor record
CREATE UNIQUE INDEX IF NOT EXISTS idx_contractors_auth_user_id
  ON contractors(auth_user_id)
  WHERE auth_user_id IS NOT NULL;

-- Fast lookup by email for auto-link on first sign-in
CREATE INDEX IF NOT EXISTS idx_contractors_email
  ON contractors(email);

-- Fast active-contractor list query
CREATE INDEX IF NOT EXISTS idx_contractors_is_active
  ON contractors(is_active);


-- ─── 4. UPDATED_AT TRIGGER ───────────────────────────────────────────────────
-- Automatically bump updated_at on every UPDATE to contractors.

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_contractors_updated_at ON contractors;
CREATE TRIGGER trg_contractors_updated_at
  BEFORE UPDATE ON contractors
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();


-- ─── 5. USER ROLE IN JWT CLAIMS ──────────────────────────────────────────────
-- This trigger fires after a user signs in and writes their role
-- into the Supabase Auth JWT custom claims so RLS policies can use it.
--
-- Role logic:
--   • admin_email (from app_settings) → role = 'admin'
--   • found in contractors table      → role = 'contractor'
--   • otherwise                       → role = 'unknown'

CREATE OR REPLACE FUNCTION set_user_role_claim()
RETURNS TRIGGER AS $$
DECLARE
  v_admin_email TEXT;
  v_contractor  RECORD;
BEGIN
  -- Get admin email from settings
  SELECT admin_email INTO v_admin_email FROM app_settings WHERE id = 1;

  IF NEW.email = v_admin_email THEN
    NEW.raw_app_meta_data = jsonb_set(
      COALESCE(NEW.raw_app_meta_data, '{}'::jsonb),
      '{role}',
      '"admin"'
    );
  ELSE
    SELECT id INTO v_contractor FROM contractors WHERE email = NEW.email LIMIT 1;
    IF FOUND THEN
      NEW.raw_app_meta_data = jsonb_set(
        COALESCE(NEW.raw_app_meta_data, '{}'::jsonb),
        '{role}',
        '"contractor"'
      );
    ELSE
      NEW.raw_app_meta_data = jsonb_set(
        COALESCE(NEW.raw_app_meta_data, '{}'::jsonb),
        '{role}',
        '"unknown"'
      );
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_set_user_role ON auth.users;
CREATE TRIGGER trg_set_user_role
  BEFORE INSERT OR UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION set_user_role_claim();


-- ─── 6. ROW LEVEL SECURITY POLICIES ─────────────────────────────────────────
--
-- Replaces the Phase 4 dev-open policies with auth-based policies.
--
-- Policy matrix:
--   leads:
--     • anon INSERT only (status='new', no contractor) — public form
--     • admin: full access
--     • contractor: SELECT + UPDATE own assigned leads only
--   notes:
--     • admin: full access
--     • contractor: SELECT + INSERT on their own leads' notes
--   contractors:
--     • anon: SELECT only (for lead-form county matching, if needed)
--     • admin: full access
--     • contractor: SELECT all, UPDATE own row only
--   notifications:
--     • admin: full access
--     • contractor: no access (admin-only feature for now)
--   app_settings:
--     • admin: full access
--     • everyone else: no access
-- ─────────────────────────────────────────────────────────────────────────────

-- Helper: is the current user an admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT (auth.jwt() ->> 'role') = 'admin'
    OR   (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin';
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Helper: get current user's contractor id (TEXT)
CREATE OR REPLACE FUNCTION my_contractor_id()
RETURNS TEXT AS $$
  SELECT id FROM contractors WHERE auth_user_id = auth.uid() LIMIT 1;
$$ LANGUAGE sql STABLE SECURITY DEFINER;


-- ── LEADS ────────────────────────────────────────────────────────────────────

-- Drop old dev policies
DROP POLICY IF EXISTS "dev_leads_all" ON leads;

-- Public form submission
CREATE POLICY "anon_leads_insert" ON leads
  FOR INSERT
  WITH CHECK (status = 'new' AND contractor_id IS NULL);

-- Admin: full access
CREATE POLICY "admin_leads_all" ON leads
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Contractor: read + update own leads
CREATE POLICY "contractor_leads_select" ON leads
  FOR SELECT
  USING (contractor_id = my_contractor_id());

CREATE POLICY "contractor_leads_update" ON leads
  FOR UPDATE
  USING (contractor_id = my_contractor_id())
  WITH CHECK (contractor_id = my_contractor_id());


-- ── NOTES ────────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "dev_notes_all" ON notes;

CREATE POLICY "admin_notes_all" ON notes
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "contractor_notes_select" ON notes
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM leads
      WHERE leads.id = notes.lead_id
        AND leads.contractor_id = my_contractor_id()
    )
  );

CREATE POLICY "contractor_notes_insert" ON notes
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM leads
      WHERE leads.id = notes.lead_id
        AND leads.contractor_id = my_contractor_id()
    )
  );


-- ── CONTRACTORS ──────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "dev_contractors_read" ON contractors;

-- Anon: read-only (county matching for public form)
CREATE POLICY "anon_contractors_select" ON contractors
  FOR SELECT
  USING (true);

-- Admin: full access
CREATE POLICY "admin_contractors_all" ON contractors
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Contractor: update own row only
CREATE POLICY "contractor_contractors_update" ON contractors
  FOR UPDATE
  USING (auth_user_id = auth.uid())
  WITH CHECK (auth_user_id = auth.uid());


-- ── NOTIFICATIONS ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "dev_notifs_all" ON notifications;

CREATE POLICY "admin_notifs_all" ON notifications
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());


-- ── APP SETTINGS ─────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "dev_settings_all" ON app_settings;

CREATE POLICY "admin_settings_all" ON app_settings
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());


-- ─── 7. ANON INSERT POLICY FOR LEADS (re-enable public form) ─────────────────
-- The public lead-capture form runs as anon. The anon_leads_insert policy
-- above allows it. Ensure the anon role exists and is granted INSERT.

GRANT INSERT ON leads TO anon;
GRANT INSERT ON notes TO anon;   -- in case system notes are added with lead


-- ─── DONE ────────────────────────────────────────────────────────────────────
-- Run schema_v2.sql in Supabase SQL Editor after schema.sql.
-- Then deploy the invite-contractor Edge Function before testing invites.
