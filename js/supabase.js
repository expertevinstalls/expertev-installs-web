/* ============================================================
   SUPABASE — Client initialization and database helper layer
   Phase 3 foundation.

   SETUP:
   1. Replace _SB_URL and _SB_KEY below with your real values.
      Find them at: Supabase dashboard → Settings → API
   2. Run supabase/schema.sql in the Supabase SQL Editor.
   3. Add the Supabase CDN script to index.html (already done).

   FALLBACK BEHAVIOR:
   If _SB_URL / _SB_KEY are still set to placeholder values,
   or if the Supabase library fails to load, all helpers return
   null and app.js continues to use localStorage unchanged.
   No errors are thrown to the user.

   INTEGRATION:
   Phase 4 wires these helpers into app.js.
   Phase 5 adds real auth (replaces the dev RLS policies).
   Nothing in this file touches the existing UI or data flow.
============================================================ */


/* ── 1. CONFIGURATION ─────────────────────────────────────── */

// TODO: Replace these with your real Supabase project values.
// Dashboard → Settings → API → Project URL and anon/public key.
const _SB_URL = "https://pvjyhgjagszgvkwyfieu.supabase.co";
const _SB_KEY = "sb_publishable_WnASL-weQA_B-PyUaHD9Ow_pSNGInSl";



/* ── 2. CLIENT STATE ──────────────────────────────────────── */

let _sb   = null;   // Supabase client instance (null until init)
let _sbOk = false;  // true once successfully initialized


/* ── 3. INITIALIZATION ────────────────────────────────────── */

function initSupabase() {
  if (_sb) return _sb;

  // Not yet configured — bail silently
  if (_SB_URL.includes('YOUR_PROJECT') || _SB_KEY.includes('YOUR_SUPABASE')) {
    console.log('[Supabase] Not configured — local-only mode. Set _SB_URL and _SB_KEY in js/supabase.js to connect.');
    return null;
  }

  // CDN library not loaded
  if (typeof window.supabase === 'undefined') {
    console.warn('[Supabase] Client library not available.');
    return null;
  }

  try {
    _sb   = window.supabase.createClient(_SB_URL, _SB_KEY);
    _sbOk = true;
    console.log('[Supabase] Client created — probing connection…');
    // Fire-and-forget probe: confirms the key is valid and the schema exists.
    // Uses contractors (anon-readable) so anon page loads don't produce a misleading
    // "KEY OR SCHEMA ERROR" from the admin-only app_settings RLS policy.
    _sb.from('contractors').select('id').limit(1).then(({ error }) => {
      if (error) {
        console.error('[SUPABASE] ⚠ CONNECTION PROBE FAILED — key or schema issue. Error:', error.message);
        console.error('[SUPABASE] ⚠ Fix: open Supabase dashboard → Settings → API, copy the anon/public key, paste into _SB_KEY in js/supabase.js. Also confirm schema.sql + schema_v2.sql + schema_v3_rls_fix.sql have been run.');
      } else {
        console.log('[SUPABASE] ✓ Connection verified — writes are live');
      }
    });
    return _sb;
  } catch (err) {
    console.error('[Supabase] Init failed:', err.message);
    return null;
  }
}

// Internal shorthand — always try to init on first use
function _db() { return _sb || initSupabase(); }

/** Returns true when Supabase is configured and the client initialized */
function isSupabaseReady() { return _sbOk && _sb !== null; }


/* ── 4. LEADS ─────────────────────────────────────────────── */

/**
 * Fetch all leads ordered by newest first.
 * Notes are NOT included — call sbFetchNotes(leadId) or
 * sbFetchLeadsWithNotes() if you need them assembled.
 * Returns array of DB row objects or null on failure.
 */
async function sbFetchLeads() {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('[Supabase] fetchLeads:', error.message); return null; }
  return data;
}

/**
 * Fetch all leads with their notes assembled into app-format lead objects.
 * Use this when you need the full in-memory equivalent of the leads[] array.
 * Returns array of app-format lead objects or null on failure.
 */
