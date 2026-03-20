/* ============================================================
   LEAD SCORING MODULE
   Scoring algorithm, pricing, and grade resolution for leads.
   Loaded before app.js. Exposes global functions only — no
   imports/exports (plain script, no bundler).

   All logic works on the stored lead object format (normalized
   coded values), not raw form text values.
============================================================ */

/* ── PRICING CONFIG ────────────────────────────────────────── */

/**
 * Stripe price key → USD amount.
 * Keys follow: eevi_lead_{jobType}_{grade}[_exclusive]
 * Populate Price IDs here once Stripe is set up.
 */
const LEAD_PRICE_IDS = {
  eevi_lead_residential_standard:          35,
  eevi_lead_residential_verified:          55,
  eevi_lead_residential_premium:           75,
  eevi_lead_residential_standard_exclusive: 70,
  eevi_lead_residential_verified_exclusive: 110,
  eevi_lead_residential_premium_exclusive:  150,

  eevi_lead_panel_upgrade_standard:          65,
  eevi_lead_panel_upgrade_verified:          95,
  eevi_lead_panel_upgrade_premium:           130,
  eevi_lead_panel_upgrade_standard_exclusive: 130,
  eevi_lead_panel_upgrade_verified_exclusive: 190,
  eevi_lead_panel_upgrade_premium_exclusive:  260,

  eevi_lead_commercial_standard:          120,
  eevi_lead_commercial_verified:          175,
  eevi_lead_commercial_premium:           240,
  eevi_lead_commercial_standard_exclusive: 240,
  eevi_lead_commercial_verified_exclusive: 350,
  eevi_lead_commercial_premium_exclusive:  480,
};

/* ── GRADE THRESHOLDS ───────────────────────────────────────── */

/**
 * Returns "standard" | "verified" | "premium" based on raw score.
 * Standard: 0–4, Verified: 5–9, Premium: 10–16
 */
function getGrade(score) {
  if (score >= 10) return 'premium';
  if (score >= 5)  return 'verified';
  return 'standard';
}

/* ── JOB TYPE DETECTION ─────────────────────────────────────── */

/**
 * Returns "residential" | "panel_upgrade" | "commercial"
 * based on homeType, panelSize, and openBreaker fields
 * of the stored lead object.
 */
function _detectJobType(lead) {
  const ht = (lead.homeType || '').toLowerCase();
  const ps = (lead.panelSize || lead.panel || '').toLowerCase();
  const ob = (lead.openBreaker || '').toLowerCase();

  // Commercial: business/apartment home type, or commercial complexity
  if (ht === 'commercial' || ht === 'apartment' ||
      (lead.complexity || '').toLowerCase().includes('commercial')) {
    return 'commercial';
  }

  // Panel upgrade: 100A panel OR no open breaker space
  if (ps === '100amp' || ps === '100a' || ob === 'no') {
    return 'panel_upgrade';
  }

  return 'residential';
}

/* ── DIMENSION SCORERS ──────────────────────────────────────── */

function _scoreEvStatus(lead) {
  const ev = (lead.ev_vehicle || lead.charger || '').toLowerCase();
  if (!ev || ev === 'other / deciding soon' || ev === 'other' || ev === 'tbd') {
    return { score: ev && ev !== 'tbd' ? 1 : 0, max: 3 };
  }
  // Any specific make/model selected
  return { score: 3, max: 3 };
}

function _scoreChargerStatus(lead) {
  const cb = (lead.chargerBrand || '').toLowerCase();
  // Has a specific charger brand selected
  if (cb && cb !== 'not_purchased' && cb !== '') {
    return { score: 3, max: 3 };
  }
  return { score: 0, max: 3 };
}

function _scorePanelStatus(lead) {
  const ps = (lead.panelSize || '').toLowerCase();
  const ob = (lead.openBreaker || '').toLowerCase();

  if (ps === '200amp') {
    if (ob === 'yes') return { score: 3, max: 3 };
    return { score: 2, max: 3 }; // 200A but unknown slots
  }
  if (ps === '150amp') return { score: 2, max: 3 };
  if (ps === '100amp') return { score: 1, max: 3 };
  // notsure or empty
  return { score: 0, max: 3 };
}

function _scoreRunDistance(lead) {
  const d = (lead.distance || '').toLowerCase();
  if (d === 'under10' || d === '10to25') return { score: 2, max: 2 };
  if (d === '25to50')                    return { score: 1, max: 2 };
  if (d === 'notsure')                   return { score: 1, max: 2 };
  if (d === 'over50')                    return { score: 0, max: 2 };
  return { score: 0, max: 2 };
}

