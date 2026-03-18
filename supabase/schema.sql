-- ============================================================
--  EXPERT EV INSTALLERS — Supabase Database Schema
--  Phase 3: Foundation
--
--  HOW TO USE:
--  1. Open your Supabase project at https://supabase.com/dashboard
--  2. Go to the SQL Editor tab
--  3. Paste this entire file and click Run
--
--  IMPORTANT — PHASE NOTES:
--  - RLS policies in this file are "dev-open" (allow all reads/writes)
--    so you can test without auth during Phase 4 development.
--  - Phase 5 (Authentication) will replace all dev policies with
--    proper auth-based policies. Do NOT ship Phase 4 to real users
--    without completing Phase 5 first.
--  - The "app_settings" table uses a single-row pattern (id = 1).
-- ============================================================


-- ─── CONTRACTORS ────────────────────────────────────────────────────────────
-- Stores licensed electrical contractors who receive lead assignments.

CREATE TABLE IF NOT EXISTS contractors (
  id          TEXT        PRIMARY KEY,           -- e.g., 'c1', 'c2'
  name        TEXT        NOT NULL,
  contact     TEXT        DEFAULT '',
  phone       TEXT        DEFAULT '',
  email       TEXT        DEFAULT '',
  license     TEXT        DEFAULT '',
  counties    TEXT[]      DEFAULT '{}',          -- service area counties
  leads       INTEGER     DEFAULT 0,             -- denormalized counter (refreshed on demand)
  completed   INTEGER     DEFAULT 0,
  revenue     INTEGER     DEFAULT 0,
  rating      NUMERIC(3,1) DEFAULT 5.0,
  status      TEXT        DEFAULT 'active',      -- 'active' | 'inactive'
  created_at  TIMESTAMPTZ DEFAULT NOW()
);


-- ─── LEADS ──────────────────────────────────────────────────────────────────
-- Core lead table. Notes are stored separately in the notes table.
-- Reviews are embedded as columns since each lead has at most one review.

CREATE TABLE IF NOT EXISTS leads (
  id               TEXT        PRIMARY KEY,      -- 'L' + timestamp suffix, e.g., 'L001'
  name             TEXT        NOT NULL,
  phone            TEXT        DEFAULT '',
  email            TEXT        DEFAULT '',
  address          TEXT        DEFAULT '',
  city             TEXT        DEFAULT '',
  county           TEXT        DEFAULT '',
  state            TEXT        DEFAULT '',       -- 'PA' | 'NJ'
  service          TEXT        DEFAULT '',       -- e.g., 'Level 2 Home Charger'
  panel            TEXT        DEFAULT '',       -- e.g., '200A'
  charger          TEXT        DEFAULT '',       -- charger model
  rebate           TEXT        DEFAULT '',       -- e.g., 'PECO $250'
  status           TEXT        DEFAULT 'new',    -- see STATUS_LABELS in config.js
  contractor_id    TEXT        REFERENCES contractors(id),
  value            INTEGER     DEFAULT 0,        -- estimated job value in USD
  priority         TEXT        DEFAULT 'normal', -- 'normal' | 'high'
  complexity       TEXT        DEFAULT '',       -- e.g., 'Basic Installation'
  panel_size       TEXT        DEFAULT '',       -- e.g., '200amp'
  distance         TEXT        DEFAULT '',       -- e.g., 'under10', '10to25'
  install_location TEXT        DEFAULT '',       -- e.g., 'garage', 'basement'
  charger_brand    TEXT        DEFAULT '',
  lead_source      TEXT        DEFAULT '',       -- e.g., 'Google Ads', 'SEO'
  contacted_at     TIMESTAMPTZ,                  -- when contractor first contacted customer
  -- Review (one per lead, stored inline)
  review_rating    SMALLINT,                     -- 1-5
  review_text      TEXT,
  review_date      TIMESTAMPTZ,
  -- Computed job intelligence fields (from getJobIntelligence())
  install_time     TEXT        DEFAULT '',
  profit_potential TEXT        DEFAULT '',
  difficulty       TEXT        DEFAULT '',
  -- Misc
  is_duplicate     BOOLEAN     DEFAULT FALSE,
  created_display  TEXT        DEFAULT '',       -- human-readable: "Mar 10, 2026"
  created_at       TIMESTAMPTZ DEFAULT NOW()
);


-- ─── NOTES ──────────────────────────────────────────────────────────────────
-- Per-lead notes/activity log. Replaces the embedded lead.notes[] array.
-- When migrating from localStorage, each note in lead.notes[] becomes a row here.

CREATE TABLE IF NOT EXISTS notes (
  id              UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id         TEXT        NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author          TEXT        NOT NULL,          -- 'Admin', 'Contractor Name', 'System'
  text            TEXT        NOT NULL,
  created_display TEXT        DEFAULT '',        -- human-readable: "Mar 9", "Just now"
  created_at      TIMESTAMPTZ DEFAULT NOW()
);


