/* ============================================================
   DEMO — Seed data and demo login helper
   All arrays (leads, notifications) are mutated in place by
   app.js (persist/restore) and the dashboard UI. Declare with
   let so app.js can splice/push freely.
============================================================ */

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
const USERS = {
  'expertevinstalls@gmail.com': { password:'EV!nstall_LeadPortal_2026#', role:'admin',      name:'Sarah Mitchell' },
  'redflow@expertev.com':       { password:'redflow123',                  role:'contractor', name:'Red Flow Electric', id:'c1' }
};

const CONTRACTORS = [
  { id:'c1', name:'Red Flow Electric', contact:'James Harrington', phone:'(215) 555-0192', email:'james@redflowelectric.com', license:'PA-EL-48291', counties:['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'], leads:24, completed:18, revenue:19800, rating:4.9, status:'active' },
  { id:'c2', name:'Volt Masters LLC',  contact:'Angela Rivera',    phone:'(856) 555-0144', email:'angela@voltmasters.com',   license:'NJ-EL-77341', counties:['Burlington','Camden','Gloucester'],                                                          leads:11, completed:7,  revenue:8400,  rating:4.7, status:'active' },
];

// Seed leads intentionally empty — production always hydrates from Supabase.
// Demo seed rows (L001–L009) have been removed so they cannot appear on the admin dashboard.
let leads = [];

// Demo notifications removed — real notifications are generated from DB events.
let notifications = [];

let settings = {
  formspreeId: 'xykneqwo',
  adminEmail: 'expertevinstalls@gmail.com',
  paPhone: '(215) 555-0199',
  njPhone: '(856) 555-0199',
  leadFee: 75,
  commissionPct: 15,
  emailAlerts: true,
  smsAlerts: false,
  autoAssign: false,
  followUpAlerts: true,
  reviewRequests: false,
  googleMapsKey: 'AIzaSyCvq7P_8WOa8u9rYYGQPT0fHz77ynxv23A',
  checklistDone: {}
};

let checklist = [
  { id:'domain',    title:'Register your domain',            desc:'Buy expertevinstallers.com (or similar) on Namecheap or GoDaddy (~$12/yr). This is your brand URL.',           link:'https://www.namecheap.com', linkText:'Open Namecheap' },
  { id:'netlify',   title:'Deploy website to Netlify',       desc:'Upload expertev-credibility-first.html and this dashboard.html to Netlify. Free plan works great to start.',   link:'https://app.netlify.com',  linkText:'Open Netlify' },
  { id:'formspree', title:'Connect Formspree for lead forms', desc:'Create a free Formspree account, get your form ID, and paste it into Settings → Integrations below.',         link:'https://formspree.io',     linkText:'Open Formspree' },
  { id:'email',     title:'Set up admin email alerts',        desc:'In Settings → Notifications, enter your real email so new leads hit your inbox instantly.',                    link:null },
  { id:'redflow',   title:'Confirm Red Flow Electric partnership', desc:'Have a formal conversation with Red Flow ownership to get permission to use their name in marketing.',   link:null },
  { id:'phone',     title:'Replace placeholder phone numbers', desc:'Update the PA and NJ phone numbers in Settings → Business Info. Use a Google Voice number or real line.',   link:null },
  { id:'rebates',   title:'Verify current rebate amounts',    desc:'PECO and PSE&G rebate amounts change. Confirm current amounts at their websites before going live.',           link:'https://www.peco.com/MyAccount/MySavings/Pages/ElectricVehicles.aspx', linkText:'PECO EV Rebates' },
  { id:'firstlead', title:'Get your first real lead',         desc:'Share the website link on Facebook, Nextdoor, and with Red Flow\'s existing customers to get lead #1.',        link:null },
];

/* ── Demo login prefill ── */
function fillDemo(role) {
  document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
  if (role === 'admin') {
    document.getElementById('login-email').value = 'expertevinstalls@gmail.com';
    document.getElementById('login-password').value = 'EV!nstall_LeadPortal_2026#';
    document.getElementById('demo-admin').classList.add('active');
  } else {
    document.getElementById('login-email').value = 'redflow@expertev.com';
    document.getElementById('login-password').value = 'redflow123';
    document.getElementById('demo-contractor').classList.add('active');
  }
}