function _scoreTimeline(lead) {
  const t = (lead.installationTimeline || '').toLowerCase();
  if (t.includes('2 week') || t.includes('2week'))    return { score: 3, max: 3 };
  if (t.includes('30 day') || t.includes('30day'))    return { score: 2, max: 3 };
  if (t.includes('1') && t.includes('month'))         return { score: 1, max: 3 };
  if (t.includes('exploring') || t.includes('just'))  return { score: 0, max: 3 };
  return { score: 0, max: 3 };
}

function _scoreRebateEligibility(lead) {
  // NJ counties (PSE&G make-ready territory) score 1pt
  const state = (lead.state || '').toUpperCase();
  if (state === 'NJ') return { score: 1, max: 2 };
  return { score: 0, max: 2 };
}

/* ── MAIN SCORING ───────────────────────────────────────────── */

/**
 * Returns a full breakdown object with dimension scores.
 * @param {Object} lead - the stored lead object
 * @returns {{ total, grade, breakdown, job_type, percent }}
 */
function scoreSubmission(lead) {
  const dims = {
    ev_status:          { ..._scoreEvStatus(lead),          label: 'EV Status' },
    charger_status:     { ..._scoreChargerStatus(lead),     label: 'Charger Status' },
    panel_status:       { ..._scorePanelStatus(lead),       label: 'Panel Status' },
    run_distance:       { ..._scoreRunDistance(lead),       label: 'Run Distance' },
    timeline:           { ..._scoreTimeline(lead),          label: 'Timeline' },
    rebate_eligibility: { ..._scoreRebateEligibility(lead), label: 'Rebate Eligibility' },
  };

  const total   = Object.values(dims).reduce((sum, d) => sum + d.score, 0);
  const maxTotal = Object.values(dims).reduce((sum, d) => sum + d.max, 0);  // 16
  const grade   = getGrade(total);
  const jobType = _detectJobType(lead);

  return {
    total,
    grade,
    breakdown: dims,
    job_type:  jobType,
    percent:   Math.round((total / maxTotal) * 100),
  };
}

/* ── PRICING ────────────────────────────────────────────────── */

function getPriceId(jobType, grade, isExclusive) {
  const jt = (jobType || 'residential').replace(/-/g, '_');
  const g  = grade || 'standard';
  return `eevi_lead_${jt}_${g}${isExclusive ? '_exclusive' : ''}`;
}

function getLeadPrice(jobType, grade, isExclusive) {
  const key = getPriceId(jobType, grade, isExclusive);
  return LEAD_PRICE_IDS[key] || 0;
}

/* ── SIGNALS ────────────────────────────────────────────────── */

/**
 * Returns array of human-readable signal strings (what the lead has confirmed).
 */
function getLeadSignals(lead, scoring) {
  const signals = [];
  const b = scoring.breakdown;

  if (b.ev_status.score >= 3)          signals.push('EV owner confirmed');
  else if (b.ev_status.score >= 1)     signals.push('EV purchase in progress');
  if (b.charger_status.score >= 3)     signals.push('Charger already purchased');
  if (b.panel_status.score >= 3)       signals.push('Panel pre-verified (200A + open slots)');
  else if (b.panel_status.score >= 2)  signals.push('200A panel — slots unconfirmed');
  if (b.run_distance.score >= 2)       signals.push('Short wire run (<25 ft)');
  if (b.timeline.score >= 3)           signals.push('Ready to book within 2 weeks');
  else if (b.timeline.score >= 2)      signals.push('Timeline: within 30 days');
  if (b.rebate_eligibility.score >= 1) signals.push('PSE&G incentive eligible (NJ)');

  return signals;
}

/* ── FULL RESOLUTION ────────────────────────────────────────── */

/**
 * Main entry point. Takes a stored lead object and returns a full
 * leadResolution object ready to store as lead.scoring.
 *
 * @param {Object} lead       - stored lead object
 * @param {boolean} isExclusive - exclusive routing flag
 * @returns {Object} leadResolution
 */
function resolveLead(lead, isExclusive) {
  const sc      = scoreSubmission(lead);
  const excl    = isExclusive === true;
  const priceId = getPriceId(sc.job_type, sc.grade, excl);
  const priceUsd = getLeadPrice(sc.job_type, sc.grade, excl);

  return {
    job_type:       sc.job_type,
    grade:          sc.grade,
    grade_override: null,
    score:          sc.total,
    score_max:      16,
    score_percent:  sc.percent,
    is_exclusive:   excl,
    price_id:       priceId,
    price_usd:      priceUsd,
    price_key:      priceId,
    breakdown:      sc.breakdown,
    signals:        getLeadSignals(lead, sc),
    scored_at:      new Date().toISOString(),
  };
}