-- ─── NOTIFICATIONS ──────────────────────────────────────────────────────────
-- Activity notifications shown in the dashboard notification panel.
-- text may contain safe inline HTML (e.g., <strong>).

CREATE TABLE IF NOT EXISTS notifications (
  id          BIGSERIAL   PRIMARY KEY,
  text        TEXT        NOT NULL,
  time        TEXT        DEFAULT 'Just now',    -- human-readable relative time
  read        BOOLEAN     DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);


-- ─── APP SETTINGS (single-row) ──────────────────────────────────────────────
-- All app-wide configuration in one row (id = 1 always).
-- checklist_done is a JSONB map of { checklistItemId: true }.

CREATE TABLE IF NOT EXISTS app_settings (
  id               INTEGER     PRIMARY KEY DEFAULT 1,
  formspree_id     TEXT        DEFAULT '',
  admin_email      TEXT        DEFAULT '',
  pa_phone         TEXT        DEFAULT '',
  nj_phone         TEXT        DEFAULT '',
  lead_fee         INTEGER     DEFAULT 75,
  commission_pct   INTEGER     DEFAULT 15,
  email_alerts     BOOLEAN     DEFAULT TRUE,
  sms_alerts       BOOLEAN     DEFAULT FALSE,
  auto_assign      BOOLEAN     DEFAULT FALSE,
  follow_up_alerts BOOLEAN     DEFAULT TRUE,
  review_requests  BOOLEAN     DEFAULT FALSE,
  checklist_done   JSONB       DEFAULT '{}',
  updated_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Seed the single settings row (no-op if already exists)
INSERT INTO app_settings (id)
VALUES (1)
ON CONFLICT (id) DO NOTHING;


-- ─── INDEXES ────────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_leads_status        ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_contractor_id ON leads(contractor_id);
CREATE INDEX IF NOT EXISTS idx_leads_county        ON leads(county);
CREATE INDEX IF NOT EXISTS idx_leads_created_at    ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email         ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_phone         ON leads(phone);

CREATE INDEX IF NOT EXISTS idx_notes_lead_id       ON notes(lead_id);
CREATE INDEX IF NOT EXISTS idx_notes_created_at    ON notes(created_at ASC);

CREATE INDEX IF NOT EXISTS idx_notifs_read         ON notifications(read);
CREATE INDEX IF NOT EXISTS idx_notifs_created_at   ON notifications(created_at DESC);


-- ─── ROW LEVEL SECURITY ─────────────────────────────────────────────────────
--
-- !! IMPORTANT !!
-- The policies below are DEVELOPMENT-OPEN: they allow any anonymous
-- request to read and write. This is intentional during Phase 4
-- development so you can test without implementing auth first.
--
-- Phase 5 (Authentication) MUST replace these with proper policies:
--   - Admins (authenticated + role='admin') can do everything
--   - Contractors (authenticated) can only see their assigned leads
--   - Anonymous users can only INSERT into leads (public form submission)
--   - No one can read/write settings without being authenticated as admin
--
-- DO NOT ship to production users with these dev policies in place.
-- ────────────────────────────────────────────────────────────────────────────

ALTER TABLE leads          ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes          ENABLE ROW LEVEL SECURITY;
ALTER TABLE contractors    ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications  ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_settings   ENABLE ROW LEVEL SECURITY;

-- DEV: allow all operations from anon (replace in Phase 5)
CREATE POLICY "dev_leads_all"         ON leads         FOR ALL  USING (true) WITH CHECK (true);
CREATE POLICY "dev_notes_all"         ON notes         FOR ALL  USING (true) WITH CHECK (true);
CREATE POLICY "dev_contractors_read"  ON contractors   FOR SELECT USING (true);
CREATE POLICY "dev_notifs_all"        ON notifications FOR ALL  USING (true) WITH CHECK (true);
CREATE POLICY "dev_settings_all"      ON app_settings  FOR ALL  USING (true) WITH CHECK (true);


-- ─── PHASE 5 POLICY STUBS (commented out — activate in Phase 5) ─────────────
--
-- Once Supabase Auth is configured and users have a 'role' in their
-- JWT claims (set via a trigger or manually), uncomment and adapt:
--
-- DROP POLICY IF EXISTS "dev_leads_all" ON leads;
--
-- -- Public can submit new leads (form submission)
-- CREATE POLICY "anon_leads_insert" ON leads
--   FOR INSERT WITH CHECK (status = 'new' AND contractor_id IS NULL);
--
-- -- Authenticated admin: full access to leads
-- CREATE POLICY "admin_leads_all" ON leads
--   FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
--
-- -- Contractor: can only see/update their own assigned leads
-- CREATE POLICY "contractor_leads_select" ON leads
--   FOR SELECT USING (contractor_id = auth.uid()::TEXT);
-- CREATE POLICY "contractor_leads_update" ON leads
--   FOR UPDATE USING (contractor_id = auth.uid()::TEXT);
--
-- -- Similar patterns for notes, notifications, settings...
-- ────────────────────────────────────────────────────────────────────────────
