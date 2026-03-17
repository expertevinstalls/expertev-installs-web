import { corsHeaders } from '../_shared/cors.ts';

const TWILIO_SID  = Deno.env.get('TWILIO_ACCOUNT_SID')  ?? '';
const TWILIO_AUTH = Deno.env.get('TWILIO_AUTH_TOKEN')    ?? '';
const FROM_NUMBER = Deno.env.get('TWILIO_FROM_NUMBER')   ?? '';

/**
 * Normalize a phone number to E.164 format (+1XXXXXXXXXX for US).
 * Accepts: (215) 555-0199, 2155550199, +12155550199, etc.
 * Returns null if the number cannot be normalized.
 */
function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return '+1' + digits;                          // US 10-digit
  if (digits.length === 11 && digits.startsWith('1')) return '+' + digits; // US 11-digit
  if (digits.length > 7) return '+' + digits;                              // international passthrough
  return null;
}

Deno.serve(async (req: Request) => {
  // ── CORS preflight ────────────────────────────────────────────
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // ── Validate Twilio secrets ───────────────────────────────────
    if (!TWILIO_SID || !TWILIO_AUTH || !FROM_NUMBER) {
      console.error('[SMS] Missing Twilio secrets — set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER in Supabase project secrets');
      return new Response(
        JSON.stringify({ error: 'SMS not configured — Twilio secrets missing' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // ── Parse and validate request body ──────────────────────────
    const { to, message } = await req.json() as { to?: string; message?: string };

    if (!to || !message) {
      return new Response(
        JSON.stringify({ error: 'to and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // ── Normalize destination phone number ────────────────────────
    const toNormalized = toE164(to);
    if (!toNormalized) {
      console.error('[SMS] Invalid phone number — cannot normalize to E.164:', to);
      return new Response(
        JSON.stringify({ error: 'Invalid phone number: ' + to }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // ── Call Twilio Messages API ──────────────────────────────────
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_SID}/Messages.json`;
    const formBody  = new URLSearchParams({ To: toNormalized, From: FROM_NUMBER, Body: message });

    console.log('[SMS] Sending | to:', toNormalized, '| chars:', message.length);

    const twilioRes = await fetch(twilioUrl, {
      method:  'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${TWILIO_SID}:${TWILIO_AUTH}`),
        'Content-Type':  'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    const twilioBody = await twilioRes.json() as { sid?: string; error_message?: string; message?: string };

    if (!twilioRes.ok) {
      const errMsg = twilioBody.error_message || twilioBody.message || `HTTP ${twilioRes.status}`;
      console.error('[SMS] Twilio error | status:', twilioRes.status, '| message:', errMsg);
      return new Response(
        JSON.stringify({ error: errMsg }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    console.log('[SMS] Sent ✓ | sid:', twilioBody.sid, '| to:', toNormalized);
    return new Response(
      JSON.stringify({ ok: true, sid: twilioBody.sid }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[SMS] Unexpected error:', msg);
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
