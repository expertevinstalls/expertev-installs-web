/* ============================================================
   COUNTY DATA
============================================================ */
const CD = {
  philadelphia: {
    name:"Philadelphia County", state:"PA", isNJ:false,
    metaDesc:"EV charger installation in Philadelphia, PA. Licensed electricians, permits handled, fast installs, and rebate guidance available.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Philadelphia, PA",
    desc:`<strong>Licensed Philadelphia electricians</strong> installing Level 2 EV chargers across all 48 neighborhoods — from Center City to Northeast Philly, South Philly to Chestnut Hill. Every installation is permitted through Philadelphia L&I and warrantied for 1 year.`,
    checks:["PA-licensed electrician on every job","Philadelphia L&I permit filed and inspection passed","Federal tax credit guidance included","1-year workmanship warranty in writing","Same-week availability in most Philadelphia neighborhoods"],
    cities:"Center City · Northeast Philadelphia · South Philadelphia · Germantown · Roxborough · Manayunk · Fishtown · Chestnut Hill · Frankford · Kensington · Port Richmond · West Philadelphia · Olney · Logan · Grays Ferry",
    rebate:"Federal Tax Credit",
    rebateDesc:"There is currently no PECO residential EV charger installation rebate. Philadelphia homeowners may still qualify for the federal EV charger tax credit — 30% of installation costs, up to $1,000 — for qualifying properties placed in service by June 30, 2026. Eligibility depends in part on property location. We provide documentation to support your tax filing.",
    permit:"Philadelphia L&I (Licenses & Inspections) handles electrical permits for all Philadelphia installations. We file the application, schedule the electrical inspection, and guarantee passing on the first visit.",
    fact:"Philadelphia is one of the fastest-growing EV cities in the Northeast, with EV registrations up over 40% in 2024. Demand for home charger installations is outpacing supply — book early.",
    pop:"1.57M",
    localContext:{
      homeTypes:"Rowhomes, twins, and semi-detached homes; some attached garages in rowhouse conversions",
      install:"Panel typically in basement or rear utility area; charger on exterior wall, attached garage wall, or dedicated parking area",
      utility:"PECO service area — no PECO residential install rebate; federal tax credit may apply for qualifying properties",
      permitNote:"Philadelphia L&I handles all electrical permits citywide — single permit authority, no township variation",
      localKnow:"Many Philadelphia rowhomes were built before 1960 and have 100A panels with limited breaker space. Routing from the basement to usable parking can require conduit runs along exterior walls. We assess this before quoting — no guesswork."
    }
  },
  montgomery: {
    name:"Montgomery County", state:"PA", isNJ:false,
    metaDesc:"EV charger installation in Montgomery County, PA. Licensed electricians, all 62 municipal permits handled, and federal tax credit guidance.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Montgomery County, PA",
    desc:`Serving all of Montgomery County — <strong>King of Prussia, Norristown, Blue Bell, Lansdale, Horsham</strong>, and every township in between. Our electricians know Montgomery County's permit landscape across all 62 municipalities.`,
    checks:["PA-licensed electrician assigned to your township","MontCo township permit filed — all 62 municipalities","Free panel assessment before any work begins","Same-week scheduling for most MontCo areas"],
    cities:"Norristown · King of Prussia · Blue Bell · Lansdale · Horsham · Ambler · Hatboro · Pottstown · Jenkintown · Willow Grove · Montgomeryville · Abington · Glenside · Cheltenham · Bryn Mawr · Ardmore",
    rebate:"Federal Tax Credit",
    rebateDesc:"There is currently no PECO residential EV charger installation rebate. Montgomery County homeowners may qualify for the federal EV charger tax credit — 30% of costs, up to $1,000 — for qualifying properties placed in service by June 30, 2026. Eligibility depends on property location. We provide documentation to support your tax filing.",
    permit:"Montgomery County's 62 municipalities each have slightly different permit requirements. Our electricians have filed permits across the county and know exactly what each township requires.",
    fact:"Montgomery County leads Pennsylvania in EV registrations per capita outside Philadelphia — driven by high incomes and suburban commuter households in KOP, Lansdale, and Horsham.",
    pop:"860K",
    localContext:{
      homeTypes:"Detached single-family homes, older colonials, and newer suburban construction across 62 municipalities",
      install:"Typically garage wall mount with panel in adjacent basement or utility room; most homes have direct routing",
      utility:"PECO service area — no PECO residential install rebate; federal tax credit may apply for qualifying properties",
      permitNote:"62 separate municipalities — each with its own permit process; we file with the correct authority for your specific township",
      localKnow:"Montgomery County's housing ranges from 1950s colonials in Jenkintown to new construction in Horsham. Panel capacity and permit timelines differ across the county's 62 municipalities. We know each township's process so your install doesn't get held up at the permit stage."
    }
  },
  bucks: {
    name:"Bucks County", state:"PA", isNJ:false,
    metaDesc:"EV charger installation in Bucks County, PA. PA-licensed electricians serving Doylestown, Newtown, and beyond. Permits and rebate guidance included.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Bucks County, PA",
    desc:`Expert EV charger installation throughout Bucks County. From <strong>Doylestown and New Hope to Newtown and Bensalem</strong>, we serve every borough and township — including rural properties with detached garages requiring longer conduit runs.`,
    checks:["PA-licensed electrician serving all of Bucks County","Borough and township permits filed across Bucks County","Federal tax credit guidance included","Rural and detached garage installs welcome","1-year workmanship warranty, written before we start"],
    cities:"Doylestown · Newtown · Bensalem · Levittown · Bristol · Quakertown · New Hope · Warminster · Yardley · Richboro · Langhorne · Telford · Perkasie · Sellersville · Chalfont · Warrington",
    rebate:"Federal Tax Credit",
    rebateDesc:"There is currently no PECO residential EV charger installation rebate. Bucks County homeowners may qualify for the federal EV charger tax credit — 30% of costs, up to $1,000 — for qualifying properties placed in service by June 30, 2026. Eligibility depends on property location. We provide documentation to support your tax filing.",
    permit:"Bucks County has dozens of separate permit jurisdictions. We file with the correct authority for your specific borough or township — and know the typical timeline for each.",
    fact:"Many Bucks County properties are larger rural homes with detached garages — which require longer conduit runs and sometimes underground trenching. We price this transparently and do it cleanly.",
    pop:"646K",
    localContext:{
      homeTypes:"Rural properties, detached single-family homes, older borough housing, and some newer townhome developments",
      install:"Garage or detached garage installs; longer conduit runs and occasional underground trenching on rural properties",
      utility:"PECO service area — no PECO residential install rebate; federal tax credit may apply for qualifying properties",
      permitNote:"Dozens of separate borough and township permit jurisdictions — we file with the right authority for your specific address",
      localKnow:"A solid portion of Bucks County homes sit on larger lots with detached garages or workshop buildings, which means longer wiring runs and sometimes underground conduit work. We scope this accurately at the site visit so the quote reflects the real job."
    }
  },
  chester: {
    name:"Chester County", state:"PA", isNJ:false,
    metaDesc:"EV charger installation in Chester County, PA. Licensed electricians, permits pulled, panel assessments, and federal tax credit documentation.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Chester County, PA",
    desc:`Chester County homeowners — we specialize in both straightforward garage installs and complex projects requiring panel upgrades. <strong>West Chester, Malvern, Exton, and Phoenixville</strong> are among our most active areas.`,
    checks:["PA-licensed electrician for all Chester County townships","Township permits filed — from Tredyffrin to West Sadsbury","Federal tax credit guidance included","Free panel assessment — no surprise upgrade bills","Tesla Wall Connector and all brands installed"],
    cities:"West Chester · Malvern · Coatesville · Kennett Square · Phoenixville · Downingtown · Exton · Paoli · Oxford · Berwyn · Devon · Frazer · Avondale · Chadds Ford · Thorndale",
    rebate:"Federal Tax Credit",
    rebateDesc:"There is currently no PECO residential EV charger installation rebate. Chester County homeowners may qualify for the federal EV charger tax credit — 30% of costs, up to $1,000 — for qualifying properties placed in service by June 30, 2026. Eligibility depends on property location. We provide documentation to support your tax filing.",
    permit:"Chester County spans dozens of municipalities from Tredyffrin to West Sadsbury. Our electricians handle permits across the full county and are familiar with each township's requirements.",
    fact:"Chester County has the highest median household income in Pennsylvania and one of the highest EV ownership rates. Tesla and Rivian are the most commonly installed brands in our Chester County jobs.",
    pop:"540K",
    localContext:{
      homeTypes:"Single-family homes, townhomes, and some rural properties with detached garages across township municipalities",
      install:"Garage wall mounts most common; some homes need longer runs for detached garage or driveway-side mounting",
      utility:"PECO service area — no PECO residential install rebate; federal tax credit may apply for qualifying properties",
      permitNote:"Township permits required across all Chester County municipalities — Tredyffrin to West Sadsbury, we handle each one",
      localKnow:"Chester County has strong EV ownership and well-kept older housing in townships like Tredyffrin, Easttown, and West Chester borough. Permits are handled at the township level, not through a central county office — knowing the right process for each town keeps installs on schedule."
    }
  },
  delaware: {
    name:"Delaware County", state:"PA", isNJ:false,
    metaDesc:"EV charger installation in Delaware County, PA. Specialists in older-home panel upgrades. Permits, fast scheduling, and rebate guidance included.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Delaware County, PA",
    desc:`Serving Delaware County from <strong>Media and Havertown to Upper Darby and Swarthmore</strong>. Delco's dense suburban landscape and older housing stock means many homes need panel evaluation before installation — our free assessment catches issues upfront.`,
    checks:["PA-licensed electrician with Delco permit experience","Delaware County's 49 municipalities — we know each one","Federal tax credit guidance included","Older home and small panel specialists","Free site assessment — no surprise panel upgrade bills"],
    cities:"Media · Havertown · Upper Darby · Springfield · Swarthmore · Chester · Drexel Hill · Folcroft · Marcus Hook · Ridley Park · Collingdale · Clifton Heights · Darby · Broomall · Newtown Square",
    rebate:"Federal Tax Credit",
    rebateDesc:"There is currently no PECO residential EV charger installation rebate. Delaware County homeowners may qualify for the federal EV charger tax credit — 30% of costs, up to $1,000 — for qualifying properties placed in service by June 30, 2026. Eligibility depends on property location. We provide documentation to support your tax filing.",
    permit:"Delaware County has 49 separate municipalities — one of the highest densities of separate permit authorities in Pennsylvania. We navigate this for you so the permit doesn't slow down your install.",
    fact:"Approximately 30% of Delaware County homes were built between 1940–1970 and have 60A or 100A panels. We're Delaware County's panel upgrade specialists and bundle panel + charger in one visit.",
    pop:"576K",
    localContext:{
      homeTypes:"Dense suburban housing — twins, duplexes, older single-family homes; many built 1940–1970",
      install:"Basement or utility room panel; often tight routing to attached garage, rear exterior wall, or converted parking area",
      utility:"PECO service area — no PECO residential install rebate; federal tax credit may apply for qualifying properties",
      permitNote:"49 separate municipalities — one of the highest permit authority densities in PA; we track requirements for each one",
      localKnow:"Delaware County has a high concentration of homes with 60–100A panels that may need upgrading before an EV charger can be installed safely. We catch this during the free site assessment — before you've committed to anything — and can bundle the upgrade with the charger install."
    }
  },
  burlington: {
    name:"Burlington County", state:"NJ", isNJ:true,
    metaDesc:"EV charger installation in Burlington County, NJ. NJ-licensed electricians, permits handled, PSE&G make-ready incentive guidance, and fast scheduling.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Burlington County, NJ",
    desc:`Burlington County NJ homeowners — <strong>NJ-licensed electricians</strong> installing Level 2 EV chargers across Moorestown, Mt. Laurel, Marlton, and all surrounding towns. NJ permits, PSE&G make-ready incentive guidance, and federal tax credit documentation handled for you.`,
    checks:["NJ-licensed master electrician on every job","All NJ electrical permits filed and inspection passed","PSE&G make-ready incentive + federal 30% credit + NJ tax exemption guidance","Burlington County township approvals handled","1-year workmanship warranty — in writing"],
    cities:"Mount Holly · Moorestown · Marlton · Mount Laurel · Burlington City · Medford · Cinnaminson · Evesham · Lumberton · Hainesport · Delran · Bordentown · Florence · Eastampton · Pemberton",
    rebate:"PSE&G",
    rebateDesc:"PSE&G customers in Burlington County NJ may qualify for a make-ready incentive of $50–$1,500 per charger toward wiring, permits, and panel upgrade costs — eligibility and amounts vary by project. We also provide documentation for the federal EV charger tax credit (30% of costs, up to $1,000, for qualifying installs placed in service by June 30, 2026).",
    permit:"NJ requires specific electrical permits and township approvals. Our NJ-licensed electricians file all paperwork and schedule the NJ electrical inspection — passing the first time, every time.",
    fact:"Burlington County is one of NJ's fastest-growing counties, with major new residential development in Mount Laurel and Evesham driving rapid EV adoption among new homeowners.",
    pop:"461K",
    localContext:{
      homeTypes:"Suburban single-family homes and newer construction, particularly in Mount Laurel, Evesham, and Moorestown",
      install:"Attached garage installs typical; most newer homes have direct panel-to-garage routing with 200A service",
      utility:"PSE&G service area — make-ready incentive of $50–$1,500 may apply for eligible customers",
      permitNote:"NJ electrical permit plus township approval required; NJ electrical inspection coordinated by our licensed team",
      localKnow:"Burlington County's newer residential growth in Mount Laurel and Evesham means many homes already have 200A panels and attached garages — which makes for straightforward installs. The PSE&G make-ready incentive may reduce out-of-pocket cost for eligible customers; we walk you through it."
    }
  },
  camden: {
    name:"Camden County", state:"NJ", isNJ:true,
    metaDesc:"EV charger installation in Camden County, NJ. NJ-licensed electricians, permits handled, PSE&G incentive guidance, and same-week scheduling available.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Camden County, NJ",
    desc:`Expert EV charger installation across Camden County NJ — <strong>Cherry Hill, Voorhees, Haddonfield</strong>, and all surrounding towns. NJ-licensed electricians who pass inspections the first time and help you navigate available PSE&G make-ready incentives.`,
    checks:["NJ-licensed master electrician — verified and insured","NJ electrical permit and inspection handled completely","PSE&G make-ready incentive + federal 30% + NJ tax exemption guidance","All EV brands and charger models installed","Same-week scheduling available in most Camden County towns"],
    cities:"Cherry Hill · Voorhees · Haddonfield · Audubon · Collingswood · Gloucester City · Pennsauken · Lindenwold · Berlin · Bellmawr · Barrington · Stratford · Somerdale · Merchantville · Haddon Heights",
    rebate:"PSE&G",
    rebateDesc:"PSE&G customers in Camden County NJ may qualify for a make-ready incentive of $50–$1,500 per charger toward wiring, permits, and panel upgrade costs — eligibility and amounts vary by project. We also provide documentation for the federal EV charger tax credit (30% of costs, up to $1,000, for qualifying installs placed in service by June 30, 2026).",
    permit:"All Camden County NJ electrical permits filed and NJ inspection scheduled by our NJ-licensed team. Cherry Hill, Voorhees, and surrounding municipalities — we handle each one.",
    fact:"Camden County is the most EV-dense county in South Jersey. Cherry Hill and Voorhees lead the county in EV ownership, with Tesla and BMW i-series being the most common vehicles we install for.",
    pop:"510K",
    localContext:{
      homeTypes:"Established suburban neighborhoods — single-family homes in Cherry Hill, Voorhees, Haddonfield, and surrounding towns",
      install:"Garage wall mounts most common; Cherry Hill and Voorhees homes often have direct panel-to-garage routing",
      utility:"PSE&G service area — make-ready incentive of $50–$1,500 may apply for eligible customers",
      permitNote:"All NJ electrical permits filed and NJ electrical inspection scheduled by our NJ-licensed team",
      localKnow:"Camden County is South Jersey's most EV-dense county, and Cherry Hill and Voorhees see heavy install demand. Most homes in those areas have attached garages and modern panels — but some of Camden County's older core municipalities have housing that benefits from a site assessment first."
    }
  },
  gloucester: {
    name:"Gloucester County", state:"NJ", isNJ:true,
    metaDesc:"EV charger installation in Gloucester County, NJ. NJ-licensed electricians, permits handled, PSE&G make-ready guidance, and fast same-week installs.",
    phone:WEBSITE_PHONE.display, tel:WEBSITE_PHONE.tel,
    h1a:"EV Charger", h1b:"Installation", h1c:"Gloucester County, NJ",
    desc:`Serving Gloucester County NJ homeowners across <strong>Woodbury, Washington Township, Glassboro, and Sewell</strong>. Professional Level 2 EV charger installations with full NJ licensing, permits, and PSE&G make-ready incentive guidance.`,
    checks:["NJ-licensed electrician for every Gloucester County install","All NJ permits filed and inspections passed","PSE&G make-ready incentive + federal 30% + NJ tax exemption guidance","Washington Township and Monroe new construction specialists","1-year warranty on all labor"],
    cities:"Woodbury · Washington Township · Glassboro · Sewell · Turnersville · Deptford · Monroe · Williamstown · Pitman · Clayton · Swedesboro · West Deptford · Paulsboro · Mantua · Franklin Township",
    rebate:"PSE&G",
    rebateDesc:"PSE&G customers in Gloucester County NJ may qualify for a make-ready incentive of $50–$1,500 per charger toward wiring, permits, and panel upgrade costs — eligibility and amounts vary by project. We also provide documentation for the federal EV charger tax credit (30% of costs, up to $1,000, for qualifying installs placed in service by June 30, 2026).",
    permit:"All Gloucester County NJ electrical permits filed. Our NJ-licensed electricians handle permit applications and NJ electrical inspections across every Gloucester County municipality.",
    fact:"Gloucester County is experiencing rapid residential development in Washington Township and Monroe Township, making it one of the fastest-growing EV charger markets in South Jersey.",
    pop:"300K",
    localContext:{
      homeTypes:"Suburban and semi-rural homes; newer construction in Washington Township and Monroe Township",
      install:"Garage installs typical; newer homes often have attached garages and clean panel-to-garage routing",
      utility:"PSE&G service area — make-ready incentive of $50–$1,500 may apply for eligible customers",
      permitNote:"All NJ permits filed across every Gloucester County municipality; NJ electrical inspection handled by our team",
      localKnow:"Gloucester County is growing fast — Washington Township and Monroe Township in particular have seen significant new construction where homes already have attached garages and modern 200A panels. For older housing in Woodbury and Deptford, a site assessment helps catch any panel constraints before scheduling."
    }
  }
};

/* ============================================================
   ROUTER
============================================================ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
}

const _HOME_META  = "Licensed EV charger installation across Philadelphia, South Jersey & surrounding counties. Fast installs, panel upgrades, and Tesla charger setup.";
const _HOME_TITLE = "EV Charger Installation in Philadelphia & South Jersey | Expert EV Installers";
const _SITE_ORIGIN = "https://expertevinstalls.com";

function _setMetaDesc(content) {
  const tag = document.querySelector('meta[name="description"]');
  if (tag) tag.setAttribute('content', content);
}

function _setCanonical(path) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) { tag = document.createElement('link'); tag.rel = 'canonical'; document.head.appendChild(tag); }
  tag.href = _SITE_ORIGIN + path;
}

function goHome(pushState) {
  _setMetaDesc(_HOME_META);
  document.title = _HOME_TITLE;
  _setCanonical('/');
  if (pushState !== false) history.pushState({}, '', '/');
  showPage('home');
}

function goCounty(id, pushState) {
  const c = CD[id];
  if (!c) return;
  if (c.metaDesc) _setMetaDesc(c.metaDesc);
  document.title = `EV Charger Installation ${c.name} | Expert EV Installers`;
  _setCanonical('/' + id);
  if (pushState !== false) history.pushState({county: id}, '', '/' + id);
  buildCounty(c, id);
  showPage('county');
}

window.addEventListener('popstate', function() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (slug && CD[slug]) { goCounty(slug, false); }
  else { goHome(false); }
});

/* ============================================================
   COUNTY PAGE BUILDER
============================================================ */
function buildCounty(c, id) {
  const stateColor = c.isNJ ? 'var(--orange)' : 'var(--cyan)';
  const stateLabel = c.isNJ ? 'nj-label' : 'pa-label';

  const checks = c.checks.map(ch => `
    <li class="cp-check">
      <div class="check-dot">✓</div>
      ${ch}
    </li>`).join('');

  const cityTags = c.cities.split(' · ').map(city =>
    `<span style="display:inline-block;background:var(--card);border:1px solid var(--border2);padding:6px 14px;font-size:0.82rem;font-weight:500;color:var(--text2);margin:4px 4px 4px 0;">${city}</span>`
  ).join('');

  document.getElementById('county-slot').innerHTML = `
  <section class="cp-hero">
    <div class="cp-grid-bg"></div>
    <div class="wrap" style="position:relative;z-index:2;">
      <div class="cp-inner">
        <!-- LEFT -->
        <div>
          <div class="breadcrumb" onclick="goHome()">
            <span class="bc-link">Home</span>
            <span class="bc-sep">/</span>
            EV Charger Installation
            <span class="bc-sep">/</span>
            ${c.name}
          </div>

          <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,201,122,0.08);border:1px solid rgba(0,201,122,0.2);padding:6px 14px;margin-bottom:24px;font-size:0.72rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--success);">
            <div style="width:7px;height:7px;background:var(--success);border-radius:50%;animation:none;"></div>
            Serving ${c.name} · ${c.state}
          </div>

          <h1 class="cp-h1">
            <span style="display:block;color:var(--text)">${c.h1a}</span>
            <span style="display:block;color:var(--blue)">${c.h1b}</span>
            <span class="county-color" style="display:block;color:${stateColor}">${c.h1c}</span>
          </h1>

          <p class="cp-desc">${c.desc}</p>

          <ul class="cp-checks">${checks}</ul>

          <a href="tel:${c.tel}" class="cp-phone" data-no-call-intercept="true">📞 ${c.phone}</a>
        </div>

        <!-- FORM -->
        <div class="form-card">
          <div class="form-top">
            <div class="form-top-row">
              <div class="form-heading">${c.name} Quote</div>
              <div class="response-tag">2hr</div>
            </div>
            <div class="form-note">Free · No obligation · ${c.state}-licensed electrician calls you</div>
          </div>
          <div class="form-fields" id="cpff-${id}">
            <input type="hidden" name="county" value="${c.name}">
            <div class="ff-row">
              <div class="ff"><label>First Name</label><input type="text" name="first_name" placeholder="John"></div>
              <div class="ff"><label>Last Name</label><input type="text" name="last_name" placeholder="Smith"></div>
            </div>
            <div class="ff"><label>Phone</label><input type="tel" name="phone" placeholder="${c.phone}"></div>
            <div class="ff"><label>Email</label><input type="email" name="email" placeholder="you@email.com"></div>
            <div class="ff"><label>Street Address</label><input type="text" name="address" placeholder="123 Main St"></div>
            <div class="ff">
              <label>EV Vehicle</label>
              <select name="ev_vehicle">
                <option value="">Your vehicle...</option>
                <option>Tesla (S/3/X/Y/Cybertruck)</option>
                <option>Ford Lightning / Mach-E</option>
                <option>Chevy Bolt / Equinox / Silverado EV</option>
                <option>Rivian R1T / R1S</option>
                <option>BMW i-Series</option>
                <option>Hyundai IONIQ / Kia EV6</option>
                <option>VW ID.4 / Audi Q4</option>
                <option>Other</option>
              </select>
            </div>
            <div class="ff">
              <label>Charger Location</label>
              <select name="charger_location">
                <option value="">Where will charger go?</option>
                <option>Attached garage</option>
                <option>Detached garage</option>
                <option>Outdoor / driveway</option>
                <option>Townhome / condo</option>
                <option>Not sure</option>
              </select>
            </div>
            <div class="ff"><label>Notes</label><textarea name="notes" placeholder="Panel type, any concerns, questions..."></textarea></div>
            <button type="button" class="form-submit-btn" onclick="submitForm('cpff-${id}','cpfs-${id}')">⚡ Get ${c.name} Quote</button>
            <div class="form-micro">
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Private</div>
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>2hr Reply</div>
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>No Spam</div>
            </div>
          </div>
          <div class="form-success" id="cpfs-${id}">
            <div class="success-icon">⚡</div>
            <div class="success-h">Request Sent!</div>
            <p class="success-p">A ${c.name} electrician calls within 2 hours during business hours.<br><a href="tel:${c.tel}" style="color:var(--orange);" data-no-call-intercept="true">${c.phone}</a></p>
          </div>
        </div>
      </div>

      <!-- TRUST ROW -->
      <div class="cp-trust-row">
        <div class="cp-trust-item"><div class="cp-trust-icon">🏅</div><h4>${c.state} Licensed</h4><p>Verified license in ${c.isNJ ? 'New Jersey' : 'Pennsylvania'} — every electrician we send.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">🔒</div><h4>$2M Insured</h4><p>Full general liability + workers comp. Your home is protected.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">📋</div><h4>Permits Handled</h4><p>${c.permit.split('.')[0]}.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">💰</div><h4>${c.isNJ ? 'PSE&G Make-Ready' : 'Federal Tax Credit'}</h4><p>${c.rebateDesc.split('.')[0]}.</p></div>
      </div>
    </div>
  </section>

  <!-- COMMON INSTALL CONDITIONS -->
  ${c.localContext ? `
  <section class="section">
    <div class="wrap">
      <div class="section-eyebrow">Local Install Context</div>
      <h2 class="section-h2">What Homeowners in <span>${c.name}</span> Should Know</h2>
      <p class="county-local-note">${c.localContext.localKnow}</p>
      <div class="county-conditions">
        <div class="county-condition-item">
          <div class="cci-label">Common Home Types</div>
          <div class="cci-value">${c.localContext.homeTypes}</div>
        </div>
        <div class="county-condition-item">
          <div class="cci-label">Typical Install Location</div>
          <div class="cci-value">${c.localContext.install}</div>
        </div>
        <div class="county-condition-item">
          <div class="cci-label">Utility &amp; Incentive</div>
          <div class="cci-value">${c.localContext.utility}</div>
        </div>
        <div class="county-condition-item">
          <div class="cci-label">Permit Handling</div>
          <div class="cci-value">${c.localContext.permitNote}</div>
        </div>
      </div>
      <div style="text-align:center;margin-top:8px">
        <a class="pill-btn charge" onclick="window.scrollTo({top:0,behavior:'smooth'})">Get a Free Quote for ${c.name.split(' ')[0]} →</a>
      </div>
    </div>
  </section>` : ''}

  <!-- REBATE DETAIL -->
  <section class="section section-alt">
    <div class="wrap">
      <div class="section-eyebrow">Incentives for ${c.name} Homeowners</div>
      <h2 class="section-h2">Your <span class="gold">${c.isNJ ? 'Incentive Breakdown' : 'Incentive Overview'}</span></h2>
      <p class="section-sub">${c.rebateDesc}</p>
      <div class="honest-note">
        <div class="honest-note-icon">📋</div>
        <p><strong>Permit detail for ${c.name}:</strong> ${c.permit}</p>
      </div>
    </div>
  </section>

  <!-- CITIES SERVED -->
  <section class="section">
    <div class="wrap">
      <div class="section-eyebrow">${c.name} · ${c.state}</div>
      <h2 class="section-h2">Cities & Towns <span>We Serve</span></h2>
      <p class="section-sub">We install EV chargers throughout all of ${c.name}, including every city and town listed below.</p>
      <div style="margin-bottom:32px;">${cityTags}<span style="display:inline-block;background:rgba(29,143,255,0.08);border:1px solid rgba(29,143,255,0.2);padding:6px 14px;font-size:0.82rem;font-weight:600;color:var(--blue);margin:4px 4px 4px 0;">+ All surrounding areas</span></div>
      <div class="honest-note">
        <div class="honest-note-icon">💡</div>
        <p><strong>${c.name} fast fact:</strong> ${c.fact}</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="final-cta">
    <div class="wrap">
      <div class="final-cta-inner">
        <div class="section-eyebrow" style="justify-content:center;margin-bottom:16px;">${c.name} · ${c.state}</div>
        <h2 class="cta-h">Ready to Charge<br><span>in ${c.name.split(' ')[0]}?</span></h2>
        <p class="cta-p">Call our ${c.name} team or submit the form above. Licensed electrician calls within 2 hours during business hours. Same-week installs available.</p>
        <a href="tel:${c.tel}" class="cta-phone-big" data-no-call-intercept="true">⚡ ${c.phone}</a>
        <div class="cta-btns">
          <a class="pill-btn charge xl" onclick="window.scrollTo({top:0,behavior:'smooth'})">Get My Free Quote</a>
          <a class="pill-btn outline xl" onclick="goHome();setTimeout(()=>sid('counties'),80)">← All Counties</a>
        </div>
      </div>
    </div>
  </section>

  <!-- MINI FOOTER -->
  <footer>
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <img src="expertev-logo (1).png" class="footer-logo-img" alt="Expert EV Installers">
          <div class="footer-brand">Expert<em>EV</em> Installers</div>
          <p class="footer-desc">Licensed EV charger installation in ${c.name}, ${c.state}. Every installation completed by a licensed electrician within our contractor network. Permitted, insured, warranted.</p>
          <div class="footer-lic">✓ ${c.state} Licensed · Fully Insured</div>
        </div>
        <div class="footer-col">
          <h5>PA Counties</h5>
          <ul>
            <li><a onclick="goCounty('philadelphia')">Philadelphia County</a></li>
            <li><a onclick="goCounty('montgomery')">Montgomery County</a></li>
            <li><a onclick="goCounty('bucks')">Bucks County</a></li>
            <li><a onclick="goCounty('chester')">Chester County</a></li>
            <li><a onclick="goCounty('delaware')">Delaware County</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>NJ Counties</h5>
          <ul>
            <li><a onclick="goCounty('burlington')">Burlington County</a></li>
            <li><a onclick="goCounty('camden')">Camden County</a></li>
            <li><a onclick="goCounty('gloucester')">Gloucester County</a></li>
            <li><a onclick="goHome()" style="color:var(--cyan);">← Back to Home</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:${WEBSITE_PHONE.tel}" data-no-call-intercept="true">PA: ${WEBSITE_PHONE.display}</a></li>
            <li><a href="tel:${WEBSITE_PHONE.tel}" data-no-call-intercept="true">NJ: ${WEBSITE_PHONE.display}</a></li>
            <li><a href="mailto:expertevinstalls@gmail.com">expertevinstalls@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 Expert EV Installers · ${c.name} · ${c.state} Licensed</div>
        <button onclick="goHome()" class="pill-btn outline" style="padding:7px 18px;font-size:0.72rem;">← All Counties</button>
      </div>
    </div>
  
</footer>`;
}

/* ============================================================
   INTERACTIONS
============================================================ */
/* ── Lead Complexity Scoring ── */
/* ═══════════════════════════════════════════════════════════════
   LEAD PROFIT ESTIMATOR — Job Intelligence Engine
   Returns full scoring for any lead object
═══════════════════════════════════════════════════════════════ */
function getIncentiveText(l) {
  if ((l.state || '').toUpperCase() === 'NJ') {
    return 'PSE&G make-ready incentive may apply ($50–$1,500)';
  }
  return 'No current PECO install rebate; federal tax credit may apply';
}