async function sbFetchLeadsWithNotes() {
  const db = _db();
  if (!db) return null;
  const [{ data: rows, error: e1 }, { data: allNotes, error: e2 }] = await Promise.all([
    db.from('leads').select('*').order('created_at', { ascending: false }),
    db.from('notes').select('*').order('created_at', { ascending: true }),
  ]);
  if (e1) { console.error('[Supabase] fetchLeadsWithNotes (leads):', e1.message); return null; }
  if (e2) { console.error('[Supabase] fetchLeadsWithNotes (notes):', e2.message); return null; }
  // Group notes by lead_id
  const notesByLead = {};
  (allNotes || []).forEach(n => {
    if (!notesByLead[n.lead_id]) notesByLead[n.lead_id] = [];
    notesByLead[n.lead_id].push(n);
  });
  return (rows || []).map(row => _rowToLead(row, notesByLead[row.id] || []));
}

/**
 * Fetch a single lead by ID with its notes assembled.
 * Returns an app-format lead object or null.
 */
async function sbFetchLead(id) {
  const db = _db();
  if (!db) return null;
  const [{ data: row, error: e1 }, { data: notes }] = await Promise.all([
    db.from('leads').select('*').eq('id', id).single(),
    db.from('notes').select('*').eq('lead_id', id).order('created_at', { ascending: true }),
  ]);
  if (e1) { console.error('[Supabase] fetchLead:', e1.message); return null; }
  return _rowToLead(row, notes || []);
}

/**
 * Insert a new lead. Accepts an app-format lead object.
 * If the lead has notes[] already (e.g., auto-assign note), they are
 * inserted into the notes table automatically.
 * Returns the inserted DB row or null.
 */
async function sbCreateLead(lead) {
  const db = _db();
  if (!db) return null;
  const row = _leadToRow(lead);

  // ── Contractor validation ──────────────────────────────────────
  // The in-memory CONTRACTORS array (demo.js) uses IDs like 'c1'/'c2'
  // that may not exist in the Supabase contractors table yet.
  // Validate before insert so a bad contractor_id never fails the lead.
  if (row.contractor_id) {
    console.log('[DB] Validating contractor_id candidate:', row.contractor_id);
    try {
      const { data: cRow } = await db
        .from('contractors')
        .select('id')
        .eq('id', row.contractor_id)
        .maybeSingle();
      if (cRow) {
        console.log('[DB] contractor_id', row.contractor_id, '✓ found in DB');
      } else {
        console.warn('[DB] contractor_id', row.contractor_id, 'not in contractors table — saving lead unassigned');
        row.contractor_id = null;
        if (row.status === 'assigned') row.status = 'new';
      }
    } catch (validationErr) {
      // If the validation read itself fails (network/timeout), fail open:
      // save the lead unassigned rather than lose it entirely.
      console.warn('[DB] contractor validation read failed — saving lead unassigned. Error:', validationErr.message);
      row.contractor_id = null;
      if (row.status === 'assigned') row.status = 'new';
    }
  }
  // ──────────────────────────────────────────────────────────────

  // Use insert-only (no .select()) so anon submissions don't require SELECT permission.
  // Anon has INSERT on leads but no SELECT — adding .select().single() would trigger
  // a RETURNING clause that PostgREST executes in the same transaction.
  // When RETURNING is denied by RLS, the whole transaction rolls back and the row
  // is never written. Removing .select() uses Prefer:return=minimal, which succeeds
  // with INSERT-only permission. We return the locally-built row instead.
  const { error } = await db
    .from('leads')
    .insert([row]);
  if (error) {
    console.error('[Supabase] createLead FAILED:', JSON.stringify({
      step: 'lead_insert',
      lead_id: row.id,
      error: error.message,
      code: error.code,
      hint: error.hint ?? null,
      details: error.details ?? null,
    }));
    return null;
  }
  console.log('[DB] Lead inserted ✓', JSON.stringify({
    step: 'lead_insert',
    lead_id: row.id,
    contractor_id: row.contractor_id ?? 'unassigned',
    status: row.status,
    result: 'success',
  }));
  // Persist any pre-existing notes (e.g., system assignment notes)
  if (Array.isArray(lead.notes) && lead.notes.length > 0) {
    for (const note of lead.notes) {
      await sbAddNote(lead.id, note.author, note.text);
    }
  }
  return row;
}

