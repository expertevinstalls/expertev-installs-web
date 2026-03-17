-- ================================================================
-- schema_v6_sms.sql
-- Adds admin_sms_phone to app_settings for SMS alert destination.
--
-- ⚠  RUN THIS IN: Supabase Dashboard → SQL Editor → New query
--    Paste the entire file and click "Run".
--
-- IDEMPOTENT — safe to run multiple times.
-- ================================================================

ALTER TABLE app_settings
  ADD COLUMN IF NOT EXISTS admin_sms_phone TEXT DEFAULT '';

-- ── Verify ────────────────────────────────────────────────────
-- Expected: 1 row showing id=1 with admin_sms_phone column present

SELECT id, admin_email, pa_phone, nj_phone, admin_sms_phone, sms_alerts
FROM app_settings
WHERE id = 1;
