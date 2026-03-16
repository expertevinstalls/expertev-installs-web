-- ============================================================
--  schema_v4_intelligence_routing.sql
--  Run ONCE in Supabase SQL Editor.
--
--  Adds columns for:
--    - Part A public form upgrade (home_type, panel_location,
--      open_breaker, panel_photo_url)
--    - Part B response timer (assigned_at, response_deadline,
--      is_overdue)
--
--  All changes are additive and backward-compatible.
--  Existing rows get NULL / default values for new columns.
-- ============================================================

-- ── Part A: public form qualification fields ───────────────
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS home_type          TEXT,          -- 'single_family' | 'townhouse' | 'condo' | 'apartment' | 'commercial' | 'notsure'
  ADD COLUMN IF NOT EXISTS panel_location     TEXT,          -- 'garage' | 'basement' | 'outside' | 'utility_room' | 'notsure'
  ADD COLUMN IF NOT EXISTS open_breaker       TEXT,          -- 'yes' | 'no' | 'notsure'
  ADD COLUMN IF NOT EXISTS panel_photo_url    TEXT;          -- signed URL from lead-uploads Supabase Storage bucket

-- ── Part B: response timing / SLA tracking ─────────────────
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS assigned_at        TIMESTAMPTZ,   -- set when lead is first assigned to a contractor
  ADD COLUMN IF NOT EXISTS response_deadline  TIMESTAMPTZ,   -- assigned_at + response window (default 2 hours)
  ADD COLUMN IF NOT EXISTS is_overdue         BOOLEAN DEFAULT FALSE;  -- true when deadline passed without contact

-- ── Verify ─────────────────────────────────────────────────
SELECT
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name IN (
    'home_type', 'panel_location', 'open_breaker', 'panel_photo_url',
    'assigned_at', 'response_deadline', 'is_overdue'
  )
ORDER BY column_name;
