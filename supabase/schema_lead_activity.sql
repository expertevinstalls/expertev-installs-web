-- ============================================================
--  schema_lead_activity.sql
--  Run ONCE in Supabase SQL Editor.
--
--  Creates the lead_activity table for a full audit trail of
--  every important action on every lead.
--
--  SAFE TO RE-RUN: all statements use IF NOT EXISTS or DO blocks.
-- ============================================================


-- ── 1. Create lead_activity table ────────────────────────────
CREATE TABLE IF NOT EXISTS lead_activity (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id        TEXT        NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  action_type    TEXT        NOT NULL,   -- see action_type values below
  previous_value TEXT        DEFAULT '', -- human-readable previous state
  new_value      TEXT        DEFAULT '', -- human-readable new state
  actor_type     TEXT        DEFAULT '', -- 'admin' | 'contractor' | 'system'
  actor_id       TEXT        DEFAULT '', -- admin email or contractor DB id
  actor_name     TEXT        DEFAULT '', -- display name for timeline
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- action_type values used by the application:
--   lead_created   — lead was first created (manual entry or web form)
--   lead_assigned  — lead was assigned to a contractor
--   lead_reclaimed — lead was taken back from a contractor by admin
--   lead_reassigned— lead was moved from one contractor to another
--   contacted      — status changed to Contacted
--   scheduled      — status changed to Est. Scheduled
--   quote_sent     — contractor sent a quote (with or without amount)
--   quote_updated  — contractor updated a previously saved quote amount
--   job_won        — lead marked Job Won (completed)
--   job_lost       — lead marked Job Lost


-- ── 2. Indexes ────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_la_lead_id    ON lead_activity(lead_id);
CREATE INDEX IF NOT EXISTS idx_la_created_at ON lead_activity(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_la_action     ON lead_activity(action_type);


-- ── 3. Row Level Security ─────────────────────────────────────
ALTER TABLE lead_activity ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'lead_activity' AND policyname = 'dev_la_all'
  ) THEN
    EXECUTE $pol$
      CREATE POLICY "dev_la_all" ON lead_activity
        FOR ALL USING (true) WITH CHECK (true)
    $pol$;
    RAISE NOTICE 'Created RLS policy dev_la_all on lead_activity';
  ELSE
    RAISE NOTICE 'RLS policy dev_la_all already exists — skipped';
  END IF;
END $$;


-- ── 4. Verify ─────────────────────────────────────────────────
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'lead_activity'
ORDER BY ordinal_position;
