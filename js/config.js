/* ============================================================
   CONFIG — App-wide constants
   Loaded first. All values here are available globally.
============================================================ */

/* ── Website tracking phone (CallRail) — update here to change everywhere ── */
const WEBSITE_PHONE = {
  raw:     '2674352592',
  display: '(267) 435-2592',
  tel:     '+12674352592',
};

/* ── localStorage key names ── */
const _STORE = {
  leads:    'eev_v1_leads',
  notifs:   'eev_v1_notifs',
  settings: 'eev_v1_settings',
  checklist:'eev_v1_checklist',
};

/* ── Rate-limit config ── */
const _RATE_KEY = 'eev_v1_rate';
const _RATE_WIN = 10 * 60 * 1000; // 10 minutes
const _RATE_MAX = 3;

/* ── Sidebar navigation definitions ── */
const ADMIN_NAV = [
  { section:'Overview', items:[{id:'dashboard',icon:'📊',label:'Dashboard'},{id:'pipeline',icon:'📋',label:'Pipeline'}] },
  { section:'Leads',    items:[{id:'all-leads',icon:'⚡',label:'All Leads',badgeNew:true},{id:'assign',icon:'🔄',label:'Assign Leads',badgeNew:true}] },
  { section:'People',   items:[{id:'contractors',icon:'🔧',label:'Contractors'}] },
  { section:'Business', items:[{id:'revenue',icon:'💰',label:'Revenue'},{id:'leaderboard',icon:'🏆',label:'Leaderboard'},{id:'sms-templates',icon:'💬',label:'SMS Templates'}] },
  { section:'Setup',    items:[{id:'settings',icon:'⚙️',label:'Settings'}] },
];
const CONTRACTOR_NAV = [
  { section:'My Work',   items:[{id:'my-leads',icon:'⚡',label:'My Leads',badgeAssigned:true},{id:'my-pipeline',icon:'📋',label:'My Pipeline'},{id:'my-revenue',icon:'📊',label:'Performance'}] },
  { section:'Resources', items:[{id:'sms-templates',icon:'💬',label:'SMS Scripts'},{id:'my-profile',icon:'🏢',label:'My Profile'}] },
];

/* ── Page title map ── */
const PAGE_TITLES = { dashboard:'Dashboard Overview', pipeline:'Lead Pipeline', 'all-leads':'All Leads', assign:'Assign Leads', contractors:'Contractors', revenue:'Revenue & Billing', leaderboard:'Contractor Leaderboard', 'sms-templates':'SMS Scripts & Sales Tools', settings:'Settings & Security', 'my-leads':'My Leads', 'my-pipeline':'My Pipeline', 'my-revenue':'Performance Analytics', 'my-profile':'My Profile' };

/* ── Dev mode flag ──────────────────────────────────────────────────────────
   Set to true  → local USERS fallback is active (for local testing only).
   Set to false → Supabase Auth is the only login path. No local fallback.
   ─────────────────────────────────────────────────────────────────────────── */
const DEV_MODE = false;

/* ── Status label display map ── */
const STATUS_LABELS = {new:'New Lead',assigned:'Assigned',contacted:'Contacted',scheduled:'Est. Scheduled','quote-sent':'Quote Sent',completed:'Job Won',lost:'Job Lost'};