/**
 * Update arbitrary columns on a lead.
 * Fields must be snake_case column names matching the DB schema.
 * Example: sbUpdateLead('L001', { status: 'contacted', contacted_at: new Date().toISOString() })
 * Returns updated DB row or null.
 */
async function sbUpdateLead(id, fields) {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('leads')
    .update(fields)
    .eq('id', id)
    .select()
    .single();
  if (error) { console.error('[Supabase] updateLead:', error.message); return null; }
  return data;
}

/**
 * Update a lead's status.
 * Automatically sets contacted_at when transitioning to 'contacted'.
 */
async function sbUpdateLeadStatus(id, status) {
  const update = { status };
  if (status === 'contacted') update.contacted_at = new Date().toISOString();
  return sbUpdateLead(id, update);
}

/**
 * Assign a lead to a contractor. Sets status to 'assigned'.
 * Pass null contractorId to unassign (reverts to 'new').
 */
async function sbAssignLead(id, contractorId) {
  return sbUpdateLead(id, {
    contractor_id: contractorId || null,
    status: contractorId ? 'assigned' : 'new',
  });
}

/**
 * Save a customer review against a lead.
 */
async function sbSaveReview(id, rating, text) {
  return sbUpdateLead(id, {
    review_rating: rating,
    review_text:   text,
    review_date:   new Date().toISOString(),
  });
}


/* ── 5. NOTES ─────────────────────────────────────────────── */

/**
 * Fetch all notes for a lead, oldest first.
 * Returns array of note DB rows or null.
 */
async function sbFetchNotes(leadId) {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('notes')
    .select('*')
    .eq('lead_id', leadId)
    .order('created_at', { ascending: true });
  if (error) { console.error('[Supabase] fetchNotes:', error.message); return null; }
  return data;
}

/**
 * Add a note to a lead.
 * Returns the inserted note DB row or null.
 */
async function sbAddNote(leadId, author, text) {
  const db = _db();
  if (!db) return null;
  const now = new Date();
  const row = {
    lead_id:         leadId,
    author,
    text,
    created_display: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  };
  // Use insert-only (no .select()) — same reason as sbCreateLead().
  // Anon has INSERT on notes but no SELECT; adding .select().single() triggers a
  // RETURNING clause that PostgREST executes in the same transaction.
  // If RETURNING is denied by RLS the whole transaction rolls back silently.
  const { error } = await db.from('notes').insert([row]);
  if (error) {
    console.error('[SUPABASE] addNote FAILED:', JSON.stringify({
      lead_id: leadId, author, error: error.message, code: error.code,
    }));
    return null;
  }
  console.log('[SUPABASE] addNote ✓', JSON.stringify({ lead_id: leadId, author }));
  return { ...row };
}


/* ── 6. NOTIFICATIONS ─────────────────────────────────────── */

/**
 * Fetch latest 50 notifications, newest first.
 * Returns array of notification DB rows or null.
 */
async function sbFetchNotifications() {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('notifications')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) { console.error('[Supabase] fetchNotifications:', error.message); return null; }
  return data;
}

/**
 * Add a notification. text may contain safe HTML like <strong>.
 * Returns the inserted row or null.
 */
async function sbAddNotification(text) {
  const db = _db();
  if (!db) return null;
  // Use insert-only (no .select()) for consistency — RETURNING requires SELECT permission.
  const { error } = await db
    .from('notifications')
    .insert([{ text, time: 'Just now', read: false }]);
  if (error) { console.error('[SUPABASE] addNotification:', error.message); return null; }
  return { text, time: 'Just now', read: false };
}

/**
 * Mark all unread notifications as read.
 */
async function sbMarkNotificationsRead() {
  const db = _db();
  if (!db) return;
  const { error } = await db
    .from('notifications')
    .update({ read: true })
    .eq('read', false);
  if (error) console.error('[Supabase] markNotificationsRead:', error.message);
}


/* ── 7. SETTINGS ──────────────────────────────────────────── */

/**
 * Fetch app settings (single row, id = 1).
 * Returns app-format settings object or null.
 */
async function sbFetchSettings() {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('app_settings')
    .select('*')
    .eq('id', 1)
    .single();
  if (error) { console.error('[Supabase] fetchSettings:', error.message); return null; }
  return data ? _rowToSettings(data) : null;
}

