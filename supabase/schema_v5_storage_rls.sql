-- ================================================================
-- schema_v5_storage_rls.sql
-- Storage RLS policies for the lead-uploads bucket.
--
-- ⚠  RUN THIS IN: Supabase Dashboard → SQL Editor → New query
--    Paste the entire file and click "Run".
--
-- IDEMPOTENT — safe to run multiple times.
-- Drops all policies before recreating so re-runs never fail.
--
-- WHY FOUR POLICIES:
--   anon_insert    — real customers submitting the public form
--                    (no login, anon JWT role)
--   auth_insert    — admin/contractor testing the form while logged in
--                    (localStorage session → authenticated JWT role)
--                    Without this, ANY logged-in user gets 400 on upload.
--   auth_select    — admin/contractor generating signed URLs for display
--   auth_delete    — admin/contractor cleaning up old photos
-- ================================================================


-- ── STEP 1: Ensure the bucket exists ─────────────────────────
-- No-op if already created in the Storage UI.
-- private bucket (public: false) — access via signed URLs only.

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'lead-uploads',
  'lead-uploads',
  false,
  5242880,
  ARRAY['image/jpeg','image/png','image/webp','image/heic','image/gif']
)
ON CONFLICT (id) DO NOTHING;


-- ── STEP 2: Drop all existing policies (idempotent) ──────────

DROP POLICY IF EXISTS "lead_uploads_anon_insert"  ON storage.objects;
DROP POLICY IF EXISTS "lead_uploads_auth_insert"  ON storage.objects;
DROP POLICY IF EXISTS "lead_uploads_auth_select"  ON storage.objects;
DROP POLICY IF EXISTS "lead_uploads_auth_delete"  ON storage.objects;


-- ── STEP 3: anon INSERT — real customers (public form, no login)

CREATE POLICY "lead_uploads_anon_insert"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'lead-uploads');


-- ── STEP 4: authenticated INSERT — logged-in admin/contractor ─
-- The Supabase JS client auto-restores any stored session from
-- localStorage. When an admin tests the form in the same browser
-- where they logged into the dashboard, the client role is
-- 'authenticated', not 'anon'. Without this policy every upload
-- attempt from a logged-in browser returns 400.

CREATE POLICY "lead_uploads_auth_insert"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'lead-uploads');


-- ── STEP 5: authenticated SELECT — signed URL generation ──────

CREATE POLICY "lead_uploads_auth_select"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'lead-uploads');


-- ── STEP 6: authenticated DELETE — photo cleanup ─────────────

CREATE POLICY "lead_uploads_auth_delete"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'lead-uploads');


-- ── DIAGNOSTIC: Run after the above to confirm all 4 exist ───
-- Expected: 4 rows — anon_insert, auth_insert, auth_select, auth_delete

SELECT
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'storage'
  AND tablename  = 'objects'
  AND policyname LIKE 'lead_uploads_%'
ORDER BY policyname;
