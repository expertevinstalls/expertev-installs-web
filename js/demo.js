/* ============================================================
   DEMO — Seed data and demo login helper
   All arrays (leads, notifications) are mutated in place by
   app.js (persist/restore) and the dashboard UI. Declare with
   let so app.js can splice/push freely.
============================================================ */

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
// DEV_MODE=false in production — these credentials are never active.
// Passwords redacted. Supabase Auth is the only login path when live.
const USERS = {
  'expertevinstalls@gmail.com': { password:'***', role:'admin',      name:'Admin' },
  'demo-contractor@expertev.com': { password:'***',  role:'contractor', name:'Demo Contractor', id:'c1' }
};

// Demo contractor records — never loaded in production (dbContractors comes from Supabase only).
const CONTRACTORS = [
  { id:'c1', name:'Demo Contractor A',  contact:'Contact Name', phone:'(215) 555-0000', email:'contractor-a@example.com', license:'PA-EL-00000', counties:['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'], leads:0, completed:0, revenue:0, rating:5.0, status:'active' },
  { id:'c2', name:'Demo Contractor B',  contact:'Contact Name', phone:'(856) 555-0000', email:'contractor-b@example.com', license:'NJ-EL-00000', counties:['Burlington','Camden','Gloucester'],                                                          leads:0, completed:0, revenue:0, rating:5.0, status:'active' },
];

// Seed leads intentionally empty — production always hydrates from Supabase.
// Demo seed rows (L001–L009) have been removed so they cannot appear on the admin dashboard.
let leads = [];

// Demo notifications removed — real notifications are generated from DB events.
let notifications = [];

// Bulk selection — set of lead IDs currently selected in the All Leads table
let selectedLeadIds = new Set();

let settings = {
  formspreeId: 'xykneqwo',
  adminEmail: 'expertevinstalls@gmail.com',
  paPhone: '(267) 456-8134',
  njPhone: '(267) 456-8134',
  adminSmsPhone: '',
  leadFee: 75,
  commissionPct: 15,
  emailAlerts: true,
  smsAlerts: false,
  autoAssign: false,
  followUpAlerts: true,
  reviewRequests: false,
  checklistDone: {}
};

let checklist = [
  { id:'domain',    title:'Register your domain',            desc:'Buy expertevinstalls.com (or similar) on Namecheap or GoDaddy (~$12/yr). This is your brand URL.',           link:'https://www.namecheap.com', linkText:'Open Namecheap' },
  { id:'netlify',   title:'Deploy website to Netlify',       desc:'Upload expertev-credibility-first.html and this dashboard.html to Netlify. Free plan works great to start.',   link:'https://app.netlify.com',  linkText:'Open Netlify' },
  { id:'formspree', title:'Connect Formspree for lead forms', desc:'Create a free Formspree account, get your form ID, and paste it into Settings → Integrations below.',         link:'https://formspree.io',     linkText:'Open Formspree' },
  { id:'email',     title:'Set up admin email alerts',        desc:'In Settings → Notifications, enter your real email so new leads hit your inbox instantly.',                    link:null },
  { id:'contractor', title:'Add your first real contractor',   desc:'Invite a licensed electrician to join the network via the Contractors page. They will receive a setup email.',  link:null },
  { id:'phone',     title:'Replace placeholder phone numbers', desc:'Update the PA and NJ phone numbers in Settings → Business Info. Use a Google Voice number or real line.',   link:null },
  { id:'rebates',   title:'Verify current rebate amounts',    desc:'PECO and PSE&G rebate amounts change. Confirm current amounts at their websites before going live.',           link:'https://www.peco.com/MyAccount/MySavings/Pages/ElectricVehicles.aspx', linkText:'PECO EV Rebates' },
  { id:'firstlead', title:'Get your first real lead',         desc:'Share the website link on Facebook, Nextdoor, and in local homeowner communities to get lead #1.',            link:null },
];

/* ── Demo login prefill ── */
function fillDemo(role) {
  document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
  // Demo prefill disabled in production (DEV_MODE=false)
  if (role === 'admin') {
    document.getElementById('login-email').value = 'expertevinstalls@gmail.com';
    document.getElementById('login-password').value = '';
    document.getElementById('demo-admin').classList.add('active');
  } else {
    document.getElementById('login-email').value = 'demo-contractor@expertev.com';
    document.getElementById('login-password').value = '';
    document.getElementById('demo-contractor').classList.add('active');
  }
}
