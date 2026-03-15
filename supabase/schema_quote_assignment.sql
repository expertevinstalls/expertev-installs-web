-- ============================================================
--  schema_quote_assignment.sql
--  Run ONCE in Supabase SQL Editor.
--
--  ADDS:
--  1. Contractor quote fields to the leads table
--  2. lead_assignment_history table for reclaim/reassign audit trail
--
--  SAFE TO RE-RUN: all statements use IF NOT EXISTS or DO blocks.
-- ============================================================


-- ── 1. Add quote columns to leads ────────────────────────────
-- quote_amount:     contractor's actual quoted/agreed price (distinct from `value` estimate)
-- quote_notes:      optional notes about the quote
-- quote_updated_at: when the contractor last saved a quote
-- quote_updated_by: contractor ID or name who saved the quote
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS quote_amount     NUMERIC(10,2),
  ADD COLUMN IF NOT EXISTS quote_notes      TEXT          DEFAULT '',
  ADD COLUMN IF NOT EXISTS quote_updated_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS quote_updated_by TEXT          DEFAULT '';


-- ── 2. Create lead_assignment_history table ───────────────────
-- Tracks every reclaim/reassign action performed by admin.
-- from_contractor_id: NULL means the lead was previously unassigned
-- to_contractor_id:   NULL means the lead was reclaimed (unassigned)
CREATE TABLE IF NOT EXISTS lead_assignment_history (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id             TEXT        NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  from_contractor_id  TEXT,
  to_contractor_id    TEXT,
  changed_by          TEXT        DEFAULT '',   -- admin email or user ID
  reason              TEXT        DEFAULT '',
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lah_lead_id    ON lead_assignment_history(lead_id);
CREATE INDEX IF NOT EXISTS idx_lah_created_at ON lead_assignment_history(created_at DESC);


-- ── 3. RLS for lead_assignment_history ───────────────────────
ALTER TABLE lead_assignment_history ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'lead_assignment_history'
      AND policyname = 'dev_lah_all'
  ) THEN
    EXECUTE $pol$
      CREATE POLICY "dev_lah_all" ON lead_assignment_history
        FOR ALL USING (true) WITH CHECK (true)
    $pol$;
    RAISE NOTICE 'Created RLS policy dev_lah_all on lead_assignment_history';
  ELSE
    RAISE NOTICE 'RLS policy dev_lah_all already exists — skipped';
  END IF;
END $$;


-- ── 4. Verify ─────────────────────────────────────────────────
-- Run after migration to confirm schema is correct.
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name IN ('quote_amount','quote_notes','quote_updated_at','quote_updated_by')
ORDER BY column_name;

SELECT table_name
FROM information_schema.tables
WHERE table_name = 'lead_assignment_history';
