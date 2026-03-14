/* ============================================================
   UTILS — Pure utility functions
   Depends on: config.js (for _RATE_KEY, _RATE_WIN, _RATE_MAX, STATUS_LABELS)
============================================================ */

/* ── Smooth-scroll to element by ID ── */
function sid(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

// ═══════════════════════════════════════════════════════════════
// SECURITY — Inline HTML sanitizer (XSS prevention)
// Escapes all user-supplied strings before innerHTML injection.
// For production also load DOMPurify via CDN as a second layer.
// ═══════════════════════════════════════════════════════════════
function sanitizeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/* ── Rate limiter: max _RATE_MAX submissions per _RATE_WIN ms ── */
function _checkRateLimit() {
  try {
    const now  = Date.now();
    const hist = JSON.parse(localStorage.getItem(_RATE_KEY) || '[]');
    const recent = hist.filter(t => now - t < _RATE_WIN);
    if (recent.length >= _RATE_MAX) return false;
    recent.push(now);
    localStorage.setItem(_RATE_KEY, JSON.stringify(recent));
    return true;
  } catch(e) { return true; } // fail open on storage errors
}

/* ── Phone format validation (US 10-digit) ── */
function _validatePhone(raw) {
  const cleaned = (raw || '').replace(/[\s\-\(\)\.\+ext]/gi, '');
  return /^1?\d{10}$/.test(cleaned);
}

/* ── Status label formatter ── */
function cap(s) { return STATUS_LABELS[s] || (s ? s.charAt(0).toUpperCase() + s.slice(1) : s); }

/* ── Toast notification ── */
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t=>t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--navy-mid);border:1px solid var(--blue);color:var(--white);padding:12px 20px;border-radius:10px;font-size:.88rem;z-index:9999;box-shadow:0 8px 20px rgba(0,0,0,.4);animation:fadeInUp .2s';
  t.textContent = '✅ ' + msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2800);
}
