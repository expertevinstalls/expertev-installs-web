-- ============================================================
--  Auth trigger fix — run this in Supabase SQL Editor NOW
--
--  PROBLEM:
--  schema_v2.sql added a BEFORE INSERT trigger (trg_set_user_role)
--  on auth.users that:
--    1. Queries public.app_settings and public.contractors without
--       the public. prefix — fails because the trigger runs in the
--       auth schema context where public is not in search_path.
--    2. Lives directly on auth.users — Supabase's internal auth
--       pipeline treats any exception in a BEFORE INSERT trigger
--       as a fatal user-creation failure ("Database error creating
--       new user").
--
--  SOLUTION:
--  Drop the trigger and function entirely. Role resolution is
--  already handled in the frontend by _resolveAuthUser() in app.js
--  (email comparison + contractors table lookup), so the JWT claim
--  trigger is not needed.
--
--  Safe to run multiple times.
-- ============================================================

-- Drop the broken trigger from auth.users
DROP TRIGGER IF EXISTS trg_set_user_role ON auth.users;

-- Drop the function that backed it
DROP FUNCTION IF EXISTS set_user_role_claim();

-- Verify it's gone (should return 0 rows)
SELECT trigger_name
FROM information_schema.triggers
WHERE event_object_schema = 'auth'
  AND event_object_table  = 'users'
  AND trigger_name        = 'trg_set_user_role';
