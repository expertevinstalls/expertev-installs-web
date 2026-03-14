-- ============================================================
--  Enable Supabase Realtime on leads and contractors tables.
--  Run this once in the Supabase SQL Editor.
--
--  Supabase Realtime uses the supabase_realtime publication.
--  Tables must be added to it before postgres_changes subscriptions work.
--
--  Safe to run multiple times (ALTER PUBLICATION ... ADD TABLE is idempotent
--  in the sense that it won't error if already added).
-- ============================================================

-- Add tables to the realtime publication so the frontend can subscribe
-- to INSERT/UPDATE/DELETE events via supabase-js postgres_changes.
ALTER PUBLICATION supabase_realtime ADD TABLE leads;
ALTER PUBLICATION supabase_realtime ADD TABLE contractors;

-- Optional: confirm which tables are in the publication
-- SELECT schemaname, tablename FROM pg_publication_tables
-- WHERE pubname = 'supabase_realtime';