/**
 * Save settings to Supabase (upsert on id = 1).
 * Accepts the current app `settings` object.
 * Returns the upserted row or null.
 */
async function sbUpdateSettings(settingsObj) {
  const db = _db();
  if (!db) return null;
  const row = { id: 1, ..._settingsToRow(settingsObj), updated_at: new Date().toISOString() };
  const { data, error } = await db
    .from('app_settings')
    .upsert(row, { onConflict: 'id' })
    .select()
    .single();
  if (error) { console.error('[Supabase] updateSettings:', error.message); return null; }
  return data;
}


/* ── 8. CONTRACTORS ───────────────────────────────────────── */

/**
 * Fetch all active contractors.
 * Returns array of DB rows or null.
 */
async function sbFetchContractors() {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('contractors')
    .select('*')
    .eq('status', 'active');
  if (error) { console.error('[Supabase] fetchContractors:', error.message); return null; }
  return data;
}


/* ── 9. MAPPERS: app format ↔ DB row ──────────────────────── */

/**
 * Convert an app-format lead object to a Supabase leads table row.
 * Notes are NOT included (they live in the notes table).
 */
function _leadToRow(lead) {
  return {
    id:               lead.id,
    name:             lead.name             ?? '',
    phone:            lead.phone            ?? '',
    email:            lead.email            ?? '',
    address:          lead.address          ?? '',
    city:             lead.city             ?? '',
    county:           lead.county           ?? '',
    state:            lead.state            ?? '',
    service:          lead.service          ?? '',
    panel:            lead.panel            ?? '',
    charger:          lead.charger          ?? '',
    rebate:           lead.rebate           ?? '',
    status:           lead.status           ?? 'new',
    contractor_id:    lead.contractor       ?? null,
    value:            lead.value            ?? 0,
    priority:         lead.priority         ?? 'normal',
    complexity:       lead.complexity       ?? '',
    panel_size:       lead.panelSize        ?? '',
    distance:         lead.distance         ?? '',
    install_location: lead.installLocation  ?? '',
    charger_brand:    lead.chargerBrand     ?? '',
    lead_source:      lead.leadSource       ?? '',
    contacted_at:     _parseDisplayDate(lead.contactedAt),
    review_rating:    lead.review?.rating   ?? null,
    review_text:      lead.review?.text     ?? null,
    review_date:      _parseDisplayDate(lead.review?.date),
    is_duplicate:     lead.isDuplicate      ?? false,
    install_time:     lead.installTime      ?? '',
    profit_potential: lead.profitPotential  ?? '',
    difficulty:       lead.difficulty       ?? '',
    created_display:  lead.created          ?? '',
    // created_at intentionally omitted — DB sets it via DEFAULT NOW()
  };
}

/**
 * Convert a Supabase leads row + notes array → app-format lead object.
 * notes: array of DB note rows for this lead (from the notes table).
 */
