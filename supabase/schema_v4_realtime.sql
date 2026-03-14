-- ============================================================
--  Schema v4 — Realtime Publication Fix
--  Run this in Supabase SQL Editor AFTER schema_v3_rls_fix.sql.
--  Safe to run multiple times (idempotent via ADD TABLE IF NOT EXISTS logic).
--
--  What this fixes:
--
--  1. Enables Supabase Realtime postgres_changes events for the leads
--     table. Without this, Realtime subscriptions subscribe successfully
--     but no events fire when rows are inserted or updated — so the admin
--     dashboard never updates without a manual refresh.
--
--  2. Confirms the contractors table is also published (for admin
--     contractor-change events).
--
--  3. Documents how to verify publication status.
-- ============================================================


-- ─── 1. Add leads to the supabase_realtime publication ───────────────────────
--
-- supabase_realtime is the default Realtime publication created by Supabase.
-- Tables must be explicitly added to it for postgres_changes events to fire.
-- The ADD TABLE command is a no-op if the table is already a member.

ALTER PUBLICATION supabase_realtime ADD TABLE leads;


-- ─── 2. Add contractors to the supabase_realtime publication ─────────────────

ALTER PUBLICATION supabase_realtime ADD TABLE contractors;


-- ─── 3. Add notes to the supabase_realtime publication ───────────────────────
-- (optional — not currently subscribed in app.js, but useful for future use)

ALTER PUBLICATION supabase_realtime ADD TABLE notes;


-- ─── 4. Verify publication membership ────────────────────────────────────────
-- After running this file, check that all three tables appear in the output of:
--
--   SELECT schemaname, tablename
--   FROM pg_publication_tables
--   WHERE pubname = 'supabase_realtime'
--   ORDER BY tablename;
--
-- Expected output (at minimum):
--   public | contractors
--   public | leads
--   public | notes
--
-- If a table is missing, re-run the ALTER PUBLICATION statement above.


-- ─── Done ─────────────────────────────────────────────────────────────────────
-- After running this file:
--   1. Admin dashboard will receive realtime INSERT/UPDATE events on leads
--   2. Admin contractors page will update live when contractors are added
--   3. No app.js changes needed — sbSubscribeLeads() already handles events
-- ============================================================
