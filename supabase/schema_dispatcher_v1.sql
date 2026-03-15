-- ============================================================
--  schema_dispatcher_v1.sql
--  Run ONCE in Supabase SQL Editor.
--
--  Adds:
--  1. call_notes column to leads table
--  2. contractor_id + title columns to notifications table
--     (enables contractor-specific in-app notifications)
--
--  SAFE TO RE-RUN: all statements use IF NOT EXISTS or DO blocks.
-- ============================================================


-- ── 1. Add call_notes to leads ────────────────────────────────
-- Stores dispatcher / phone-call intake notes captured at lead creation.
-- Separate from the notes thread (notes table) — this is a single intake field.
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS call_notes TEXT DEFAULT '';


-- ── 2. Add contractor_id to notifications ─────────────────────
-- NULL  → admin notification (existing behavior, unchanged)
-- value → contractor-specific notification only that contractor can see
ALTER TABLE notifications
  ADD COLUMN IF NOT EXISTS contractor_id TEXT    DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS title         TEXT    DEFAULT '';

-- Index for fast per-contractor notification lookups
CREATE INDEX IF NOT EXISTS idx_notifs_contractor
  ON notifications(contractor_id)
  WHERE contractor_id IS NOT NULL;


-- ── 3. Verify ─────────────────────────────────────────────────
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name = 'call_notes';

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'notifications'
  AND column_name IN ('contractor_id', 'title')
ORDER BY column_name;