function _rowToLead(row, notes) {
  const noteRows = Array.isArray(notes) ? notes : [];
  return {
    id:              row.id,
    name:            row.name,
    phone:           row.phone            ?? '',
    email:           row.email            ?? '',
    address:         row.address          ?? '',
    city:            row.city             ?? '',
    county:          row.county           ?? '',
    state:           row.state            ?? '',
    service:         row.service          ?? '',
    panel:           row.panel            ?? '',
    charger:         row.charger          ?? '',
    rebate:          row.rebate           ?? '',
    status:          row.status           ?? 'new',
    contractor:      row.contractor_id    ?? null,
    value:           row.value            ?? 0,
    priority:        row.priority         ?? 'normal',
    complexity:      row.complexity       ?? '',
    panelSize:       row.panel_size       ?? '',
    distance:        row.distance         ?? '',
    installLocation: row.install_location ?? '',
    chargerBrand:    row.charger_brand    ?? '',
    leadSource:      row.lead_source      ?? '',
    contactedAt:     row.contacted_at
      ? new Date(row.contacted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : null,
    review: row.review_rating ? {
      rating: row.review_rating,
      text:   row.review_text  ?? '',
      date:   row.review_date
        ? new Date(row.review_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        : '',
    } : null,
    isDuplicate:     row.is_duplicate     ?? false,
    installTime:     row.install_time     ?? '',
    profitPotential: row.profit_potential ?? '',
    difficulty:      row.difficulty       ?? '',
    created:         row.created_display  ||
      new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    notes: noteRows.map(n => ({
      author: n.author,
      text:   n.text,
      time:   n.created_display ||
        new Date(n.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    })),
  };
}

/** Convert app settings object → app_settings DB row */
function _settingsToRow(s) {
  return {
    formspree_id:     s.formspreeId    ?? '',
    admin_email:      s.adminEmail     ?? '',
    pa_phone:         s.paPhone        ?? '',
    nj_phone:         s.njPhone        ?? '',
    lead_fee:         s.leadFee        ?? 75,
    commission_pct:   s.commissionPct  ?? 15,
    email_alerts:     s.emailAlerts    ?? true,
    sms_alerts:       s.smsAlerts      ?? false,
    auto_assign:      s.autoAssign     ?? false,
    follow_up_alerts: s.followUpAlerts ?? true,
    review_requests:  s.reviewRequests ?? false,
    google_maps_key:  s.googleMapsKey  ?? '',
    checklist_done:   s.checklistDone  ?? {},
  };
}

/** Convert app_settings DB row → app settings object */
function _rowToSettings(row) {
  return {
    formspreeId:    row.formspree_id     ?? '',
    adminEmail:     row.admin_email      ?? '',
    paPhone:        row.pa_phone         ?? '',
    njPhone:        row.nj_phone         ?? '',
    leadFee:        row.lead_fee         ?? 75,
    commissionPct:  row.commission_pct   ?? 15,
    emailAlerts:    row.email_alerts     ?? true,
    smsAlerts:      row.sms_alerts       ?? false,
    autoAssign:     row.auto_assign      ?? false,
    followUpAlerts: row.follow_up_alerts ?? true,
    reviewRequests: row.review_requests  ?? false,
    googleMapsKey:  row.google_maps_key  ?? '',
    checklistDone:  row.checklist_done   ?? {},
  };
}

/**
 * Parse a human-readable display date like "Mar 9, 2026" or "Mar 9"
 * into an ISO 8601 string for DB storage. Returns null if unparseable.
 */
function _parseDisplayDate(str) {
  if (!str) return null;
  try {
    const d = new Date(str);
    return isNaN(d.getTime()) ? null : d.toISOString();
  } catch { return null; }
}


/* ── 10. AUTH ─────────────────────────────────────────────── */

/**
 * Sign in with email + password.
 * Returns { user, session } or { error }.
 */
async function sbSignIn(email, password) {
  const db = _db();
  if (!db) return { error: 'Supabase not ready' };
  const { data, error } = await db.auth.signInWithPassword({ email, password });
  if (error) { console.error('[Supabase] signIn:', error.message); return { error: error.message }; }
  return { user: data.user, session: data.session };
}

/**
 * Sign out the current user.
 */
async function sbSignOut() {
  const db = _db();
  if (!db) return;
  const { error } = await db.auth.signOut();
  if (error) console.error('[Supabase] signOut:', error.message);
}

/**
 * Get the current session (may be null if not signed in).
 * Returns the session object or null.
 */
async function sbGetSession() {
  const db = _db();
  if (!db) return null;
  const { data: { session } } = await db.auth.getSession();
  return session;
}

/**
 * Register an auth state change listener.
 * callback(event, session) — events include SIGNED_IN, SIGNED_OUT,
 * PASSWORD_RECOVERY, USER_UPDATED, TOKEN_REFRESHED.
 * Returns the unsubscribe function.
 */
function sbOnAuthStateChange(callback) {
  const db = _db();
  if (!db) return () => {};
  const { data: { subscription } } = db.auth.onAuthStateChange(callback);
  return () => subscription.unsubscribe();
}

/**
 * Send a password-reset email to the given address.
 * The email will contain a link that redirects back with type=recovery.
 *
 * IMPORTANT: redirectTo must NOT contain a hash fragment.
 * Supabase appends its own hash (#access_token=...&type=recovery) to the
 * redirectTo URL. A pre-existing hash creates a double-hash URL
 * (e.g. https://site.com/#type=recovery#access_token=...) which browsers
 * treat as a single fragment starting at the first #. The Supabase JS client
 * then can't find the tokens and the recovery link silently breaks.
 */
async function sbResetPassword(email) {
  const db = _db();
  if (!db) return { error: 'Supabase not ready' };
  // Base URL only — no hash, no trailing query params
  const redirectTo = window.location.origin + window.location.pathname;
  console.log('[sbResetPassword] requesting reset | email:', email, '| redirectTo:', redirectTo);
  const { error } = await db.auth.resetPasswordForEmail(email, { redirectTo });
  if (error) {
    console.error('[Supabase] resetPassword failed:', error.message, '| status:', error.status ?? 'n/a');
    return { error: error.message };
  }
  // Note: Supabase returns 200 even for unknown email addresses (anti-enumeration).
  // A successful response means the request was accepted, not guaranteed delivery.
  console.log('[sbResetPassword] accepted by Supabase — email queued (200 returned for all valid requests)');
  return { ok: true };
}

/**
 * Update the currently signed-in user's password.
 * Call this after confirming the new password in the UI.
 */
async function sbUpdatePassword(newPassword) {
  const db = _db();
  if (!db) return { error: 'Supabase not ready' };
  const { error } = await db.auth.updateUser({ password: newPassword });
  if (error) { console.error('[Supabase] updatePassword:', error.message); return { error: error.message }; }
  return { ok: true };
}


/* ── 11. CONTRACTOR AUTH HELPERS ──────────────────────────── */

/**
 * Fetch the contractor record for the given Supabase Auth user ID.
 * Returns DB row object or null.
 */
async function sbFetchCurrentContractor(authUserId) {
  const db = _db();
  if (!db) return null;
  const { data, error } = await db
    .from('contractors')
    .select('*')
    .eq('auth_user_id', authUserId)
    .maybeSingle();
  if (error) { console.error('[Supabase] fetchCurrentContractor:', error.message); return null; }
  return data ? _rowToContractor(data) : null;
}

/**
 * Fetch all active contractors.
 * Returns array of app-format contractor objects or null.
 */
async function sbFetchActiveContractors() {
  const db = _db();
  if (!db) return null;
  // Use neq(false) instead of eq(true) so contractors where is_active IS NULL
  // (created before schema_v2.sql/schema_contractor_patch.sql ran the backfill)
  // are still returned. NULL is treated as "not explicitly inactive".
  const { data, error } = await db
    .from('contractors')
    .select('*')
    .neq('is_active', false)
    .order('company_name');
  if (error) {
    // Fallback: if is_active column doesn't exist yet, query by status instead
    if (error.message.includes('column') || error.code === '42703') {
      console.warn('[Supabase] fetchActiveContractors: is_active column missing — falling back to status=active query');
      const { data: d2, error: e2 } = await db.from('contractors').select('*').eq('status', 'active').order('name');
      if (e2) { console.error('[Supabase] fetchActiveContractors (fallback):', e2.message); return null; }
      return (d2 || []).map(_rowToContractor);
    }
    console.error('[Supabase] fetchActiveContractors:', error.message);
    return null;
  }
  return (data || []).map(_rowToContractor);
}

/**
 * Insert a new contractor record.
 * Tries with full Phase 5 payload first; if the DB doesn't have the v2
 * schema columns yet it retries with v1-only columns so the insert still
 * succeeds before schema_v2.sql / schema_contractor_patch.sql is run.
 * Returns the inserted app-format contractor or null.
 */
async function sbCreateContractorRecord(fields) {
  const db = _db();
  if (!db) return null;

  // Attempt 1: full payload (works after schema_contractor_patch.sql is run)
  const fullRow = _contractorToRow(fields);
  let { data, error } = await db.from('contractors').insert([fullRow]).select().single();

  // Attempt 2: if column-not-found error, retry with v1 base columns only
  if (error && (error.message.includes('column') || error.code === '42703')) {
    console.warn('[DB] Phase 5 columns missing — retrying with v1 schema. Run schema_contractor_patch.sql to fix.', error.message);
    const baseRow = _contractorToRowV1(fields);
    ({ data, error } = await db.from('contractors').insert([baseRow]).select().single());
  }

  if (error) { console.error('[Supabase] createContractor:', error.message); return { _error: error.message }; }
  return _rowToContractor(data);
}

/**
 * Update arbitrary fields on a contractor record.
 * id: the contractor's TEXT primary key ('c1', 'c2', or UUID-style).
 * fields: app-format keys (camelCase) — they will be mapped to DB columns.
 */
async function sbUpdateContractor(id, fields) {
  const db = _db();
  if (!db) return null;
  const row = _contractorToRow(fields);
  delete row.id; // never update the PK
  const { data, error } = await db
    .from('contractors')
    .update(row)
    .eq('id', id)
    .select()
    .single();
  if (error) { console.error('[Supabase] updateContractor:', error.message); return null; }
  return _rowToContractor(data);
}

/**
 * Link a Supabase Auth user ID to a contractor record (by contractor DB id).
 * Also sets invited_at if not already set.
 */
async function sbLinkContractorToAuth(contractorId, authUserId) {
  const db = _db();
  if (!db) return null;
  const update = { auth_user_id: authUserId };
  // Only set invited_at on first link
  const { data: existing } = await db
    .from('contractors')
    .select('invited_at')
    .eq('id', contractorId)
    .maybeSingle();
  if (existing && !existing.invited_at) {
    update.invited_at = new Date().toISOString();
  }
  return sbUpdateContractor(contractorId, update);
}

/**
 * Call the invite-contractor Edge Function.
 * Requires the current user to be authenticated as admin
 * (the function verifies this server-side).
 * Returns { ok: true } or { error: string }.
 */
/**
 * extraFields — optional contractor details used when the edge function
 * needs to auto-create the contractors table record:
 *   { company_name, contact_name, services }
 */
async function sbInviteContractor(contractorId, email, extraFields = {}) {
  const db = _db();
  if (!db) return { error: 'Supabase not ready' };

  try {
    // Use raw fetch so we have full control over headers.
    // functions.invoke() falls back to Bearer <anon-key> when its internal
    // session check misses, and sb_publishable_* is not a valid JWT.
    const { data: { session } } = await db.auth.getSession();
    if (!session?.access_token) {
      console.error('[Supabase] inviteContractor — no active session');
      return { error: 'Session expired — please sign out and sign in again.' };
    }

    // Verify the token looks like a real JWT (starts with eyJ), not an anon key
    const tokenOk = session.access_token.startsWith('eyJ');
    console.log('[Supabase] inviteContractor — user:', session.user?.email,
      '| token is JWT:', tokenOk, '| token prefix:', session.access_token.slice(0, 12) + '…');

    if (!tokenOk) {
      console.error('[Supabase] inviteContractor — access_token is not a JWT, cannot authenticate with edge function');
      return { error: 'Invalid session token — please sign out and sign in again.' };
    }

    const payload = { email, ...extraFields };
    if (contractorId) payload.contractorId = contractorId;

    const fnUrl = `${_SB_URL}/functions/v1/invite-contractor`;
    console.log('[Supabase] inviteContractor — POST', fnUrl, '| payload:', payload);

    const res = await fetch(fnUrl, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${session.access_token}`,
        'apikey':        _SB_KEY,
      },
      body: JSON.stringify(payload),
    });

    let resBody = {};
    try { resBody = await res.json(); } catch { /* non-JSON response */ }
    console.log('[Supabase] inviteContractor — HTTP', res.status, '| body:', resBody);

    if (!res.ok) {
      // Function returns { step, error }; gateway returns { code, message }
      const msg  = resBody?.error   || resBody?.message || `HTTP ${res.status}`;
      const step = resBody?.step    || '(gateway)';
      const reason = resBody?.reason || '(no reason field)';
      console.error('[Supabase] inviteContractor error — step:', step, '| msg:', msg, '| full body:', resBody);
      return { error: msg, step, reason };
    }

    return { ok: true, note: resBody?.note };
  } catch (err) {
    console.error('[Supabase] inviteContractor fetch error:', err.message);
    return { error: err.message };
  }
}


/* ── 12. CONTRACTOR MAPPERS ───────────────────────────────── */

/**
 * v1-only contractor row — only columns present in the original schema.sql.
 * Used as a fallback by sbCreateContractorRecord when Phase 5 columns are absent.
 */
function _contractorToRowV1(c) {
  return {
    id:        c.id                          ?? undefined,
    name:      c.name      ?? c.companyName  ?? '',
    contact:   c.contact   ?? c.contactName  ?? '',
    phone:     c.phone     ?? '',
    email:     c.email     ?? '',
    license:   c.license   ?? '',
    counties:  c.counties  ?? [],
    leads:     c.leads     ?? 0,
    completed: c.completed ?? 0,
    revenue:   c.revenue   ?? 0,
    rating:    c.rating    ?? 5.0,
    status:    c.status    ?? 'active',
  };
}

/** Convert app-format contractor object → contractors DB row (full Phase 5 payload) */
function _contractorToRow(c) {
  return {
    id:           c.id           ?? undefined,   // omit for auto-gen if using UUID default
    name:         c.name         ?? c.companyName ?? '',
    company_name: c.companyName  ?? c.name       ?? '',
    contact:      c.contact      ?? c.contactName ?? '',
    contact_name: c.contactName  ?? c.contact    ?? '',
    phone:        c.phone        ?? '',
    email:        c.email        ?? '',
    license:      c.license      ?? '',
    counties:     c.counties     ?? [],
    services:     c.services     ?? [],
    leads:        c.leads        ?? 0,
    completed:    c.completed    ?? 0,
    revenue:      c.revenue      ?? 0,
    rating:       c.rating       ?? 5.0,
    status:       c.status       ?? 'active',
    is_active:    c.isActive     ?? (c.status !== 'inactive'),
    auth_user_id: c.authUserId   ?? undefined,
    invited_at:   c.invitedAt    ?? undefined,
    last_login_at:c.lastLoginAt  ?? undefined,
    notes:        c.notes        ?? '',
  };
}

/** Convert contractors DB row → app-format contractor object */
function _rowToContractor(row) {
  return {
    id:          row.id,
    name:        row.company_name || row.name || '',
    companyName: row.company_name || row.name || '',
    contact:     row.contact_name || row.contact || '',
    contactName: row.contact_name || row.contact || '',
    phone:       row.phone       ?? '',
    email:       row.email       ?? '',
    license:     row.license     ?? '',
    counties:    row.counties    ?? [],
    services:    row.services    ?? [],
    leads:       row.leads       ?? 0,
    completed:   row.completed   ?? 0,
    revenue:     row.revenue     ?? 0,
    rating:      row.rating      ?? 5.0,
    status:      row.is_active   ? 'active' : (row.status ?? 'inactive'),
    isActive:    row.is_active   ?? (row.status === 'active'),
    authUserId:  row.auth_user_id ?? null,
    invitedAt:   row.invited_at  ?? null,
    lastLoginAt: row.last_login_at ?? null,
    notes:       row.notes       ?? '',
  };
}


/* ── 13. REALTIME SUBSCRIPTIONS ───────────────────────────── */

/**
 * Subscribe to postgres_changes on the leads table.
 * filter: optional RLS-compatible filter string, e.g. "contractor_id=eq.c1"
 *         Pass undefined/null for admin (all leads).
 * onChange: callback(payload) fired on any INSERT/UPDATE/DELETE
 * Returns unsubscribe function.
 */
function sbSubscribeLeads(filter, onChange) {
  const db = _db();
  if (!db) return () => {};
  const opts = { event: '*', schema: 'public', table: 'leads' };
  if (filter) opts.filter = filter;
  const channel = db.channel('ev-leads-' + Date.now())
    .on('postgres_changes', opts, onChange)
    .subscribe();
  console.log('[Realtime] subscribed to leads' + (filter ? ' filter=' + filter : ' (all)'));
  return () => { try { db.removeChannel(channel); } catch(e) {} };
}

/**
 * Subscribe to postgres_changes on the contractors table (admin only).
 * onChange: callback(payload) fired on any INSERT/UPDATE/DELETE
 * Returns unsubscribe function.
 */
function sbSubscribeContractors(onChange) {
  const db = _db();
  if (!db) return () => {};
  const channel = db.channel('ev-contractors-' + Date.now())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'contractors' }, onChange)
    .subscribe();
  console.log('[Realtime] subscribed to contractors');
  return () => { try { db.removeChannel(channel); } catch(e) {} };
}


/* ── 14. AUTO-INIT ────────────────────────────────────────── */
// Attempt to initialize on script load. Fails silently if not configured.
initSupabase();
