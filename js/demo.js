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

let leads = [
  { id:'L001', name:'Marcus Thompson',  phone:'(215) 555-2301', email:'m.thompson@gmail.com',  address:'4821 Spruce St',        city:'Philadelphia', county:'Philadelphia', state:'PA', service:'Level 2 Home Charger',           panel:'200A',       charger:'ChargePoint Home Flex',   rebate:'PECO $250',  status:'new',        contractor:null, created:'Mar 10, 2026', value:1200, notes:[], priority:'normal', complexity:'Basic Installation',    panelSize:'200amp', distance:'10to25',  installLocation:'garage',      chargerBrand:'chargepoint',    leadSource:'Google Ads',   contactedAt:null, review:null },
  { id:'L002', name:'Jennifer Walsh',   phone:'(610) 555-8844', email:'jwalsh@outlook.com',    address:'220 Valley Rd',         city:'West Chester', county:'Chester',      state:'PA', service:'Level 2 Home Charger',           panel:'200A',       charger:'Tesla Wall Connector',    rebate:'PECO $250',  status:'assigned',   contractor:'c1', created:'Mar 9, 2026',  value:1350, notes:[{author:'Admin',text:'Customer has Tesla Model Y. Confirm Gen 3 Wall Connector compatible.',time:'Mar 9'}], priority:'normal', complexity:'Basic Installation',    panelSize:'200amp', distance:'under10', installLocation:'garage',      chargerBrand:'tesla',          leadSource:'SEO',          contactedAt:'Mar 9, 2026',  review:null },
  { id:'L003', name:'David Kim',        phone:'(215) 555-9012', email:'davidkim@email.com',    address:'18 Mill Creek Rd',      city:'Doylestown',   county:'Bucks',       state:'PA', service:'Level 2 + Smart Panel Upgrade',  panel:'100A→200A',  charger:'Grizzl-E Level 2',        rebate:'PECO $250',  status:'completed',  contractor:'c1', created:'Mar 7, 2026',  value:2100, notes:[{author:'Red Flow',text:'Panel upgrade completed. Permit pulled 3/8, inspection passed 3/9.',time:'Mar 9'}], priority:'normal', complexity:'Panel Upgrade Likely',  panelSize:'100amp', distance:'25to50',  installLocation:'basement',    chargerBrand:'not_purchased',  leadSource:'SEO',          contactedAt:'Mar 7, 2026',  review:{rating:5,text:'Excellent work, very professional.',date:'Mar 12'} },
  { id:'L004', name:'Rosa Martinez',    phone:'(856) 555-4422', email:'rosa.m@gmail.com',      address:'95 Lakeview Dr',        city:'Marlton',      county:'Burlington',  state:'NJ', service:'Commercial Fleet Charger',       panel:'400A 3-phase',charger:'Eaton Level 2 (x4)',      rebate:'PSE&G $500', status:'quote-sent', contractor:'c1', created:'Mar 8, 2026',  value:8500, notes:[{author:'Admin',text:'4-port commercial install. Fleet of 4 Rivian vans. Loading dock access only.',time:'Mar 8'}], priority:'high',   complexity:'Commercial Install',    panelSize:'200amp', distance:'over50',  installLocation:'outside_wall',chargerBrand:'not_purchased',  leadSource:'Facebook Ads', contactedAt:'Mar 8, 2026',  review:null },
  { id:'L005', name:"Brian O'Connor",   phone:'(610) 555-7733', email:'boconnor@work.net',     address:'55 Valley Ave',         city:'Wayne',        county:'Delaware',    state:'PA', service:'Level 2 Home Charger',           panel:'200A',       charger:'Enel X JuiceBox',         rebate:'PECO $250',  status:'contacted',  contractor:'c1', created:'Mar 9, 2026',  value:1150, notes:[{author:'Red Flow',text:'Spoke by phone. Wants install before April 1.',time:'Mar 9'}], priority:'normal', complexity:'Basic Installation',    panelSize:'200amp', distance:'under10', installLocation:'garage',      chargerBrand:'juicebox',       leadSource:'Direct',       contactedAt:'Mar 9, 2026',  review:null },
  { id:'L006', name:'Allison Cho',      phone:'(215) 555-6601', email:'a.cho@gmail.com',       address:'302 W Rittenhouse Sq',  city:'Philadelphia', county:'Philadelphia',state:'PA', service:'Level 2 Condo Install',          panel:'150A',       charger:'ChargePoint Home Flex',   rebate:'PECO $250',  status:'scheduled',  contractor:'c1', created:'Mar 10, 2026', value:1450, notes:[{author:'Admin',text:'Condo board approval secured. Install confirmed April 2nd, 9am.',time:'Mar 10'}], priority:'normal', complexity:'Basic Installation',    panelSize:'150amp', distance:'10to25',  installLocation:'utility_room',chargerBrand:'chargepoint',    leadSource:'Google Ads',   contactedAt:'Mar 10, 2026', review:null },
  { id:'L007', name:'Robert Flores',    phone:'(856) 555-2277', email:'rflores@nj.net',        address:'14 Cedar Rd',           city:'Voorhees',     county:'Camden',      state:'NJ', service:'Level 2 Home Charger',           panel:'200A',       charger:'Tesla Wall Connector',    rebate:'PSE&G $250', status:'new',        contractor:null, created:'Mar 10, 2026', value:1300, notes:[], priority:'normal', complexity:'Basic Installation',    panelSize:'200amp', distance:'under10', installLocation:'garage',      chargerBrand:'tesla',          leadSource:'Google Ads',   contactedAt:null, review:null },
  { id:'L008', name:'Priya Patel',      phone:'(610) 555-1199', email:'priya.p@email.com',     address:'77 E Lancaster Ave',    city:'Ardmore',      county:'Montgomery',  state:'PA', service:'Level 2 Home Charger + Outlet',  panel:'200A',       charger:'Grizzl-E',                rebate:'PECO $250',  status:'new',        contractor:null, created:'Mar 10, 2026', value:1100, notes:[], priority:'normal', complexity:'Basic Installation',    panelSize:'200amp', distance:'10to25',  installLocation:'driveway',    chargerBrand:'not_purchased',  leadSource:'SEO',          contactedAt:null, review:null },
  { id:'L009', name:'Tom Bradley',      phone:'(856) 555-8801', email:'tom.b@gmail.com',       address:'201 Deptford Rd',       city:'Sewell',       county:'Gloucester',  state:'NJ', service:'Level 2 Home Charger',           panel:'200A',       charger:'Enel X JuiceBox',         rebate:'PSE&G $250', status:'lost',       contractor:'c2', created:'Mar 5, 2026',  value:1200, notes:[{author:'Admin',text:'Customer went with another provider. Price was the issue.',time:'Mar 7'}], priority:'normal', complexity:'Long Wiring Run',       panelSize:'200amp', distance:'over50',  installLocation:'outside_wall',chargerBrand:'juicebox',       leadSource:'Facebook Ads', contactedAt:null, review:null },
];

let notifications = [
  { id:1, text:'<strong>New lead — Marcus Thompson</strong><br>Philadelphia · Level 2 Home Charger', time:'2 min ago', read:false },
  { id:2, text:'<strong>Allison Cho</strong> scheduled for April 2nd installation', time:'18 min ago', read:false },
  { id:3, text:'<strong>David Kim</strong> job completed by Red Flow Electric — $2,100', time:'1 hr ago', read:true },
  { id:4, text:'<strong>Rosa Martinez</strong> — commercial fleet inquiry, Burlington NJ', time:'3 hrs ago', read:true },
];

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
