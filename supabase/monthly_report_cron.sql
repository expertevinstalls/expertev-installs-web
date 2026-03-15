-- ============================================================
--  monthly_report_cron.sql
--  Run ONCE in Supabase SQL Editor.
--
--  Schedules the monthly business report email to fire
--  automatically on the 1st of each month at 8:00 AM UTC.
--
--  Prerequisites:
--  1. pg_cron extension enabled in Supabase (Extensions tab)
--  2. `send-monthly-report` Edge Function deployed
--  3. RESEND_FROM_EMAIL env var set on the Edge Function
--  4. Resend API key saved in app Settings
--
--  The cron job calls the Edge Function via an HTTP request
--  using pg_net (also required — enable in Extensions tab).
--
--  SAFE TO RE-RUN: uses cron.unschedule before re-scheduling.
-- ============================================================


-- ── Enable required extensions (if not already enabled) ───
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;


-- ── Remove any existing job with this name (idempotent) ───
SELECT cron.unschedule('send-monthly-business-report')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'send-monthly-business-report'
);


-- ── Schedule: 1st of every month at 08:00 UTC ─────────────
--
--  ┌──────────── minute  (0)
--  │  ┌─────────── hour   (8 = 08:00 UTC)
--  │  │  ┌──────── day-of-month (1 = 1st)
--  │  │  │  ┌───── month  (*)
--  │  │  │  │  ┌── day-of-week (*)
--  0  8  1  *  *
--
--  The job calls the Edge Function with period='last-month'
--  so it always reports on the just-completed month.
--
--  IMPORTANT: Replace the placeholders below:
--    <PROJECT_REF>    — your Supabase project ref  (e.g. pvjyhgjagszgvkwyfieu)
--    <SERVICE_ROLE_KEY> — from Settings → API → service_role key
--    <RESEND_API_KEY> — from resend.com → API Keys
--    <RECIPIENT_EMAIL> — who should receive the monthly report
--    <ADMIN_EMAIL>    — your admin email (Reply-To)
SELECT cron.schedule(
  'send-monthly-business-report',
  '0 8 1 * *',
  $$
  SELECT net.http_post(
    url     := 'https://<PROJECT_REF>.supabase.co/functions/v1/send-monthly-report',
    headers := jsonb_build_object(
                 'Content-Type',  'application/json',
                 'Authorization', 'Bearer <SERVICE_ROLE_KEY>',
                 'apikey',        '<SERVICE_ROLE_KEY>'
               ),
    body    := jsonb_build_object(
                 'period',        'last-month',
                 'periodLabel',   to_char(now() - interval '1 month', 'Month YYYY'),
                 'recipient',     '<RECIPIENT_EMAIL>',
                 'adminEmail',    '<ADMIN_EMAIL>',
                 'businessName',  'ExpertEV Installers',
                 'resendApiKey',  '<RESEND_API_KEY>',
                 'stats',         jsonb_build_object(
                                    'newLeads',     0,
                                    'completed',    0,
                                    'revenue',      0,
                                    'platformCut',  0,
                                    'commissionPct', 15
                                  ),
                 'contractors',   '[]'::jsonb
               )
  );
  $$
);


-- ── Verify the job was created ─────────────────────────────
SELECT jobname, schedule, command, active
FROM cron.job
WHERE jobname = 'send-monthly-business-report';


-- ============================================================
--  NOTE: The cron job above sends a minimal payload because
--  pg_cron cannot directly query your app's runtime state.
--  For full per-contractor breakdowns in the auto-send,
--  consider having the Edge Function query the Supabase DB
--  directly (the function already has service-role access)
--  or use the "Send Report" button in Settings which builds
--  the payload from live app data.
-- ============================================================