function getJobIntelligence(l) {
  const panelSize    = l.panelSize    || 'notsure';
  const distance     = l.distance     || 'notsure';
  const chargerBrand = l.chargerBrand || '';
  const service      = (l.service     || '').toLowerCase();
  const homeType     = l.homeType     || '';
  const openBreaker  = l.openBreaker  || '';
  const panelLoc     = l.panelLocation || '';

  const isCommercial    = chargerBrand === 'commercial' || service.includes('commercial') || service.includes('fleet') || homeType === 'commercial';
  const is100amp        = panelSize === '100amp';
  // No open breaker space reported → panel upgrade likely even if 200amp
  const noBreakerSpace  = openBreaker === 'no';
  const isFarRun     = distance === 'over50';
  const isMedRun     = distance === '25to50';
  const isCloseRun   = distance === 'under10' || distance === '10to25';

  let complexity, valueMin, valueMax, valueMid, timeMin, timeMax, difficulty;

  if (isCommercial) {
    complexity = 'Commercial Install';
    valueMin = 5000; valueMax = 15000; valueMid = 8000;
    timeMin  = 6;    timeMax  = 12;
    difficulty = 'Complex';
  } else if (is100amp || noBreakerSpace) {
    complexity = 'Panel Upgrade Likely';
    valueMin = 2500; valueMax = 6000; valueMid = 3800;
    timeMin  = 4;    timeMax  = 8;
    difficulty = 'Hard';
  } else if (isFarRun) {
    complexity = 'Long Wiring Run';
    valueMin = 1400; valueMax = 2200; valueMid = 1800;
    timeMin  = 3;    timeMax  = 5;
    difficulty = 'Medium';
  } else if (isMedRun) {
    complexity = 'Moderate Installation';
    valueMin = 1400; valueMax = 2200; valueMid = 1800;
    timeMin  = 2;    timeMax  = 4;
    difficulty = 'Medium';
  } else {
    complexity = 'Basic Installation';
    valueMin = 900;  valueMax = 1400; valueMid = 1150;
    timeMin  = 1;    timeMax  = 2;
    difficulty = 'Easy';
  }

  // If lead already has a complexity set by AI panel analysis, respect it
  if (l.aiComplexityOverride) {
    complexity = l.aiComplexityOverride;
    const overrides = {
      'Panel Upgrade Likely': { valueMin:2500, valueMax:6000, valueMid:3800, timeMin:4, timeMax:8, difficulty:'Hard' },
      'Commercial Install':   { valueMin:5000, valueMax:15000,valueMid:8000, timeMin:6, timeMax:12,difficulty:'Complex' },
      'Long Wiring Run':      { valueMin:1400, valueMax:2200, valueMid:1800, timeMin:3, timeMax:5, difficulty:'Medium' },
      'Moderate Installation':{ valueMin:1400, valueMax:2200, valueMid:1800, timeMin:2, timeMax:4, difficulty:'Medium' },
      'Basic Installation':   { valueMin:900,  valueMax:1400, valueMid:1150, timeMin:1, timeMax:2, difficulty:'Easy'   },
    };
    if (overrides[complexity]) Object.assign({valueMin,valueMax,valueMid,timeMin,timeMax,difficulty}, overrides[complexity]);
  }

  // Profit potential
  let profit, profitColor, profitBg;
  if (valueMid >= 2500)      { profit = 'High';   profitColor = '#4ade80'; profitBg = 'rgba(74,222,128,0.12)'; }
  else if (valueMid >= 1400) { profit = 'Medium'; profitColor = '#fbbf24'; profitBg = 'rgba(251,191,36,0.12)'; }
  else                       { profit = 'Low';    profitColor = '#94a3b8'; profitBg = 'rgba(148,163,184,0.1)'; }

  // Difficulty colours
  const diffMeta = {
    Easy:    { color:'#4ade80', bg:'rgba(74,222,128,0.12)',   icon:'🟢' },
    Medium:  { color:'#fbbf24', bg:'rgba(251,191,36,0.12)',   icon:'🟡' },
    Hard:    { color:'#fb923c', bg:'rgba(251,146,60,0.12)',   icon:'🟠' },
    Complex: { color:'#f87171', bg:'rgba(248,113,113,0.12)',  icon:'🔴' },
  };
  const dm = diffMeta[difficulty] || diffMeta.Medium;

  // Advisory flags — shown in quote assistant and lead detail
  const flags = [];
  if (noBreakerSpace && !is100amp) flags.push('⚠ Panel may need upgrade — no open breaker space reported');
  if (homeType === 'condo' || homeType === 'apartment') flags.push('⚠ Condo/apartment — confirm electrical access with HOA or building management');
  if (panelLoc === 'outside') flags.push('ℹ Outdoor panel — weatherproof conduit/enclosure may be required');
  if (isFarRun) flags.push('ℹ Long conduit run (50+ ft) — plan for additional materials and labor');
  if (l.state === 'NJ') {
    flags.push('💵 Incentive: PSE&G make-ready incentive may apply ($50–$1,500) — eligibility varies by project');
  } else {
    flags.push('💵 Incentive: No current PECO install rebate; federal tax credit may apply (up to $1,000 for qualifying installs by June 30, 2026)');
  }

  return {
    complexity,
    valueMin, valueMax, valueMid,
    valueLabel: `$${valueMin.toLocaleString()} – $${valueMax.toLocaleString()}`,
    timeLabel:  `${timeMin}–${timeMax} hours`,
    difficulty, diffColor: dm.color, diffBg: dm.bg, diffIcon: dm.icon,
    profit, profitColor, profitBg,
    flags,
  };
}

/* Legacy wrappers so existing call-sites keep working */
function scoreLeadComplexity(panelSize, distance, chargerBrand) {
  return getJobIntelligence({ panelSize, distance, chargerBrand }).complexity;
}
function estimateJobValue(complexity) {
  const ji = getJobIntelligence({ complexity, panelSize:'200amp', distance:'under10', chargerBrand:'' });
  // honour passed complexity directly
  const map = {
    'Basic Installation':    { min:900,  max:1400,  mid:1150 },
    'Moderate Installation': { min:1400, max:2200,  mid:1800 },
    'Long Wiring Run':       { min:1400, max:2200,  mid:1800 },
    'Panel Upgrade Likely':  { min:2500, max:6000,  mid:3800 },
    'Commercial Install':    { min:5000, max:15000, mid:8000 },
  };
  const r = map[complexity] || map['Basic Installation'];
  return { ...r, label: `$${r.min.toLocaleString()}–$${r.max.toLocaleString()}` };
}


/**
 * Returns the live contractors array.
 * Prefers dbContractors (loaded from Supabase) with a fallback to the
 * _getContractors() demo array so the app works offline / before Supabase loads.
 */
function _getContractors() {
  // Supabase is the single source of truth. Never fall back to demo CONTRACTORS.
  // Returns [] before load completes; _loadDbContractors() calls buildPages() when done.
  return dbContractors;
}

/* ── Auto Territory Assignment (performance-weighted round-robin) ── */
function autoAssignByCounty(county, state) {
  if (!settings.autoAssign) return null;
  const eligible = _getContractors().filter(c =>
    c.counties.includes(county) &&
    c.isActive !== false &&
    (c.contractorType || 'real') !== 'demo'
  );
  if (!eligible.length) return null;
  // Sort by routing score so higher-performing contractors get priority
  const scored = eligible.map(c => ({ c, score: _contractorRoutingScore(c) })).sort((a,b) => b.score - a.score);
  const key = county;
  _rrIndex[key] = (_rrIndex[key] || 0) % scored.length;
  const assigned = scored[_rrIndex[key]].c;
  _rrIndex[key]++;
  return assigned.id;
}

let _submitInProgress = false; // guard against double-fire (touch events, rapid clicks)

async function submitForm(fieldsId, successId) {
  console.log('[FORM] submitForm called | fieldsId:', fieldsId, '| Supabase ready:', isSupabaseReady(), '| adminEmail:', settings.adminEmail);

  /* ── 0. Double-fire guard ── */
  if (_submitInProgress) { console.warn('[FORM] submitForm already in progress — ignoring duplicate call'); return; }
  _submitInProgress = true;

  try {
    await _submitFormInner(fieldsId, successId);
  } finally {
    _submitInProgress = false;
  }
}

async function _submitFormInner(fieldsId, successId) {
  const f = document.getElementById(fieldsId);
  const s = document.getElementById(successId);
  if (!f) { console.error('[FORM] form element not found for id:', fieldsId); return; }

  /* ── 1. HONEYPOT: bots fill hidden fields, humans don't ── */
  const honeypot = f.querySelector('[name="_hp_evf2"]');
  const honeypotVal = honeypot ? honeypot.value.trim() : '';
  if (honeypotVal !== '') { console.warn('[FORM] Honeypot triggered — rejecting submission | value:', honeypotVal); return; }

  /* ── 2. Collect field values ── */
  const inputs = f.querySelectorAll('input:not([name="_hp_evf2"]), select, textarea');
  const data   = new FormData();
  const vals   = {};
  inputs.forEach(el => {
    if (!el.name) return;
    data.append(el.name, el.value);
    vals[el.name] = el.value;
  });

  /* ── 3. Required field validation ── */
  const requiredFields = [
    { key:'first_name', label:'First Name' },
    { key:'phone',      label:'Phone Number' },
    { key:'email',      label:'Email' },
    { key:'county',     label:'County' },
  ];
  for (const rf of requiredFields) {
    if (!vals[rf.key] || !vals[rf.key].trim()) {
      const el = f.querySelector(`[name="${rf.key}"]`);
      if (el) { el.focus(); el.style.borderColor = '#f87171'; setTimeout(() => el.style.borderColor = '', 2500); }
      showToast(`Please enter your ${rf.label}`);
      return;
    }
  }

  /* ── 4. Phone format validation (US 10-digit) ── */
  if (!_validatePhone(vals['phone'] || '')) {
    const el = f.querySelector('[name="phone"]');
    if (el) { el.focus(); el.style.borderColor = '#f87171'; setTimeout(() => el.style.borderColor = '', 2500); }
    showToast('Please enter a valid 10-digit phone number');
    return;
  }

  /* ── 5. Email format validation ── */
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals['email'] || '')) {
    const el = f.querySelector('[name="email"]');
    if (el) { el.focus(); el.style.borderColor = '#f87171'; setTimeout(() => el.style.borderColor = '', 2500); }
    showToast('Please enter a valid email address');
    return;
  }

  /* ── 6. Duplicate detection (same phone or email in last 10 min) ── */
  if (_isDuplicate(vals['phone'], vals['email'])) {
    console.log('[FORM] Duplicate detected — showing success without re-inserting | phone:', vals['phone'], '| email:', vals['email']);
    f.style.display = 'none';
    if (s) s.classList.add('show'); // show success so UX is seamless
    return;
  }

  /* ── 7. Client-side rate limit (max 3 per 10 min) ── */
  if (!_checkRateLimit()) {
    console.warn('[FORM] Rate limit reached — rejecting submission');
    showToast('Too many submissions — please wait a few minutes or call us directly');
    return;
  }

  console.log('[FORM] Validation passed — building lead object');

  /* ── 8. Disable button, show loading state ── */
  const btn = f.querySelector('.form-submit-btn') || f.parentElement.querySelector('.form-submit-btn');
  const btnOrigText = btn ? btn.textContent : '⚡ Get My Free Quote';
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  /* ── 9. Score lead complexity & estimate value ── */
  const panelSize    = vals['panel_size']    || 'notsure';
  const distance     = vals['distance']      || 'notsure';
  const chargerBrand = vals['charger_brand'] || '';
  const complexity   = scoreLeadComplexity(panelSize, distance, chargerBrand);
  const valEst       = estimateJobValue(complexity);

  /* ── 10. County parse + auto-assignment ── */
  const countyRaw  = (vals['county'] || '').split(' County')[0].replace(/ County.*/, '').replace(/, .+/, '').trim();
  const stateRaw   = vals['county'] && vals['county'].includes('NJ') ? 'NJ' : 'PA';
  const assignedId = autoAssignByCounty(countyRaw, stateRaw);

  /* ── 11. Build lead object and save to system FIRST ── */
  const newId  = 'L' + String(Date.now()).slice(-6);
  const now    = new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  const fullName = sanitizeHTML(`${vals['first_name']||''} ${vals['last_name']||''}`.trim() || 'New Lead');
  const initialNotes = [];
  if (assignedId) initialNotes.push({ author:'System', text:'Auto-assigned via territory routing (round-robin).', time:'Just now' });
  if ((vals['notes'] || '').trim()) initialNotes.push({ author:'Customer', text: sanitizeHTML(vals['notes']), time:'On submission' });

  const lead = {
    id:              newId,
    _ts:             Date.now(),
    name:            fullName,
    phone:           sanitizeHTML(vals['phone']  || ''),
    email:           sanitizeHTML(vals['email']  || ''),
    address:         sanitizeHTML(vals['address'] || ''), city: '',
    county:          sanitizeHTML(countyRaw),
    state:           sanitizeHTML(stateRaw),
    service:         'Level 2 Home Charger',
    panel:           panelSize === '200amp' ? '200A' : panelSize === '150amp' ? '150A' : panelSize === '100amp' ? '100A' : 'TBD',
    charger:         vals['charger_brand'] || vals['ev_vehicle'] || 'TBD',
    rebate:          stateRaw === 'NJ' ? 'PSE&G Make-Ready' : 'Federal Tax Credit',
    status:          assignedId ? 'assigned' : 'new',
    contractor:      assignedId || null,
    created:         now,
    value:           valEst.mid,
    notes:           initialNotes,
    priority:        complexity === 'Commercial Install' ? 'high' : 'normal',
    complexity,      panelSize,     distance,
    installLocation: vals['install_location'] || vals['charger_location'] || '',
    chargerBrand:    vals['charger_brand']    || '',
    leadSource:      vals['lead_source']       || 'Direct',
    contactedAt:     null,
    review:          null,
    isDuplicate:     false,
    // Part A new fields
    homeType:        sanitizeHTML(vals['home_type']      || ''),
    panelLocation:   sanitizeHTML(vals['panel_location'] || ''),
    openBreaker:     sanitizeHTML(vals['open_breaker']   || ''),
    // Part B response timer
    assignedAt:      assignedId ? new Date().toISOString() : null,
    responseDeadline: assignedId ? new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString() : null,
    isOverdue:       false,
  };

  /* Enrich with job intelligence */
  const ji = getJobIntelligence(lead);
  lead.installTime     = ji.timeLabel;
  lead.profitPotential = ji.profit;
  lead.difficulty      = ji.difficulty;

  console.log('[FORM] Lead object ready — saving to localStorage and Supabase');

  /* Save to localStorage first — lead is captured locally regardless of DB outcome */
  leads.unshift(lead);
  persist();

  /* Push to Supabase. Public forms run as anon — the anon_leads_insert RLS policy
     must allow the insert. If it fails, the lead is preserved in localStorage but
     will NOT appear in the admin dashboard until schema_v3_rls_fix.sql is applied. */
  const _formSource = fieldsId === 'main-form-fields' ? 'main_form' : 'county_form';
  if (isSupabaseReady()) {
    console.log('[SUPABASE] Attempting lead insert | source:', _formSource, '| lead_id:', newId,
      '| status:', lead.status, '| contractor:', lead.contractor ?? 'null',
      '| notes_count:', lead.notes.length);
    sbCreateLead(lead)
      .then(r => {
        if (!r) {
          console.error('[LEADS] INSERT FAILED | source:', _formSource, '| lead_id:', newId,
            '| result: createLead returned null',
            '| action: check [SUPABASE] logs above for error details',
            '| fix: ensure schema_v3_rls_fix.sql has been run in Supabase SQL Editor');
        } else {
          console.log('[LEADS] INSERT OK | source:', _formSource, '| lead_id:', newId,
            '| lead will appear in admin dashboard on next hydration or realtime event');
          // ── EVENT 1: SMS to admin on new lead ────────────────────
          if (settings.smsAlerts && settings.adminSmsPhone) {
            const _smsContractor = assignedId ? _getContractors().find(c => c.id === assignedId) : null;
            const _isDemo = _smsContractor && (_smsContractor.contractorType || 'real') === 'demo';
            if (!_isDemo) {
              sbSendSms(settings.adminSmsPhone,
                `New lead: EV charger install in ${countyRaw} County, ${stateRaw}. Customer: ${fullName}. Check your dashboard.`
              );
            }
          }
        }
      })
      .catch(e => console.error('[LEADS] INSERT THREW | source:', _formSource, '| lead_id:', newId, '| error:', e.message));
  } else {
    console.warn('[SUPABASE] not ready — lead saved to localStorage only | lead_id:', newId,
      '| Supabase key/URL may be incorrect, or CDN failed to load');
  }

  /* Show success — lead is captured */
  console.log('[FORM] Showing success screen');
  f.style.display = 'none';
  if (s) s.classList.add('show');

  if (typeof buildSidebar === 'function') buildSidebar();
  if (typeof addNotification === 'function') {
    const contractor = assignedId ? _getContractors().find(c => c.id === assignedId) : null;
    addNotification(
      `<strong>New lead — ${sanitizeHTML(fullName)}</strong><br>` +
      `${sanitizeHTML(countyRaw)} · ${sanitizeHTML(complexity)} · ` +
      `Est. $${valEst.min.toLocaleString()}–$${valEst.max.toLocaleString()}` +
      (contractor ? `<br>Auto-assigned → ${sanitizeHTML(contractor.name)}` : '')
    );
    persist();
  }

  /* Follow-up alert: fire after 10 minutes if lead still uncontacted */
  setTimeout(() => {
    const l = leads.find(x => x.id === newId);
    if (l && !l.contactedAt && !['completed','lost'].includes(l.status)) {
      addNotification(`⚠️ <strong>Follow-up:</strong> ${sanitizeHTML(fullName)} has not been contacted yet (10 min).`);
      persist();
    }
  }, 10 * 60 * 1000);

  /* ── 12. POST to Formspree in background for email notification ── */
  /* Lead is already saved — Formspree failure does NOT lose the lead  */
  if (settings.formspreeId) {
    console.log('[FORMSPREE] Sending notification | formspreeId:', settings.formspreeId, '| lead_id:', newId);
    fetch('https://formspree.io/f/' + settings.formspreeId, {
      method: 'POST', body: data, headers: { 'Accept': 'application/json' }
    }).then(r => {
      if (r.ok) {
        console.log('[FORMSPREE] Email notification sent ✓ | status:', r.status);
      } else {
        r.text().then(body => console.warn('[FORMSPREE] Notification failed | status:', r.status, '| body:', body));
      }
    }).catch(err => console.warn('[FORMSPREE] Fetch error (non-blocking):', err.message));
  } else {
    console.log('[FORMSPREE] No formspreeId configured — email notification skipped');
  }
}

function focusForm() {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById('main-phone-input');
    if (el) { el.scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(() => el.focus(), 500); }
  }, 80);
}


/* Navbar scroll */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

/* Mobile menu */
function toggleMobile() { document.getElementById('mobile-nav').classList.toggle('open'); }
function closeMobile() { document.getElementById('mobile-nav').classList.remove('open'); }

/* Detect lead source from URL */
(function(){
  const params = new URLSearchParams(window.location.search);
  const src = params.get('utm_source') || params.get('ref') || 'Direct';
  const srcMap = { google:'Google Ads', fb:'Facebook Ads', facebook:'Facebook Ads', seo:'SEO', organic:'SEO', direct:'Direct' };
  const mapped = srcMap[src.toLowerCase()] || src;
  const el = document.getElementById('main-lead-source');
  if (el) el.value = mapped;
})();



/* Enrich existing leads with job intelligence fields if missing */
leads.forEach(l => {
  if (!l.installTime || !l.profitPotential) {
    const ji = getJobIntelligence(l);
    if (!l.installTime)      l.installTime      = ji.timeLabel;
    if (!l.profitPotential)  l.profitPotential  = ji.profit;
    if (!l.difficulty)       l.difficulty       = ji.difficulty;
  }
});


// ═══════════════════════════════════════════════════════════════
// PERSISTENCE ENGINE — localStorage bridge
// Every write operation calls persist() so data survives refresh.
// On a real production deployment, replace persist() and
// _loadPersisted() with Supabase API calls (schema below in docs).
// ═══════════════════════════════════════════════════════════════

function persist() {
  try {
    localStorage.setItem(_STORE.leads,    JSON.stringify(leads));
    localStorage.setItem(_STORE.notifs,   JSON.stringify(notifications.slice(0, 100)));
    localStorage.setItem(_STORE.settings, JSON.stringify(settings));
  } catch(e) { console.warn('[EEV] localStorage quota:', e.message); }
}

(function _loadPersisted() {
  console.log('[VERSION] build=2026-03-15-v2');

  // Clear any stale leads/notifs still in localStorage from before this change.
  // Previously logout did not clear these keys; now it does, but run once to clean
  // up any existing cached data on browsers that haven't logged out yet.
  localStorage.removeItem(_STORE.leads);
  localStorage.removeItem(_STORE.notifs);

  try {
    // NOTE: leads and notifications are intentionally NOT restored from localStorage here.
    // Supabase is the sole source of truth. Restoring cached leads/notifs pre-auth would
    // allow a prior user's data to appear on another user's login (cross-session bleed).
    // initApp() hydrates leads from Supabase after login; notifications start fresh each session.
    console.log('[VERSION] localStorage leads/notifs skipped at startup — will hydrate from Supabase after login');
    const ss = localStorage.getItem(_STORE.settings);
    if (ss) {
      Object.assign(settings, JSON.parse(ss));
    }
  } catch(e) { console.warn('[EEV] Could not restore persisted data:', e.message); }

  // ── Stale adminEmail guard ──────────────────────────────────────
  // Old sessions may have stored the wrong admin email. Force-correct it so
  // _resolveAuthUser() routes admin logins correctly.
  const CORRECT_ADMIN_EMAIL = 'expertevinstalls@gmail.com';
  if (!settings.adminEmail || settings.adminEmail.toLowerCase() === 'evinstalls@gmail.com') {
    console.warn('[AUTH] Stale or missing adminEmail detected in localStorage:', JSON.stringify(settings.adminEmail),
      '— resetting to', CORRECT_ADMIN_EMAIL);
    settings.adminEmail = CORRECT_ADMIN_EMAIL;
  }

  console.log('[AUTH] settings.adminEmail after restore:', settings.adminEmail);
  /* Re-enrich any leads that may be missing intel fields after restore */
  leads.forEach(l => {
    if (!l.installTime || !l.profitPotential) {
      const ji = getJobIntelligence(l);
      if (!l.installTime)     l.installTime     = ji.timeLabel;
      if (!l.profitPotential) l.profitPotential = ji.profit;
      if (!l.difficulty)      l.difficulty      = ji.difficulty;
    }
  });
})();


// ═══════════════════════════════════════════════════════════════
// SPAM PROTECTION
// 1. Honeypot field check (bots fill hidden fields, humans don't)
// 2. Client-side rate limiting (max 3 submissions per 10 minutes)
// 3. Duplicate detection (same phone/email within 10 minutes)
// 4. Phone format validation (US 10-digit)
// ═══════════════════════════════════════════════════════════════


function _isDuplicate(phone, email) {
  const cutoff = Date.now() - _RATE_WIN;
  const ph = (phone || '').replace(/\D/g, '');
  const em = (email || '').toLowerCase().trim();
  return leads.some(l => {
    const lts = l._ts || 0;
    if (lts < cutoff) return false;
    const lph = (l.phone || '').replace(/\D/g, '');
    const lem = (l.email || '').toLowerCase().trim();
    return (ph && lph === ph) || (em && lem === em);
  });
}


// ═══════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════

async function doLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pass  = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  const btnEl = document.getElementById('login-btn');

  if (!email || !pass) {
    errEl.textContent = 'Please enter your email and password.';
    errEl.style.display = 'block';
    return;
  }

  // Disable button while authenticating
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Signing in…'; }
  errEl.style.display = 'none';

  if (isSupabaseReady()) {
    // ── Supabase Auth path ──────────────────────────────────────
    console.log('[LOGIN] Calling sbSignIn:', email, '| pass length:', pass.length, '| first char code:', pass.charCodeAt(0));
    const { user, session, error } = await sbSignIn(email, pass);
    if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Sign In'; }
    console.log('[LOGIN] sbSignIn result — error:', error ?? 'none', '| user:', user?.email ?? 'none');

    if (!error) {
      // Supabase sign-in succeeded
      _inactiveLoginAttempt = false;
      await _resolveAuthUser(user);
      if (!currentUser) {
        errEl.textContent = _inactiveLoginAttempt
          ? 'Your account has been deactivated. Contact your administrator.'
          : 'Account not recognized. Contact your administrator.';
        _inactiveLoginAttempt = false;
        errEl.style.display = 'block';
        return;
      }
      // Guard: confirm resolved role matches what was expected. Log the routing decision.
      console.log('[LOGIN] Role resolved:', currentUser.role, '| routing to:', currentUser.role === 'admin' ? 'dashboard' : 'my-leads');
    } else {
      // ── DEV ONLY: local USERS fallback when Supabase auth fails ──
      // Disable by setting DEV_MODE = false in js/config.js before going live.
      if (typeof DEV_MODE !== 'undefined' && DEV_MODE) {
        console.warn('[DEV] Supabase auth failed (' + error + ') — trying local USERS fallback.');
        const demoUser = typeof USERS !== 'undefined' ? USERS[email] : null;
        console.log('[DEV] USERS lookup for', email, ':', demoUser ? 'found (role=' + demoUser.role + ')' : 'not found');
        if (demoUser && demoUser.password === pass) {
          currentUser = { ...demoUser, email };
          console.warn('[DEV] Signed in via local USERS. This path is blocked when DEV_MODE=false.');
        } else {
          // Show the real Supabase error so we can diagnose the problem
          errEl.textContent = 'Supabase error: ' + error + (demoUser ? ' (local fallback: password mismatch)' : ' (local fallback: email not in USERS)');
          errEl.style.display = 'block';
          return;
        }
      } else {
        // ── Production: Supabase failure = hard stop ──────────────
        errEl.textContent = 'Incorrect email or password.';
        errEl.style.display = 'block';
        return;
      }
    }
  } else {
    // ── No Supabase configured — use USERS demo data ────────────
    if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Sign In'; }
    const user = typeof USERS !== 'undefined' ? USERS[email] : null;
    if (user && user.password === pass) {
      currentUser = { ...user, email };
    } else {
      errEl.textContent = 'Incorrect email or password.';
      errEl.style.display = 'block';
      return;
    }
  }

  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  try {
    initApp();
  } catch (initErr) {
    console.error('[doLogin] initApp threw:', initErr);
    if (typeof _showDashboardError === 'function') {
      _showDashboardError('Dashboard failed to load. Please try again.', true);
    }
    return;
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('login-screen').style.display !== 'none') doLogin();
});

async function doLogout() {
  _teardownRealtimeSubscriptions();
  if (isSupabaseReady()) await sbSignOut();
  currentUser = null;
  currentContractor = null;
  dbContractors = [];
  // Clear in-memory lead and notification data.
  leads.splice(0, leads.length);
  notifications.splice(0, notifications.length);
  // CRITICAL: also clear localStorage so the next login session — which may be a
  // different user on the same device — never sees stale data from this session.
  // Without this, _loadPersisted() restores the outgoing user's leads on next page load,
  // and _pollNewLeads() can detect them as "new" and inject them into the next session.
  localStorage.removeItem(_STORE.leads);
  localStorage.removeItem(_STORE.notifs);
  console.log('[LOGOUT] localStorage leads + notifs cleared');
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null; }
  _lastNewLeadCount = -1;
  // Clear portal intent so a fresh page visit shows the public site.
  sessionStorage.removeItem('ev_portal_open');
  document.getElementById('app').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-error').style.display = 'none';
}

/**
 * Given a Supabase Auth user object, populate currentUser (and currentContractor
 * for contractor logins). Handles admin detection and contractor auto-link by email.
 */
/**
 * NOTE — same-browser multi-account behavior:
 * Supabase stores auth state in localStorage, which is SHARED across all tabs
 * in the same browser profile. If admin is signed in and a contractor opens a new
 * tab, they share the same session. The most-recent sbSignIn() call wins.
 * To use admin and contractor simultaneously, use separate browser profiles or
 * an incognito window for the second account.
 * This function always resolves from the CURRENT Supabase session (backend truth)
 * and will never route a user to the wrong dashboard for the active session.
 */
async function _resolveAuthUser(authUser) {
  if (!authUser) { currentUser = null; return; }
  const email = authUser.email?.toLowerCase() ?? '';
  const adminEmail = (settings.adminEmail ?? '').toLowerCase();

  console.log('[AUTH] _resolveAuthUser | email:', email, '| adminEmail from settings:', adminEmail,
    '| email match:', email === adminEmail,
    '| app_metadata.role:', authUser.app_metadata?.role ?? 'none');
  if (email === adminEmail || authUser.app_metadata?.role === 'admin') {
    // ── Admin ───────────────────────────────────────────────────
    currentUser = { email, role: 'admin', name: 'Admin' };
    currentContractor = null;
    // Await contractor load so initApp() renders with real data, not demo fallback
    await _loadDbContractors();
  } else {
    // ── Contractor ──────────────────────────────────────────────
    let record = await sbFetchCurrentContractor(authUser.id);

    if (!record) {
      // Auto-link: contractor was created before auth existed — match by email
      const { data: rows } = await (_db()?.from('contractors').select('*').eq('email', email).maybeSingle() ?? Promise.resolve({ data: null }));
      if (rows) {
        await sbLinkContractorToAuth(rows.id, authUser.id);
        record = await sbFetchCurrentContractor(authUser.id);
      }
    }

    if (!record) { currentUser = null; return; } // unknown account

    // ── Block inactive contractors ──────────────────────────────
    if (record.isActive === false) {
      currentUser = null;
      // Set a specific flag so doLogin() can show a better error message
      _inactiveLoginAttempt = true;
      console.warn('[AUTH] Contractor login blocked — account is inactive:', record.id, record.companyName || record.name);
      return;
    }

    currentContractor = record;
    currentUser = {
      email,
      role: 'contractor',
      name: record.companyName || record.name,
      id:   record.id,
    };
    console.log('[AUTH] Contractor resolved — id:', record.id,
      '| companyName:', JSON.stringify(record.companyName),
      '| name:', JSON.stringify(record.name),
      '| currentUser.name:', JSON.stringify(currentUser.name));

    // Update last_login_at (non-blocking but logged so we can confirm it fires)
    if (isSupabaseReady()) {
      _db()?.from('contractors')
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', record.id)
        .then(({ error }) => {
          if (error) console.warn('[resolveAuthUser] last_login_at update failed:', error.message);
          else console.log('[resolveAuthUser] last_login_at set for contractor:', record.id);
        });
    }
  }
}

/** Load all contractors from Supabase into dbContractors and re-render if the app is live. */
async function _loadDbContractors() {
  if (!isSupabaseReady()) {
    console.log('[contractors] _loadDbContractors — Supabase not ready, skipping fetch. dbContractors stays empty.');
    return;
  }
  console.log('[contractors] _loadDbContractors — fetching from Supabase…');
  const rows = await sbFetchActiveContractors();
  if (Array.isArray(rows)) {
    dbContractors.splice(0, dbContractors.length, ...rows);
    if (rows.length > 0) {
      console.log('[contractors] Loaded', rows.length, 'contractor(s) from Supabase:', rows.map(c => c.name));
    } else {
      console.log('[contractors] Supabase returned 0 contractors — showing empty state (no demo fallback).');
    }
  } else {
    console.warn('[contractors] sbFetchActiveContractors returned non-array:', rows);
  }
  // If the app is already rendered (post-login refresh), re-render pages with real data.
  // Capture the active page BEFORE buildPages() wipes all active classes, then re-navigate
  // so the previously-visible page is restored and its data (e.g. assign dropdown) re-renders.
  if (currentUser && document.getElementById('app')?.style.display !== 'none') {
    const activePageId = document.querySelector('#pages .page.active')?.id?.replace('page-', '') || 'dashboard';
    buildPages();
    buildSidebar();
    navTo(activePageId);
  }
}

/**
 * Set up Supabase Realtime postgres_changes subscriptions for the current user.
 * Admin: subscribes to all leads + all contractors.
 * Contractor: subscribes only to their own assigned leads.
 * Must be called after initApp() so currentUser is set.
 */
function _setupRealtimeSubscriptions() {
  if (!isSupabaseReady() || !currentUser) return;
  _teardownRealtimeSubscriptions();
  console.log('[REALTIME] Setting up subscriptions | role:', currentUser.role,
    '| NOTE: leads table must be in supabase_realtime publication.',
    'If no events fire, run: ALTER PUBLICATION supabase_realtime ADD TABLE leads;',
    'in the Supabase SQL Editor');

  // Debounced leads refresh — prevents rapid consecutive fetches on bulk changes
  let _leadsTimer = null;
  const onLeadsChange = (payload) => {
    console.log('[Realtime] leads change:', payload.eventType);
    clearTimeout(_leadsTimer);
    _leadsTimer = setTimeout(() => {
      if (!currentUser) return;
      sbFetchLeadsWithNotes().then(rows => {
        if (!currentUser || !Array.isArray(rows)) return;
        // DB is sole source of truth — replace leads entirely (no local-only merging).
        leads.splice(0, leads.length, ...rows);
        persist();
        buildSidebar();
        const pg = document.querySelector('#pages .page.active')?.id;
        if (pg === 'page-all-leads')        renderLeadsTable();
        else if (pg === 'page-pipeline')    buildPages();
        else if (pg === 'page-dashboard')   refreshAdminDashboard();
        else if (pg === 'page-assign')      renderAssignTable();
        else if (pg === 'page-my-leads')    renderMyLeads();
        else if (pg === 'page-my-pipeline') buildPages();
        console.log('[Realtime] leads refreshed —', rows.length, 'rows from DB');
      }).catch(e => console.warn('[Realtime] leads refresh error:', e.message));
    }, 600);
  };

  // Contractor gets a scoped filter so only their leads trigger the event.
  // currentUser.id is the contractors table TEXT PK (same value written to leads.contractor_id).
  const leadsFilter = currentUser.role === 'contractor'
    ? `contractor_id=eq.${currentUser.id}`
    : undefined;
  console.log('[Realtime] leads filter:', leadsFilter ?? '(all — admin)');
  _realtimeSubs.push(sbSubscribeLeads(leadsFilter, onLeadsChange));

  // Contractors table — admin only (shows activation status updates)
  if (currentUser.role === 'admin') {
    let _contractorsTimer = null;
    const onContractorsChange = (payload) => {
      console.log('[Realtime] contractors change:', payload.eventType);
      clearTimeout(_contractorsTimer);
      _contractorsTimer = setTimeout(() => {
        if (!currentUser || currentUser.role !== 'admin') return;
        _loadDbContractors();
      }, 600);
    };
    _realtimeSubs.push(sbSubscribeContractors(onContractorsChange));
  }
}

/** Remove all active Realtime subscriptions. Called on logout and overlay close. */
function _teardownRealtimeSubscriptions() {
  if (_realtimeSubs.length === 0) return;
  _realtimeSubs.forEach(unsub => { try { unsub(); } catch(e) {} });
  _realtimeSubs.splice(0, _realtimeSubs.length);
  console.log('[Realtime] subscriptions torn down');
}

/**
 * Set up Supabase auth state listener for password-recovery and invite flows.
 * Must be called once after initSupabase().
 */
