-- ============================================================
--  schema_business_ops_v1.sql
--  Run ONCE in Supabase SQL Editor.
--
--  Adds:
--  1. final_value + won_at columns to leads table
--     final_value = locked-in revenue when lead is won
--     won_at      = timestamp of win (drives monthly revenue reporting)
--  2. contractor_type column to contractors table
--     'real' (default) or 'demo'
--     Demo contractors are excluded from all business reporting
--
--  Backfills existing completed leads with best-available values.
--
--  SAFE TO RE-RUN: all statements use IF NOT EXISTS / DO blocks.
-- ============================================================


-- ── 1. Add final_value and won_at to leads ────────────────────
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS final_value NUMERIC(10,2),
  ADD COLUMN IF NOT EXISTS won_at      TIMESTAMPTZ;

-- Index on won_at for fast monthly revenue queries
CREATE INDEX IF NOT EXISTS idx_leads_won_at
  ON leads(won_at)
  WHERE won_at IS NOT NULL;

-- Also add created_at index for fast lead-count filtering
CREATE INDEX IF NOT EXISTS idx_leads_created_at
  ON leads(created_at DESC);


-- ── 2. Add contractor_type to contractors ─────────────────────
ALTER TABLE contractors
  ADD COLUMN IF NOT EXISTS contractor_type TEXT DEFAULT 'real';

-- CHECK constraint (idempotent via DO block)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'contractors_contractor_type_check'
  ) THEN
    ALTER TABLE contractors
      ADD CONSTRAINT contractors_contractor_type_check
        CHECK (contractor_type IN ('real', 'demo'));
    RAISE NOTICE 'Added contractor_type CHECK constraint';
  ELSE
    RAISE NOTICE 'contractor_type CHECK constraint already exists — skipped';
  END IF;
END $$;


-- ── 3. Backfill existing completed leads ──────────────────────

-- won_at: best available approximation for historical leads
-- Priority: quote_updated_at (most meaningful) > created_at
UPDATE leads
SET won_at = COALESCE(quote_updated_at, created_at)
WHERE status = 'completed'
  AND won_at IS NULL;

-- final_value: locked-in amount (quoted price if available, else estimated value)
UPDATE leads
SET final_value = COALESCE(quote_amount, value::NUMERIC(10,2))
WHERE status = 'completed'
  AND final_value IS NULL;


-- ── 4. Verify ─────────────────────────────────────────────────
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name IN ('final_value', 'won_at')
ORDER BY column_name;

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'contractors'
  AND column_name = 'contractor_type';

-- Show backfill results
SELECT
  COUNT(*) FILTER (WHERE status = 'completed') AS completed_leads,
  COUNT(*) FILTER (WHERE status = 'completed' AND won_at IS NOT NULL)    AS with_won_at,
  COUNT(*) FILTER (WHERE status = 'completed' AND final_value IS NOT NULL) AS with_final_value
FROM leads;