function _setupAuthStateChange() {
  if (!isSupabaseReady()) return;
  if (_authListenerRegistered) return; // never register twice
  _authListenerRegistered = true;

  sbOnAuthStateChange(async (event, session) => {
    console.log('[AuthStateChange] event:', event,
      '| user:', session?.user?.email ?? 'none',
      '| _awaitingPasswordSetup:', _awaitingPasswordSetup);

    if (event === 'PASSWORD_RECOVERY') {
      // User clicked a password-reset link → show set-password form.
      // Supabase fires this event when it processes a recovery token from the URL.
      console.log('[AuthStateChange] PASSWORD_RECOVERY — showing password reset UI');
      _awaitingPasswordSetup = false;
      _showPasswordResetUI();

    } else if (event === 'SIGNED_IN' && session && _awaitingPasswordSetup) {
      // Contractor arrived via an invite or recovery link — show set-password form.
      // We use this flag because Supabase clears the URL hash BEFORE firing SIGNED_IN,
      // so checking window.location.hash here would always be empty.
      console.log('[AuthStateChange] SIGNED_IN + _awaitingPasswordSetup — invite/recovery path, showing reset UI');
      sessionStorage.setItem('ev_portal_open', '1'); // ensure refresh works post-password-set
      _awaitingPasswordSetup = false;
      _showPasswordResetUI();

    } else if (event === 'SIGNED_OUT') {
      console.log('[AuthStateChange] SIGNED_OUT — clearing user state');
      currentUser = null;
      currentContractor = null;
    }
  });
}

/** Show the password-reset / set-password panel (for recovery and invite flows) */
function _showPasswordResetUI() {
  const loginScreen = document.getElementById('login-screen');
  const resetPanel  = document.getElementById('reset-password-panel');
  const loginCard   = document.getElementById('login-card');
  if (resetPanel) {
    if (loginCard)   loginCard.style.display   = 'none';
    if (loginScreen) loginScreen.style.display = 'flex';
    resetPanel.style.display = 'flex';
  }
}

/** Forgot-password: send reset email */
async function doForgotPassword() {
  const emailEl = document.getElementById('forgot-email');
  const msgEl   = document.getElementById('forgot-msg');
  const email   = emailEl?.value.trim().toLowerCase() ?? '';

  console.log('[doForgotPassword] initiated | email:', email || '(empty)');

  if (!email) {
    if (msgEl) { msgEl.textContent = 'Please enter your email address.'; msgEl.style.color = 'var(--red)'; msgEl.style.display = 'block'; }
    return;
  }

  if (msgEl) { msgEl.textContent = 'Sending…'; msgEl.style.color = 'var(--gray)'; msgEl.style.display = 'block'; }

  console.log('[doForgotPassword] calling sbResetPassword...');
  const result = await sbResetPassword(email);

  if (result.error) {
    console.error('[doForgotPassword] sbResetPassword returned error:', result.error);
    if (msgEl) { msgEl.textContent = result.error; msgEl.style.color = 'var(--red)'; }
  } else {
    console.log('[doForgotPassword] request accepted — showing inbox message');
    if (msgEl) {
      // Honest message: Supabase returns 200 for unknown emails too (anti-enumeration).
      // Tell the user to check spam in case delivery is slow or filtered.
      msgEl.textContent = 'If that email is registered, a reset link is on its way. Check your inbox and spam folder.';
      msgEl.style.color = 'var(--green)';
    }
    if (emailEl) emailEl.style.display = 'none';
  }
}

/** Reset-password panel: set a new password after clicking the email link */
async function doResetPassword() {
  const newEl  = document.getElementById('rp-new');
  const confEl = document.getElementById('rp-confirm');
  const errEl  = document.getElementById('rp-error');
  const btnEl  = document.getElementById('rp-btn');

  const newPw  = newEl?.value  ?? '';
  const confPw = confEl?.value ?? '';

  if (!newPw || newPw.length < 8) {
    if (errEl) { errEl.textContent = 'Password must be at least 8 characters.'; errEl.style.display = 'block'; }
    return;
  }
  if (newPw !== confPw) {
    if (errEl) { errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; }
    return;
  }

  if (btnEl) { btnEl.disabled = true; btnEl.textContent = 'Saving…'; }
  if (errEl) errEl.style.display = 'none';

  console.log('[doResetPassword] calling sbUpdatePassword...');
  const result = await sbUpdatePassword(newPw);
  console.log('[doResetPassword] sbUpdatePassword result:', result.error ? 'error: ' + result.error : 'success');
  if (btnEl) { btnEl.disabled = false; btnEl.textContent = 'Set Password'; }

  if (result.error) {
    if (errEl) { errEl.textContent = result.error; errEl.style.display = 'block'; }
  } else {
    // Clear hash so the panel doesn't re-open on refresh
    history.replaceState(null, '', window.location.pathname);

    // Mark portal as intentionally open so session restore works on any future refresh.
    sessionStorage.setItem('ev_portal_open', '1');

    // The invite/recovery token already created an active session — try to
    // auto-route directly to the dashboard without requiring a second login.
    if (isSupabaseReady()) {
      try {
        const session = await sbGetSession();
        console.log('[doResetPassword] session after password set:', session?.user?.email ?? 'none');
        if (session?.user) {
          await _resolveAuthUser(session.user);
          console.log('[doResetPassword] resolved user:', currentUser?.role ?? 'none', currentUser?.email ?? 'none');
          if (currentUser) {
            document.getElementById('login-screen').style.display = 'none';
            const resetPanel = document.getElementById('reset-password-panel');
            if (resetPanel) resetPanel.style.display = 'none';
            document.getElementById('app').style.display = 'flex';
            try {
              initApp();
              showToast('Password set — welcome to your dashboard!');
            } catch (initErr) {
              console.error('[doResetPassword] initApp threw:', initErr);
              _showDashboardError('Dashboard failed to load. Please sign in again.', true);
            }
            return;
          }
        }
      } catch (e) {
        console.error('[doResetPassword] routing error:', e.message);
        _showDashboardError('Something went wrong. Please sign in manually.', false);
        return;
      }
    }

    // Fallback: session not available — ask them to sign in manually
    showToast('Password updated — you can now sign in.');
    const resetPanel = document.getElementById('reset-password-panel');
    const loginCard  = document.getElementById('login-card');
    if (resetPanel) resetPanel.style.display = 'none';
    if (loginCard)  loginCard.style.display  = '';
  }
}

/**
 * Show a recovery error inside the dashboard overlay so the user never sees
 * a blank screen. resetState=true clears currentUser (use after a failed
 * initApp); resetState=false leaves auth state as-is.
 */
function _showDashboardError(msg, resetState) {
  if (resetState) { currentUser = null; currentContractor = null; }
  const loginScreen = document.getElementById('login-screen');
  const loginCard   = document.getElementById('login-card');
  const resetPanel  = document.getElementById('reset-password-panel');
  const appEl       = document.getElementById('app');
  if (appEl)       appEl.style.display       = 'none';
  if (resetPanel)  resetPanel.style.display  = 'none';
  if (loginCard)   loginCard.style.display   = 'none';
  if (loginScreen) {
    loginScreen.style.display = 'flex';
    // Inject or update a recovery message inside the login-screen
    let errDiv = document.getElementById('_dash-recovery-msg');
    if (!errDiv) {
      errDiv = document.createElement('div');
      errDiv.id = '_dash-recovery-msg';
      errDiv.style.cssText = 'background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.35);color:#f87171;padding:14px 18px;border-radius:10px;font-size:.88rem;text-align:center;max-width:360px;margin:0 auto 16px;';
      loginScreen.prepend(errDiv);
    }
    errDiv.innerHTML = `<strong>⚠ ${sanitizeHTML(msg)}</strong><br><button onclick="document.getElementById('_dash-recovery-msg').remove(); document.getElementById('login-card').style.display=''; " style="margin-top:8px;background:none;border:1px solid rgba(239,68,68,.5);color:#f87171;padding:6px 14px;border-radius:6px;cursor:pointer;font-size:.82rem">Return to Login</button>`;
  }
}

/** Change-password from My Profile page (contractor must already be signed in) */
async function doChangePassword() {
  const newEl  = document.getElementById('cp-new');
  const confEl = document.getElementById('cp-confirm');
  const errEl  = document.getElementById('cp-error');

  const newPw  = newEl?.value  ?? '';
  const confPw = confEl?.value ?? '';

  if (!newPw || newPw.length < 8) {
    if (errEl) { errEl.textContent = 'Password must be at least 8 characters.'; errEl.style.display = 'block'; }
    return;
  }
  if (newPw !== confPw) {
    if (errEl) { errEl.textContent = 'Passwords do not match.'; errEl.style.display = 'block'; }
    return;
  }

  if (errEl) errEl.style.display = 'none';

  const result = await sbUpdatePassword(newPw);
  if (result.error) {
    if (errEl) { errEl.textContent = result.error; errEl.style.display = 'block'; }
  } else {
    showToast('Password updated successfully.');
    if (newEl)  newEl.value  = '';
    if (confEl) confEl.value = '';
  }
}

// ═══════════════════════════════════════════════════════════════
// APP INIT
// ═══════════════════════════════════════════════════════════════
function initApp() {
  console.log('[BUILD] initApp — version=2026-03-15-v2 | role:', currentUser?.role, '| email:', currentUser?.email, '| Supabase ready:', isSupabaseReady());
  const av = document.getElementById('user-avatar');
  const nameInitial = (currentUser.name || currentUser.email || '?')[0].toUpperCase();
  av.textContent = nameInitial;
  av.className = 'user-avatar ' + currentUser.role;
  document.getElementById('user-name-display').textContent = currentUser.name;
  document.getElementById('user-role-display').textContent = currentUser.role === 'admin' ? 'Administrator' : 'Contractor Partner';

  // BUG-FIX: When Supabase is live, discard any locally-cached or demo/seed leads before
  // the first render. The hydration below will populate from DB only. This prevents
  // demo leads (L001–L009) from showing on the admin dashboard even briefly.
  if (isSupabaseReady()) {
    leads.splice(0, leads.length);
  }

  // Contractors get a clean notification slate on every login, then load
  // their contractor-specific notifications from the DB.
  if (currentUser.role === 'contractor') {
    notifications.splice(0, notifications.length);
    persist();
    if (isSupabaseReady() && currentUser.id) {
      sbFetchContractorNotifications(currentUser.id).then(rows => {
        if (!Array.isArray(rows)) return;
        notifications.splice(0, notifications.length, ...rows.map(r => ({
          id:    r.id,
          title: r.title || '',
          text:  r.text  || '',
          time:  r.time  || 'Just now',
          read:  r.read  ?? false,
        })));
        renderNotifDot();
        renderNotifList();
      }).catch(e => console.error('[NOTIF] fetch contractor notifications:', e.message));
    }
  }

  renderNotifDot();
  buildPages();
  buildSidebar();
  navTo(currentUser.role === 'admin' ? 'dashboard' : 'my-leads');
  // Start lead-polling interval for admin only.
  // Poll reads localStorage to detect webform submissions from other tabs/windows.
  // Contractors receive updates exclusively via Supabase Realtime subscription —
  // polling localStorage is irrelevant for them and could inject stale cross-session data.
  _lastNewLeadCount = leads.filter(l => l.status === 'new').length;
  if (_pollInterval) clearInterval(_pollInterval);
  if (currentUser.role === 'admin') {
    _pollInterval = setInterval(_pollNewLeads, 10000);
    console.log('[POLL] Lead poll started for admin');
  } else {
    console.log('[POLL] Lead poll skipped for contractor — using Realtime only');
  }
  // Hydrate from Supabase — DB is the sole source of truth when connected.
  // Do NOT preserve local-only leads: demo seeds (L001–L009) and stale localStorage
  // entries are not in the DB and must not be merged back in.
  if (isSupabaseReady()) {
    sbFetchLeadsWithNotes().then(rows => {
      if (!currentUser) return; // user may have logged out while fetch was in flight
      if (!Array.isArray(rows)) {
        console.warn('[DB] hydrate: sbFetchLeadsWithNotes returned non-array — keeping local data');
        return;
      }
      // Capture active page BEFORE buildPages() wipes all active classes.
      const activePageId = document.querySelector('#pages .page.active')?.id?.replace('page-', '') || 'dashboard';
      // DB is sole source of truth — replace leads entirely. No local-only merging.
      leads.splice(0, leads.length, ...rows);
      persist();
      buildPages();
      buildSidebar();
      _lastNewLeadCount = leads.filter(l => l.status === 'new').length;
      if (currentUser?.role === 'contractor') {
        const myCount = rows.filter(l => l.contractor === currentUser.id).length;
        console.log('[DB] Contractor leads hydrated from Supabase — total in DB:', rows.length,
          '| assigned to me (id=' + currentUser.id + '):', myCount,
          '| source: Supabase only, no localStorage fallback');
      } else {
        console.log('[DB] Hydrated', rows.length, 'leads from Supabase');
      }
      // Re-activate the page that was visible before rebuild — triggers renderAssignTable(),
      // renderLeadsTable() etc. as appropriate. refreshAdminDashboard() is called via navTo('dashboard').
      navTo(activePageId);
    }).catch(e => console.warn('[DB] hydrate:', e.message));
  }
  // Subscribe to realtime changes (leads + contractors for admin)
  _setupRealtimeSubscriptions();
}

function _pollNewLeads() {
  if (!currentUser) return;
  try {
    const raw = localStorage.getItem(_STORE.leads);
    if (!raw) return;
    const stored = JSON.parse(raw);
    if (!Array.isArray(stored)) return;
    // Detect leads added in another tab or session
    const storedNewIds = stored.filter(l => l.status === 'new').map(l => l.id);
    const knownIds     = leads.filter(l => l.status === 'new').map(l => l.id);
    const brandNew     = storedNewIds.filter(id => !knownIds.includes(id));
    if (brandNew.length > 0) {
      // Sync leads array from storage
      leads.splice(0, leads.length, ...stored);
      brandNew.forEach(id => {
        const l = leads.find(x => x.id === id);
        if (l) addNotification(`<strong>New lead — ${sanitizeHTML(l.name)}</strong><br>${sanitizeHTML(l.county)} · ${sanitizeHTML(l.service)}`);
      });
      buildSidebar();
      persist();
      // Refresh active data views
      if (document.getElementById('page-all-leads')?.classList.contains('active'))  renderLeadsTable();
      if (document.getElementById('page-pipeline')?.classList.contains('active'))    buildPages(); // rebuild pipeline
      if (document.getElementById('page-assign')?.classList.contains('active'))      renderAssignTable();
    }
    _lastNewLeadCount = leads.filter(l => l.status === 'new').length;
  } catch(e) { /* storage read failed — no-op */ }
}


function buildSidebar() {
  if (!currentUser) return;
  const nav = currentUser.role === 'admin' ? ADMIN_NAV : CONTRACTOR_NAV;
  let html = '';
  nav.forEach(section => {
    html += `<div class="sidebar-section-label">${section.section}</div>`;
    section.items.forEach(item => {
      let badge = '';
      if (item.badgeNew) { const cnt = leads.filter(l => l.status === 'new').length; if (cnt > 0) badge = `<span class="nav-badge red">${cnt}</span>`; }
      if (item.badgeAssigned) { const cnt = leads.filter(l => l.contractor === currentUser.id && l.status === 'assigned').length; if (cnt > 0) badge = `<span class="nav-badge">${cnt}</span>`; }
      html += `<div class="nav-item" id="nav-${item.id}" onclick="navTo('${item.id}')"><span class="nav-icon">${item.icon}</span>${item.label}${badge}</div>`;
    });
  });
  document.getElementById('sidebar-nav').innerHTML = html;
}


/* ── Mobile sidebar toggle ── */
function toggleDashSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const backdrop = document.getElementById('dash-sidebar-backdrop');
  const opening  = !sidebar.classList.contains('mob-open');
  sidebar.classList.toggle('mob-open', opening);
  if (backdrop) backdrop.classList.toggle('mob-open', opening);
}

function closeDashSidebar() {
  document.getElementById('sidebar')?.classList.remove('mob-open');
  document.getElementById('dash-sidebar-backdrop')?.classList.remove('mob-open');
}

function navTo(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  // Rebuild dynamic pages before making them active so data is always fresh
  if (id === 'dashboard' && currentUser?.role === 'admin') refreshAdminDashboard();
  document.querySelectorAll('#pages .page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) { page.classList.add('active'); document.getElementById('topbar-title').textContent = PAGE_TITLES[id] || id; }
  if (id === 'all-leads')   renderLeadsTable();
  if (id === 'assign')      renderAssignTable();
  if (id === 'my-leads')    renderMyLeads();
  if (id === 'leaderboard') refreshLeaderboard();
  if (id === 'dashboard')   setTimeout(renderFollowUpAlerts, 50);
  document.getElementById('notif-panel').classList.remove('open');
  notifOpen = false;
  closeDashSidebar(); // close sidebar drawer on mobile after navigating
}

/* Replaces the admin dashboard page node with freshly computed HTML so stat
   counts always reflect the live leads array, not the login-time snapshot. */
function refreshAdminDashboard() {
  const el = document.getElementById('page-dashboard');
  if (!el) return;
  const wasActive = el.classList.contains('active');
  const tmp = document.createElement('div');
  tmp.innerHTML = pgAdminDashboard();
  const newEl = tmp.firstElementChild;
  if (wasActive) newEl.classList.add('active');
  el.parentNode.replaceChild(newEl, el);
}


// ═══════════════════════════════════════════════════════════════
// BUILD ALL PAGES
// ═══════════════════════════════════════════════════════════════
function buildPages() {
  const c = document.getElementById('pages');
  let html = '';
  if (currentUser.role === 'admin') {
    html += pgAdminDashboard() + pgPipeline() + pgAllLeads() + pgAssign() + pgContractors() + pgRevenue() + pgLeaderboard() + pgSmsTemplates() + pgSettings();
  } else {
    html += pgMyLeads() + pgMyPipeline() + pgMyRevenue() + pgSmsTemplates() + pgMyProfile();
  }
  c.innerHTML = html;
}

// ─── ADMIN DASHBOARD ────────────────────────────────────────────
function pgAdminDashboard() {
  // ── Period filter setup ──────────────────────────────────────
  const range      = _dateRange(_dashPeriod);
  const isAll      = _dashPeriod === 'all';
  const inCreated  = l => isAll || _inRange(l.createdAt, range);
  const inWon      = l => isAll || _inRange(l.wonAt,     range);
  const demoIds    = _demoContractorIds();

  // ── Lead counts — use created_at ─────────────────────────────
  const periodLeads    = leads.filter(inCreated);
  const newC           = periodLeads.filter(l => l.status === 'new').length;
  const assignedCount  = periodLeads.filter(l => l.status === 'assigned').length;
  const lostCount      = periodLeads.filter(l => l.status === 'lost').length;
  const activePipeline = leads.filter(l => !['completed','lost'].includes(l.status)).length; // current state, not time-filtered

  // ── Revenue — use won_at, exclude demo ───────────────────────
  const wonLeads  = leads.filter(l => l.status === 'completed' && inWon(l) && (!l.contractor || !demoIds.has(l.contractor)));
  const revenue   = wonLeads.reduce((s,l) => s + _revenueValue(l), 0);
  const fee       = Math.round(revenue * settings.commissionPct / 100);
  const avgWon    = wonLeads.length ? Math.round(revenue / wonLeads.length) : 0;

  // ── Contractor stats ─────────────────────────────────────────
  const realActive = _realContractors().filter(c => c.isActive !== false).length;

  // ── Per-contractor performance for period ────────────────────
  const realCtrs = _realContractors();
  const cPerf = realCtrs.map(c => {
    const cWon = wonLeads.filter(l => l.contractor === c.id);
    const cRev = cWon.reduce((s,l) => s + _revenueValue(l), 0);
    return { c, jobs: cWon.length, rev: cRev };
  }).filter(x => x.jobs > 0).sort((a,b) => b.rev - a.rev);

  // ── Recent Leads — always show last 6 regardless of filter ───
  const recent = leads.slice().reverse().slice(0,6);

  // ── County chart — use period-filtered leads ─────────────────
  const counties = ['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'];
  const maxC     = Math.max(...counties.map(c => periodLeads.filter(l=>l.county===c).length), 1);

  // ── Period picker HTML ───────────────────────────────────────
  const picker = `<select class="form-input" style="width:auto;padding:6px 10px;font-size:.82rem;background:var(--navy-mid);color:var(--white);border:1px solid var(--navy-border);cursor:pointer" onchange="setDashPeriod(this.value)">
    <option value="this-month" ${_dashPeriod==='this-month'?'selected':''}>This Month</option>
    <option value="last-month" ${_dashPeriod==='last-month'?'selected':''}>Last Month</option>
    <option value="90-days"    ${_dashPeriod==='90-days'   ?'selected':''}>Last 90 Days</option>
    <option value="all"        ${_dashPeriod==='all'       ?'selected':''}>All Time</option>
  </select>`;

  return `<div class="page" id="page-dashboard">
    <div class="page-header">
      <div>
        <h1>Dashboard Overview</h1>
        <p>ExpertEV Installers · PA/NJ Territory · <span style="color:var(--cyan)">${_periodLabel(_dashPeriod)}</span></p>
      </div>
      <div class="page-header-actions" style="gap:8px">
        ${picker}
        <button class="btn btn-primary" onclick="openAddLead()">+ New Lead</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon">⚡</div>
        <div class="stat-value blue">${periodLeads.length}</div>
        <div class="stat-label">Leads Created</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">${newC} new · ${assignedCount} assigned</div>
      </div>
      <div class="stat-card yellow">
        <div class="stat-icon">🔄</div>
        <div class="stat-value yellow">${activePipeline}</div>
        <div class="stat-label">Active Pipeline</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">Current open leads</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon">✅</div>
        <div class="stat-value green">${wonLeads.length}</div>
        <div class="stat-label">Jobs Won</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">${lostCount} lost this period</div>
      </div>
      <div class="stat-card cyan">
        <div class="stat-icon">💰</div>
        <div class="stat-value cyan">$${revenue.toLocaleString()}</div>
        <div class="stat-label">Revenue (Real Only)</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">Platform cut: $${fee.toLocaleString()}</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon">📊</div>
        <div class="stat-value blue">$${avgWon.toLocaleString()}</div>
        <div class="stat-label">Avg Job Value</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">Won jobs only</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon">🔧</div>
        <div class="stat-value blue">${realActive}</div>
        <div class="stat-label">Active Contractors</div>
        <div class="stat-change" style="color:var(--gray);font-size:.7rem">Real only</div>
      </div>
    </div>

    ${cPerf.length > 0 ? `
    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>🏆</span><div class="card-title">Contractor Performance — ${_periodLabel(_dashPeriod)}</div></div>
      <div class="card-body" style="padding:0">
        <table class="leads-table"><thead><tr><th>Contractor</th><th>Jobs Won</th><th>Revenue</th><th>Platform Cut</th></tr></thead><tbody>
        ${cPerf.map(x=>`<tr>
          <td style="font-weight:600">${sanitizeHTML(x.c.companyName||x.c.name)}</td>
          <td style="color:var(--green)">${x.jobs}</td>
          <td style="color:var(--cyan);font-weight:600">$${x.rev.toLocaleString()}</td>
          <td style="color:var(--gray)">$${Math.round(x.rev*settings.commissionPct/100).toLocaleString()}</td>
        </tr>`).join('')}
        </tbody></table>
      </div>
    </div>` : ''}

    <div class="two-col">
      <div class="card">
        <div class="card-header"><span>⚡</span><div class="card-title">Recent Leads</div><button class="btn btn-outline btn-sm" onclick="navTo('all-leads')">View All</button></div>
        <table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Description</th><th>Status</th><th></th></tr></thead><tbody>
        ${recent.map(l=>{ const cn=l.notes.find(n=>n.author==='Customer'); return `<tr>
          <td><div class="lead-name">${sanitizeHTML(l.name)}</div><div class="lead-sub">${sanitizeHTML(l.phone)}</div></td>
          <td>${sanitizeHTML(l.county)},${sanitizeHTML(l.state)}</td>
          <td style="font-size:.8rem">${sanitizeHTML(l.service)}</td>
          <td style="font-size:.8rem;color:var(--gray);max-width:160px">${cn ? `<span title="${sanitizeHTML(cn.text)}">${sanitizeHTML(cn.text.length>60?cn.text.slice(0,60)+'…':cn.text)}</span><button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Full details" style="margin-left:4px;font-size:.7rem">⬆</button>` : '—'}</td>
          <td><span class="badge badge-${l.status}">${cap(l.status)}</span>${l.priority==='high'?'<span class="warn-tag" style="margin-left:4px;font-size:.68rem">HIGH</span>':''}</td>
          <td><button class="btn-icon" onclick="openLeadDetail('${l.id}')">→</button></td>
        </tr>`; }).join('')}
        </tbody></table>
      </div>
      <div class="card">
        <div class="card-header"><span>🗺️</span><div class="card-title">Leads by County — ${_periodLabel(_dashPeriod)}</div></div>
        <div class="card-body" style="padding:16px 20px">
          ${counties.map(c => { const cnt = periodLeads.filter(l=>l.county===c).length; return `<div class="county-row"><div class="county-name">${c}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(cnt/maxC*100)}%"></div></div><div class="county-count">${cnt}</div></div>`;}).join('')}
        </div>
      </div>
    </div>

    <div class="two-col">
      <div class="card">
        <div class="card-header"><span>🕐</span><div class="card-title">Recent Activity</div></div>
        <div class="card-body">
          ${notifications.length === 0
            ? `<div style="color:var(--gray);font-size:.83rem;padding:12px 0;text-align:center">No recent activity. New lead events will appear here.</div>`
            : notifications.slice(0, 5).map(n => `<div class="activity-item"><div class="activity-dot" style="background:var(--blue)"></div><div><div class="activity-text">${n.text}</div><div class="activity-time">${n.time}</div></div></div>`).join('')
          }
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span>⚠️</span><div class="card-title">Follow-Up Alerts</div><span id="followup-count" style="font-size:.72rem;background:rgba(245,158,11,.15);color:var(--yellow);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 8px"></span></div>
        <div class="card-body" id="followup-list" style="padding:8px 0"></div>
      </div>
    </div>

    <div class="card" style="margin-top:0">
      <div class="card-header"><span>📊</span><div class="card-title">Lead Source Performance — ${_periodLabel(_dashPeriod)}</div></div>
      <div class="card-body" style="padding:16px 20px">
        ${(()=>{const sources=['Google Ads','SEO','Facebook Ads','Direct'];const maxS=Math.max(...sources.map(s=>periodLeads.filter(l=>l.leadSource===s).length),1);return sources.map(s=>{const cnt=periodLeads.filter(l=>l.leadSource===s).length;const won=periodLeads.filter(l=>l.leadSource===s&&l.status==='completed').length;return`<div class="county-row"><div class="county-name" style="width:120px">${s}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(cnt/maxS*100)}%"></div></div><div class="county-count" style="width:30px">${cnt}</div><div style="font-size:.72rem;color:var(--green);width:60px">${cnt?Math.round(won/cnt*100)+'% close':''}</div></div>`;}).join('');})()}
      </div>
    </div>
  </div>`;
}

function renderFollowUpAlerts() {
  const list = document.getElementById('followup-list');
  const cntEl = document.getElementById('followup-count');
  if (!list) return;
  if (!settings.followUpAlerts) {
    list.innerHTML = `<div style="color:var(--gray);font-size:.82rem;padding:16px">Follow-up alerts are disabled. Enable in Settings → Notifications.</div>`;
    if (cntEl) cntEl.textContent = '';
    return;
  }
  const now = new Date();
  const uncontacted = leads.filter(l => !l.contactedAt && l.contractor && !['completed','lost'].includes(l.status));
  if (!uncontacted.length) {
    list.innerHTML = `<div style="color:var(--gray);font-size:.82rem;padding:16px">No follow-up alerts. All assigned leads contacted. ✅</div>`;
    if (cntEl) cntEl.textContent = '';
    return;
  }
  if (cntEl) cntEl.textContent = `${uncontacted.length} pending`;
  list.innerHTML = uncontacted.map(l => {
    const ctr = _getContractors().find(c=>c.id===l.contractor);
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 20px;border-bottom:1px solid rgba(30,45,74,.4)">
      <div>
        <div style="font-size:.85rem;font-weight:600;color:var(--white)">${l.name}</div>
        <div style="font-size:.75rem;color:var(--gray)">${l.county},${l.state} · Assigned to ${ctr?ctr.name:'?'}</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center">
        <span style="font-size:.72rem;background:rgba(245,158,11,.15);color:var(--yellow);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 8px">⚠ Not contacted</span>
        <button class="btn btn-outline btn-sm" onclick="openLeadDetail('${l.id}')">Details</button>
      </div>
    </div>`;
  }).join('');
}

// ─── PIPELINE ───────────────────────────────────────────────────
function pgPipeline() {
  const stages = ['new','assigned','contacted','scheduled','quote-sent','completed','lost'];
  const labels  = {new:'New Lead',assigned:'Assigned',contacted:'Contacted',scheduled:'Est. Scheduled','quote-sent':'Quote Sent',completed:'Job Won',lost:'Job Lost'};
  const colors  = {new:'var(--blue)',assigned:'var(--cyan)',contacted:'var(--yellow)',scheduled:'var(--orange)','quote-sent':'#a855f7',completed:'var(--green)',lost:'var(--red)'};
  return `<div class="page" id="page-pipeline">
    <div class="page-header"><div><h1>Lead Pipeline</h1><p>Full Kanban view across all stages</p></div></div>
    <div class="pipeline">
    ${stages.map(s => {
      const sl = leads.filter(l => l.status === s);
      const totalVal = sl.reduce((x,l)=>x+_revAmount(l),0);
      return `<div class="pipeline-col">
        <div class="pipeline-col-header" style="border-top:2px solid ${colors[s]};padding-top:10px">${labels[s]}<span class="pipeline-count">${sl.length}</span></div>
        ${sl.length>0?`<div style="font-size:.72rem;color:var(--green);margin-bottom:10px">$${totalVal.toLocaleString()}</div>`:''}
        ${sl.length===0?`<div style="color:var(--gray);font-size:.78rem;text-align:center;padding:20px 0">No leads</div>`:''}
        ${sl.map(l=>`<div class="pipeline-card" data-lead-id="${l.id}" onclick="openLeadDetail('${l.id}')">
          <div class="pipeline-card-name">${l.name}${l.priority==='high'?'<span style="color:var(--orange);margin-left:5px;font-size:.7rem">●</span>':''}</div>
          <div class="pipeline-card-detail">${l.complexity||l.service}</div>
          <div class="pipeline-card-detail" style="margin-top:3px">${_priceTag(l, true)}</div>
          <span class="pipeline-card-county">${l.county},${l.state}</span>
        </div>`).join('')}
      </div>`;
    }).join('')}
    </div>
  </div>`;
}

// ─── ALL LEADS ──────────────────────────────────────────────────
function pgAllLeads() {
  return `<div class="page" id="page-all-leads">
    <div class="page-header"><div><h1>All Leads</h1><p>${leads.length} total leads across PA/NJ</p></div>
    <div class="page-header-actions">
      <button class="btn btn-outline btn-sm" onclick="exportCSV()">⬇ Export CSV</button>
      <button class="btn btn-primary" onclick="openAddLead()">+ Add Lead</button>
    </div></div>
    <div class="filter-bar">
      <select class="filter-select" id="filter-status" onchange="renderLeadsTable()"><option value="">All Statuses</option><option value="new">New Lead</option><option value="assigned">Assigned</option><option value="contacted">Contacted</option><option value="scheduled">Est. Scheduled</option><option value="quote-sent">Quote Sent</option><option value="completed">Job Won</option><option value="lost">Job Lost</option></select>
      <select class="filter-select" id="filter-state"  onchange="renderLeadsTable()"><option value="">All States</option><option value="PA">Pennsylvania</option><option value="NJ">New Jersey</option></select>
      <select class="filter-select" id="filter-county" onchange="renderLeadsTable()"><option value="">All Counties</option><option>Philadelphia</option><option>Montgomery</option><option>Bucks</option><option>Chester</option><option>Delaware</option><option>Burlington</option><option>Camden</option><option>Gloucester</option></select>
      <select class="filter-select" id="filter-priority" onchange="renderLeadsTable()"><option value="">All Priority</option><option value="high">High Priority</option><option value="normal">Normal</option></select>
    </div>
    <div id="bulk-action-bar" class="bulk-action-bar" style="display:none"></div>
    <div class="card"><div id="leads-table-wrap"></div></div>
  </div>`;
}

function renderLeadsTable() {
  const status   = (document.getElementById('filter-status')   || {}).value || '';
  const state    = (document.getElementById('filter-state')    || {}).value || '';
  const county   = (document.getElementById('filter-county')   || {}).value || '';
  const priority = (document.getElementById('filter-priority') || {}).value || '';
  let filtered = leads.filter(l =>
    (!status   || l.status   === status)   &&
    (!state    || l.state    === state)    &&
    (!county   || l.county   === county)   &&
    (!priority || l.priority === priority)
  );
  const cName = id => id ? (_getContractors().find(c => c.id === id) || {}).name || '—' : '—';
  const wrap = document.getElementById('leads-table-wrap');
  if (!wrap) return;
  if (filtered.length === 0) {
    wrap.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No leads found</h3><p>Try adjusting the filters</p></div>`;
  } else {
    wrap.innerHTML = `<table class="leads-table"><thead><tr>
        <th style="width:32px;padding:8px 4px 8px 12px"><input type="checkbox" id="select-all-cb" onchange="_onSelectAll(this.checked)" style="cursor:pointer;accent-color:#2563eb" title="Select all visible"></th>
        <th>ID</th><th>Customer</th><th>County</th><th>Description</th><th>Complexity</th><th>Value</th><th>Contractor</th><th>Status</th><th>Date</th><th></th>
      </tr></thead><tbody>
      ${filtered.map(l=>{ const cn=l.notes.find(n=>n.author==='Customer'); return `<tr class="${selectedLeadIds.has(l.id)?'row-selected':''}">
        <td style="padding:8px 4px 8px 12px"><input type="checkbox" class="lead-cb" data-id="${l.id}" onchange="_onLeadCbChange('${l.id}',this.checked)" ${selectedLeadIds.has(l.id)?'checked':''} style="cursor:pointer;accent-color:#2563eb"></td>
        <td><span class="mono" style="color:var(--gray);font-size:.78rem">${l.id}</span></td>
        <td><div class="lead-name">${l.name}${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px;font-size:.68rem">HIGH</span>':''}</div><div class="lead-sub">${l.phone}</div></td>
        <td>${l.county},${l.state}</td>
        <td style="font-size:.78rem;color:var(--gray);max-width:180px">${cn?`<span title="${sanitizeHTML(cn.text)}">${sanitizeHTML(cn.text.length>70?cn.text.slice(0,70)+'…':cn.text)}</span>`:l.service}</td>
        <td style="font-size:.78rem">${l.complexity||'—'}</td>
        <td style="min-width:80px">${_priceTag(l)}</td>
        <td style="font-size:.82rem">${cName(l.contractor)}</td>
        <td><span class="badge badge-${l.status}">${cap(l.status)}</span></td>
        <td style="font-size:.8rem;color:var(--gray)">${l.created}</td>
        <td style="display:flex;gap:4px">
          <button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Full Details">→</button>
          <button class="btn-icon" onclick="openQualityReview('${l.id}')" title="Quality Review" style="font-size:.8rem">🔍</button>
          ${currentUser?.role==='admin'?`<button class="btn-icon" onclick="deleteLead('${l.id}')" title="Delete Lead" style="color:var(--red);font-size:.9rem">🗑</button>`:''}
        </td>
      </tr>`; }).join('')}
    </tbody></table>`;
  }
  _syncMasterCheckbox();
  _syncBulkBar();
}

// ─── BULK SELECTION ─────────────────────────────────────────────

/** Toggle one lead in/out of the selection set and sync UI. */
function _onLeadCbChange(id, checked) {
  if (checked) selectedLeadIds.add(id);
  else         selectedLeadIds.delete(id);
  _syncMasterCheckbox();
  _syncBulkBar();
}

/** Select-all / deselect-all for visible rows. */
function _onSelectAll(checked) {
  document.querySelectorAll('.lead-cb').forEach(cb => {
    cb.checked = checked;
    if (checked) selectedLeadIds.add(cb.dataset.id);
    else         selectedLeadIds.delete(cb.dataset.id);
    // Highlight row
    const row = cb.closest('tr');
    if (row) row.classList.toggle('row-selected', checked);
  });
  _syncBulkBar();
}

/** Sync master checkbox checked / indeterminate state. */
function _syncMasterCheckbox() {
  const cbs = [...document.querySelectorAll('.lead-cb')];
  const all = document.getElementById('select-all-cb');
  if (!all || cbs.length === 0) return;
  const checkedCount = cbs.filter(cb => cb.checked).length;
  all.checked       = checkedCount === cbs.length;
  all.indeterminate = checkedCount > 0 && checkedCount < cbs.length;
}

/** Show/rebuild the bulk action bar based on current selection. */
function _syncBulkBar() {
  const bar = document.getElementById('bulk-action-bar');
  if (!bar) return;
  const count = selectedLeadIds.size;
  if (count === 0) { bar.style.display = 'none'; return; }

  const contractors = _getContractors().filter(c => c.isActive !== false && (c.contractorType||'real') !== 'demo');
  const hasCtrs = contractors.length > 0;
  const cOpts = hasCtrs
    ? contractors.map(c => `<option value="${c.id}">${sanitizeHTML(c.companyName||c.name)}</option>`).join('')
    : `<option value="" disabled>No contractors available</option>`;

  bar.style.display = 'flex';
  bar.innerHTML = `
    <span class="bulk-count">${count} lead${count!==1?'s':''} selected</span>
    <select id="bulk-assign-sel" class="filter-select bulk-assign-sel">
      <option value="">Assign to contractor…</option>
      ${cOpts}
    </select>
    <button class="btn btn-primary btn-sm" onclick="bulkAssign()" ${hasCtrs?'':'disabled title="No contractors available"'}>Assign Selected</button>
    <button class="btn btn-sm bulk-delete-btn" onclick="bulkDelete()">🗑 Delete Selected</button>
    <button class="btn btn-outline btn-sm" onclick="_clearSelection()">✕ Clear</button>`;
}

/** Clear selection, reset checkboxes and bar. */
function _clearSelection() {
  selectedLeadIds.clear();
  document.querySelectorAll('.lead-cb').forEach(cb => {
    cb.checked = false;
    const row = cb.closest('tr');
    if (row) row.classList.remove('row-selected');
  });
  const all = document.getElementById('select-all-cb');
  if (all) { all.checked = false; all.indeterminate = false; }
  _syncBulkBar();
}

/** Assign all selected leads to the chosen contractor. */
async function bulkAssign() {
  const sel = document.getElementById('bulk-assign-sel');
  if (!sel || !sel.value) { showToast('Select a contractor first'); return; }
  const ids = [...selectedLeadIds];
  if (ids.length === 0) return;

  const contractor = _getContractors().find(c => c.id === sel.value) || {};
  const contractorName = contractor.companyName || contractor.name || sel.value;

  const assignBtn = document.querySelector('#bulk-action-bar .btn-primary');
  if (assignBtn) { assignBtn.disabled = true; assignBtn.textContent = 'Assigning…'; }

  let success = 0, fail = 0;
  for (const lid of ids) {
    const lead = leads.find(l => l.id === lid);
    if (!lead) { fail++; continue; }

    if (isSupabaseReady()) {
      let dbResult = null;
      try { dbResult = await sbAssignLead(lid, sel.value); } catch(e) { console.error('[BulkAssign]', e.message); }
      if (!dbResult) { fail++; continue; }
    }

    lead.status           = 'assigned';
    lead.contractor       = sel.value;
    lead.assignedAt       = new Date().toISOString();
    lead.responseDeadline = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
    lead.isOverdue        = false;
    if (isSupabaseReady()) {
      sbUpdateLead(lid, { assigned_at: lead.assignedAt, response_deadline: lead.responseDeadline, is_overdue: false })
        .catch(e => console.warn('[DB] bulkAssign timestamp update:', e.message));
    }
    addNote(lid, 'Admin', `Assigned to ${contractorName} (bulk).`);
    success++;
  }

  persist();
  _clearSelection();
  renderLeadsTable();
  buildSidebar();

  if (fail === 0) {
    showToast(`✓ ${success} lead${success!==1?'s':''} assigned to ${sanitizeHTML(contractorName)}`);
  } else {
    showToast(`⚠ ${success} assigned, ${fail} failed — check console`);
  }
}

/** Delete all selected leads after confirmation. */
async function bulkDelete() {
  const ids = [...selectedLeadIds];
  if (ids.length === 0) return;

  if (!window.confirm(`Delete ${ids.length} lead${ids.length!==1?'s':''}? This cannot be undone.`)) return;

  let success = 0, fail = 0;
  for (const lid of ids) {
    if (isSupabaseReady()) {
      let ok = false;
      try { ok = await sbDeleteLead(lid); } catch(e) { console.error('[BulkDelete]', e.message); }
      if (!ok) { fail++; continue; }
    }
    const idx = leads.findIndex(l => l.id === lid);
    if (idx !== -1) leads.splice(idx, 1);
    document.querySelectorAll(`[data-lead-id="${lid}"]`).forEach(el => el.remove());
    success++;
  }

  persist();
  _clearSelection();
  // Close lead detail modal if it was showing a deleted lead
  const overlay = document.getElementById('modal-overlay');
  if (overlay?.classList.contains('open')) closeModalDirect();
  renderLeadsTable();
  buildSidebar();

  if (fail === 0) {
    showToast(`🗑 ${success} lead${success!==1?'s':''} deleted`);
  } else {
    showToast(`⚠ ${success} deleted, ${fail} failed — check console`);
  }
}

// ─── ASSIGN PAGE ────────────────────────────────────────────────
function pgAssign() {
  return `<div class="page" id="page-assign"><div class="page-header"><div><h1>Assign Leads</h1><p>Unassigned leads need a contractor</p></div></div><div id="assign-table-wrap"></div></div>`;
}
function renderAssignTable() {
  const unassigned = leads.filter(l => l.status === 'new');
  const wrap = document.getElementById('assign-table-wrap');
  if (!wrap) return;

  const allContractors = _getContractors();
  console.log('[Assign] contractors available:', allContractors.length, allContractors.map(c => c.name + '(counties:' + (c.counties||[]).length + ')'));

  wrap.innerHTML = unassigned.length === 0
    ? `<div class="card"><div class="empty-state"><div class="empty-state-icon">✅</div><h3>All leads assigned!</h3><p>New leads appear here as they come in.</p></div></div>`
    : `<div class="card"><table class="leads-table"><thead><tr><th>Customer</th><th>County / State</th><th>Service</th><th>Value</th><th>Priority</th><th>Assign To</th><th></th></tr></thead><tbody>
      ${unassigned.map(l => {
        // Score + sort county-eligible contractors; fall back to all others below
        const inCounty  = allContractors.filter(c => (c.counties||[]).includes(l.county) && c.isActive !== false && (c.contractorType||'real') !== 'demo');
        const outCounty = allContractors.filter(c => !(c.counties||[]).includes(l.county));
        // Sort in-county contractors by routing score (best first = default selection)
        const scoredInCounty = inCounty.map(c => ({ c, score: _contractorRoutingScore(c) })).sort((a,b) => b.score - a.score);
        const recommended = scoredInCounty[0]?.c || null;
        const countyOpts = scoredInCounty.map(({ c, score }) => {
          const active = leads.filter(l2 => l2.contractor === c.id && !['completed','lost'].includes(l2.status)).length;
          const myAll  = leads.filter(l2 => l2.contractor === c.id);
          const myDone = myAll.filter(l2 => l2.status === 'completed');
          const cr     = myAll.length ? Math.round(myDone.length / myAll.length * 100) : 0;
          const hint   = `Score:${score} · ${cr}% close · ${active} active`;
          const label  = `${c.companyName||c.name}${c.id===recommended?.id?' ⭐':''} (${hint})`;
          return `<option value="${c.id}" ${c.id===recommended?.id?'selected':''}>${label}</option>`;
        }).join('');
        const otherOpts  = outCounty.map(c => `<option value="${c.id}">${c.companyName||c.name}</option>`).join('');
        const opts = inCounty.length && outCounty.length
          ? `<optgroup label="⭐ Covers ${l.county} — Recommended">${countyOpts}</optgroup><optgroup label="All others">${otherOpts}</optgroup>`
          : (countyOpts || otherOpts);
        const recNote = recommended
          ? `<div style="font-size:.7rem;color:#a5b4fc;margin-top:3px">⭐ Recommended: ${sanitizeHTML(recommended.companyName||recommended.name)}</div>`
          : '';
        return `<tr>
          <td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.address}</div></td>
          <td>${l.county},${l.state}</td>
          <td style="font-size:.8rem">${l.service}</td>
          <td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td>
          <td><select class="filter-select" style="font-size:.75rem;padding:4px 8px" onchange="setLeadPriority('${l.id}',this.value)"><option value="normal" ${l.priority==='normal'?'selected':''}>Normal</option><option value="high" ${l.priority==='high'?'selected':''}>High</option></select></td>
          <td><select class="filter-select" id="asel-${l.id}" style="width:210px"><option value="">Select contractor...</option>${opts}</select>${recNote}</td>
          <td><button class="btn btn-primary btn-sm" onclick="assignLead('${l.id}')">Assign →</button></td>
        </tr>`;
      }).join('')}
    </tbody></table></div>`;
}
function setLeadPriority(id, priority) { const l = leads.find(x=>x.id===id); if(l) l.priority=priority; }
async function assignLead(lid) {
  const sel = document.getElementById('asel-' + lid);
  if (!sel || !sel.value) { showToast('Please select a contractor first'); return; }
  const lead = leads.find(l=>l.id===lid);
  if (!lead) return;

  const contractor = _getContractors().find(c=>c.id===sel.value) || {};
  const contractorName = contractor.name || sel.value;

  // Disable the assign button to prevent double-click
  const btn = document.querySelector(`#asel-${lid}`)?.closest('tr')?.querySelector('.btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }

  if (isSupabaseReady()) {
    console.log('[Assign] Writing to DB:', JSON.stringify({ step: 'lead_assignment', lead_id: lid, contractor_id: sel.value }));
    let dbResult = null;
    try {
      dbResult = await sbAssignLead(lid, sel.value);
    } catch (e) {
      console.error('[Assign] sbAssignLead threw:', e.message);
    }

    if (!dbResult) {
      console.error('[Assign]', JSON.stringify({ step: 'lead_assignment', lead_id: lid, contractor_id: sel.value, result: 'failure', error: 'DB update returned null — likely RLS policy or connection issue' }));
      if (btn) { btn.disabled = false; btn.textContent = 'Assign →'; }
      showToast('⚠ Assignment failed — database did not confirm. Check console for details.');
      return;
    }
    console.log('[Assign]', JSON.stringify({ step: 'lead_assignment', lead_id: lid, contractor_id: sel.value, result: 'success' }));
  }

  // Only update local state + show success after DB confirms (or if Supabase not configured)
  const _prevContractorForActivity = lead.contractor
    ? ((_getContractors().find(c => c.id === lead.contractor) || {}).name || lead.contractor)
    : 'Unassigned';
  lead.status = 'assigned';
  lead.contractor = sel.value;
  // Track when the lead was assigned and when the response window closes (2-hour default)
  lead.assignedAt       = new Date().toISOString();
  lead.responseDeadline = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
  lead.isOverdue        = false;
  if (isSupabaseReady()) {
    sbUpdateLead(lid, {
      assigned_at:        lead.assignedAt,
      response_deadline:  lead.responseDeadline,
      is_overdue:         false,
    }).catch(e => console.warn('[DB] assignLead assigned_at update:', e.message));
  }
  addNote(lid, 'Admin', `Assigned to ${contractorName}.`);
  renderAssignTable(); buildSidebar();
  persist();
  showToast('Lead assigned to ' + contractorName);
  addNotification(`Lead assigned to <strong>${sanitizeHTML(contractorName)}</strong> — ${sanitizeHTML(lead.name)}`);
  _triggerAssignmentNotification(lead, sel.value);
  // ── EVENT 2: SMS to contractor on assignment ──────────────────
  if (settings.smsAlerts && contractor && contractor.phone && (contractor.contractorType || 'real') !== 'demo' && isSupabaseReady()) {
    const _smsParts = [lead.service || 'EV charger install', `in ${lead.county} County`];
    if (lead.panelSize && lead.panelSize !== 'notsure') _smsParts.push('Panel ' + lead.panelSize.replace('amp', 'A'));
    if (lead.installLocation) _smsParts.push(lead.installLocation + ' install');
    sbSendSms(contractor.phone,
      `New lead assigned: ${_smsParts.join(', ')}. Check your dashboard.`
    );
  }
  if (isSupabaseReady()) {
    const _a = _actorInfo();
    sbLogActivity(lid, 'lead_assigned', _prevContractorForActivity, contractorName, _a.type, _a.id, _a.name)
      .catch(e => console.error('[DB] logActivity (assignLead):', e.message));
  }
}

// ─── LEADERBOARD ─────────────────────────────────────────────────────────────
function pgLeaderboard() {
  return `<div class="page" id="page-leaderboard">
    <div class="page-header">
      <div><h1>Contractor Leaderboard</h1><p>Performance rankings — real contractors only, demo excluded</p></div>
      <div class="page-header-actions" id="leaderboard-period-wrap"></div>
    </div>
    <div id="leaderboard-wrap"></div>
  </div>`;
}

function setLeaderPeriod(p) { _leaderPeriod = p; refreshLeaderboard(); }

function refreshLeaderboard() {
  const wrap    = document.getElementById('leaderboard-wrap');
  const pwrap   = document.getElementById('leaderboard-period-wrap');
  if (!wrap) return;

  const picker = `<select class="form-input" style="width:auto;padding:6px 10px;font-size:.82rem;background:var(--navy-mid);color:var(--white);border:1px solid var(--navy-border);cursor:pointer" onchange="setLeaderPeriod(this.value)">
    <option value="this-month" ${_leaderPeriod==='this-month'?'selected':''}>This Month</option>
    <option value="last-month" ${_leaderPeriod==='last-month'?'selected':''}>Last Month</option>
    <option value="90-days"    ${_leaderPeriod==='90-days'   ?'selected':''}>Last 90 Days</option>
    <option value="all"        ${_leaderPeriod==='all'       ?'selected':''}>All Time</option>
  </select>`;
  if (pwrap) pwrap.innerHTML = picker;

  const range    = _dateRange(_leaderPeriod);
  const demoIds  = _demoContractorIds();
  const realCtrs = _realContractors();

  if (realCtrs.length === 0) {
    wrap.innerHTML = `<div class="card"><div class="empty-state"><div class="empty-state-icon">🏆</div><h3>No contractors yet</h3><p>Add real contractors to see rankings.</p></div></div>`;
    return;
  }

  // Compute stats per contractor for the period
  const ranked = realCtrs.map(c => {
    const cLeads  = leads.filter(l => l.contractor === c.id && _inRange(l.createdAt, range));
    const cWon    = leads.filter(l => l.contractor === c.id && l.status === 'completed' && _inRange(l.wonAt || l.createdAt, range));
    const allLeads = leads.filter(l => l.contractor === c.id); // all time for response speed
    const revenue  = cWon.reduce((s,l) => s + _revenueValue(l), 0);
    const closeRate = cLeads.length ? Math.round(cWon.length / cLeads.length * 100) : 0;
    const avgVal    = cWon.length ? Math.round(revenue / cWon.length) : 0;
    // Response speed: avg mins from assignedAt → contactedAt for leads that have both
    const respTimes = allLeads.filter(l => l.assignedAt && l.contactedAt).map(l =>
      (new Date(l.contactedAt) - new Date(l.assignedAt)) / 60000
    );
    const avgResp = respTimes.length ? Math.round(respTimes.reduce((s,v)=>s+v,0) / respTimes.length) : null;
    // Ranking score: revenue 50% + close rate 30% + response speed 20%
    const respScore = avgResp != null ? Math.max(0, 120 - avgResp) / 120 * 20 : 10; // baseline 10 if no data
    const score = (revenue / 1000 * 0.5) + (closeRate * 0.3) + respScore;
    return { c, leads: cLeads.length, won: cWon.length, revenue, closeRate, avgVal, avgResp, score };
  }).sort((a,b) => b.score - a.score);

  // Assign badges
  const topCloser   = [...ranked].sort((a,b) => b.closeRate - a.closeRate)[0];
  const topRevenue  = [...ranked].sort((a,b) => b.revenue - a.revenue)[0];
  const fastResp    = [...ranked].filter(r => r.avgResp != null).sort((a,b) => a.avgResp - b.avgResp)[0];
  const consistent  = ranked.find(r => r.leads >= 5 && r.won >= 2);

  const badgeFor = (r) => {
    const badges = [];
    if (topCloser   && r.c.id === topCloser.c.id   && r.closeRate > 0)  badges.push(`<span style="background:rgba(74,222,128,0.12);color:#4ade80;border:1px solid rgba(74,222,128,0.3);border-radius:4px;font-size:.65rem;font-weight:700;padding:2px 7px;margin-left:4px">🏆 Top Closer</span>`);
    if (topRevenue  && r.c.id === topRevenue.c.id   && r.revenue > 0)    badges.push(`<span style="background:rgba(34,211,238,0.1);color:#22d3ee;border:1px solid rgba(34,211,238,0.3);border-radius:4px;font-size:.65rem;font-weight:700;padding:2px 7px;margin-left:4px">💰 High Revenue</span>`);
    if (fastResp    && r.c.id === fastResp.c.id     && r.avgResp != null) badges.push(`<span style="background:rgba(251,191,36,0.1);color:#fbbf24;border:1px solid rgba(251,191,36,0.3);border-radius:4px;font-size:.65rem;font-weight:700;padding:2px 7px;margin-left:4px">⚡ Fast Responder</span>`);
    if (consistent  && r.c.id === consistent.c.id)                        badges.push(`<span style="background:rgba(167,139,250,0.1);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);border-radius:4px;font-size:.65rem;font-weight:700;padding:2px 7px;margin-left:4px">📈 Consistent</span>`);
    return badges.join('');
  };

  const rankIcon = (i) => ['🥇','🥈','🥉'][i] || `<span style="color:var(--gray);font-weight:700">#${i+1}</span>`;

  wrap.innerHTML = `
    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>🏆</span><div class="card-title">Rankings — ${_periodLabel(_leaderPeriod)}</div></div>
      <div class="card-body" style="padding:0">
        <table class="leads-table">
          <thead><tr>
            <th style="width:40px">Rank</th>
            <th>Contractor</th>
            <th>Leads</th>
            <th>Won</th>
            <th>Close Rate</th>
            <th>Revenue</th>
            <th>Avg Job</th>
            <th>Avg Response</th>
          </tr></thead>
          <tbody>
          ${ranked.map((r,i) => `<tr style="${i===0?'background:rgba(74,222,128,0.04)':''}">
            <td style="text-align:center;font-size:1.1rem">${rankIcon(i)}</td>
            <td>
              <div style="font-weight:700;color:var(--white)">${sanitizeHTML(r.c.companyName||r.c.name)}</div>
              <div style="font-size:.72rem;color:var(--gray)">${r.c.isActive===false?'<span style="color:#f87171">Inactive</span>':'Active'}${badgeFor(r)}</div>
            </td>
            <td style="text-align:center;color:var(--blue-bright);font-weight:600">${r.leads}</td>
            <td style="text-align:center;color:var(--green);font-weight:600">${r.won}</td>
            <td style="text-align:center">
              <span style="font-weight:700;color:${r.closeRate>=50?'#4ade80':r.closeRate>=25?'#fbbf24':'#94a3b8'}">${r.closeRate}%</span>
            </td>
            <td style="color:var(--cyan);font-weight:700">$${r.revenue.toLocaleString()}</td>
            <td style="color:var(--gray)">$${r.avgVal.toLocaleString()}</td>
            <td style="color:var(--gray);font-size:.82rem">${r.avgResp != null ? (r.avgResp < 60 ? `${r.avgResp}m` : `${Math.floor(r.avgResp/60)}h ${r.avgResp%60}m`) : '—'}</td>
          </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
      ${ranked.slice(0,3).map((r,i)=>`
      <div class="card" style="border-top:3px solid ${['#ffd700','#c0c0c0','#cd7f32'][i]||'var(--navy-border)'}">
        <div class="card-body" style="text-align:center;padding:20px">
          <div style="font-size:1.6rem;margin-bottom:8px">${rankIcon(i)}</div>
          <div style="font-weight:800;font-size:.95rem;color:var(--white);margin-bottom:4px">${sanitizeHTML(r.c.companyName||r.c.name)}</div>
          <div style="font-size:.8rem;color:var(--green);font-weight:700">$${r.revenue.toLocaleString()}</div>
          <div style="font-size:.72rem;color:var(--gray);margin-top:4px">${r.won} jobs · ${r.closeRate}% close</div>
          <div style="margin-top:8px">${badgeFor(r)}</div>
        </div>
      </div>`).join('')}
    </div>`;
}

// ─── CONTRACTORS ─────────────────────────────────────────────────────────────
function pgContractors() {
  const list = _getContractors();
  if (list.length === 0) {
    return `<div class="page" id="page-contractors">
      <div class="page-header"><div><h1>Contractors</h1><p>No partner contractors yet</p></div>
      <button class="btn btn-primary" onclick="showAddContractorModal()">+ Add Contractor</button></div>
      <div class="empty-state" style="padding:60px 0">
        <div class="empty-state-icon">🔧</div>
        <h3>No contractors yet</h3>
        <p style="color:var(--gray);font-size:.9rem;margin-top:8px">Add your first contractor to start assigning leads.</p>
        <button class="btn btn-primary" style="margin-top:20px" onclick="showAddContractorModal()">+ Add Contractor</button>
      </div>
    </div>`;
  }
  const realCount = list.filter(c => (c.contractorType||'real') !== 'demo').length;
  const demoCount = list.filter(c => (c.contractorType||'real') === 'demo').length;
  return `<div class="page" id="page-contractors">
    <div class="page-header">
      <div>
        <h1>Contractors</h1>
        <p>${realCount} real · ${demoCount} demo · ${list.filter(c=>c.isActive!==false).length} active</p>
      </div>
      <button class="btn btn-primary" onclick="showAddContractorModal()">+ Add Contractor</button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
    ${list.map(c => {
      const isDemo     = (c.contractorType || 'real') === 'demo';
      const isInactive = c.isActive === false;
      const cLeads     = leads.filter(l => l.contractor === c.id);
      const cCompleted = cLeads.filter(l => l.status === 'completed');
      const cRevenue   = isDemo ? 0 : cCompleted.reduce((s, l) => s + _revenueValue(l), 0);
      const initial    = (c.companyName || c.name || '?')[0].toUpperCase();

      // Type badge
      const typeBadge = isDemo
        ? `<span style="font-size:.68rem;background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 7px;margin-left:6px;letter-spacing:.04em">DEMO</span>`
        : `<span style="font-size:.68rem;background:rgba(6,182,212,.1);color:var(--cyan);border:1px solid rgba(6,182,212,.25);border-radius:4px;padding:2px 7px;margin-left:6px;letter-spacing:.04em">REAL</span>`;

      // Status badge
      const statusBadge = isInactive
        ? `<span class="badge" style="font-size:.7rem;margin-left:6px;background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.3)">Inactive</span>`
        : `<span class="badge badge-completed" style="font-size:.7rem;margin-left:6px">Active</span>`;

      // Invite badge
      const inviteTag = c.lastLoginAt
        ? `<span class="badge badge-completed" style="font-size:.68rem;margin-left:6px">Activated</span>`
        : c.invitedAt
          ? `<span class="badge" style="font-size:.68rem;margin-left:6px;background:rgba(59,130,246,.15);color:var(--blue-bright);border:1px solid rgba(59,130,246,.3)">Invite Sent</span>`
          : `<span class="badge" style="font-size:.68rem;margin-left:6px;background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3)">Pending Invite</span>`;

      return `<div class="contractor-card" style="${isInactive?'opacity:.7':''}">
        <div class="contractor-avatar" style="background:${isDemo?'linear-gradient(135deg,#f59e0b,#d97706)':'linear-gradient(135deg,var(--blue-bright),var(--green))'}">${initial}</div>
        <div class="contractor-info">
          <div class="contractor-name">${sanitizeHTML(c.companyName || c.name)}${typeBadge}${statusBadge}${inviteTag}</div>
          <div class="contractor-meta">${sanitizeHTML(c.contactName || c.contact)} · ${sanitizeHTML(c.phone)} · ${sanitizeHTML(c.email)}</div>
          <div class="contractor-meta" style="margin-top:3px">🪪 ${sanitizeHTML(c.license || '—')} &nbsp;·&nbsp; 📍 ${sanitizeHTML((c.counties || []).slice(0,4).join(', '))}${(c.counties||[]).length > 4 ? ` +${c.counties.length-4} more` : ''}</div>
          ${isDemo ? `<div style="font-size:.72rem;color:#f59e0b;margin-top:4px">⚠ Demo contractor — excluded from all business reporting</div>` : ''}
        </div>
        <div class="contractor-stats">
          <div><div class="c-stat-val">${cLeads.length}</div><div class="c-stat-lbl">Leads</div></div>
          <div><div class="c-stat-val" style="color:var(--green)">${cCompleted.length}</div><div class="c-stat-lbl">Won</div></div>
          <div><div class="c-stat-val" style="color:${isDemo?'var(--gray)':'var(--cyan)'}">${isDemo?'—':'$'+(cRevenue/1000).toFixed(1)+'k'}</div><div class="c-stat-lbl">Revenue</div></div>
          <div><div class="c-stat-val" style="color:var(--yellow)">⭐${c.rating || '—'}</div><div class="c-stat-lbl">Rating</div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
          <button class="btn btn-outline btn-sm" onclick="editContractor('${c.id}')">✏️ Edit</button>
          <button class="btn btn-outline btn-sm" onclick="viewContractor('${c.id}')">Details →</button>
          ${isInactive
            ? `<button class="btn btn-sm" style="background:rgba(74,222,128,.1);color:#4ade80;border:1px solid rgba(74,222,128,.3)" onclick="reactivateContractor('${c.id}')">Reactivate</button>`
            : `<button class="btn btn-sm" style="background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.3)" onclick="deactivateContractor('${c.id}')">Deactivate</button>`
          }
          ${c.lastLoginAt ? '' : c.invitedAt
            ? `<button class="btn btn-sm" id="invite-btn-${c.id}" style="background:rgba(245,158,11,.12);color:#f59e0b;border:1px solid rgba(245,158,11,.35)" onclick="sendContractorInvite('${c.id}','${sanitizeHTML(c.email)}')">Resend Invite</button>`
            : `<button class="btn btn-sm" id="invite-btn-${c.id}" style="background:rgba(59,130,246,.15);color:var(--blue-bright);border:1px solid rgba(59,130,246,.3)" onclick="sendContractorInvite('${c.id}','${sanitizeHTML(c.email)}')">Send Invite</button>`
          }
          <button class="btn btn-sm" style="background:rgba(239,68,68,.08);color:#f87171;border:1px solid rgba(239,68,68,.25)" onclick="deleteContractor('${c.id}')">Delete</button>
        </div>
      </div>`;
    }).join('')}
    </div>
  </div>`;
}

function viewContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const cLeads     = leads.filter(l => l.contractor === id);
  const cCompleted = cLeads.filter(l => l.status === 'completed');
  const cRevenue   = cCompleted.reduce((s, l) => s + _revAmount(l), 0);
  openModalWith(sanitizeHTML(c.companyName || c.name), `
    <div class="detail-row"><div class="detail-label">Contact</div><div class="detail-value">${sanitizeHTML(c.contactName || c.contact || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value"><a href="tel:${sanitizeHTML(c.phone)}" style="color:var(--blue-bright);text-decoration:none">${sanitizeHTML(c.phone || '—')}</a></div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:${sanitizeHTML(c.email)}" style="color:var(--blue-bright);text-decoration:none">${sanitizeHTML(c.email || '—')}</a></div></div>
    <div class="detail-row"><div class="detail-label">License</div><div class="detail-value mono">${sanitizeHTML(c.license || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Coverage</div><div class="detail-value">${sanitizeHTML((c.counties||[]).join(', ') || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Revenue</div><div class="detail-value" style="color:var(--cyan)">$${cRevenue.toLocaleString()}</div></div>
    <div class="detail-row"><div class="detail-label">Rating</div><div class="detail-value">⭐ ${c.rating || '—'}</div></div>
    <div class="detail-row"><div class="detail-label">Invite Status</div><div class="detail-value">${
      c.lastLoginAt
        ? `<span class="badge badge-completed">Activated ${new Date(c.lastLoginAt).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span>`
        : c.invitedAt
          ? `<span class="badge" style="background:rgba(59,130,246,.15);color:var(--blue-bright);border:1px solid rgba(59,130,246,.3)">Invite Sent ${new Date(c.invitedAt).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span>
             <button class="btn btn-sm" id="invite-btn-modal-${c.id}" style="margin-left:8px;background:rgba(245,158,11,.12);color:#f59e0b;border:1px solid rgba(245,158,11,.35)" onclick="sendContractorInvite('${c.id}','${sanitizeHTML(c.email)}')">Resend</button>`
          : `<button class="btn btn-sm btn-primary" id="invite-btn-modal-${c.id}" onclick="sendContractorInvite('${c.id}','${sanitizeHTML(c.email)}')">Send Invite</button>`
    }</div></div>
    <div style="margin:16px 0 10px;font-family:'Rajdhani',sans-serif;font-size:.88rem;font-weight:700">Assigned Leads (${cLeads.length})</div>
    ${cLeads.length === 0 ? '<div style="color:var(--gray);font-size:.85rem">No leads assigned yet.</div>' : cLeads.map(l=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(30,45,74,0.4)"><div><div style="font-size:.85rem;font-weight:500">${sanitizeHTML(l.name)}</div><div style="font-size:.75rem;color:var(--gray)">${sanitizeHTML(l.county)},${sanitizeHTML(l.state)} · $${_revAmount(l).toLocaleString()}${l.quoteAmount != null ? ' <span style="color:#a78bfa">(quoted)</span>' : ''}</div></div><span class="badge badge-${l.status}">${cap(l.status)}</span></div>`).join('')}`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Close</button>`);
}

function showAddContractorModal() {
  const needsSupabase = isSupabaseReady();
  openModalWith('Invite Contractor', `
    ${needsSupabase
      ? `<div class="alert-box info" style="margin-bottom:16px">Fills in contractor details and sends a login invite email in one step.</div>`
      : `<div class="alert-box warn" style="margin-bottom:16px">⚠️ Supabase not connected — contractor will be saved locally only (no invite email).</div>`
    }
    <div class="form-row">
      <div class="form-group"><label class="form-label">Company Name *</label><input class="form-input" id="ac-company" placeholder="e.g. Apex Electric LLC"></div>
      <div class="form-group"><label class="form-label">Contact Person *</label><input class="form-input" id="ac-contact" placeholder="Full name"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Email *</label><input class="form-input" type="email" id="ac-email" placeholder="contact@company.com"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="ac-phone" placeholder="(xxx) xxx-xxxx"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">License #</label><input class="form-input" id="ac-lic" placeholder="PA-EL-XXXXX or NJ-EL-XXXXX"></div>
      <div class="form-group">
        <label class="form-label">Contractor Type</label>
        <select class="form-input" id="ac-type">
          <option value="real" selected>Real (included in reporting)</option>
          <option value="demo">Demo (testing only — excluded from reporting)</option>
        </select>
      </div>
    </div>
    <div id="ac-error" style="display:none;color:var(--red);font-size:.82rem;margin-top:8px"></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" id="ac-submit-btn" onclick="saveContractorRecord()">Send Invite →</button>`);
}

async function saveContractorRecord() {
  const company = document.getElementById('ac-company')?.value.trim() ?? '';
  const contact = document.getElementById('ac-contact')?.value.trim() ?? '';
  const email   = document.getElementById('ac-email')?.value.trim().toLowerCase() ?? '';
  const phone   = document.getElementById('ac-phone')?.value.trim() ?? '';
  const license        = document.getElementById('ac-lic')?.value.trim()  ?? '';
  const contractorType = document.getElementById('ac-type')?.value        ?? 'real';
  const errEl          = document.getElementById('ac-error');
  const submitBtn = document.getElementById('ac-submit-btn');

  if (!company || !contact || !email) {
    if (errEl) { errEl.textContent = 'Company name, contact, and email are required.'; errEl.style.display = 'block'; }
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errEl) { errEl.textContent = 'Please enter a valid email address.'; errEl.style.display = 'block'; }
    return;
  }

  const sbSession = isSupabaseReady() ? await sbGetSession() : null;

  // ── Supabase path: edge function creates DB record + auth user + sends invite ──
  if (sbSession) {
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
    if (errEl) errEl.style.display = 'none';

    const result = await sbInviteContractor(null, email, {
      company_name:    company,
      contact_name:    contact,
      contractor_type: contractorType,
    });

    if (result.error) {
      // Re-enable button and show error inline (keep modal open)
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Invite →'; }
      let msg = result.error;
      if (result.step) msg = `[${result.step}] ${msg}`;
      if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; }
      console.error('[invite] step:', result.step, '| error:', result.error);
      return;
    }

    closeModalDirect();

    // Reload contractors from DB so the newly-created record appears with the
    // real DB-generated ID and invited_at timestamp.
    await _loadDbContractors();
    showToast(`Invite sent to ${email} — contractor record created automatically.`);
    buildPages();
    navTo('contractors');
    return;
  }

  // ── Fallback: no Supabase session — save locally only (no invite sent) ──
  closeModalDirect();
  const newRecord = {
    id:          'c' + Date.now(),
    companyName: company,
    contactName: contact,
    name:        company,
    contact,
    email,
    phone,
    license,
    counties:    [],
    services:    [],
    leads:       0,
    completed:   0,
    revenue:     0,
    rating:      5.0,
    status:          'active',
    isActive:        true,
    contractorType:  contractorType,
  };
  dbContractors.push(newRecord);
  const why = isSupabaseReady() ? ' (DEV_MODE — sign in via Supabase to send a real invite)' : ' (no Supabase configured)';
  showToast(`Contractor "${company}" saved locally${why}.`);
  buildPages();
  navTo('contractors');
}

// Per-session invite cooldowns — prevents spam-clicking (resets on page reload)
const _inviteCooldowns = {};
const _INVITE_COOLDOWN_MS = 60_000; // 60 seconds between sends per contractor

async function sendContractorInvite(contractorId, email) {
  if (!isSupabaseReady()) {
    showToast('Supabase not connected — cannot send invite.');
    return;
  }

  // Cooldown check
  const lastSent = _inviteCooldowns[contractorId];
  if (lastSent && Date.now() - lastSent < _INVITE_COOLDOWN_MS) {
    const secsLeft = Math.ceil((_INVITE_COOLDOWN_MS - (Date.now() - lastSent)) / 1000);
    showToast(`Please wait ${secsLeft}s before resending to this contractor.`);
    return;
  }

  const session = await sbGetSession();
  if (!session) {
    showToast('You must be signed in via Supabase Auth to send invites.');
    return;
  }

  // Disable button(s) while sending
  const btns = [
    document.getElementById(`invite-btn-${contractorId}`),
    document.getElementById(`invite-btn-modal-${contractorId}`),
  ].filter(Boolean);
  const originalLabels = btns.map(b => b.textContent);
  btns.forEach(b => { b.disabled = true; b.textContent = 'Sending…'; });

  showToast('Sending invite…');
  const result = await sbInviteContractor(contractorId, email);

  if (result.error) {
    // Re-enable buttons on error
    btns.forEach((b, i) => { b.disabled = false; b.textContent = originalLabels[i]; });

    let msg = result.error;
    if (msg.toLowerCase().includes('failed to fetch') || msg.toLowerCase().includes('networkerror')) {
      msg = 'Could not reach invite function — check that it is deployed.';
    } else if (msg.toLowerCase().includes('admin access required')) {
      msg = 'Admin access required. Your account must be recognised as admin.';
    } else if (msg.toLowerCase().includes('session expired') || msg.toLowerCase().includes('not authenticated')) {
      msg = 'Session expired — please sign out and sign in again.';
    } else if (msg.toLowerCase().includes('rate') || msg.toLowerCase().includes('too many') || msg.toLowerCase().includes('limit')) {
      msg = 'Email rate limit reached — configure custom SMTP in Supabase Auth to remove this limit.';
    }
    const stepPrefix = result.step && result.step !== '(gateway)' ? `[${result.step}] ` : '';
    showToast('Invite failed: ' + stepPrefix + msg);
    console.error('[invite] step:', result.step, '| error:', result.error, result.reason || '');
  } else {
    _inviteCooldowns[contractorId] = Date.now();
    const rec = dbContractors.find(c => c.id === contractorId);
    if (rec) rec.invitedAt = new Date().toISOString();
    showToast(`Invite sent to ${email}`);
    buildPages();
    navTo('contractors');
  }
}

function editContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const counties = ['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'];
  const checkedCounties = (c.counties || []);
  openModalWith('Edit Contractor', `
    <div class="form-row">
      <div class="form-group"><label class="form-label">Company Name *</label><input class="form-input" id="ec-company" value="${sanitizeHTML(c.companyName || c.name || '')}"></div>
      <div class="form-group"><label class="form-label">Contact Person *</label><input class="form-input" id="ec-contact" value="${sanitizeHTML(c.contactName || c.contact || '')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Email *</label><input class="form-input" type="email" id="ec-email" value="${sanitizeHTML(c.email || '')}"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="ec-phone" value="${sanitizeHTML(c.phone || '')}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">License #</label><input class="form-input" id="ec-lic" value="${sanitizeHTML(c.license || '')}"></div>
      <div class="form-group"><label class="form-label">Status</label>
        <select class="form-input" id="ec-status">
          <option value="active" ${c.status === 'active' ? 'selected' : ''}>Active</option>
          <option value="inactive" ${c.status === 'inactive' ? 'selected' : ''}>Inactive</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Contractor Type</label>
        <select class="form-input" id="ec-type">
          <option value="real"  ${(c.contractorType||'real')==='real' ?'selected':''}>Real (included in reporting)</option>
          <option value="demo"  ${(c.contractorType||'real')==='demo' ?'selected':''}>Demo (testing only — excluded from all reporting)</option>
        </select>
        <div style="font-size:.74rem;color:var(--gray);margin-top:4px">Demo contractors are excluded from revenue, platform cut, and monthly reports.</div>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Service Counties</label>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
        ${counties.map(co => `<label style="display:flex;align-items:center;gap:5px;font-size:.82rem;cursor:pointer">
          <input type="checkbox" id="ec-co-${co.toLowerCase()}" ${checkedCounties.includes(co)?'checked':''}> ${co}
        </label>`).join('')}
      </div>
    </div>
    <div id="ec-error" style="display:none;color:var(--red);font-size:.82rem;margin-top:8px"></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="saveContractorEdit('${id}')">Save Changes →</button>`
  );
}

async function saveContractorEdit(id) {
  const company = document.getElementById('ec-company')?.value.trim() ?? '';
  const contact = document.getElementById('ec-contact')?.value.trim() ?? '';
  const email   = document.getElementById('ec-email')?.value.trim().toLowerCase() ?? '';
  const phone   = document.getElementById('ec-phone')?.value.trim() ?? '';
  const license = document.getElementById('ec-lic')?.value.trim() ?? '';
  const status  = document.getElementById('ec-status')?.value ?? 'active';
  const errEl   = document.getElementById('ec-error');

  if (!company || !contact || !email) {
    if (errEl) { errEl.textContent = 'Company name, contact, and email are required.'; errEl.style.display = 'block'; }
    return;
  }

  const counties = ['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'];
  const selectedCounties = counties.filter(co => document.getElementById(`ec-co-${co.toLowerCase()}`)?.checked);

  const contractorType = document.getElementById('ec-type')?.value ?? 'real';
  const updates = { companyName: company, name: company, contactName: contact, contact, email, phone, license, status, counties: selectedCounties, isActive: status === 'active', contractorType };

  const rec = dbContractors.find(x => x.id === id);
  if (rec) Object.assign(rec, updates);

  closeModalDirect();

  if (isSupabaseReady()) {
    const saved = await sbUpdateContractor(id, updates);
    if (!saved) showToast('Warning: DB update may have failed — check console.');
  }

  buildPages();
  navTo('contractors');
  showToast(`Contractor "${company}" updated.`);
}

/**
 * Safe delete entry point.
 * REAL contractors with any completed jobs → blocked, must deactivate instead.
 * DEMO contractors → prompt to handle associated leads.
 * REAL with no jobs → standard confirm + delete.
 */
function deleteContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const name     = c.companyName || c.name || 'this contractor';
  const isDemo   = (c.contractorType || 'real') === 'demo';
  const cLeads   = leads.filter(l => l.contractor === id);
  const hasJobs  = leads.some(l => l.contractor === id && l.status === 'completed');

  // Real contractor with historical jobs — BLOCK deletion
  if (!isDemo && hasJobs) {
    openModalWith('Cannot Delete Contractor',
      `<div class="alert-box warn">🔒 <div><strong>"${sanitizeHTML(name)}" has historical job data and cannot be deleted.</strong><br><br>
       Deleting contractors with completed jobs would corrupt your revenue history and bookkeeping records.<br><br>
       <strong>Deactivate instead</strong> — the contractor cannot log in or receive new leads, but all historical data is preserved.</div></div>`,
      `<button class="btn btn-outline" onclick="closeModalDirect()">Close</button>
       <button class="btn btn-primary" onclick="closeModalDirect();deactivateContractor('${id}')">Deactivate Instead</button>`
    );
    return;
  }

  // Demo contractor with leads — prompt for lead handling
  if (isDemo && cLeads.length > 0) {
    openModalWith('Delete Demo Contractor',
      `<div class="alert-box warn">⚠️ <div><strong>"${sanitizeHTML(name)}" has ${cLeads.length} associated lead${cLeads.length!==1?'s':''}.</strong><br>Choose what to do with these leads before deleting.</div></div>
       <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">
         <div style="font-size:.82rem;color:var(--gray)">How should the associated leads be handled?</div>
       </div>`,
      `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
       <button class="btn btn-sm" style="background:rgba(239,68,68,.12);color:#f87171;border:1px solid rgba(239,68,68,.3)" onclick="confirmDemoDelete('${id}','delete-leads')">Delete Demo Leads</button>
       <button class="btn btn-sm" style="background:rgba(59,130,246,.12);color:var(--blue-bright);border:1px solid rgba(59,130,246,.3)" onclick="confirmDemoDelete('${id}','unassign-leads')">Unassign Leads</button>`
    );
    return;
  }

  // Standard confirm (real with no jobs, or demo with no leads)
  openModalWith('Delete Contractor',
    `<div class="alert-box warn">⚠️ <div><strong>Delete "${sanitizeHTML(name)}"?</strong><br>This cannot be undone.</div></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-sm" style="background:rgba(239,68,68,.15);color:#f87171;border:1px solid rgba(239,68,68,.3);padding:8px 18px" onclick="confirmDeleteContractor('${id}','none')">Yes, Delete</button>`
  );
}

async function confirmDemoDelete(id, leadAction) {
  closeModalDirect();
  if (leadAction === 'delete-leads') {
    // Remove all leads assigned to this demo contractor from in-memory array
    const toRemove = new Set(leads.filter(l => l.contractor === id).map(l => l.id));
    leads.splice(0, leads.length, ...leads.filter(l => !toRemove.has(l.id)));
    if (isSupabaseReady()) {
      const { error } = await (_db()?.from('leads').delete().eq('contractor_id', id) ?? Promise.resolve({ error: null }));
      if (error) console.error('[DB] delete demo leads:', error.message);
    }
  } else {
    // Unassign leads back to pool
    leads.forEach(l => { if (l.contractor === id) { l.contractor = null; l.status = 'new'; } });
    if (isSupabaseReady()) {
      const { error } = await (_db()?.from('leads').update({ contractor_id: null, status: 'new' }).eq('contractor_id', id) ?? Promise.resolve({ error: null }));
      if (error) console.error('[DB] unassign demo leads:', error.message);
    }
  }
  await _doHardDeleteContractor(id);
}

async function confirmDeleteContractor(id) {
  closeModalDirect();
  // Unassign any leads that referenced this contractor
  leads.forEach(l => { if (l.contractor === id) { l.contractor = null; l.status = 'new'; } });
  await _doHardDeleteContractor(id);
}

/** Internal: hard-delete a contractor from memory + DB. */
async function _doHardDeleteContractor(id) {
  const idx = dbContractors.findIndex(x => x.id === id);
  if (idx !== -1) dbContractors.splice(idx, 1);
  persist();
  if (isSupabaseReady()) {
    const { error } = await (_db()?.from('contractors').delete().eq('id', id) ?? Promise.resolve({ error: null }));
    if (error) console.error('[DB] deleteContractor:', error.message);
  }
  buildPages();
  navTo('contractors');
  showToast('Contractor removed.');
}

/**
 * Deactivate a contractor — blocks login + new lead assignment.
 * All historical jobs, revenue, and notes are preserved.
 */
async function deactivateContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const name = c.companyName || c.name || 'this contractor';
  openModalWith('Deactivate Contractor',
    `<div class="alert-box warn">⚠️ <div><strong>Deactivate "${sanitizeHTML(name)}"?</strong><br><br>
     The contractor <strong>cannot log in</strong> and will not receive new lead assignments.<br>
     All historical jobs, revenue, and bookkeeping records are preserved.<br>
     You can reactivate them at any time.</div></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-sm" style="background:rgba(245,158,11,.12);color:#f59e0b;border:1px solid rgba(245,158,11,.3);padding:8px 18px" onclick="confirmDeactivateContractor('${id}')">Yes, Deactivate</button>`
  );
}

async function confirmDeactivateContractor(id) {
  closeModalDirect();
  const rec = dbContractors.find(x => x.id === id);
  if (rec) { rec.isActive = false; rec.status = 'inactive'; }
  if (isSupabaseReady()) {
    const saved = await sbUpdateContractor(id, { isActive: false, status: 'inactive' });
    if (!saved) console.error('[DB] deactivateContractor failed for', id);
  }
  buildPages();
  navTo('contractors');
  showToast('Contractor deactivated — historical data preserved.');
}

/**
 * Reactivate an inactive contractor — restores login and lead assignment.
 */
async function reactivateContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const name = c.companyName || c.name || 'this contractor';
  openModalWith('Reactivate Contractor',
    `<p style="color:var(--silver)">Reactivate <strong>${sanitizeHTML(name)}</strong>? They will be able to log in and receive new lead assignments again.</p>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="confirmReactivateContractor('${id}')">Yes, Reactivate</button>`
  );
}

async function confirmReactivateContractor(id) {
  closeModalDirect();
  const rec = dbContractors.find(x => x.id === id);
  if (rec) { rec.isActive = true; rec.status = 'active'; }
  if (isSupabaseReady()) {
    const saved = await sbUpdateContractor(id, { isActive: true, status: 'active' });
    if (!saved) console.error('[DB] reactivateContractor failed for', id);
  }
  buildPages();
  navTo('contractors');
  showToast('Contractor reactivated.');
}

// ─── REVENUE HELPERS ────────────────────────────────────────────
/**
 * Display amount for a lead — used in pipeline cards, tables, tooltips.
 * Priority: contractor-entered quote > original estimated value.
 * NOT for revenue aggregation — use _revenueValue() for that.
 */
function _revAmount(l) {
  return l.quoteAmount != null ? Number(l.quoteAmount) : (l.value || 0);
}

/**
 * Canonical revenue amount for a COMPLETED lead.
 * Source of truth for all revenue reporting, dashboard stats, and platform cut.
 * Priority: final_value (locked at win time) > quote_amount > estimated value.
 * Returns 0 for non-completed leads so callers never need to filter first.
 */
function _revenueValue(l) {
  if (l.status !== 'completed') return 0;
  if (l.finalValue  != null) return Number(l.finalValue);
  if (l.quoteAmount != null) return Number(l.quoteAmount);
  return l.value || 0;
}

/**
 * Returns {start: Date, end: Date} for the given reporting period.
 * 'this-month' (default) | 'last-month' | '90-days' | 'all'
 */
function _dateRange(period) {
  const now = new Date();
  const y   = now.getFullYear();
  const m   = now.getMonth();
  if (period === 'this-month') return { start: new Date(y, m, 1),   end: new Date(y, m + 1, 1) };
  if (period === 'last-month') return { start: new Date(y, m - 1, 1), end: new Date(y, m, 1) };
  if (period === '90-days')    { const s = new Date(); s.setDate(s.getDate() - 90); return { start: s, end: new Date(now.getTime() + 86400000) }; }
  return { start: new Date(0), end: new Date(now.getTime() + 86400000) }; // all
}

/**
 * Returns true if the given ISO timestamp string falls within the date range.
 * If period is 'all', always returns true.
 */
function _inRange(isoStr, range) {
  if (!isoStr) return false;
  const d = new Date(isoStr);
  return d >= range.start && d < range.end;
}

/**
 * Returns all contractors that are NOT demo type.
 * Use this for revenue reporting, platform cut, and admin analytics.
 * Includes inactive contractors so historical revenue is preserved.
 */
function _realContractors() {
  return dbContractors.filter(c => (c.contractorType || 'real') !== 'demo');
}

/**
 * Returns a 0–100 routing score for a contractor.
 * Higher = better candidate for a new lead assignment.
 * Factors: close rate (60pts), workload balance (40pts).
 */
function _contractorRoutingScore(c) {
  const myLeads    = leads.filter(l => l.contractor === c.id);
  const done       = myLeads.filter(l => l.status === 'completed');
  const closeRate  = myLeads.length ? done.length / myLeads.length : 0; // 0–1
  const active     = myLeads.filter(l => !['completed','lost'].includes(l.status)).length;
  const perfScore  = Math.round(closeRate * 60);                          // 0–60
  const loadScore  = Math.max(0, Math.round((10 - Math.min(active, 10)) * 4)); // 0–40
  return perfScore + loadScore;
}

/**
 * Returns Set of contractor IDs that are demo type.
 * Use this to quickly exclude demo leads from revenue aggregations.
 */
function _demoContractorIds() {
  return new Set(dbContractors.filter(c => (c.contractorType || 'real') === 'demo').map(c => c.id));
}

/**
 * Returns the human-readable label for a period key.
 */
function _periodLabel(period) {
  return { 'this-month': 'This Month', 'last-month': 'Last Month', '90-days': 'Last 90 Days', 'all': 'All Time' }[period] || 'This Month';
}

/** Rebuild and activate the dashboard page with the current period. */
function setDashPeriod(period) {
  _dashPeriod = period;
  refreshAdminDashboard();
}

/** Rebuild and activate the revenue page with the current period. */
function setRevPeriod(period) {
  _revPeriod = period;
  refreshRevenuePage();
}

/** Replaces the revenue page node with freshly computed HTML. */
function refreshRevenuePage() {
  const el = document.getElementById('page-revenue');
  if (!el) return;
  const wasActive = el.classList.contains('active');
  const tmp = document.createElement('div');
  tmp.innerHTML = pgRevenue();
  const newEl = tmp.firstElementChild;
  if (wasActive) newEl.classList.add('active');
  el.parentNode.replaceChild(newEl, el);
}

/**
 * Returns the best available display price for a lead as an HTML snippet.
 * Priority:  Final (won + quote)  >  Quoted  >  Estimated
 * Usage: insert directly into table cells or pipeline cards.
 *
 * @param {object} l  - lead object
 * @param {boolean} [compact=false] - use a tighter layout for pipeline cards
 */
function _priceTag(l, compact) {
  let amount, label, color, labelColor;
  if (l.status === 'completed' && (l.finalValue != null || l.quoteAmount != null)) {
    // Job Won — show locked-in final amount
    amount     = l.finalValue != null ? Number(l.finalValue) : Number(l.quoteAmount);
    label      = 'Final';
    color      = 'var(--green)';
    labelColor = '#4ade80';
  } else if (l.quoteAmount != null) {
    amount     = Number(l.quoteAmount);
    label      = 'Quoted';
    color      = '#a78bfa';
    labelColor = '#c4b5fd';
  } else {
    amount     = l.value || 0;
    label      = 'Est.';
    color      = 'var(--green)';
    labelColor = '#6ee7b7';
  }
  const fmt = amount.toLocaleString();
  if (compact) {
    return `<div style="color:${color};font-weight:600;font-size:.88rem">$${fmt}</div>`
         + `<div style="font-size:.6rem;color:${labelColor};text-transform:uppercase;letter-spacing:.05em;margin-top:1px;opacity:.85">${label}</div>`;
  }
  return `<div style="color:${color};font-weight:600">$${fmt}</div>`
       + `<div style="font-size:.67rem;color:${labelColor};text-transform:uppercase;letter-spacing:.06em;margin-top:2px;opacity:.85">${label}</div>`;
}

// ─── REVENUE ────────────────────────────────────────────────────
function pgRevenue() {
  // ── Period setup ─────────────────────────────────────────────
  const range    = _dateRange(_revPeriod);
  const isAll    = _revPeriod === 'all';
  const inWon    = l => isAll || _inRange(l.wonAt, range);
  const demoIds  = _demoContractorIds();
  const realCtrs = _realContractors();

  // ── Won leads: filter by won_at, exclude demo ─────────────────
  const done  = leads.filter(l => l.status === 'completed' && inWon(l) && (!l.contractor || !demoIds.has(l.contractor)));
  const total = done.reduce((s,l) => s + _revenueValue(l), 0);
  const fee   = Math.round(total * settings.commissionPct / 100);

  // ── Real monthly bars — last 6 calendar months ───────────────
  const now = new Date();
  const monthBars = Array.from({length:6}, (_,i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5-i), 1);
    const end = new Date(d.getFullYear(), d.getMonth()+1, 1);
    const label = d.toLocaleDateString('en-US',{month:'short'});
    const rev = leads.filter(l =>
      l.status === 'completed' &&
      _inRange(l.wonAt, { start:d, end }) &&
      (!l.contractor || !demoIds.has(l.contractor))
    ).reduce((s,l) => s + _revenueValue(l), 0);
    return { label, rev, isCurrent: i===5 };
  });
  const maxB = Math.max(...monthBars.map(b=>b.rev), 1);

  // ── Period picker ────────────────────────────────────────────
  const picker = `<select class="form-input" style="width:auto;padding:6px 10px;font-size:.82rem;background:var(--navy-mid);color:var(--white);border:1px solid var(--navy-border);cursor:pointer" onchange="setRevPeriod(this.value)">
    <option value="this-month" ${_revPeriod==='this-month'?'selected':''}>This Month</option>
    <option value="last-month" ${_revPeriod==='last-month'?'selected':''}>Last Month</option>
    <option value="90-days"    ${_revPeriod==='90-days'   ?'selected':''}>Last 90 Days</option>
    <option value="all"        ${_revPeriod==='all'       ?'selected':''}>All Time</option>
  </select>`;

  return `<div class="page" id="page-revenue">
    <div class="page-header">
      <div><h1>Revenue & Billing</h1><p>Real contractors only · ${_periodLabel(_revPeriod)} · Platform fee ${settings.commissionPct}%</p></div>
      <div class="page-header-actions" style="gap:8px">
        ${picker}
        <button class="btn btn-outline btn-sm" onclick="exportCSV('completed')">⬇ Export</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card green"><div class="stat-icon">💰</div><div class="stat-value green">$${total.toLocaleString()}</div><div class="stat-label">Total Revenue</div></div>
      <div class="stat-card cyan"><div class="stat-icon">💸</div><div class="stat-value cyan">$${fee.toLocaleString()}</div><div class="stat-label">Platform Cut (${settings.commissionPct}%)</div></div>
      <div class="stat-card blue"><div class="stat-icon">✅</div><div class="stat-value blue">${done.length}</div><div class="stat-label">Jobs Won</div></div>
      <div class="stat-card yellow"><div class="stat-icon">📊</div><div class="stat-value yellow">$${Math.round(total/(done.length||1)).toLocaleString()}</div><div class="stat-label">Avg Job Value</div></div>
    </div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>📈</span><div class="card-title">Monthly Revenue Trend (Last 6 Months)</div></div>
        <div class="card-body"><div class="revenue-chart">
          ${monthBars.map(b => { const h=Math.round((b.rev/maxB)*110)||2; return `<div class="rev-bar-wrap"><div class="rev-bar ${b.isCurrent?'current':''}" style="height:${h}px" title="$${b.rev.toLocaleString()}"></div><div class="rev-month">${b.label}</div></div>`;}).join('')}
        </div></div>
      </div>
      <div class="card"><div class="card-header"><span>🔧</span><div class="card-title">By Contractor — ${_periodLabel(_revPeriod)}</div></div>
        <div class="card-body">
          ${(()=>{
            const cRevMap={};
            done.forEach(l=>{ if(l.contractor) cRevMap[l.contractor]=(cRevMap[l.contractor]||0)+_revenueValue(l); });
            const maxRev=Math.max(...realCtrs.map(x=>cRevMap[x.id]||0),1);
            return realCtrs.map(c=>{ const rev=cRevMap[c.id]||0; const isBadge=(c.contractorType||'real')==='demo'?'<span style="font-size:.6rem;background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3);border-radius:3px;padding:1px 5px;margin-left:4px">DEMO</span>':''; return `<div class="county-row"><div class="county-name" style="width:140px">${sanitizeHTML(c.companyName||c.name)}${isBadge}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(rev/maxRev*100)}%"></div></div><div class="county-count" style="width:60px;color:var(--green)">$${(rev/1000).toFixed(1)}k</div></div>`; }).join('');
          })()}
          <div style="margin-top:16px;font-size:.8rem;color:var(--gray)">Platform cut at ${settings.commissionPct}% · Demo contractors excluded from all figures</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><span>✅</span><div class="card-title">Won Jobs — ${_periodLabel(_revPeriod)}</div></div>
      ${done.length===0
        ? `<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No jobs won in this period</h3></div>`
        : `<table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Contractor</th><th>Final Value</th><th>Platform Cut</th><th>Won Date</th></tr></thead><tbody>
        ${done.map(l=>{
          const c = _getContractors().find(x=>x.id===l.contractor);
          const rv = _revenueValue(l);
          const wonDate = l.wonAt ? new Date(l.wonAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : (l.created||'—');
          return `<tr>
            <td>${sanitizeHTML(l.name)}</td>
            <td>${sanitizeHTML(l.county)},${sanitizeHTML(l.state)}</td>
            <td style="font-size:.8rem">${sanitizeHTML(l.service)}</td>
            <td style="font-size:.82rem">${c?sanitizeHTML(c.companyName||c.name):'—'}</td>
            <td>${_priceTag(l)}</td>
            <td style="color:var(--cyan)">$${Math.round(rv*settings.commissionPct/100).toLocaleString()}</td>
            <td style="font-size:.8rem;color:var(--gray)">${wonDate}</td>
          </tr>`;}).join('')}
        </tbody></table>`}
    </div>
  </div>`;
}


// ─── SMS TEMPLATES ──────────────────────────────────────────────
function pgSmsTemplates() {
  const templates = [
    { label:'🚀 First Contact — Call within 5 min of new lead', text:`Hi [NAME], this is [YOUR NAME] from Expert EV Installers. We received your request for an EV charger install in [COUNTY] — perfect timing! I'd love to schedule a quick call to give you a free estimate. Do you have 10 minutes today or tomorrow?` },
    { label:'📱 First Contact — Text version (same day)', text:`Hi [NAME]! This is [YOUR NAME] from Expert EV Installers. Saw your charger install request for [COUNTY] — happy to help! Can you talk for a few minutes today? I can give you a ballpark estimate right away.` },
    { label:'⏰ Follow-Up #1 — No response after 10 min', text:`Hey [NAME], just sent you a text about your EV charger quote request. We have openings this week — even same-week install available in your area. Feel free to text or call me at [YOUR PHONE]. No pressure!` },
    { label:'⏰ Follow-Up #2 — No response after 2 hours', text:`Hi [NAME], following up one more time on your EV charger quote. I want to make sure you get connected with a licensed electrician before our schedule fills up. Call or text me anytime: [YOUR PHONE]. — [YOUR NAME], Expert EV Installers` },
    { label:'📅 Appointment Confirmation', text:`Hi [NAME] — confirming your EV charger site assessment for [DATE] at [TIME]. Our licensed electrician will evaluate your panel and discuss installation options. Any questions before then? See you soon! — [YOUR NAME]` },
    { label:'💬 Quote Sent Follow-Up (2–3 days)', text:`Hi [NAME], wanted to follow up on the EV charger estimate I sent over. We're running a limited install schedule this month — happy to hold a spot for you. Any questions I can answer to help you move forward?` },
    { label:'✅ Post-Install — Review Request', text:`Hi [NAME]! We just wrapped up your EV charger installation — hope everything looks great and you're loving it! Would you mind leaving us a quick Google review? It really helps our small business: [GOOGLE REVIEW URL]. Thank you so much! 🙏` },
    { label:'💰 Incentive Reminder', text:`Hi [NAME]! Wanted to flag a potential savings opportunity — depending on your location and eligibility, your installation may qualify for a [UTILITY] incentive of up to [AMOUNT]. We'll help with the paperwork. Eligibility isn't guaranteed but we'll check it for you. Let me know if you have questions!` },
    { label:'⭐ Review Request — 1 week after install', text:`Hi [NAME], hope your new EV charger is working perfectly! If you've had a chance to use it, we'd love a Google review — it takes under 2 minutes and means the world to our small team: [REVIEW LINK]. Thanks again for choosing Expert EV Installers!` },
  ];
  return `<div class="page" id="page-sms-templates">
    <div class="page-header"><div><h1>SMS Scripts & Sales Tools</h1><p>Copy-paste messages for every stage of the sales process</p></div></div>
    <div class="alert-box warn">⚡ <div><strong>Speed-to-lead is everything.</strong> Responding within <strong>5 minutes</strong> of a new lead increases close rate by over 100×. First contact templates are your top priority.</div></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px">
    ${templates.map((t,i)=>`<div class="sms-template">
      <div class="sms-template-label">${t.label}</div>
      <div class="sms-template-text" id="sms-${i}">${t.text}</div>
      <button class="btn btn-outline btn-xs sms-copy-btn" onclick="copySms(${i})">📋 Copy</button>
    </div>`).join('')}
    </div>
  </div>`;
}
function copySms(i) {
  const el = document.getElementById('sms-' + i);
  navigator.clipboard.writeText(el.textContent).then(() => showToast('Template copied!')).catch(() => { const r = document.createRange(); r.selectNode(el); window.getSelection().removeAllRanges(); window.getSelection().addRange(r); showToast('Text selected — Ctrl+C to copy'); });
}

// ─── LAUNCH GUIDE ───────────────────────────────────────────────
function pgDeploy() {
  const steps = [
    { title:'1. Register Your Domain', desc:'Go to Namecheap.com and register expertevinstalls.com (~$12/yr). If taken, try expertevpa.com or expertevnj.com. This is your brand URL — it matters.',
      code:'Recommended: Namecheap · GoDaddy · Google Domains\nTarget domain: expertevinstalls.com', link:'https://www.namecheap.com', linkText:'Open Namecheap' },
    { title:'2. Deploy to Netlify (Free)', desc:'Sign up at netlify.com with your email. Drag and drop both HTML files (website + dashboard) into the deploy box. Netlify gives you a free HTTPS URL instantly. Then connect your domain in Site Settings → Domain Management.',
      code:'netlify.com → New site → Drag & drop files\nFiles to upload: expertev-credibility-first.html, expertev-dashboard.html', link:'https://app.netlify.com', linkText:'Open Netlify' },
    { title:'3. Connect Formspree (Free Lead Capture)', desc:'Go to formspree.io → New Form. Copy your form ID (looks like "xyzabcde"). Paste it into Settings → Integrations in this dashboard. Then update the website HTML: find action="https://formspree.io/f/YOUR_ID" and replace YOUR_ID with your real form ID.',
      code:'formspree.io → Create account → New Form\nYour form ID goes in: action="https://formspree.io/f/[YOUR_ID]"', link:'https://formspree.io', linkText:'Open Formspree' },
    { title:'4. Set Up Email Alerts', desc:'In Formspree, go to Notifications → Email and enter your real email. Every time a lead fills out the form on your website, you\'ll get an instant email with their info. Set this up BEFORE you share your website URL.',
      code:'Formspree → Settings → Email Notifications\nEnter: your real email address' },
    { title:'5. Update Phone Numbers', desc:'In Settings → Business Info, replace the placeholder PA and NJ numbers with real numbers. You can use Google Voice (free) to get a local number that forwards to your cell. Having a real phone number on the site builds massive trust.',
      code:'PA line: Google Voice PA area code (215, 610, 267, 484)\nNJ line: Google Voice NJ area code (856, 609)', link:'https://voice.google.com', linkText:'Get Google Voice' },
    { title:'6. Invite Your First Contractor', desc:'Go to the Contractors page and use the Invite Contractor form. Enter their name, email, and counties they serve. They will receive an email to set up their account and can log in to view their assigned leads.',
      code:'Contractors → Invite Contractor\nEnter: name, email, license #, counties\nThey receive: setup email with login link' },
    { title:'7. Share & Get Your First Lead', desc:'Share your website link in Facebook neighborhood groups, Nextdoor posts in your coverage counties, and your personal network. Your first 3 leads often come from your immediate community.',
      code:'Top free channels:\n• Nextdoor (hyperlocal, high intent)\n• Facebook local groups\n• Google Business Profile (register free)\n• Your personal LinkedIn/Facebook' },
    { title:'8. Add Google Business Profile', desc:'Search "Google Business Profile" and create a free listing for Expert EV Installers. This gets you shown in local Google searches and maps. Use your real address or service-area-based listing. Add your website URL, phone number, and service area.',
      code:'business.google.com → Create Profile\nBusiness type: Electrical Contractor\nService areas: Your 8 counties', link:'https://business.google.com', linkText:'Open Google Business' },
  ];
  return `<div class="page" id="page-deploy">
    <div class="page-header"><div><h1>🚀 Launch Guide</h1><p>Step-by-step instructions to go from demo to live</p></div></div>
    <div class="alert-box success">✅ <div><strong>This guide covers everything.</strong> Follow these steps in order and you'll be fully operational in under 2 hours.</div></div>
    <div class="card"><div class="card-body" style="padding:0 22px">
    ${steps.map((s,i)=>`<div class="deploy-step">
      <div class="deploy-num">${i+1}</div>
      <div class="deploy-content">
        <div class="deploy-title">${s.title}</div>
        <div class="deploy-desc">${s.desc}</div>
        ${s.code?`<div class="deploy-code">${s.code}</div>`:''}
        ${s.link?`<a href="${s.link}" target="_blank" style="display:inline-block;margin-top:10px;font-size:.8rem;color:var(--blue-bright);text-decoration:none">🔗 ${s.linkText} ↗</a>`:''}
      </div>
    </div>`).join('')}
    </div></div>
  </div>`;
}

// ─── ONBOARDING CHECKLIST ────────────────────────────────────────
function pgOnboarding() {
  return `<div class="page" id="page-onboarding">
    <div class="page-header"><div><h1>Setup Checklist</h1><p>Complete these to launch Expert EV Installers</p></div></div>
    <div id="checklist-wrap"></div>
  </div>`;
}
function renderChecklist() {
  const done = checklist.filter(c => settings.checklistDone[c.id]).length;
  const pct  = Math.round(done/checklist.length*100);
  const wrap = document.getElementById('checklist-wrap');
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="card" style="margin-bottom:20px"><div class="card-body">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-family:'Rajdhani',sans-serif;font-weight:700">Progress — ${done} of ${checklist.length} complete</div>
        <div style="font-size:.88rem;color:${pct===100?'var(--green)':'var(--gray)'}">${pct}%${pct===100?' 🎉 Ready to launch!':''}</div>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
    </div></div>
    <div class="card"><div class="card-body" style="padding:8px 22px">
    ${checklist.map(item=>`<div class="checklist-item">
      <div class="check-box ${settings.checklistDone[item.id]?'done':''}" onclick="toggleCheck('${item.id}')"></div>
      <div class="checklist-content">
        <div class="checklist-title" style="${settings.checklistDone[item.id]?'text-decoration:line-through;color:var(--gray)':''}">${item.title}</div>
        <div class="checklist-desc">${item.desc}</div>
        ${item.link?`<a href="${item.link}" target="_blank" class="checklist-link">🔗 ${item.linkText} ↗</a>`:''}
      </div>
    </div>`).join('')}
    </div></div>`;
}
function toggleCheck(id) {
  settings.checklistDone[id] = !settings.checklistDone[id];
  renderChecklist(); buildSidebar(); persist();
}

// ─── SETTINGS PAGE ──────────────────────────────────────────────
function pgSettings() {
  return `<div class="page" id="page-settings">
    <div class="page-header"><div><h1>Settings</h1><p>Configure ExpertEV Installers</p></div>
    <button class="btn btn-primary" onclick="saveSettings()">Save Changes</button></div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>🏢</span><div class="card-title">Business Info</div></div>
      <div class="card-body">
        <div class="grid-2" style="gap:16px;margin-bottom:0">
          <div class="form-group"><label class="form-label">Business Name</label><input class="form-input" id="s-bizname" value="ExpertEV Installers"></div>
          <div class="form-group"><label class="form-label">Admin Email</label><input class="form-input" id="s-email" value="${settings.adminEmail}"></div>
          <div class="form-group"><label class="form-label">PA Phone Number</label><input class="form-input" id="s-paphone" value="${settings.paPhone}" placeholder="(215) 555-XXXX"><div style="font-size:.75rem;color:var(--gray);margin-top:4px">Shown on PA county pages of website</div></div>
          <div class="form-group"><label class="form-label">NJ Phone Number</label><input class="form-input" id="s-njphone" value="${settings.njPhone}" placeholder="(856) 555-XXXX"><div style="font-size:.75rem;color:var(--gray);margin-top:4px">Shown on NJ county pages of website</div></div>
          <div class="form-group"><label class="form-label">Admin SMS Phone</label><input class="form-input" id="s-adminsmophone" value="${settings.adminSmsPhone||''}" placeholder="(215) 555-XXXX"><div style="font-size:.75rem;color:var(--gray);margin-top:4px">Your mobile number for SMS alerts (new leads, quotes, job won/lost). Must match a Twilio-verified number.</div></div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>🔌</span><div class="card-title">Integrations</div></div>
      <div class="card-body">
        <div class="grid-2" style="gap:16px;margin-bottom:0">
          <div class="form-group">
            <label class="form-label">Formspree Form ID <span style="color:var(--red)">*</span></label>
            <input class="form-input" id="s-formspree" value="${settings.formspreeId}" placeholder="e.g. xyzabcde">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">Get this from <a href="https://formspree.io" target="_blank" style="color:var(--blue-bright)">formspree.io</a> → your form → Settings</div>
          </div>
        </div>
        <div class="alert-box warn" style="margin-top:4px">⚠️ <div><strong>Formspree is required</strong> to receive leads from your website forms. Without it, form submissions are lost.</div></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>💰</span><div class="card-title">Revenue Settings</div></div>
      <div class="card-body">
        <div class="grid-2" style="gap:16px;margin-bottom:0">
          <div class="form-group">
            <label class="form-label">Commission Rate (%)</label>
            <input class="form-input" id="s-commission" type="number" value="${settings.commissionPct}" min="0" max="100">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">% of completed job value charged to contractor. Industry standard: 10-20%.</div>
          </div>
          <div class="form-group">
            <label class="form-label">Per-Lead Fee ($)</label>
            <input class="form-input" id="s-leadfee" type="number" value="${settings.leadFee}">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">Flat fee charged per assigned lead. Used instead of or in addition to commission.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>🔔</span><div class="card-title">Notifications & Automation</div></div>
      <div class="card-body" style="padding:8px 22px">
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Email alert on new lead</div><div class="setting-desc">Send an email to ${settings.adminEmail} when a new form submission arrives via Formspree</div></div>
          <div class="toggle ${settings.emailAlerts?'on':''}" id="toggle-email" onclick="toggleSetting('emailAlerts','toggle-email')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">SMS alerts (new leads, assignments, quotes, won/lost)</div><div class="setting-desc">Sends SMS to admin on new leads, quote submissions, and job won/lost. Sends SMS to contractor when a lead is assigned. Requires Twilio — set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER in Supabase project secrets.</div></div>
          <div class="toggle ${settings.smsAlerts?'on':''}" id="toggle-sms" onclick="toggleSetting('smsAlerts','toggle-sms')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Auto-assign new leads</div><div class="setting-desc">Automatically assign leads to the contractor covering that county — round-robin if multiple</div></div>
          <div class="toggle ${settings.autoAssign?'on':''}" id="toggle-auto" onclick="toggleSetting('autoAssign','toggle-auto')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Follow-up alerts (10 min / 2 hr)</div><div class="setting-desc">Alert admin if a contractor does not contact a lead within 10 minutes (and again at 2 hours)</div></div>
          <div class="toggle ${settings.followUpAlerts?'on':''}" id="toggle-followup" onclick="toggleSetting('followUpAlerts','toggle-followup')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Post-completion review requests</div><div class="setting-desc">Automatically send a review request SMS to customers when job status changes to Completed</div></div>
          <div class="toggle ${settings.reviewRequests?'on':''}" id="toggle-review" onclick="toggleSetting('reviewRequests','toggle-review')"></div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px">
      <div class="card-header"><span>📧</span><div class="card-title">Monthly Business Report Email</div></div>
      <div class="card-body">
        <p style="font-size:.875rem;color:var(--gray);margin-bottom:16px">
          Automatically emails a business summary on the 1st of each month — new leads, revenue won, platform cut, and per-contractor breakdown. Demo contractors are always excluded.
        </p>
        <div class="grid-2" style="gap:16px;margin-bottom:16px">
          <div class="form-group">
            <label class="form-label">Resend API Key</label>
            <input class="form-input" id="s-resend" type="password" value="${settings.resendApiKey||''}" placeholder="re_...">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">Get from <a href="https://resend.com" target="_blank" style="color:var(--blue-bright)">resend.com</a> → API Keys. Required to send monthly emails.</div>
          </div>
          <div class="form-group">
            <label class="form-label">Report Recipient Email</label>
            <input class="form-input" id="s-report-email" value="${settings.reportEmail||settings.adminEmail}" placeholder="admin@example.com">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">Who receives the monthly report. Defaults to admin email.</div>
          </div>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
          <button class="btn btn-primary" onclick="sendMonthlyReport('last-month')">📤 Send Last Month's Report Now</button>
          <button class="btn" onclick="sendMonthlyReport('this-month')" style="background:var(--surface-2)">📤 Send This Month (Preview)</button>
          <span id="monthly-report-status" style="font-size:.8rem;color:var(--gray)"></span>
        </div>
        <div class="alert-box info" style="margin-top:14px">
          💡 <div>The report auto-sends on the 1st of each month via a Supabase scheduled job (pg_cron). Run <code>supabase/monthly_report_cron.sql</code> once in your Supabase SQL Editor to enable it.</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><span>🛡️</span><div class="card-title">Security & Infrastructure</div></div>
      <div class="card-body" style="padding:8px 22px">
        ${[
          ['Rate Limiting','Prevents spam form submissions — max 3 requests per browser per 10 minutes','✅ Active','var(--green)'],
          ['Spam Lead Filtering','Keyword + bot detection on form submissions via Formspree CAPTCHA','✅ Active','var(--green)'],
          ['Phone Validation','Client-side phone format validation on all quote forms','✅ Active','var(--green)'],
          ['Email Validation','Email format checked before form submission','✅ Active','var(--green)'],
          ['Role-Based Permissions','Admin sees all leads. Contractors only see their own assigned leads.','✅ Active','var(--green)'],
          ['Secure Authentication','Session-based login with role enforcement','✅ Active','var(--green)'],
          ['Database Backups','Connect a backend (Supabase/Firebase) to enable automatic daily backups','⚠ Pending','var(--yellow)'],
          ['HTTPS / TLS','Enforced automatically when deployed via Netlify or Vercel','✅ On Deploy','var(--cyan)'],
        ].map(([name,desc,status,color])=>`<div class="setting-row">
          <div class="setting-info"><div class="setting-name">${name}</div><div class="setting-desc">${desc}</div></div>
          <span style="font-size:.75rem;font-weight:700;color:${color};white-space:nowrap">${status}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>`;
}
function toggleSetting(key, toggleId) {
  settings[key] = !settings[key];
  document.getElementById(toggleId).classList.toggle('on', settings[key]);
  persist();
}
function saveSettings() {
  settings.adminEmail    = document.getElementById('s-email')?.value        || settings.adminEmail;
  settings.paPhone       = document.getElementById('s-paphone')?.value      || settings.paPhone;
  settings.njPhone       = document.getElementById('s-njphone')?.value      || settings.njPhone;
  settings.adminSmsPhone = (document.getElementById('s-adminsmophone')?.value ?? '').trim();
  settings.formspreeId   = document.getElementById('s-formspree')?.value  || settings.formspreeId;
  settings.commissionPct  = parseInt(document.getElementById('s-commission')?.value) || settings.commissionPct;
  settings.leadFee        = parseInt(document.getElementById('s-leadfee')?.value)    || settings.leadFee;
  const resendVal = (document.getElementById('s-resend')?.value ?? '').trim();
  if (resendVal) settings.resendApiKey = resendVal;
  settings.reportEmail = (document.getElementById('s-report-email')?.value ?? '').trim() || settings.reportEmail;
  persist();
  if (isSupabaseReady()) sbUpdateSettings(settings).catch(e => console.warn('[DB] updateSettings:', e.message));
  showToast('Settings saved!');
}

async function sendMonthlyReport(period) {
  const statusEl = document.getElementById('monthly-report-status');
  if (statusEl) statusEl.textContent = 'Sending…';

  // Save any unsaved API key first
  const resendVal = (document.getElementById('s-resend')?.value ?? '').trim();
  if (resendVal) { settings.resendApiKey = resendVal; persist(); }

  const apiKey = settings.resendApiKey || '';
  if (!apiKey) {
    if (statusEl) statusEl.textContent = '❌ No Resend API key — save one above first.';
    showToast('Add your Resend API key in Settings first.', 'error');
    return;
  }

  const recipient = settings.reportEmail || settings.adminEmail;
  if (!recipient) {
    if (statusEl) statusEl.textContent = '❌ No recipient email configured.';
    return;
  }

  // Build report data from in-memory state
  const range       = _dateRange(period);
  const demoIds     = _demoContractorIds();
  // Use l.contractor — the field name set by _rowToLead() mapping contractor_id
  const realLeads   = leads.filter(l => !demoIds.has(l.contractor));
  const periodLeads = realLeads.filter(l => _inRange(l.createdAt, range));
  const wonLeads    = realLeads.filter(l => l.status === 'completed' && _inRange(l.wonAt || l.createdAt, range));

  const totalRevenue    = wonLeads.reduce((s, l) => s + _revenueValue(l), 0);
  const platformCut     = totalRevenue * ((settings.commissionPct || 15) / 100);
  const newLeadsCount   = periodLeads.length;
  const completedCount  = wonLeads.length;

  // Per-contractor breakdown: all real contractors (including inactive — historical activity still counts)
  const realCtrs = _realContractors();
  const ctrRows  = realCtrs.map(c => {
    const cLeads = periodLeads.filter(l => l.contractor === c.id);
    const cWon   = wonLeads.filter(l => l.contractor === c.id);
    const cRev   = cWon.reduce((s, l) => s + _revenueValue(l), 0);
    return { name: c.name, leads: cLeads.length, won: cWon.length, revenue: cRev };
  }).filter(r => r.leads > 0 || r.won > 0);

  const reportPayload = {
    period,
    periodLabel:      _periodLabel(period),
    recipient,
    adminEmail:       settings.adminEmail,
    businessName:     settings.businessName || 'ExpertEV Installers',
    resendApiKey:     apiKey,
    stats: {
      newLeads:     newLeadsCount,
      completed:    completedCount,
      revenue:      totalRevenue,
      platformCut,
      commissionPct: settings.commissionPct || 15,
    },
    contractors: ctrRows,
  };

  try {
    const result = await sbSendMonthlyReport(reportPayload);
    if (result.ok) {
      if (statusEl) statusEl.textContent = `✅ Report sent to ${recipient}`;
      showToast('Monthly report sent!', 'success');
    } else {
      const msg = result.error || 'Unknown error';
      if (statusEl) statusEl.textContent = `❌ ${msg}`;
      showToast(`Failed to send report: ${msg}`, 'error');
    }
  } catch (err) {
    if (statusEl) statusEl.textContent = `❌ ${err.message}`;
    showToast(`Error: ${err.message}`, 'error');
  }
}

// ─── CONTRACTOR PAGES ────────────────────────────────────────────
function pgMyLeads() {
  console.log('[RENDER] pgMyLeads — currentContractor:', currentContractor ? JSON.stringify({ id: currentContractor.id, companyName: currentContractor.companyName, name: currentContractor.name }) : 'null', '| currentUser.name:', JSON.stringify(currentUser?.name));
  return `<div class="page" id="page-my-leads">
    <div class="page-header">
      <div><h1>My Leads</h1><p>Pre-qualified electrical projects — ${sanitizeHTML(currentContractor?.companyName || currentContractor?.name || 'Partner Account')}</p></div>
      <div class="page-header-actions">
        <button class="btn btn-outline btn-sm" onclick="toggleMyLeadsView()">⊞ Toggle View</button>
      </div>
    </div>
    <div id="my-leads-wrap"></div>
  </div>`;
}

function toggleMyLeadsView() {
  _myLeadsView = _myLeadsView === 'cards' ? 'table' : 'cards';
  renderMyLeads();
}

function renderMyLeads() {
  const myLeads = leads.filter(l => l.contractor === currentUser.id && !['completed','lost'].includes(l.status));
  const wrap = document.getElementById('my-leads-wrap');
  if (!wrap) return;
  if (myLeads.length === 0) {
    wrap.innerHTML = `<div class="card"><div class="empty-state"><div class="empty-state-icon">📭</div><h3>No active leads</h3><p>New assignments appear here.</p></div></div>`;
    return;
  }
  if (_myLeadsView === 'table') {
    wrap.innerHTML = `<div class="card"><table class="leads-table"><thead><tr><th>Customer</th><th>Location</th><th>Service</th><th>Panel</th><th>Difficulty</th><th>Est. Value</th><th>Profit</th><th>Status</th><th>Actions</th></tr></thead><tbody>
    ${myLeads.map(l=>{
      const ji = getJobIntelligence(l);
      return `<tr>
        <td><div class="lead-name">${l.name}${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px;font-size:.68rem">HIGH</span>':''}</div><div class="lead-sub"><a href="tel:${l.phone}" style="color:var(--blue-bright);text-decoration:none">${l.phone}</a></div></td>
        <td>${l.county}, ${l.state}</td>
        <td style="font-size:.78rem">${l.service}</td>
        <td style="font-size:.78rem">${l.panel}${l.distance?`<br><span style="color:var(--gray)">${l.distance.replace('under10','<10ft').replace('10to25','10–25ft').replace('25to50','25–50ft').replace('over50','>50ft').replace('notsure','?')}</span>`:''}</td>
        <td><span class="intel-badge" style="color:${ji.diffColor};background:${ji.diffBg};border-color:${ji.diffColor}40">${ji.diffIcon} ${ji.difficulty}</span></td>
        <td style="color:#4ade80;font-weight:700">${ji.valueLabel}</td>
        <td><span class="intel-badge" style="color:${ji.profitColor};background:${ji.profitBg};border-color:${ji.profitColor}40">${ji.profit}</span></td>
        <td><span class="badge badge-${l.status}">${cap(l.status)}</span></td>
        <td style="display:flex;gap:4px;flex-wrap:wrap">
          <button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Full Details">→</button>
          ${l.status==='assigned'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','contacted')">Contacted</button>`:''}
          ${l.status==='contacted'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','scheduled')">Scheduled</button>`:''}
          ${l.status==='scheduled'?`<button class="btn btn-outline btn-sm" onclick="openQuoteModal('${l.id}')">Quote Sent</button>`:''}
          ${l.status==='quote-sent'?`<button class="btn btn-success btn-sm" onclick="upd('${l.id}','completed')">Job Won ✓</button><button class="btn btn-outline btn-sm" style="color:var(--red)" onclick="upd('${l.id}','lost')">Lost</button>`:''}
        </td>
      </tr>`;
    }).join('')}
    </tbody></table></div>`;
    return;
  }
  // Card view
  wrap.innerHTML = `<div class="intel-cards-grid">${myLeads.map(l => buildIntelCard(l)).join('')}</div>`;
}

/** Returns a formatted response timer badge or empty string. */
function _responseTimerBadge(l) {
  if (!l.assignedAt || ['contacted','scheduled','quote-sent','completed','lost'].includes(l.status)) return '';
  const minsSince = Math.floor((Date.now() - new Date(l.assignedAt)) / 60000);
  const isOverdue = minsSince >= 120; // 2-hour SLA
  const label = minsSince < 60
    ? `${minsSince}m ago`
    : `${Math.floor(minsSince / 60)}h ${minsSince % 60}m ago`;
  const color  = isOverdue ? '#f87171' : minsSince >= 90 ? '#fb923c' : '#94a3b8';
  const bg     = isOverdue ? 'rgba(248,113,113,0.1)' : 'rgba(148,163,184,0.07)';
  const border = isOverdue ? 'rgba(248,113,113,0.3)' : 'rgba(148,163,184,0.2)';
  return `<span class="intel-badge" style="color:${color};background:${bg};border-color:${border};font-size:.68rem">⏱ ${label}${isOverdue ? ' — OVERDUE' : ''}</span>`;
}

function buildIntelCard(l) {
  const ji = getJobIntelligence(l);
  const distLabel = {under10:'Under 10 ft',  '10to25':'10–25 ft', '25to50':'25–50 ft', over50:'Over 50 ft', notsure:'Unknown'}[l.distance] || l.distance || '—';
  const panelLabel = {under10:'<10ft','10to25':'10–25ft','25to50':'25–50ft',over50:'>50ft',notsure:'?'}[l.distance]||'';
  const profitGrad = { High:'linear-gradient(90deg,#4ade80,#22c55e)', Medium:'linear-gradient(90deg,#fbbf24,#f59e0b)', Low:'linear-gradient(90deg,#94a3b8,#64748b)' }[ji.profit] || '';
  const timerBadge = _responseTimerBadge(l);
  const actionBtns = `
    ${l.status==='assigned'?`<button class="btn btn-primary btn-sm" onclick="upd('${l.id}','contacted');renderMyLeads()">✓ Mark Contacted</button>`:''}
    ${l.status==='contacted'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','scheduled');renderMyLeads()">📅 Schedule Est.</button>`:''}
    ${l.status==='scheduled'?`<button class="btn btn-outline btn-sm" onclick="openQuoteModal('${l.id}')">📄 Quote Sent</button>`:''}
    ${l.status==='quote-sent'?`<button class="btn btn-success btn-sm" onclick="upd('${l.id}','completed');renderMyLeads()">✓ Job Won</button><button class="btn btn-outline btn-sm" style="color:#f87171;border-color:#f8717140" onclick="upd('${l.id}','lost');renderMyLeads()">Lost</button>`:''}
  `;
  return `<div class="intel-card">
    <div class="profit-banner" style="background:${profitGrad}"></div>
    <div class="intel-card-top">
      <div class="intel-card-header">
        <div>
          <div class="intel-card-name">${l.name}${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px;font-size:.66rem">HIGH</span>':''}</div>
          <div class="intel-card-location">📍 ${l.county}, ${l.state}</div>
          <div class="intel-card-service">⚡ ${l.service}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="badge badge-${l.status}">${cap(l.status)}</span>
          <span class="intel-badge" style="color:${ji.diffColor};background:${ji.diffBg};border-color:${ji.diffColor}40">${ji.diffIcon} ${ji.difficulty}</span>
          ${timerBadge}
        </div>
      </div>
    </div>
    <div class="intel-grid">
      <div class="intel-cell">
        <div class="intel-label">Panel Size</div>
        <div class="intel-val">${l.panel || '—'}</div>
      </div>
      <div class="intel-cell">
        <div class="intel-label">Distance From Panel</div>
        <div class="intel-val">${distLabel}</div>
      </div>
      <div class="intel-cell">
        <div class="intel-label">Estimated Job Value</div>
        <div class="intel-val green">${ji.valueLabel}</div>
      </div>
      <div class="intel-cell">
        <div class="intel-label">Install Time</div>
        <div class="intel-val">${ji.timeLabel}</div>
      </div>
      <div class="intel-cell">
        <div class="intel-label">Profit Potential</div>
        <div><span class="intel-badge" style="color:${ji.profitColor};background:${ji.profitBg};border-color:${ji.profitColor}40">● ${ji.profit}</span></div>
      </div>
      <div class="intel-cell">
        <div class="intel-label">Incentive</div>
        <div class="intel-val">${getIncentiveText(l)}</div>
      </div>
    </div>
    <div class="intel-card-footer">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
        <button class="btn btn-outline btn-sm" onclick="openLeadDetail('${l.id}')">🔍 Full Details</button>
        <a href="tel:${l.phone}" class="btn btn-primary btn-sm">📞 ${l.phone}</a>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${actionBtns}</div>
    </div>
  </div>`;
}

function pgMyPipeline() {
  const stages = ['assigned','contacted','scheduled','quote-sent','completed','lost'];
  const labels = {assigned:'Assigned',contacted:'Contacted',scheduled:'Est. Scheduled','quote-sent':'Quote Sent',completed:'Job Won',lost:'Job Lost'};
  const stageColors = {assigned:'var(--yellow)',contacted:'var(--cyan)',scheduled:'var(--orange)','quote-sent':'#a855f7',completed:'var(--green)',lost:'var(--red)'};
  return `<div class="page" id="page-my-pipeline">
    <div class="page-header"><div><h1>My Pipeline</h1><p>Track progress on your leads</p></div></div>
    <div class="pipeline">
    ${stages.map(s=>{
      const sl = leads.filter(l=>l.contractor===currentUser.id&&l.status===s);
      const totalVal = sl.reduce((x,l)=>x+l.value,0);
      return `<div class="pipeline-col">
        <div class="pipeline-col-header" style="border-top:2px solid ${stageColors[s]||'var(--blue)'};padding-top:10px">${labels[s]}<span class="pipeline-count">${sl.length}</span></div>
        ${sl.length>0?`<div style="font-size:.72rem;color:var(--green);margin-bottom:10px">$${totalVal.toLocaleString()} est.</div>`:''}
        ${sl.length===0?`<div style="color:var(--gray);font-size:.78rem;text-align:center;padding:20px 0">None</div>`:
          sl.map(l=>{
            const ji = getJobIntelligence(l);
            return `<div class="pipeline-card" onclick="openLeadDetail('${l.id}')">
              <div class="pipeline-card-name">${l.name}${l.priority==='high'?'<span style="color:var(--orange);margin-left:5px;font-size:.7rem">●</span>':''}</div>
              ${l.quoteAmount != null ? `<div class="pipeline-card-detail" style="color:#a78bfa;font-size:.78rem;font-weight:700">$${Number(l.quoteAmount).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} quoted</div>` : `<div class="pipeline-card-detail" style="color:#4ade80;font-size:.78rem;font-weight:700">${ji.valueLabel} est.</div>`}
              <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:5px">
                <span style="font-size:.68rem;padding:2px 7px;border-radius:10px;border:1px solid ${ji.diffColor}40;color:${ji.diffColor};background:${ji.diffBg}">${ji.diffIcon} ${ji.difficulty}</span>
                <span style="font-size:.68rem;padding:2px 7px;border-radius:10px;border:1px solid ${ji.profitColor}40;color:${ji.profitColor};background:${ji.profitBg}">${ji.profit} profit</span>
              </div>
              <span class="pipeline-card-county" style="margin-top:5px;display:block">${l.county}, ${l.state}</span>
            </div>`;
          }).join('')}
      </div>`;
    }).join('')}
    </div>
  </div>`;
}

function pgMyRevenue() {
  console.log('[RENDER] pgMyRevenue — currentContractor:', currentContractor ? JSON.stringify({ id: currentContractor.id, companyName: currentContractor.companyName, name: currentContractor.name }) : 'null', '| currentUser.name:', JSON.stringify(currentUser?.name));
  const myLeads    = leads.filter(l=>l.contractor===currentUser.id);
  const done       = myLeads.filter(l=>l.status==='completed');
  const contacted  = myLeads.filter(l=>l.contactedAt);
  // Prefer contractor's quoted/agreed price for completed jobs; fall back to estimated value
  const total      = done.reduce((s,l)=>s+(l.quoteAmount != null ? Number(l.quoteAmount) : l.value),0);
  const avgVal     = Math.round(total/(done.length||1));
  const closeRate  = myLeads.length ? Math.round(done.length/myLeads.length*100) : 0;
  const reviewd    = done.filter(l=>l.review);
  const avgRating  = reviewd.length ? (reviewd.reduce((s,l)=>s+l.review.rating,0)/reviewd.length).toFixed(1) : '—';
  return `<div class="page" id="page-my-revenue">
    <div class="page-header"><div><h1>Performance Analytics</h1><p>${sanitizeHTML(currentContractor?.companyName || currentContractor?.name || 'Partner Account')} — your stats</p></div></div>
    <div class="stats-grid">
      <div class="stat-card blue"><div class="stat-icon">⚡</div><div class="stat-value blue">${myLeads.length}</div><div class="stat-label">Leads Received</div></div>
      <div class="stat-card yellow"><div class="stat-icon">📞</div><div class="stat-value yellow">${contacted.length}</div><div class="stat-label">Leads Contacted</div></div>
      <div class="stat-card green"><div class="stat-icon">✅</div><div class="stat-value green">${done.length}</div><div class="stat-label">Jobs Completed</div></div>
      <div class="stat-card cyan"><div class="stat-icon">📊</div><div class="stat-value cyan">${closeRate}%</div><div class="stat-label">Close Rate</div></div>
      <div class="stat-card green"><div class="stat-icon">💰</div><div class="stat-value green">$${total.toLocaleString()}</div><div class="stat-label">Total Revenue</div></div>
      <div class="stat-card yellow"><div class="stat-icon">📈</div><div class="stat-value yellow">$${avgVal.toLocaleString()}</div><div class="stat-label">Avg Job Value</div></div>
      <div class="stat-card cyan"><div class="stat-icon">⭐</div><div class="stat-value cyan">${avgRating}</div><div class="stat-label">Customer Rating</div></div>
    </div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>📊</span><div class="card-title">Lead Funnel</div></div><div class="card-body" style="padding:16px 20px">
        ${[['Received',myLeads.length,'var(--blue)'],['Contacted',contacted.length,'var(--yellow)'],['Completed',done.length,'var(--green)']].map(([lbl,cnt,col])=>`<div class="county-row"><div class="county-name" style="width:100px">${lbl}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(cnt/Math.max(myLeads.length,1)*100)}%;background:${col}"></div></div><div class="county-count">${cnt}</div></div>`).join('')}
      </div></div>
      <div class="card"><div class="card-header"><span>⭐</span><div class="card-title">Customer Reviews</div></div><div class="card-body" style="padding:16px 20px">
        ${reviewd.length === 0 ? `<div style="color:var(--gray);font-size:.85rem;padding:8px 0">No reviews yet. Complete jobs and request reviews to build your rating.</div>` :
        reviewd.map(l=>`<div style="padding:10px 0;border-bottom:1px solid rgba(30,45,74,.4)"><div style="display:flex;justify-content:space-between"><div style="font-weight:600;font-size:.85rem">${sanitizeHTML(l.name)}</div><div style="color:var(--yellow)">★ ${l.review.rating}</div></div><div style="font-size:.8rem;color:var(--gray);margin-top:3px">"${sanitizeHTML(l.review.text)}"</div></div>`).join('')}
      </div></div>
    </div>
    <div class="card">
      <div class="card-header"><span>✅</span><div class="card-title">Completed Jobs</div></div>
      ${done.length===0?`<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No completed jobs yet</h3></div>`:`<table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Complexity</th><th>Job Value</th><th>Review</th><th>Date</th></tr></thead><tbody>${done.map(l=>`<tr><td>${l.name}</td><td>${l.county},${l.state}</td><td style="font-size:.8rem">${l.complexity||l.service}</td><td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td><td>${l.review?`<span style="color:var(--yellow)">★${l.review.rating}</span>`:`<button class="btn btn-outline btn-sm" onclick="openReviewModal('${l.id}')">Request</button>`}</td><td style="font-size:.8rem;color:var(--gray)">${l.created}</td></tr>`).join('')}</tbody></table>`}
    </div>
  </div>`;
}

function pgMyProfile() {
  const c = currentContractor || {};
  const counties = Array.isArray(c.counties) ? c.counties : [];
  return `<div class="page" id="page-my-profile">
    <div class="page-header"><div><h1>My Profile</h1><p>${sanitizeHTML(c.companyName || c.name || 'Contractor')} — Partner Account</p></div></div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>🏢</span><div class="card-title">Company Info</div></div><div class="card-body">
        <div class="detail-row"><div class="detail-label">Company</div><div class="detail-value" style="font-weight:600">${sanitizeHTML(c.companyName || c.name || '—')}</div></div>
        <div class="detail-row"><div class="detail-label">Contact</div><div class="detail-value">${sanitizeHTML(c.contactName || c.contact || '—')}</div></div>
        <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">${sanitizeHTML(c.phone || '—')}</div></div>
        <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value">${sanitizeHTML(c.email || currentUser?.email || '—')}</div></div>
        <div class="detail-row"><div class="detail-label">License</div><div class="detail-value mono">${sanitizeHTML(c.license || '—')}</div></div>
        <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-completed">Active Partner</span></div></div>
      </div></div>
      <div class="card"><div class="card-header"><span>📍</span><div class="card-title">Service Territory</div></div><div class="card-body">
        ${counties.length === 0
          ? `<div class="empty-state" style="padding:20px"><div class="empty-state-icon">📍</div><p>No service territory set</p></div>`
          : counties.map(county=>`<div class="county-row"><div class="county-name">${sanitizeHTML(county)}</div><div style="flex:1"></div><span class="badge badge-completed" style="font-size:.68rem">Covered</span></div>`).join('')}
      </div></div>
    </div>
    <div class="card" style="margin-top:16px"><div class="card-header"><span>🔒</span><div class="card-title">Change Password</div></div><div class="card-body">
      <div class="form-row">
        <div class="form-group"><label class="form-label">New Password</label><input class="form-input" type="password" id="cp-new" placeholder="Min 8 characters" /></div>
        <div class="form-group"><label class="form-label">Confirm Password</label><input class="form-input" type="password" id="cp-confirm" placeholder="Repeat new password" /></div>
      </div>
      <div id="cp-error" style="display:none;color:var(--red);font-size:.82rem;margin-bottom:8px"></div>
      <button class="btn btn-primary" onclick="doChangePassword()">Update Password</button>
    </div></div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// LEAD DETAIL MODAL (with notes)
// ═══════════════════════════════════════════════════════════════
function openLeadDetail(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  // Look up assigned contractor: prefer dbContractors (loaded for admin), fall back to
  // currentContractor when a contractor is viewing their own lead (dbContractors is empty
  // for contractor logins since _loadDbContractors() is only called in the admin path).
  const _cRec = l.contractor
    ? (_getContractors().find(c => c.id === l.contractor)
        || (l.contractor === currentUser?.id ? currentContractor : null))
    : null;
  const cName = _cRec ? (_cRec.companyName || _cRec.name || 'Unassigned') : 'Unassigned';
  console.log('[DETAIL] openLeadDetail', id, '— l.contractor:', l.contractor, '| dbContractors.length:', _getContractors().length, '| _cRec:', _cRec ? JSON.stringify({ id: _cRec.id, companyName: _cRec.companyName, name: _cRec.name }) : 'null', '| cName:', cName);
  document.getElementById('modal').classList.toggle('modal-lg', true);
  document.getElementById('modal-title').textContent = `${l.id} — ${l.name}`;
  const _ji = getJobIntelligence(l);
  document.getElementById('modal-body').innerHTML = `
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab(event,'tab-intel')">⚡ Job Intelligence</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-details')">Details</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-notes')">Notes (${l.notes.length})</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-activity');_loadActivity('${l.id}')">Activity</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-actions')">✏️ Edit Lead</button>
    </div>
    <div class="tab-panel active" id="tab-intel">
      <!-- Profit potential banner -->
      <div style="background:${_ji.profitBg};border:1px solid ${_ji.profitColor}40;border-radius:10px;padding:14px 18px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:.68rem;color:${_ji.profitColor};font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px">Profit Potential</div>
          <div style="font-size:1.4rem;font-weight:800;color:${_ji.profitColor}">${_ji.profit}</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:.68rem;color:var(--gray);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Install Difficulty</div>
          <span style="font-size:.88rem;font-weight:700;padding:5px 14px;border-radius:20px;border:1px solid ${_ji.diffColor}40;color:${_ji.diffColor};background:${_ji.diffBg}">${_ji.diffIcon} ${_ji.difficulty}</span>
        </div>
        <div style="text-align:right">
          <div style="font-size:.68rem;color:var(--gray);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px">Complexity Type</div>
          <div style="font-size:.9rem;font-weight:700;color:var(--white)">${_ji.complexity}</div>
        </div>
      </div>
      <!-- Lead Summary Card -->
      <div style="background:var(--navy-light);border:1px solid var(--navy-border);border-radius:10px;overflow:hidden;margin-bottom:16px">
        <div style="background:rgba(99,102,241,0.1);border-bottom:1px solid rgba(99,102,241,0.2);padding:10px 16px;display:flex;align-items:center;gap:8px">
          <span style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#a5b4fc">⚡ Lead Summary</span>
        </div>
        <div style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:0">
          ${(()=>{
            const htLabel = {single_family:'Single Family',townhouse:'Townhouse',condo:'Condo',apartment:'Apartment',commercial:'Commercial',notsure:'?'}[l.homeType] || l.homeType || '—';
            const plLabel = {garage:'Garage',basement:'Basement',outside:'Outside',utility_room:'Utility Room',notsure:'?'}[l.panelLocation] || l.panelLocation || '—';
            const obLabel = {yes:'Yes ✓',no:'No ✗',notsure:'?'}[l.openBreaker] || l.openBreaker || '—';
            const rows = [
              ['Customer',      l.name],
              ['Location',      `${l.county}, ${l.state}`],
              ['Project Type',  l.service],
              ['Panel Size',    l.panel || '—'],
              ['Distance',      {under10:'Under 10 ft','10to25':'10–25 ft','25to50':'25–50 ft',over50:'Over 50 ft',notsure:'Unknown'}[l.distance]||l.distance||'—'],
              ['Charger Brand', l.charger || '—'],
              ['Home Type',     htLabel],
              ['Panel Location',plLabel],
              ['Open Breakers', obLabel],
            ];
            return rows;
          })().map(([lbl,val],i)=>`
            <div style="padding:8px ${i%2===0?'16px 8px 0':'0 8px 0'};${i%2===0?'border-right:1px solid rgba(30,45,74,.6)':''}">
              <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--gray);margin-bottom:2px">${lbl}</div>
              <div style="font-size:.85rem;font-weight:600;color:var(--white)">${val}</div>
            </div>`).join('')}
        </div>
      </div>
      <!-- Job Value Intelligence -->
      <div style="display:grid;grid-template-columns:${l.quoteAmount != null ? '1fr 1fr' : '1fr 1fr 1fr'};gap:10px;margin-bottom:${l.quoteAmount != null ? '10px' : '16px'}">
        <div style="background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#4ade80;margin-bottom:6px">Est. Job Value</div>
          <div style="font-size:1.05rem;font-weight:800;color:#4ade80">${_ji.valueLabel}</div>
        </div>
        ${l.quoteAmount != null ? `
        <div style="background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.35);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#a78bfa;margin-bottom:6px">Quoted Price</div>
          <div style="font-size:1.05rem;font-weight:800;color:#a78bfa">$${Number(l.quoteAmount).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</div>
        </div>` : `
        <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#a5b4fc;margin-bottom:6px">Install Time</div>
          <div style="font-size:1.05rem;font-weight:800;color:#a5b4fc">${_ji.timeLabel}</div>
        </div>
        <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#fbbf24;margin-bottom:6px">Lead Source</div>
          <div style="font-size:1.05rem;font-weight:800;color:#fbbf24">${l.leadSource||'Direct'}</div>
        </div>`}
      </div>
      ${l.quoteAmount != null ? `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
        <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#a5b4fc;margin-bottom:6px">Install Time</div>
          <div style="font-size:1.05rem;font-weight:800;color:#a5b4fc">${_ji.timeLabel}</div>
        </div>
        <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#fbbf24;margin-bottom:6px">Lead Source</div>
          <div style="font-size:1.05rem;font-weight:800;color:#fbbf24">${l.leadSource||'Direct'}</div>
        </div>
      </div>` : ''}
      ${_ji.flags && _ji.flags.length > 0 ? `
      <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.2);border-radius:10px;padding:12px 16px;margin-bottom:12px">
        <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#fbbf24;margin-bottom:8px">⚠ Advisory Flags</div>
        ${_ji.flags.map(f=>`<div style="font-size:.82rem;color:var(--silver);padding:3px 0;line-height:1.5">${sanitizeHTML(f)}</div>`).join('')}
      </div>` : ''}
      ${l.assignedAt ? (()=>{
        const minsSince = Math.floor((Date.now() - new Date(l.assignedAt)) / 60000);
        const isOd = minsSince >= 120;
        const ageLabel = minsSince < 60 ? `${minsSince} min ago` : `${Math.floor(minsSince/60)}h ${minsSince%60}m ago`;
        const col = isOd ? '#f87171' : minsSince >= 90 ? '#fb923c' : '#94a3b8';
        return `<div style="display:flex;align-items:center;gap:10px;background:rgba(148,163,184,0.05);border:1px solid rgba(148,163,184,0.15);border-radius:8px;padding:10px 14px;margin-bottom:12px">
          <span style="font-size:.75rem;color:var(--gray)">⏱ Assigned</span>
          <span style="font-size:.82rem;font-weight:600;color:${col}">${ageLabel}${isOd ? ' — OVERDUE' : ''}</span>
          ${l.contactedAt ? '' : `<span style="font-size:.72rem;background:${isOd?'rgba(248,113,113,0.1)':'rgba(148,163,184,0.08)'};color:${col};border:1px solid ${isOd?'rgba(248,113,113,0.3)':'rgba(148,163,184,0.2)'};border-radius:4px;padding:2px 8px">Not contacted</span>`}
        </div>`;
      })() : ''}
    </div>
    <div class="tab-panel" id="tab-details">
      ${l.complexity ? `<div style="background:rgba(37,99,235,0.1);border:1px solid rgba(37,99,235,0.3);border-radius:8px;padding:10px 16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
        <div><div style="font-size:.72rem;color:var(--gray);font-weight:600;letter-spacing:.06em;text-transform:uppercase">Lead Complexity</div><div style="font-weight:700;font-size:.95rem;color:var(--white)">${l.complexity}</div></div>
        <div style="text-align:right"><div style="font-size:.72rem;color:var(--gray);font-weight:600;letter-spacing:.06em;text-transform:uppercase">Estimated Job Value</div><div style="font-weight:700;font-size:1rem;color:var(--green)">${estimateJobValue(l.complexity).label}</div></div>
        <div><div style="font-size:.72rem;color:var(--gray);font-weight:600;letter-spacing:.06em;text-transform:uppercase">Lead Source</div><div style="font-weight:600;font-size:.88rem;color:var(--cyan)">${l.leadSource||'Direct'}</div></div>
      </div>` : ''}
      <div class="grid-2" style="gap:0">
        <div>
          <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-${l.status}">${cap(l.status)}</span>${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px">HIGH PRIORITY</span>':''}</div></div>
          <div class="detail-row"><div class="detail-label">Name</div><div class="detail-value" style="font-weight:600">${l.name}</div></div>
          <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value"><a href="tel:${l.phone}" style="color:var(--blue-bright);text-decoration:none">${l.phone}</a></div></div>
          <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:${l.email}" style="color:var(--blue-bright);text-decoration:none;font-size:.85rem">${l.email}</a></div></div>
          <div class="detail-row"><div class="detail-label">Address</div><div class="detail-value">${l.address}, ${l.city}</div></div>
          <div class="detail-row"><div class="detail-label">County</div><div class="detail-value">${l.county}, ${l.state}</div></div>
          <div class="detail-row"><div class="detail-label">Panel Size</div><div class="detail-value">${l.panel}</div></div>
        </div>
        <div>
          <div class="detail-row"><div class="detail-label">Service</div><div class="detail-value">${l.service}</div></div>
          <div class="detail-row"><div class="detail-label">Charger Brand</div><div class="detail-value">${l.charger}</div></div>
          <div class="detail-row"><div class="detail-label">Install Location</div><div class="detail-value">${(l.installLocation||'').replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())||'—'}</div></div>
          <div class="detail-row"><div class="detail-label">Incentive</div><div class="detail-value"><span class="rebate-tag">${getIncentiveText(l)}</span></div></div>
          <div class="detail-row"><div class="detail-label">Est. Value</div><div class="detail-value" style="color:var(--green);font-weight:600;font-size:1.05rem">$${l.value.toLocaleString()}</div></div>
          ${l.quoteAmount != null ? `<div class="detail-row"><div class="detail-label">Quoted Price</div><div class="detail-value" style="color:#a78bfa;font-weight:700;font-size:1.05rem">$${Number(l.quoteAmount).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}${l.quoteUpdatedAt?`<span style="font-size:.72rem;color:var(--gray);font-weight:400;margin-left:8px">saved ${sanitizeHTML(l.quoteUpdatedAt)}</span>`:''}</div></div>` : ''}
          ${l.quoteNotes ? `<div class="detail-row"><div class="detail-label">Quote Notes</div><div class="detail-value" style="font-size:.85rem;color:var(--silver)">${sanitizeHTML(l.quoteNotes)}</div></div>` : ''}
          <div class="detail-row"><div class="detail-label">Assigned To</div><div class="detail-value">${cName}</div></div>
          <div class="detail-row"><div class="detail-label">Submitted</div><div class="detail-value">${l.created}</div></div>
          ${l.contactedAt ? `<div class="detail-row"><div class="detail-label">Contacted</div><div class="detail-value" style="color:var(--green)">${l.contactedAt}</div></div>` : `<div class="detail-row"><div class="detail-label">Contacted</div><div class="detail-value" style="color:var(--red)">Not yet</div></div>`}
        </div>
      </div>
      ${l.callNotes ? `<div style="background:rgba(251,191,36,0.07);border:1px solid rgba(251,191,36,0.2);border-radius:8px;padding:12px 16px;margin-top:12px"><div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#fbbf24;margin-bottom:6px">📞 Call Notes</div><div style="font-size:.88rem;color:var(--silver);line-height:1.6;white-space:pre-wrap">${sanitizeHTML(l.callNotes)}</div></div>` : ''}
      ${(()=>{ const cn = l.notes.find(n => n.author === 'Customer'); return cn ? `<div style="background:rgba(37,99,235,0.07);border:1px solid rgba(37,99,235,0.2);border-radius:8px;padding:12px 16px;margin-top:12px"><div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--blue-bright);margin-bottom:6px">Customer Notes</div><div style="font-size:.88rem;color:var(--silver);line-height:1.6">${sanitizeHTML(cn.text)}</div></div>` : ''; })()}
      ${l.review ? `<div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:8px;padding:12px 16px;margin-top:12px"><div style="font-size:.72rem;color:var(--gray);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Customer Review</div><div style="color:var(--yellow)">${'★'.repeat(l.review.rating||5)}${'☆'.repeat(5-(l.review.rating||5))} &nbsp;<span style="font-size:.8rem;color:var(--gray)">${l.review.rating||5}/5</span></div><div style="font-size:.88rem;color:var(--silver);margin-top:4px">"${sanitizeHTML(l.review.text)}"</div><div style="font-size:.75rem;color:var(--gray);margin-top:4px">${l.review.date}</div></div>` : (l.status === 'completed' ? `<div style="margin-top:12px"><button class="btn btn-outline btn-sm" onclick="openReviewModal('${l.id}')">📩 Request Customer Review</button></div>` : '')}
    </div>
    <div class="tab-panel" id="tab-notes">
      <div id="notes-list-${id}" style="margin-bottom:16px">
        ${l.notes.length === 0 ? `<div style="color:var(--gray);font-size:.85rem;padding:16px 0">No notes yet.</div>` :
          l.notes.map(n=>`<div class="note-item"><div class="note-avatar">${sanitizeHTML(n.author[0])}</div><div class="note-content"><div class="note-author">${sanitizeHTML(n.author)}</div><div class="note-text">${sanitizeHTML(n.text)}</div><div class="note-time">${n.time}</div></div></div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <input class="form-input" id="note-input-${id}" placeholder="Add a note..." style="flex:1">
        <button class="btn btn-primary btn-sm" onclick="submitNote('${id}')">Add</button>
      </div>
    </div>
    <div class="tab-panel" id="tab-activity">
      <div id="activity-panel-${l.id}" style="padding:8px 0;color:var(--gray);font-size:.85rem;text-align:center">
        Click the Activity tab to load history.
      </div>
    </div>
    <div class="tab-panel" id="tab-actions">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Customer Name</label><input class="form-input" id="medit-name" value="${sanitizeHTML(l.name)}"></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="medit-phone" value="${sanitizeHTML(l.phone)}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="medit-email" value="${sanitizeHTML(l.email)}"></div>
        <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="medit-address" value="${sanitizeHTML(l.address)}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">County</label>
          <select class="form-input" id="medit-county">
            ${['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'].map(co=>`<option value="${co}" ${l.county===co?'selected':''}>${co}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">State</label>
          <select class="form-input" id="medit-state">
            <option value="PA" ${l.state==='PA'?'selected':''}>Pennsylvania</option>
            <option value="NJ" ${l.state==='NJ'?'selected':''}>New Jersey</option>
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Description / Notes</label>
        <textarea class="form-input" id="medit-desc" rows="3" placeholder="Update customer notes or description...">${sanitizeHTML((l.notes.find(n=>n.author==='Customer')?.text)||'')}</textarea>
      </div>
      <div style="border-top:1px solid rgba(30,45,74,.6);margin:16px 0 12px;padding-top:4px;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--gray);font-weight:700">Status & Assignment</div>
      <div class="form-group"><label class="form-label">Status</label>
        <select class="form-input" id="mstatus">
          ${[['new','New Lead'],['assigned','Assigned'],['contacted','Contacted'],['scheduled','Est. Scheduled'],['quote-sent','Quote Sent'],['completed','Job Won'],['lost','Job Lost']].map(([v,lbl])=>`<option value="${v}" ${l.status===v?'selected':''}>${lbl}</option>`).join('')}
        </select>
      </div>
      ${currentUser.role==='admin'?`<div class="form-row">
        <div class="form-group"><label class="form-label">Assign Contractor</label>
          <select class="form-input" id="mcontractor">
            <option value="">Unassigned</option>
            ${_getContractors().map(c=>`<option value="${c.id}" ${l.contractor===c.id?'selected':''}>${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group"><label class="form-label">Priority</label>
          <select class="form-input" id="mpriority">
            <option value="normal" ${l.priority==='normal'?'selected':''}>Normal</option>
            <option value="high" ${l.priority==='high'?'selected':''}>High Priority</option>
          </select>
        </div>
      </div>
      <div style="border-top:1px solid rgba(30,45,74,.6);margin:18px 0 12px;padding-top:4px;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--gray);font-weight:700">Admin Actions</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-outline btn-sm" style="color:#fbbf24;border-color:#fbbf2440" onclick="closeModalDirect();openReassignModal('${l.id}')">🔄 Reassign Lead</button>
        ${l.contractor ? `<button class="btn btn-outline btn-sm" style="color:#f87171;border-color:#f8717140" onclick="closeModalDirect();openReclaimModal('${l.id}')">↩ Reclaim to Admin Pool</button>` : ''}
      </div>`:''}
      ${currentUser.role==='contractor' && (l.status==='quote-sent'||l.status==='completed') ? `
      <div style="border-top:1px solid rgba(30,45,74,.6);margin:18px 0 12px;padding-top:4px;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--gray);font-weight:700">Quote / Agreed Price</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Quoted / Agreed Price ($)</label>
          <input class="form-input" id="inline-quote-amount" type="number" min="1" step="0.01"
            placeholder="e.g. 1450.00"
            value="${l.quoteAmount != null ? l.quoteAmount : ''}">
        </div>
        <div class="form-group">
          <label class="form-label">Quote Notes</label>
          <input class="form-input" id="inline-quote-notes" placeholder="Optional notes"
            value="${sanitizeHTML(l.quoteNotes||'')}">
        </div>
      </div>
      <button class="btn btn-outline btn-sm" style="margin-bottom:4px" onclick="_saveInlineQuote('${l.id}')">💾 Save Quote Amount</button>` : ''}
    </div>`;
  document.getElementById('modal-footer').innerHTML = `
    ${currentUser?.role==='admin'?`<button class="btn btn-outline" onclick="deleteLead('${l.id}')" style="color:var(--red);border-color:rgba(239,68,68,.4);margin-right:auto">🗑 Delete</button>`:''}
    <button class="btn btn-outline" onclick="closeModalDirect()">Close</button>
    <button class="btn btn-primary" onclick="saveModal('${l.id}')">Save Changes</button>`;
  document.getElementById('modal-overlay').classList.add('open');
}

/** Save quote amount from the inline form inside the lead detail modal (Edit Lead tab). */
function _saveInlineQuote(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const rawAmt = parseFloat(document.getElementById('inline-quote-amount')?.value);
  if (!rawAmt || rawAmt <= 0 || isNaN(rawAmt)) { showToast('Enter a valid amount > $0'); return; }
  const notes = document.getElementById('inline-quote-notes')?.value?.trim() ?? '';

  const _prevAmt = l.quoteAmount;
  const _actType = _prevAmt != null ? 'quote_updated' : 'quote_sent';
  const _prevVal = _prevAmt != null ? `$${Number(_prevAmt).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}` : '';
  const _newVal  = `$${rawAmt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;

  l.quoteAmount    = rawAmt;
  l.quoteNotes     = sanitizeHTML(notes);
  l.quoteUpdatedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  l.quoteUpdatedBy = currentUser?.name || currentUser?.id || '';

  if (isSupabaseReady()) {
    sbSaveQuote(leadId, rawAmt, l.quoteNotes, l.quoteUpdatedBy)
      .then(r => { if (!r) console.error('[DB] _saveInlineQuote returned null for', leadId); })
      .catch(e => console.error('[DB] _saveInlineQuote:', e.message));
    const _a = _actorInfo();
    sbLogActivity(leadId, _actType, _prevVal, _newVal, _a.type, _a.id, _a.name)
      .catch(e => console.error('[DB] logActivity (_saveInlineQuote):', e.message));
  }
  showToast('Quote amount saved ✓');
}

/** Returns { type, id, name } for the currently signed-in user — used for activity logging. */
function _actorInfo() {
  if (!currentUser) return { type: 'system', id: '', name: 'System' };
  return {
    type: currentUser.role === 'admin' ? 'admin' : 'contractor',
    id:   currentUser.email || currentUser.id || '',
    name: currentUser.name  || currentUser.email || currentUser.id || '',
  };
}

/**
 * Delete a lead. Admin-only.
 * Removes from Supabase, in-memory state, and all visible UI surfaces.
 */
async function deleteLead(leadId) {
  if (currentUser?.role !== 'admin') return;
  if (!window.confirm('Delete this lead? This cannot be undone.')) return;
  // Remove from Supabase
  if (isSupabaseReady()) {
    const ok = await sbDeleteLead(leadId);
    if (!ok) { showToast('Delete failed — please try again'); return; }
  }
  // Remove from in-memory state
  const idx = leads.findIndex(l => l.id === leadId);
  if (idx !== -1) leads.splice(idx, 1);
  persist();
  // Close modal if it's showing this lead
  const overlay = document.getElementById('modal-overlay');
  if (overlay?.classList.contains('open')) closeModalDirect();
  // Refresh All Leads table if visible
  if (document.getElementById('leads-table-wrap')) renderLeadsTable();
  // Remove pipeline card if visible (both admin and any stale DOM)
  document.querySelectorAll(`[data-lead-id="${leadId}"]`).forEach(el => el.remove());
  // Update sidebar badge counts
  buildSidebar();
  showToast('Lead deleted');
}

/**
 * Lazy-load and render the activity timeline for a lead.
 * Called when the user clicks the Activity tab.
 */
async function _loadActivity(leadId) {
  const panel = document.getElementById('activity-panel-' + leadId);
  if (!panel) return;
  panel.innerHTML = `<div style="padding:20px;text-align:center;color:var(--gray);font-size:.85rem">Loading activity…</div>`;

  const rows = isSupabaseReady() ? await sbFetchActivity(leadId) : null;

  if (!rows || rows.length === 0) {
    panel.innerHTML = `<div style="padding:20px;text-align:center;color:var(--gray);font-size:.85rem">No activity recorded yet.<br><span style="font-size:.78rem">Activity is logged from this point forward.</span></div>`;
    return;
  }

  const cfg = {
    lead_created:    { icon: '📋', label: 'Lead Created',         color: '#22d3ee' },
    lead_assigned:   { icon: '🔄', label: 'Lead Assigned',        color: '#fbbf24' },
    lead_reclaimed:  { icon: '↩',  label: 'Reclaimed by Admin',   color: '#fb923c' },
    lead_reassigned: { icon: '🔀', label: 'Lead Reassigned',      color: '#fbbf24' },
    contacted:       { icon: '📞', label: 'Marked Contacted',     color: '#60a5fa' },
    scheduled:       { icon: '📅', label: 'Estimate Scheduled',   color: '#c084fc' },
    quote_sent:      { icon: '📄', label: 'Quote Sent',           color: '#a78bfa' },
    quote_updated:   { icon: '✏️', label: 'Quote Updated',        color: '#a78bfa' },
    job_won:         { icon: '✅', label: 'Job Won',               color: '#4ade80' },
    job_lost:        { icon: '❌', label: 'Job Lost',              color: '#f87171' },
  };

  const isAdmin = currentUser?.role === 'admin';

  const items = rows.map(row => {
    const c = cfg[row.action_type] || { icon: '•', label: row.action_type, color: 'var(--gray)' };
    const ts = row.created_at
      ? new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      : '';
    const actorBadge = row.actor_type === 'admin'
      ? `<span style="font-size:.68rem;padding:1px 7px;border-radius:10px;background:rgba(251,191,36,0.12);border:1px solid rgba(251,191,36,0.3);color:#fbbf24">Admin</span>`
      : row.actor_type === 'contractor'
        ? `<span style="font-size:.68rem;padding:1px 7px;border-radius:10px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);color:#a5b4fc">Contractor</span>`
        : `<span style="font-size:.68rem;padding:1px 7px;border-radius:10px;background:rgba(100,116,139,0.15);border:1px solid rgba(100,116,139,0.3);color:var(--gray)">System</span>`;
    const actorLine = row.actor_name
      ? `<div style="font-size:.78rem;color:var(--silver);margin-top:2px">${sanitizeHTML(row.actor_name)}${isAdmin && row.actor_id && row.actor_id !== row.actor_name ? ` <span style="color:var(--gray);font-size:.72rem">(${sanitizeHTML(row.actor_id)})</span>` : ''}</div>`
      : '';
    const changeLine = (row.previous_value || row.new_value)
      ? `<div style="font-size:.8rem;color:var(--silver);margin-top:4px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">${row.previous_value ? `<span style="color:var(--gray);text-decoration:line-through">${sanitizeHTML(row.previous_value)}</span><span style="color:var(--gray)">→</span>` : ''}<span style="color:var(--white);font-weight:600">${sanitizeHTML(row.new_value)}</span></div>`
      : '';
    return `
      <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid rgba(30,45,74,.5)">
        <div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:${c.color}18;border:1px solid ${c.color}40;display:flex;align-items:center;justify-content:center;font-size:.85rem;margin-top:2px">${c.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:2px">
            <span style="font-size:.88rem;font-weight:700;color:${c.color}">${sanitizeHTML(c.label)}</span>
            ${actorBadge}
          </div>
          ${actorLine}
          ${changeLine}
          <div style="font-size:.72rem;color:var(--gray);margin-top:4px">${sanitizeHTML(ts)}</div>
        </div>
      </div>`;
  }).join('');

  panel.innerHTML = `<div style="max-height:420px;overflow-y:auto;padding-right:4px">${items}</div>`;
}

function switchTab(e, id) {
  e.target.closest('.tabs').querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  e.target.classList.add('active');
  e.target.closest('.modal-body').querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function submitNote(id) {
  const inp = document.getElementById('note-input-' + id);
  if (!inp || !inp.value.trim()) return;
  const l = leads.find(x => x.id === id);
  if (!l) return;
  const note = { author: currentUser.name, text: inp.value.trim(), time: 'Just now' };
  l.notes.push(note);
  const list = document.getElementById('notes-list-' + id);
  if (list) list.innerHTML = l.notes.map(n=>`<div class="note-item"><div class="note-avatar">${sanitizeHTML(n.author[0])}</div><div class="note-content"><div class="note-author">${sanitizeHTML(n.author)}</div><div class="note-text">${sanitizeHTML(n.text)}</div><div class="note-time">${n.time}</div></div></div>`).join('');
  inp.value = '';
}

function addNote(id, author, text) {
  const l = leads.find(x => x.id === id);
  if (l) {
    l.notes.push({ author, text, time: 'Just now' });
    persist();
    if (isSupabaseReady()) sbAddNote(id, author, text).catch(e => console.warn('[DB] addNote:', e.message));
  }
}

function saveModal(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  const prevStatus = l.status;

  // ── Editable lead fields ──
  const nameEl = document.getElementById('medit-name');
  if (nameEl?.value.trim()) l.name = sanitizeHTML(nameEl.value.trim());
  const phoneEl = document.getElementById('medit-phone');
  if (phoneEl) l.phone = sanitizeHTML(phoneEl.value.trim());
  const emailEl = document.getElementById('medit-email');
  if (emailEl) l.email = sanitizeHTML(emailEl.value.trim());
  const addrEl = document.getElementById('medit-address');
  if (addrEl) l.address = sanitizeHTML(addrEl.value.trim());
  const countyEl = document.getElementById('medit-county');
  if (countyEl) l.county = countyEl.value;
  const stateEl = document.getElementById('medit-state');
  if (stateEl) l.state = stateEl.value;

  // Update or add Customer note
  const descEl = document.getElementById('medit-desc');
  if (descEl) {
    const newDesc = descEl.value.trim();
    const existing = l.notes.find(n => n.author === 'Customer');
    if (newDesc) {
      if (existing) { existing.text = sanitizeHTML(newDesc); }
      else { l.notes.unshift({ author:'Customer', text: sanitizeHTML(newDesc), time:'Edited' }); }
    }
  }

  // ── Status / assignment ──
  const s = document.getElementById('mstatus');
  if (s) { l.status = s.value; if (s.value === 'contacted' && !l.contactedAt) l.contactedAt = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
  const c = document.getElementById('mcontractor');
  if (c) {
    const _prevCId = l.contractor;
    const _prevCName = _prevCId ? ((_getContractors().find(x=>x.id===_prevCId)||{}).name||_prevCId) : 'Unassigned';
    l.contractor = c.value || null;
    if (c.value) {
      const _newCName = (_getContractors().find(x=>x.id===c.value)||{}).name || c.value;
      addNote(id, 'Admin', `Assigned to ${_newCName}.`);
      if (c.value !== _prevCId) {
        _triggerAssignmentNotification(l, c.value);
        if (isSupabaseReady()) {
          const _a = _actorInfo();
          sbLogActivity(id, 'lead_assigned', _prevCName, _newCName, _a.type, _a.id, _a.name)
            .catch(e => console.error('[DB] logActivity (saveModal assignment):', e.message));
        }
      }
    }
  }
  const p = document.getElementById('mpriority');
  if (p) l.priority = p.value;
  if (l.status === 'completed' && prevStatus !== 'completed') _onLeadCompleted(l);

  closeModalDirect();
  if (document.getElementById('page-all-leads')?.classList.contains('active'))  renderLeadsTable();
  if (document.getElementById('page-assign')?.classList.contains('active'))     renderAssignTable();
  if (document.getElementById('page-my-leads')?.classList.contains('active'))   renderMyLeads();
  buildSidebar();
  refreshAdminDashboard();
  persist();
  if (isSupabaseReady()) {
    sbUpdateLead(id, {
      name: l.name, phone: l.phone, email: l.email, address: l.address,
      county: l.county, state: l.state,
      status: l.status, contractor_id: l.contractor || null, priority: l.priority,
    }).then(r => {
      if (!r) {
        console.error('[DB]', JSON.stringify({ step: 'lead_update', lead_id: id, result: 'failure', error: 'updateLead returned null — likely RLS policy blocking admin update' }));
        showToast('⚠ Lead updated locally — database sync failed. Check console.');
      }
    }).catch(e => {
      console.error('[DB]', JSON.stringify({ step: 'lead_update', lead_id: id, error: e.message }));
      showToast('⚠ Lead updated locally — database error. Check console.');
    });
  }
  showToast('Lead updated');
}

function upd(id, status) {
  const l = leads.find(x => x.id === id);
  let prevStatus = null;
  if (l) {
    prevStatus = l.status;
    l.status = status;
    if (status === 'contacted' && !l.contactedAt) {
      l.contactedAt = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    }
    // ── Lock in revenue fields when job is won ──────────────────
    // finalValue and wonAt are the revenue source of truth for all reporting.
    // Set them atomically with the status change so they're never out of sync.
    if (status === 'completed' && prevStatus !== 'completed') {
      l.wonAt      = new Date().toISOString();
      l.finalValue = l.quoteAmount != null ? Number(l.quoteAmount) : (l.value || 0);
    }
    addNote(id, currentUser.name, `Status changed to ${cap(status)}.`);
    if (status === 'completed' && prevStatus !== 'completed') _onLeadCompleted(l);
  }
  /* Refresh whichever view is currently active */
  if (document.getElementById('page-my-leads')?.classList.contains('active'))  renderMyLeads();
  if (document.getElementById('page-all-leads')?.classList.contains('active')) renderLeadsTable();
  buildSidebar();
  refreshAdminDashboard();
  persist();
  if (isSupabaseReady()) {
    // Include won_at + final_value in the DB update when completing a lead
    const wonExtra = (status === 'completed' && l) ? { won_at: l.wonAt, final_value: l.finalValue } : {};
    sbUpdateLeadStatus(id, status, wonExtra).then(r => {
      if (!r) console.error('[DB]', JSON.stringify({ step: 'lead_status_update', lead_id: id, status, result: 'failure', error: 'updateLeadStatus returned null — likely RLS policy' }));
    }).catch(e => console.error('[DB]', JSON.stringify({ step: 'lead_status_update', lead_id: id, error: e.message })));

    // Activity log — map status to action_type (skip quote-sent, handled by saveQuoteModal)
    const _actMap = { contacted:'contacted', scheduled:'scheduled', completed:'job_won', lost:'job_lost' };
    const _actType = _actMap[status];
    if (_actType) {
      const _a = _actorInfo();
      const _prevLabel = prevStatus ? cap(prevStatus) : '';
      const _newLabel  = { contacted:'Contacted', scheduled:'Est. Scheduled', completed:'Job Won', lost:'Job Lost' }[status] || cap(status);
      sbLogActivity(id, _actType, _prevLabel, _newLabel, _a.type, _a.id, _a.name)
        .catch(e => console.error('[DB] logActivity (upd):', e.message));
    }
    // ── EVENT 4: SMS to admin on Job Won / Job Lost ───────────
    if (settings.smsAlerts && settings.adminSmsPhone && (status === 'completed' || status === 'lost') && l) {
      const _wlContractor = l.contractor ? _getContractors().find(c => c.id === l.contractor) : null;
      const _wlIsDemo = _wlContractor && (_wlContractor.contractorType || 'real') === 'demo';
      if (!_wlIsDemo) {
        let _wlMsg;
        if (status === 'completed') {
          const _wlVal = l.finalValue ? ` Final value $${Number(l.finalValue).toLocaleString('en-US')}.` : '';
          _wlMsg = `Lead ${id} marked Job Won.${_wlVal}`;
        } else {
          _wlMsg = `Lead ${id} marked Job Lost.`;
        }
        sbSendSms(settings.adminSmsPhone, _wlMsg);
      }
    }
  }
  showToast('Status updated → ' + cap(status));
}

/* Fired once when any lead transitions into 'completed' status.
   Unconditional: always notifies. Review request prompt is separate. */
function _onLeadCompleted(l) {
  const rv = l.finalValue ?? _revAmount(l);
  addNotification(`✅ <strong>Job Won — ${sanitizeHTML(l.name)}</strong> · $${Number(rv).toLocaleString()} · ${sanitizeHTML(l.county)}`);
  if (settings.reviewRequests) {
    addNotification(`📩 <strong>Review request queued</strong> for ${sanitizeHTML(l.name)} — open lead to send`);
  }
}

// ═══════════════════════════════════════════════════════════════
// CONTRACTOR QUOTE MODAL
// Opened when contractor clicks "Quote Sent" — prompts for actual
// quoted/agreed price before transitioning the lead to quote-sent.
// ═══════════════════════════════════════════════════════════════
function openQuoteModal(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const existingAmount = l.quoteAmount ? l.quoteAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';
  const _qji  = getJobIntelligence(l);
  const _htMap = {single_family:'Single Family',townhouse:'Townhouse',condo:'Condo',apartment:'Apartment',commercial:'Commercial'};
  const _qScope = (() => {
    const items = [];
    if (_qji.complexity === 'Panel Upgrade Likely') {
      items.push('Panel upgrade (200A service upgrade recommended)');
      items.push('New 50A dedicated circuit');
    } else if (_qji.complexity === 'Long Wiring Run') {
      items.push('Extended conduit run (50+ ft)');
      items.push('Dedicated 50A circuit');
    } else if (_qji.complexity === 'Commercial Install') {
      items.push('Commercial-grade wiring and conduit');
      items.push('Multiple EVSE circuits if needed');
    } else {
      items.push('Dedicated 50A/240V circuit');
      items.push('Conduit and wiring to charger location');
    }
    items.push('Charger mounting and connection');
    items.push('Circuit breaker installation');
    if (l.state === 'NJ') items.push('PSE&G make-ready incentive paperwork (eligibility varies)');
    else items.push('Federal tax credit documentation (up to $1,000 for qualifying installs)');
    if (l.county && ['Burlington','Camden','Gloucester'].some(c=>l.county.includes(c))) items.push('NJ permit coordination');
    else items.push('PA permit coordination if required');
    return items;
  })();
  const _qUpsells = (() => {
    const up = [];
    if (_qji.complexity !== 'Panel Upgrade Likely' && l.openBreaker === 'no') up.push('⚠ Panel may need sub-panel or upgrade — quote separately');
    if (l.homeType === 'condo' || l.homeType === 'apartment') up.push('HOA approval or building permit may add lead time');
    if (_qji.complexity === 'Basic Installation') up.push('Upsell opportunity: smart panel monitoring add-on');
    return up;
  })();
  openModalWith(
    `Quote Sent — ${sanitizeHTML(l.name)}`,
    `<div style="background:rgba(99,102,241,0.07);border:1px solid rgba(99,102,241,0.25);border-radius:10px;padding:14px 16px;margin-bottom:18px">
      <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#a5b4fc;margin-bottom:10px">💡 Advisory Guidance — not a required quote</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
        <div>
          <div style="font-size:.68rem;color:var(--gray);margin-bottom:3px">Suggested Range</div>
          <div style="font-weight:700;color:#4ade80;font-size:.95rem">${_qji.valueLabel}</div>
        </div>
        <div>
          <div style="font-size:.68rem;color:var(--gray);margin-bottom:3px">Complexity</div>
          <div style="font-weight:700;color:${_qji.diffColor};font-size:.88rem">${_qji.diffIcon} ${_qji.complexity}</div>
        </div>
      </div>
      <div style="font-size:.72rem;color:var(--gray);margin-bottom:4px;font-weight:600">Typical scope to include:</div>
      <div style="font-size:.8rem;color:var(--silver);line-height:1.6;margin-bottom:${_qUpsells.length?'8px':'0'}">${_qScope.map(s=>`• ${s}`).join('<br>')}</div>
      ${_qUpsells.length ? `<div style="font-size:.78rem;color:#fbbf24;margin-top:4px;line-height:1.5">${_qUpsells.map(u=>`${u}`).join('<br>')}</div>` : ''}
    </div>
    <p style="color:var(--silver);font-size:.9rem;margin:0 0 18px">Enter the price you quoted this customer. Both values are saved — the original estimate stays for reference.</p>
    <div class="form-group" style="margin-bottom:14px">
      <label class="form-label">Est. Job Value (original)</label>
      <div style="font-size:1rem;font-weight:700;color:var(--green);padding:8px 0">$${(l.value||0).toLocaleString()}</div>
    </div>
    <div class="form-group" style="margin-bottom:14px">
      <label class="form-label">Your Quoted / Agreed Price ($) <span style="color:#f87171">*</span></label>
      <input class="form-input" id="quote-amount-input" type="number" min="1" step="0.01"
        placeholder="e.g. 1450.00" value="${existingAmount}"
        style="font-size:1.05rem;font-weight:700"
        oninput="document.getElementById('quote-amount-error').style.display='none'">
      <div id="quote-amount-error" style="display:none;color:#f87171;font-size:.8rem;margin-top:4px">Please enter a valid amount greater than $0.</div>
    </div>
    <div class="form-group">
      <label class="form-label">Quote Notes <span style="color:#f87171">*</span></label>
      <textarea class="form-input" id="quote-notes-input" rows="3"
        placeholder="e.g. Includes panel upgrade, 50A circuit, 40ft conduit run"
        oninput="document.getElementById('quote-notes-error').style.display='none'">${sanitizeHTML(l.quoteNotes||'')}</textarea>
      <div id="quote-notes-error" style="display:none;color:#f87171;font-size:.8rem;margin-top:4px">Please describe what the quote includes (required for the audit trail).</div>
    </div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="saveQuoteModal('${leadId}')">💾 Save Quote & Mark Sent</button>`
  );
  setTimeout(() => document.getElementById('quote-amount-input')?.focus(), 80);
}

function saveQuoteModal(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) { closeModalDirect(); return; }

  // ── Validate amount ──────────────────────────────────────────
  const rawAmt = parseFloat(document.getElementById('quote-amount-input')?.value);
  if (!rawAmt || rawAmt <= 0 || isNaN(rawAmt)) {
    document.getElementById('quote-amount-error').style.display = 'block';
    return; // keep modal open
  }

  // ── Validate notes ───────────────────────────────────────────
  const notes = document.getElementById('quote-notes-input')?.value?.trim() ?? '';
  if (notes.length < 5) {
    document.getElementById('quote-notes-error').style.display = 'block';
    return; // keep modal open
  }

  // ── Capture previous state for activity log ──────────────────
  const _prevAmt = l.quoteAmount;
  const _actType = _prevAmt != null ? 'quote_updated' : 'quote_sent';
  const _prevVal = _prevAmt != null ? `$${Number(_prevAmt).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}` : '';
  const _newVal  = `$${rawAmt.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} — ${notes}`;

  // ── Update in-memory lead immediately ────────────────────────
  l.quoteAmount    = rawAmt;
  l.quoteNotes     = sanitizeHTML(notes);
  l.quoteUpdatedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  l.quoteUpdatedBy = currentUser?.name || currentUser?.id || '';

  if (isSupabaseReady()) {
    sbSaveQuote(leadId, rawAmt, l.quoteNotes, l.quoteUpdatedBy)
      .then(r => {
        if (!r) console.error('[DB] sbSaveQuote returned null for lead', leadId);
        else console.log('[DB] Quote saved ✓', leadId, rawAmt);
      })
      .catch(e => console.error('[DB] sbSaveQuote error:', e.message));
    const _a = _actorInfo();
    sbLogActivity(leadId, _actType, _prevVal, _newVal, _a.type, _a.id, _a.name)
      .catch(e => console.error('[DB] logActivity (saveQuoteModal):', e.message));
    // ── EVENT 3: SMS to admin on quote submitted ──────────────
    if (settings.smsAlerts && settings.adminSmsPhone) {
      const _qContractor = l.contractor ? _getContractors().find(c => c.id === l.contractor) : null;
      const _qIsDemo = _qContractor && (_qContractor.contractorType || 'real') === 'demo';
      if (!_qIsDemo) {
        const _qAmt   = `$${rawAmt.toLocaleString('en-US')}`;
        const _qCName = l.quoteUpdatedBy || (_qContractor?.name) || 'A contractor';
        sbSendSms(settings.adminSmsPhone,
          `Quote submitted: ${_qCName} quoted ${_qAmt} for lead ${leadId}.`
        );
      }
    }
  }

  // ── Transition status ────────────────────────────────────────
  closeModalDirect();
  upd(leadId, 'quote-sent');
}


// ═══════════════════════════════════════════════════════════════
// ADMIN RECLAIM / REASSIGN HELPERS
// ═══════════════════════════════════════════════════════════════

/**
 * Reclaim a lead from its current contractor back to unassigned/admin pool.
 * reason: optional admin note.
 */
function reclaimLead(leadId, reason) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const prevContractorId = l.contractor;
  const prevContractorName = prevContractorId
    ? ((_getContractors().find(c => c.id === prevContractorId) || {}).name || prevContractorId)
    : 'Unassigned';

  // Update in-memory immediately
  l.contractor = null;
  l.status     = 'new';

  closeModalDirect();
  if (document.getElementById('page-all-leads')?.classList.contains('active'))  renderLeadsTable();
  if (document.getElementById('page-assign')?.classList.contains('active'))     renderAssignTable();
  buildSidebar();
  refreshAdminDashboard();
  persist();

  const noteText = `Lead reclaimed by admin from ${prevContractorName}.${reason ? ' Reason: ' + sanitizeHTML(reason) : ''}`;
  addNote(leadId, currentUser.name || 'Admin', noteText);

  if (isSupabaseReady()) {
    sbAssignLead(leadId, null)
      .then(r => { if (!r) console.error('[DB] reclaimLead: sbAssignLead returned null'); })
      .catch(e => console.error('[DB] reclaimLead:', e.message));
    sbLogAssignmentHistory(leadId, prevContractorId, null, currentUser?.email || currentUser?.name || 'Admin', reason || '')
      .catch(e => console.error('[DB] logAssignmentHistory (reclaim):', e.message));
    const _a = _actorInfo();
    sbLogActivity(leadId, 'lead_reclaimed', prevContractorName, 'Unassigned (Admin Pool)', _a.type, _a.id, _a.name)
      .catch(e => console.error('[DB] logActivity (reclaimLead):', e.message));
  }
  showToast(`Lead reclaimed — returned to unassigned pool`);
}

/**
 * Open a modal to reassign a lead to a different contractor.
 */
function openReassignModal(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const contractors = _getContractors();
  if (contractors.length === 0) { showToast('No active contractors available.'); return; }

  const currentAssignee = l.contractor
    ? (contractors.find(c => c.id === l.contractor) || {}).name || l.contractor
    : 'Unassigned';

  openModalWith(
    `Reassign Lead — ${sanitizeHTML(l.name)}`,
    `<div style="margin-bottom:16px">
      <div class="form-label" style="margin-bottom:4px">Currently Assigned To</div>
      <div style="font-size:.95rem;font-weight:600;color:var(--yellow)">${sanitizeHTML(currentAssignee)}</div>
    </div>
    <div class="form-group" style="margin-bottom:14px">
      <label class="form-label">Assign To <span style="color:#f87171">*</span></label>
      <select class="form-input" id="reassign-contractor-select">
        <option value="">— Select Contractor —</option>
        ${contractors.map(c => `<option value="${c.id}" ${l.contractor === c.id ? 'disabled style="color:var(--gray)"' : ''}>${sanitizeHTML(c.name)}${l.contractor === c.id ? ' (current)' : ''}</option>`).join('')}
      </select>
      <div id="reassign-contractor-error" style="display:none;color:#f87171;font-size:.8rem;margin-top:4px">Please select a contractor.</div>
    </div>
    <div class="form-group">
      <label class="form-label">Reason / Note (optional)</label>
      <input class="form-input" id="reassign-reason-input" placeholder="e.g. Original contractor unavailable">
    </div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="saveReassign('${leadId}')">Reassign Lead →</button>`
  );
}

function saveReassign(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) { closeModalDirect(); return; }

  const selEl = document.getElementById('reassign-contractor-select');
  const newContractorId = selEl?.value;
  if (!newContractorId) {
    document.getElementById('reassign-contractor-error').style.display = 'block';
    return;
  }

  const reason = document.getElementById('reassign-reason-input')?.value?.trim() || '';
  const prevContractorId = l.contractor;
  const newContractor = _getContractors().find(c => c.id === newContractorId);
  const newContractorName = newContractor?.name || newContractorId;
  const prevContractorName = prevContractorId
    ? ((_getContractors().find(c => c.id === prevContractorId) || {}).name || prevContractorId)
    : 'Unassigned';

  // Update in-memory immediately
  l.contractor = newContractorId;
  l.status     = 'assigned';

  closeModalDirect();
  if (document.getElementById('page-all-leads')?.classList.contains('active'))  renderLeadsTable();
  if (document.getElementById('page-assign')?.classList.contains('active'))     renderAssignTable();
  buildSidebar();
  refreshAdminDashboard();
  persist();

  const noteText = `Reassigned by admin from ${prevContractorName} → ${newContractorName}.${reason ? ' Reason: ' + sanitizeHTML(reason) : ''}`;
  addNote(leadId, currentUser.name || 'Admin', noteText);

  _triggerAssignmentNotification(l, newContractorId);
  if (isSupabaseReady()) {
    sbAssignLead(leadId, newContractorId)
      .then(r => { if (!r) console.error('[DB] saveReassign: sbAssignLead returned null'); })
      .catch(e => console.error('[DB] saveReassign:', e.message));
    sbLogAssignmentHistory(leadId, prevContractorId, newContractorId, currentUser?.email || currentUser?.name || 'Admin', reason)
      .catch(e => console.error('[DB] logAssignmentHistory (reassign):', e.message));
    const _a = _actorInfo();
    sbLogActivity(leadId, 'lead_reassigned', prevContractorName, newContractorName, _a.type, _a.id, _a.name)
      .catch(e => console.error('[DB] logActivity (saveReassign):', e.message));
  }
  showToast(`Lead reassigned to ${newContractorName}`);
}

/**
 * Open the reclaim confirmation dialog.
 */
function openReclaimModal(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const assignedName = l.contractor
    ? ((_getContractors().find(c => c.id === l.contractor) || {}).name || l.contractor)
    : null;
  if (!assignedName) { showToast('Lead is already unassigned.'); return; }

  openModalWith(
    `Reclaim Lead — ${sanitizeHTML(l.name)}`,
    `<p style="color:var(--silver);font-size:.9rem;margin:0 0 16px">This will remove the lead from <strong style="color:var(--yellow)">${sanitizeHTML(assignedName)}</strong> and return it to the unassigned admin pool. The contractor will no longer see it on their dashboard.</p>
    <div class="form-group">
      <label class="form-label">Reason / Note (optional)</label>
      <input class="form-input" id="reclaim-reason-input" placeholder="e.g. Contractor not responding">
    </div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" style="background:rgba(239,68,68,0.15);border-color:#ef4444;color:#f87171" onclick="reclaimLead('${leadId}', document.getElementById('reclaim-reason-input')?.value?.trim())">Reclaim Lead</button>`
  );
}


// ─── LEAD EVENT TRIGGERS ─────────────────────────────────────────
/**
 * Fire an in-app notification to the target contractor when a lead is assigned.
 * Called from saveNewLead(), assignLead(), saveModal(), and saveReassign().
 * Future email/SMS hooks should be added here — not scattered in individual callers.
 *
 * @param {object} lead         - Full lead object (county, service, name etc.)
 * @param {string} contractorId - Target contractor's DB id (contractors.id)
 */
function _triggerAssignmentNotification(lead, contractorId) {
  if (!contractorId) return;
  const title = 'New lead assigned';
  const text  = `${sanitizeHTML(lead.service)} in ${sanitizeHTML(lead.county)} — ${sanitizeHTML(lead.name)}`;
  if (isSupabaseReady()) {
    sbAddContractorNotification(contractorId, title, text)
      .catch(e => console.error('[NOTIF] contractor notification failed:', e.message));
  }
  // Future hook: sendAssignmentEmail(lead, contractorId)
  // Future hook: sendAssignmentSMS(lead, contractorId)
}

// ─── ADD LEAD MODAL ─────────────────────────────────────────────
function openAddLead() {
  const contractors = _getContractors();
  openModalWith('Add New Lead',`
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Name *</label><input class="form-input" id="nl-name" placeholder="Full name" autofocus></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="nl-phone" placeholder="(xxx) xxx-xxxx"></div>
    </div>
    <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="nl-email" type="email"></div>
    <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="nl-address" placeholder="Street address"></div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">County</label><select class="form-input" id="nl-county"><option>Philadelphia</option><option>Montgomery</option><option>Bucks</option><option>Chester</option><option>Delaware</option><option>Burlington</option><option>Camden</option><option>Gloucester</option></select></div>
      <div class="form-group"><label class="form-label">State</label><select class="form-input" id="nl-state"><option value="PA">Pennsylvania</option><option value="NJ">New Jersey</option></select></div>
    </div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Service</label><select class="form-input" id="nl-service"><option>Level 2 Home Charger</option><option>Level 2 + Smart Panel Upgrade</option><option>Commercial Fleet Charger</option><option>Level 2 Condo Install</option><option>Level 2 Outlet Upgrade</option></select></div>
      <div class="form-group"><label class="form-label">Priority</label><select class="form-input" id="nl-priority"><option value="normal">Normal</option><option value="high">High</option></select></div>
    </div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Est. Value ($)</label><input class="form-input" id="nl-value" type="number" placeholder="1200"></div>
      <div class="form-group"><label class="form-label">Assign To <span style="font-weight:400;color:var(--gray)">(optional)</span></label>
        <select class="form-input" id="nl-contractor">
          <option value="">— Unassigned —</option>
          ${contractors.map(c=>`<option value="${c.id}">${sanitizeHTML(c.companyName||c.name||c.id)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Call Notes <span style="font-weight:400;color:var(--gray)">(optional)</span></label>
      <textarea class="form-input" id="nl-call-notes" rows="3" placeholder="Panel location, customer notes, call context, rebate questions…" style="resize:vertical"></textarea>
    </div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button><button class="btn btn-primary" onclick="saveNewLead()">Add Lead →</button>`);
}
function saveNewLead() {
  const rawName = document.getElementById('nl-name')?.value?.trim();
  if (!rawName) { showToast('Please enter a customer name'); return; }
  const name       = sanitizeHTML(rawName);
  const county     = sanitizeHTML(document.getElementById('nl-county').value);
  const state      = sanitizeHTML(document.getElementById('nl-state').value);
  const service    = sanitizeHTML(document.getElementById('nl-service').value);
  const callNotes  = sanitizeHTML((document.getElementById('nl-call-notes')?.value || '').trim());
  const assignTo   = document.getElementById('nl-contractor')?.value || '';
  const newLead  = {
    id: 'L' + String(Date.now()).slice(-6),
    name, phone: sanitizeHTML(document.getElementById('nl-phone').value),
    email: sanitizeHTML(document.getElementById('nl-email').value),
    address: sanitizeHTML(document.getElementById('nl-address').value), city:'',
    county, state, service,
    panel:'200A', charger:'TBD',
    rebate: state==='NJ' ? 'PSE&G Make-Ready' : 'Federal Tax Credit',
    status: assignTo ? 'assigned' : 'new',
    contractor: assignTo || null,
    created: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}),
    value: parseInt(document.getElementById('nl-value').value) || 1200,
    callNotes,
    notes:[], priority: document.getElementById('nl-priority').value,
    complexity: service.toLowerCase().includes('commercial') ? 'Commercial Install' : 'Basic Installation',
    panelSize: '200amp', distance: 'notsure',
    chargerBrand: '', installLocation: '', leadSource: 'Manual Entry',
    contactedAt: null, review: null,
  };
  /* Enrich with job intelligence so intel cards and estimator work */
  const ji = getJobIntelligence(newLead);
  newLead.installTime    = ji.timeLabel;
  newLead.profitPotential= ji.profit;
  newLead.difficulty     = ji.difficulty;
  leads.push(newLead);
  persist();
  if (isSupabaseReady()) {
    const _a = _actorInfo();
    sbCreateLead(newLead).then(r => {
      if (!r) {
        console.error('[DB]', JSON.stringify({ step: 'lead_insert', source: 'manual_entry', lead_id: newLead.id, result: 'failure', error: 'createLead returned null — likely RLS policy. Run schema_v3_rls_fix.sql.' }));
      } else {
        sbLogActivity(newLead.id, 'lead_created', '', `${newLead.service} — Est. $${newLead.value.toLocaleString()}`, _a.type, _a.id, _a.name)
          .catch(e => console.error('[DB] logActivity (saveNewLead):', e.message));
        if (assignTo) {
          const contractorName = (_getContractors().find(c=>c.id===assignTo)||{}).name || assignTo;
          sbLogActivity(newLead.id, 'lead_assigned', 'Unassigned', contractorName, _a.type, _a.id, _a.name)
            .catch(e => console.error('[DB] logActivity (saveNewLead assign):', e.message));
          _triggerAssignmentNotification(newLead, assignTo);
        }
      }
    }).catch(e => console.error('[DB]', JSON.stringify({ step: 'lead_insert', source: 'manual_entry', lead_id: newLead.id, error: e.message })));
  }
  // Add assignment note to thread after lead exists locally
  if (assignTo) {
    const contractorName = (_getContractors().find(c=>c.id===assignTo)||{}).name || assignTo;
    addNote(newLead.id, 'Admin', `Assigned to ${contractorName}.`);
  }
  closeModalDirect();
  renderLeadsTable(); buildSidebar();
  refreshAdminDashboard();
  const assignedName = assignTo ? ((_getContractors().find(c=>c.id===assignTo)||{}).name || assignTo) : null;
  addNotification(assignedName
    ? `New lead assigned to <strong>${sanitizeHTML(assignedName)}</strong> — ${sanitizeHTML(name)}`
    : `New lead added: <strong>${sanitizeHTML(name)}</strong>`);
  showToast(assignedName ? `Lead added and assigned to ${assignedName}` : 'Lead added — ' + name);
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════
function renderNotifDot() {
  const unread = notifications.filter(n=>!n.read).length;
  const dot = document.getElementById('notif-dot');
  if (dot) dot.style.display = unread > 0 ? 'block' : 'none';
}
function renderNotifList() {
  const list = document.getElementById('notif-list');
  if (!list) return;
  if (notifications.length === 0) { list.innerHTML = `<div style="padding:20px;text-align:center;color:var(--gray);font-size:.85rem">No notifications</div>`; return; }
  list.innerHTML = notifications.map(n=>`<div class="notif-item" style="${!n.read?'background:rgba(59,130,246,0.05)':''}">
    ${n.title ? `<div style="font-size:.8rem;font-weight:600;color:var(--blue);margin-bottom:3px">${n.title}</div>` : ''}
    <span style="font-size:.83rem">${n.text}</span>
    <div class="notif-time">${n.time}</div>
  </div>`).join('');
}
function toggleNotif() {
  notifOpen = !notifOpen;
  const panel = document.getElementById('notif-panel');
  panel.classList.toggle('open', notifOpen);
  if (notifOpen) {
    notifications.forEach(n=>n.read=true);
    renderNotifDot();
    renderNotifList();
    // Mark read in DB — admin uses sbMarkNotificationsRead, contractor uses scoped version
    if (isSupabaseReady()) {
      if (currentUser?.role === 'contractor' && currentUser.id) {
        sbMarkContractorNotificationsRead(currentUser.id)
          .catch(e => console.warn('[NOTIF] mark contractor read:', e.message));
      } else if (currentUser?.role === 'admin') {
        sbMarkNotificationsRead()
          .catch(e => console.warn('[NOTIF] mark admin read:', e.message));
      }
    }
  }
}
function clearNotifs() { notifications=[]; renderNotifList(); persist(); showToast('Notifications cleared'); }
function addNotification(text) {
  notifications.unshift({id:Date.now(),text,time:'Just now',read:false});
  renderNotifDot();
  // Only write to Supabase when admin is signed in.
  // Public (anon) callers have no notifications INSERT policy — any attempt
  // produces a 401 that masks whether the lead insert itself succeeded or failed.
  if (isSupabaseReady() && currentUser?.role === 'admin') {
    console.log('[NOTIFS] Writing to DB (admin session)');
    sbAddNotification(text).catch(e => console.warn('[NOTIFS] DB write failed:', e.message));
  } else {
    console.log('[NOTIFS] Skipping DB write | role:', currentUser?.role ?? 'anon/none');
  }
}
document.addEventListener('click', e => {
  if (!e.target.closest('#notif-btn') && !e.target.closest('#notif-panel')) {
    document.getElementById('notif-panel').classList.remove('open');
    notifOpen = false;
  }
});

// ═══════════════════════════════════════════════════════════════
// GLOBAL SEARCH
// ═══════════════════════════════════════════════════════════════
function globalSearch(q) {
  if (!q || q.length < 2) return;
  const results = leads.filter(l =>
    l.name.toLowerCase().includes(q.toLowerCase()) ||
    l.phone.includes(q) ||
    l.email.toLowerCase().includes(q.toLowerCase()) ||
    l.county.toLowerCase().includes(q.toLowerCase())
  );
  if (results.length > 0) {
    openModalWith(`Search: "${q}" (${results.length} results)`,
      `<table class="leads-table"><thead><tr><th>Name</th><th>County</th><th>Status</th><th></th></tr></thead><tbody>
      ${results.map(l=>`<tr><td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.phone}</div></td><td>${l.county},${l.state}</td><td><span class="badge badge-${l.status}">${cap(l.status)}</span></td><td><button class="btn-icon" onclick="closeModalDirect();setTimeout(()=>openLeadDetail('${l.id}'),100)">→</button></td></tr>`).join('')}
      </tbody></table>`,
      `<button class="btn btn-outline" onclick="closeModalDirect()">Close</button>`);
  }
}

// ═══════════════════════════════════════════════════════════════
// EXPORT CSV
// ═══════════════════════════════════════════════════════════════
function exportCSV(filter) {
  const data = filter ? leads.filter(l=>l.status===filter) : leads;
  const headers = ['ID','Name','Phone','Email','Address','County','State','Service','Value','Status','Contractor','Date'];
  const rows = data.map(l => [
    l.id, l.name, l.phone, l.email, l.address, l.county, l.state,
    l.service, l.value, l.status,
    l.contractor ? (_getContractors().find(c=>c.id===l.contractor)||{}).name||'' : '',
    l.created
  ]);
  const csv = [headers,...rows].map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=`expertev-leads-${new Date().toISOString().slice(0,10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast(`Exported ${data.length} leads to CSV`);
}

// ═══════════════════════════════════════════════════════════════
// CUSTOMER REVIEW SYSTEM
// ═══════════════════════════════════════════════════════════════
function openReviewModal(lid) {
  const l = leads.find(x=>x.id===lid);
  if (!l) return;
  openModalWith(`Request Review — ${l.name}`,`
    <div class="alert-box info">📩 <div>A review request SMS will be sent to <strong>${l.name}</strong> at <strong>${l.phone}</strong>.</div></div>
    <div style="background:var(--navy-light);border:1px solid var(--navy-border);border-radius:8px;padding:14px 16px;font-size:.85rem;line-height:1.65;color:var(--silver);margin-bottom:16px">
      "Hi ${l.name.split(' ')[0]}! We just finished your EV charger installation — hope everything looks great. Would you mind leaving us a quick Google review? It really helps our small business grow. Thank you! — Expert EV Installers"
    </div>
    <div style="font-size:.8rem;font-weight:600;color:var(--gray);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em">Or log a review directly:</div>
    <div class="form-group"><label class="form-label">Star Rating</label>
      <select class="form-input" id="rev-rating"><option value="5">⭐⭐⭐⭐⭐ 5 stars</option><option value="4">⭐⭐⭐⭐ 4 stars</option><option value="3">⭐⭐⭐ 3 stars</option></select></div>
    <div class="form-group"><label class="form-label">Review Text</label>
      <input class="form-input" id="rev-text" placeholder="Customer's feedback..."></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="saveReview('${lid}')">💬 Save Review</button>`);
}
function saveReview(lid) {
  const l = leads.find(x=>x.id===lid);
  if (!l) return;
  const rating = parseInt(document.getElementById('rev-rating')?.value||'5');
  const text   = document.getElementById('rev-text')?.value?.trim() || 'Great service!';
  l.review = { rating, text, date: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) };
  persist();
  closeModalDirect();
  showToast(`Review saved for ${l.name} — ${rating}⭐`);
  addNotification(`⭐ New ${rating}-star review from <strong>${sanitizeHTML(l.name)}</strong>`);
}

// ─── ADMIN LEAD QUALITY REVIEW ──────────────────────────────────
function openQualityReview(lid) {
  const l = leads.find(x=>x.id===lid);
  if (!l) return;
  const valRange = estimateJobValue(l.complexity||'Basic Installation');
  openModalWith(`Quality Review — ${l.id}`,`
    <div class="alert-box info">🔍 <div>Admin quality review. Flag, reassign, or escalate this lead.</div></div>
    <div class="detail-row"><div class="detail-label">Lead Complexity</div><div class="detail-value" style="font-weight:600">${l.complexity||'Unknown'}</div></div>
    <div class="detail-row"><div class="detail-label">Estimated Value</div><div class="detail-value" style="color:var(--green)">${valRange.label}</div></div>
    <div class="detail-row"><div class="detail-label">Lead Source</div><div class="detail-value">${l.leadSource||'Direct'}</div></div>
    <div class="detail-row"><div class="detail-label">Contacted?</div><div class="detail-value" style="color:${l.contactedAt?'var(--green)':'var(--red)'}">${l.contactedAt||'Not yet'}</div></div>
    <div class="form-group" style="margin-top:14px"><label class="form-label">Dispute / Admin Note</label>
      <input class="form-input" id="qa-note" placeholder="e.g. Customer disputed install quality. Escalating to assigned contractor."></div>
    <div class="form-group"><label class="form-label">Override Contractor Assignment</label>
      <select class="form-input" id="qa-contractor">
        <option value="">— Keep current —</option>
        ${_getContractors().map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
      </select></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-primary" onclick="saveQualityReview('${lid}')">Save Review</button>`);
}
function saveQualityReview(lid) {
  const l = leads.find(x=>x.id===lid);
  if (!l) return;
  const note = document.getElementById('qa-note')?.value?.trim();
  const newC = document.getElementById('qa-contractor')?.value;
  if (note) addNote(lid,'Admin (QA)',note);
  if (newC) { l.contractor = newC; addNote(lid,'Admin','Contractor overridden via quality review.'); }
  persist();
  closeModalDirect();
  showToast('Quality review saved');
  if (document.getElementById('page-all-leads')?.classList.contains('active')) renderLeadsTable();
}

// ═══════════════════════════════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════════════════════════════
function openModalWith(title, body, footer) {
  document.getElementById('modal').classList.remove('modal-lg');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML   = body;
  document.getElementById('modal-footer').innerHTML = footer || '';
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(e)  { if (e.target === document.getElementById('modal-overlay')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal-overlay').classList.remove('open'); }


// Dashboard initialised lazily when portal opens (see openDashboard)



/* ════════════════════════════════════════════════
   FAQ ACCORDION (website)
════════════════════════════════════════════════ */
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const wasOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-btn').forEach(b => {
    b.classList.remove('open');
    const a = b.nextElementSibling;
    if (a) { a.style.maxHeight = '0'; a.style.opacity = '0'; }
  });
  if (!wasOpen) {
    btn.classList.add('open');
    if (ans) { ans.style.maxHeight = ans.scrollHeight + 'px'; ans.style.opacity = '1'; }
  }
}

/* ════════════════════════════════════════════════
   DASHBOARD BRIDGE — open/close overlay
════════════════════════════════════════════════ */
/* Portal opened via nav button */

// Lazily inject dashboard.css the first time the portal is opened.
// Kept out of main.css to eliminate ~35KB of unused CSS on the public homepage.
function _loadDashboardCSS() {
  if (document.getElementById('dashboard-css')) return; // already loaded
  const link = document.createElement('link');
  link.id   = 'dashboard-css';
  link.rel  = 'stylesheet';
  link.href = 'assets/styles/dashboard.css';
  document.head.appendChild(link);
}

function openDashboard() {
  const overlay = document.getElementById('dash-overlay');
  if (!overlay) return;
  _loadDashboardCSS();
  // Record that the user explicitly entered the portal so session restore
  // can auto-open it on refresh. Cleared in closeDashboardOverlay / doLogout.
  sessionStorage.setItem('ev_portal_open', '1');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!_dashInited) {
    _dashInited = true;
    // Small delay to let overlay render before JS reads layout
    setTimeout(() => {
      renderNotifList();
      _setupAuthStateChange();
    }, 50);
  }
}

function closeDashboardOverlay() {
  const overlay = document.getElementById('dash-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    // Clear portal intent — next page visit will show the public site, not the dashboard.
    sessionStorage.removeItem('ev_portal_open');
    document.getElementById('page-home')?.classList.add('active');
    // Tear down realtime before clearing state
    _teardownRealtimeSubscriptions();
    // Log out when closing so dashboard resets if re-opened
    if (typeof currentUser !== 'undefined' && currentUser) {
      // silently reset state without showing login screen flicker
      currentUser = null;
      currentContractor = null;
      document.getElementById('login-screen').style.display = 'flex';
      document.getElementById('app').style.display = 'none';
    }
  }
}

/* ESC closes dashboard */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('dash-overlay');
    if (overlay && overlay.classList.contains('open')) closeDashboardOverlay();
  }
});

/* ── Startup router — handle direct URL visits and browser refresh ──
   Runs once on page load. If the URL path matches a county slug,
   auto-navigate to that county page without pushing a new history entry. */
(function _startupRouter() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (slug && CD[slug]) {
    goCounty(slug, false);
  }
}());


