/* ============================================================
   COUNTY DATA
============================================================ */
const CD = {
  philadelphia: {
    name:"Philadelphia County", state:"PA", isNJ:false,
    phone:"(215) 555-0199", tel:"+12155550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Philadelphia, PA",
    desc:`<strong>Licensed Philadelphia electricians</strong> installing Level 2 EV chargers across all 48 neighborhoods — from Center City to Northeast Philly, South Philly to Chestnut Hill. Every installation is permitted through Philadelphia L&I and warrantied for 1 year.`,
    checks:["PA-licensed electrician on every job","Philadelphia L&I permit filed and inspection passed","30% federal credit — we file for you","1-year workmanship warranty in writing","Same-week availability in most Philadelphia neighborhoods"],
    cities:"Center City · Northeast Philadelphia · South Philadelphia · Germantown · Roxborough · Manayunk · Fishtown · Chestnut Hill · Frankford · Kensington · Port Richmond · West Philadelphia · Olney · Logan · Grays Ferry",
    rebate:"PECO",
    rebateDesc:"Philadelphia homeowners can claim the 30% federal tax credit on their total project cost (up to $1,000). We identify every available incentive and file the paperwork so you don't miss a dollar.",
    permit:"Philadelphia L&I (Licenses & Inspections) handles electrical permits for all Philadelphia installations. We file the application, schedule the electrical inspection, and guarantee passing on the first visit.",
    fact:"Philadelphia is one of the fastest-growing EV cities in the Northeast, with EV registrations up over 40% in 2024. Demand for home charger installations is outpacing supply — book early.",
    pop:"1.57M"
  },
  montgomery: {
    name:"Montgomery County", state:"PA", isNJ:false,
    phone:"(215) 555-0199", tel:"+12155550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Montgomery County, PA",
    desc:`Serving all of Montgomery County — <strong>King of Prussia, Norristown, Blue Bell, Lansdale, Horsham</strong>, and every township in between. Our electricians know Montgomery County's permit landscape across all 62 municipalities.`,
    checks:["PA-licensed electrician assigned to your township","MontCo township permit filed — all 62 municipalities","Free panel assessment before any work begins","Same-week scheduling for most MontCo areas"],
    cities:"Norristown · King of Prussia · Blue Bell · Lansdale · Horsham · Ambler · Hatboro · Pottstown · Jenkintown · Willow Grove · Montgomeryville · Abington · Glenside · Cheltenham · Bryn Mawr · Ardmore",
    rebate:"PECO",
    rebateDesc:"Montgomery County homeowners qualify for the 30% federal tax credit on their total project cost (up to $1,000). We identify all available incentives and file the paperwork for you.",
    permit:"Montgomery County's 62 municipalities each have slightly different permit requirements. Our electricians have filed permits across the county and know exactly what each township requires.",
    fact:"Montgomery County leads Pennsylvania in EV registrations per capita outside Philadelphia — driven by high incomes and suburban commuter households in KOP, Lansdale, and Horsham.",
    pop:"860K"
  },
  bucks: {
    name:"Bucks County", state:"PA", isNJ:false,
    phone:"(215) 555-0199", tel:"+12155550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Bucks County, PA",
    desc:`Expert EV charger installation throughout Bucks County. From <strong>Doylestown and New Hope to Newtown and Bensalem</strong>, we serve every borough and township — including rural properties with detached garages requiring longer conduit runs.`,
    checks:["PA-licensed electrician serving all of Bucks County","Borough and township permits filed across Bucks County","30% federal credit identified and filed for you","Rural and detached garage installs welcome","1-year workmanship warranty, written before we start"],
    cities:"Doylestown · Newtown · Bensalem · Levittown · Bristol · Quakertown · New Hope · Warminster · Yardley · Richboro · Langhorne · Telford · Perkasie · Sellersville · Chalfont · Warrington",
    rebate:"PECO / Met-Ed",
    rebateDesc:"Bucks County homeowners qualify for the 30% federal tax credit on their total project cost (up to $1,000). We identify every available incentive and handle all the paperwork.",
    permit:"Bucks County has dozens of separate permit jurisdictions. We file with the correct authority for your specific borough or township — and know the typical timeline for each.",
    fact:"Many Bucks County properties are larger rural homes with detached garages — which require longer conduit runs and sometimes underground trenching. We price this transparently and do it cleanly.",
    pop:"646K"
  },
  chester: {
    name:"Chester County", state:"PA", isNJ:false,
    phone:"(610) 555-0199", tel:"+16105550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Chester County, PA",
    desc:`Chester County homeowners — we specialize in both straightforward garage installs and complex projects requiring panel upgrades. <strong>West Chester, Malvern, Exton, and Phoenixville</strong> are among our most active areas.`,
    checks:["PA-licensed electrician for all Chester County townships","Township permits filed — from Tredyffrin to West Sadsbury","30% federal credit identified and filed for you","Free panel assessment — no surprise upgrade bills","Tesla Wall Connector and all brands installed"],
    cities:"West Chester · Malvern · Coatesville · Kennett Square · Phoenixville · Downingtown · Exton · Paoli · Oxford · Berwyn · Devon · Frazer · Avondale · Chadds Ford · Thorndale",
    rebate:"PECO",
    rebateDesc:"Chester County homeowners qualify for the 30% federal tax credit on their total project cost (up to $1,000). We identify all available incentives and file the paperwork — average Chester County savings: $500–$1,000.",
    permit:"Chester County spans dozens of municipalities from Tredyffrin to West Sadsbury. Our electricians handle permits across the full county and are familiar with each township's requirements.",
    fact:"Chester County has the highest median household income in Pennsylvania and one of the highest EV ownership rates. Tesla and Rivian are the most commonly installed brands in our Chester County jobs.",
    pop:"540K"
  },
  delaware: {
    name:"Delaware County", state:"PA", isNJ:false,
    phone:"(610) 555-0199", tel:"+16105550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Delaware County, PA",
    desc:`Serving Delaware County from <strong>Media and Havertown to Upper Darby and Swarthmore</strong>. Delco's dense suburban landscape and older housing stock means many homes need panel evaluation before installation — our free assessment catches issues upfront.`,
    checks:["PA-licensed electrician with Delco permit experience","Delaware County's 49 municipalities — we know each one","30% federal credit identified and filed for you","Older home and small panel specialists","Free site assessment — no surprise panel upgrade bills"],
    cities:"Media · Havertown · Upper Darby · Springfield · Swarthmore · Chester · Drexel Hill · Folcroft · Marcus Hook · Ridley Park · Collingdale · Clifton Heights · Darby · Broomall · Newtown Square",
    rebate:"PECO",
    rebateDesc:"Delaware County homeowners qualify for the 30% federal tax credit on their total project cost (up to $1,000). Many Delco homes also qualify for additional incentives — we assess and file everything in one step.",
    permit:"Delaware County has 49 separate municipalities — one of the highest densities of separate permit authorities in Pennsylvania. We navigate this for you so the permit doesn't slow down your install.",
    fact:"Approximately 30% of Delaware County homes were built between 1940–1970 and have 60A or 100A panels. We're Delaware County's panel upgrade specialists and bundle panel + charger in one visit.",
    pop:"576K"
  },
  burlington: {
    name:"Burlington County", state:"NJ", isNJ:true,
    phone:"(856) 555-0199", tel:"+18565550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Burlington County, NJ",
    desc:`Burlington County NJ homeowners — <strong>NJ-licensed electricians</strong> installing Level 2 EV chargers across Moorestown, Mt. Laurel, Marlton, and all surrounding towns. NJ permits, PSE&G rebates, and NJ Clean Energy credits handled for you.`,
    checks:["NJ-licensed master electrician on every job","All NJ electrical permits filed and inspection passed","PSE&G rebate + federal 30% credit + NJ tax exemption filed","Burlington County township approvals handled","1-year workmanship warranty — in writing"],
    cities:"Mount Holly · Moorestown · Marlton · Mount Laurel · Burlington City · Medford · Cinnaminson · Evesham · Lumberton · Hainesport · Delran · Bordentown · Florence · Eastampton · Pemberton",
    rebate:"PSE&G",
    rebateDesc:"PSE&G's Make-Ready program offers credits covering wiring, permits, and panel upgrades for Burlington County NJ customers — up to $1,500. Add the 30% federal tax credit and $0 NJ sales tax on labor. We file everything.",
    permit:"NJ requires specific electrical permits and township approvals. Our NJ-licensed electricians file all paperwork and schedule the NJ electrical inspection — passing the first time, every time.",
    fact:"Burlington County is one of NJ's fastest-growing counties, with major new residential development in Mount Laurel and Evesham driving rapid EV adoption among new homeowners.",
    pop:"461K"
  },
  camden: {
    name:"Camden County", state:"NJ", isNJ:true,
    phone:"(856) 555-0199", tel:"+18565550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Camden County, NJ",
    desc:`Expert EV charger installation across Camden County NJ — <strong>Cherry Hill, Voorhees, Haddonfield</strong>, and all surrounding towns. NJ-licensed electricians who pass inspections the first time and maximize your PSE&G rebates.`,
    checks:["NJ-licensed master electrician — verified and insured","NJ electrical permit and inspection handled completely","PSE&G rebate + federal 30% + NJ tax exemption filed","All EV brands and charger models installed","Same-week scheduling available in most Camden County towns"],
    cities:"Cherry Hill · Voorhees · Haddonfield · Audubon · Collingswood · Gloucester City · Pennsauken · Lindenwold · Berlin · Bellmawr · Barrington · Stratford · Somerdale · Merchantville · Haddon Heights",
    rebate:"PSE&G",
    rebateDesc:"PSE&G's Make-Ready program covers wiring, permits, and panel upgrades for Camden County NJ customers — up to $1,500. Stack the 30% federal credit and $0 NJ sales tax on labor. Our customers average $500–$1,500 in total savings.",
    permit:"All Camden County NJ electrical permits filed and NJ inspection scheduled by our NJ-licensed team. Cherry Hill, Voorhees, and surrounding municipalities — we handle each one.",
    fact:"Camden County is the most EV-dense county in South Jersey. Cherry Hill and Voorhees lead the county in EV ownership, with Tesla and BMW i-series being the most common vehicles we install for.",
    pop:"510K"
  },
  gloucester: {
    name:"Gloucester County", state:"NJ", isNJ:true,
    phone:"(856) 555-0199", tel:"+18565550199",
    h1a:"EV Charger", h1b:"Installation", h1c:"Gloucester County, NJ",
    desc:`Serving Gloucester County NJ homeowners across <strong>Woodbury, Washington Township, Glassboro, and Sewell</strong>. Professional Level 2 EV charger installations with full NJ licensing, permits, and PSE&G rebate filing.`,
    checks:["NJ-licensed electrician for every Gloucester County install","All NJ permits filed and inspections passed","PSE&G rebate + federal 30% + NJ tax exemption handled","Washington Township and Monroe new construction specialists","1-year warranty on all labor"],
    cities:"Woodbury · Washington Township · Glassboro · Sewell · Turnersville · Deptford · Monroe · Williamstown · Pitman · Clayton · Swedesboro · West Deptford · Paulsboro · Mantua · Franklin Township",
    rebate:"PSE&G",
    rebateDesc:"PSE&G and JCP&L Make-Ready credits cover wiring, permits, and panel upgrades for Gloucester County NJ customers — up to $1,500. Plus the 30% federal credit and $0 NJ sales tax on labor. We identify and file everything.",
    permit:"All Gloucester County NJ electrical permits filed. Our NJ-licensed electricians handle permit applications and NJ electrical inspections across every Gloucester County municipality.",
    fact:"Gloucester County is experiencing rapid residential development in Washington Township and Monroe Township, making it one of the fastest-growing EV charger markets in South Jersey.",
    pop:"300K"
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

function goHome() { showPage('home'); }

function goCounty(id) {
  const c = CD[id];
  if (!c) return;
  buildCounty(c, id);
  showPage('county');
}

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

          <a href="tel:${c.tel}" class="cp-phone">📞 ${c.phone}</a>
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
            <input type="hidden" name="county_page" value="${c.name}">
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
            <button class="form-submit-btn" onclick="submitForm('cpff-${id}','cpfs-${id}')">⚡ Get ${c.name} Quote</button>
            <div class="form-micro">
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Private</div>
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>2hr Reply</div>
              <div class="form-micro-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>No Spam</div>
            </div>
          </div>
          <div class="form-success" id="cpfs-${id}">
            <div class="success-icon">⚡</div>
            <div class="success-h">Request Sent!</div>
            <p class="success-p">A ${c.name} electrician calls within 2 hours.<br><a href="tel:${c.tel}" style="color:var(--orange);">${c.phone}</a></p>
          </div>
        </div>
      </div>

      <!-- TRUST ROW -->
      <div class="cp-trust-row">
        <div class="cp-trust-item"><div class="cp-trust-icon">🏅</div><h4>${c.state} Licensed</h4><p>Verified license in ${c.isNJ ? 'New Jersey' : 'Pennsylvania'} — every electrician we send.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">🔒</div><h4>$2M Insured</h4><p>Full general liability + workers comp. Your home is protected.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">📋</div><h4>Permits Handled</h4><p>${c.permit.split('.')[0]}.</p></div>
        <div class="cp-trust-item"><div class="cp-trust-icon">💰</div><h4>${c.rebate} Rebate</h4><p>${c.rebateDesc.split('.')[0]}.</p></div>
      </div>
    </div>
  </section>

  <!-- REBATE DETAIL -->
  <section class="section section-alt">
    <div class="wrap">
      <div class="section-eyebrow">Savings for ${c.name} Homeowners</div>
      <h2 class="section-h2">Your <span class="gold">Rebate Breakdown</span></h2>
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
        <p class="cta-p">Call our ${c.name} team or submit the form above. Licensed electrician calls within 2 hours. Same-week installs available.</p>
        <a href="tel:${c.tel}" class="cta-phone-big">⚡ ${c.phone}</a>
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
          <p class="footer-desc">Licensed EV charger installation in ${c.name}, ${c.state}. Powered by Red Flow Electric. Permitted, insured, warranted.</p>
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
            <li><a href="tel:+12155550199">PA: (215) 555-0199</a></li>
            <li><a href="tel:+18565550199">NJ: (856) 555-0199</a></li>
            <li><a href="mailto:info@expertevinstallers.com">Email Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2025 Expert EV Installers · ${c.name} · ${c.state} Licensed</div>
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
function getJobIntelligence(l) {
  const panelSize    = l.panelSize    || 'notsure';
  const distance     = l.distance     || 'notsure';
  const chargerBrand = l.chargerBrand || '';
  const service      = (l.service     || '').toLowerCase();

  const isCommercial = chargerBrand === 'commercial' || service.includes('commercial') || service.includes('fleet');
  const is100amp     = panelSize === '100amp';
  const isFarRun     = distance === 'over50';
  const isMedRun     = distance === '25to50';
  const isCloseRun   = distance === 'under10' || distance === '10to25';

  let complexity, valueMin, valueMax, valueMid, timeMin, timeMax, difficulty;

  if (isCommercial) {
    complexity = 'Commercial Install';
    valueMin = 5000; valueMax = 15000; valueMid = 8000;
    timeMin  = 6;    timeMax  = 12;
    difficulty = 'Complex';
  } else if (is100amp) {
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

  return {
    complexity,
    valueMin, valueMax, valueMid,
    valueLabel: `$${valueMin.toLocaleString()} – $${valueMax.toLocaleString()}`,
    timeLabel:  `${timeMin}–${timeMax} hours`,
    difficulty, diffColor: dm.color, diffBg: dm.bg, diffIcon: dm.icon,
    profit, profitColor, profitBg,
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

/* ── AI Panel Photo Analysis (simulated) ── */
function runPanelAnalysis(leadId) {
  const l = leads.find(x => x.id === leadId);
  if (!l) return;
  const sec = document.getElementById('ai-panel-section-' + leadId);
  if (!sec) return;

  // Show scanning animation
  sec.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0">
      <div style="width:18px;height:18px;border:2px solid rgba(99,102,241,.3);border-top-color:#a5b4fc;border-radius:50%;animation:spin .7s linear infinite;flex-shrink:0"></div>
      <div>
        <div style="font-size:.82rem;color:#a5b4fc;font-weight:600">Analyzing panel photo…</div>
        <div style="font-size:.74rem;color:var(--gray);margin-top:2px">Running electrical panel detection model</div>
      </div>
    </div>
    <div style="margin-top:10px;height:4px;background:rgba(99,102,241,.15);border-radius:4px;overflow:hidden">
      <div id="ai-progress-${leadId}" style="height:100%;width:0%;background:linear-gradient(90deg,#6366f1,#a5b4fc);border-radius:4px;transition:width .3s ease"></div>
    </div>`;

  // Animate progress bar
  let pct = 0;
  const prog = document.getElementById('ai-progress-' + leadId);
  const ticker = setInterval(() => {
    pct = Math.min(pct + Math.random() * 18 + 4, 92);
    if (prog) prog.style.width = pct + '%';
  }, 250);

  // Mock analysis results based on lead data
  setTimeout(() => {
    clearInterval(ticker);
    if (prog) prog.style.width = '100%';

    const panelSize = l.panelSize || 'notsure';
    const ji = getJobIntelligence(l);

    // Pick realistic mock results from panel data
    const panelTypes = { '200amp':'Square D QO 200A Main Breaker', '150amp':'Siemens PL 150A Main Breaker', '100amp':'Cutler-Hammer 100A Legacy Panel', notsure:'Unidentified Panel — Inspection Required' };
    const amperages = { '200amp':'200A', '150amp':'150A', '100amp':'100A', notsure:'~100–125A (estimated)' };
    const slotMaps  = { '200amp':'6 slots available (40A capacity)', '150amp':'3 slots available (20A capacity)', '100amp':'0 slots — panel full', notsure:'Unknown — field inspection needed' };
    const upgradeMap= { '200amp':'None required', '150amp':'Sub-panel recommended for EVSE', '100amp':'Panel upgrade required — 200A upgrade advised', notsure:'Cannot determine — on-site evaluation required' };

    l.aiAnalysis = {
      panelType:    panelTypes[panelSize]  || panelTypes.notsure,
      amperage:     amperages[panelSize]   || amperages.notsure,
      breakers:     slotMaps[panelSize]    || slotMaps.notsure,
      upgradeNeeded:upgradeMap[panelSize]  || upgradeMap.notsure,
      adjustedComplexity: ji.complexity,
      adjustedValue: '$' + ji.valueMin.toLocaleString() + ' – $' + ji.valueMax.toLocaleString(),
      confidence:   panelSize !== 'notsure' ? '94%' : '61%',
      analyzedAt:   new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
    };

    // Re-render AI section with results
    const rows = [
      ['Panel Type',          l.aiAnalysis.panelType],
      ['Amperage Detected',   l.aiAnalysis.amperage],
      ['Breaker Availability',l.aiAnalysis.breakers],
      ['Upgrade Requirement', l.aiAnalysis.upgradeNeeded],
      ['Adjusted Complexity', l.aiAnalysis.adjustedComplexity],
      ['Adjusted Est. Value', l.aiAnalysis.adjustedValue],
      ['AI Confidence',       l.aiAnalysis.confidence],
    ];
    sec.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:7px">
          <span style="font-size:.8rem;font-weight:700;color:#a5b4fc">🤖 AI Panel Analysis</span>
          <span style="font-size:.7rem;background:rgba(74,222,128,.15);color:#4ade80;border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:2px 8px">Complete</span>
        </div>
        <span style="font-size:.7rem;color:var(--gray)">Analyzed at ${l.aiAnalysis.analyzedAt}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:0">
        ${rows.map(([lbl,val],i)=>`
        <div class="ai-result-row" style="${i%2===0?'background:rgba(255,255,255,.02)':''}">
          <span class="ai-result-label">${lbl}</span>
          <span class="ai-result-val">${val}</span>
        </div>`).join('')}
      </div>
      <div style="margin-top:10px;font-size:.74rem;color:rgba(165,180,252,.6);border-top:1px solid rgba(99,102,241,.15);padding-top:8px">
        ⚠ AI analysis is a decision-support tool. Always perform an on-site inspection before quoting.
      </div>`;

    showToast('✅ Panel analysis complete — results ready');
    addNotification(`🤖 AI analysis complete for lead ${sanitizeHTML(l.name || leadId)}`);
  }, 2800);
}

/* ── Auto Territory Assignment (round-robin) ── */
let _rrIndex = {};
function autoAssignByCounty(county, state) {
  if (!settings.autoAssign) return null;
  const eligible = CONTRACTORS.filter(c => c.counties.includes(county) && c.status === 'active');
  if (!eligible.length) return null;
  const key = county;
  _rrIndex[key] = (_rrIndex[key] || 0) % eligible.length;
  const assigned = eligible[_rrIndex[key]];
  _rrIndex[key]++;
  return assigned.id;
}

function submitForm(fieldsId, successId) {
  const f = document.getElementById(fieldsId);
  const s = document.getElementById(successId);
  if (!f) return;

  /* ── 1. HONEYPOT: bots fill hidden fields, humans don't ── */
  const honeypot = f.querySelector('[name="website"]');
  if (honeypot && honeypot.value.trim() !== '') return; // silent reject

  /* ── 2. Collect field values ── */
  const inputs = f.querySelectorAll('input:not([name="website"]), select, textarea');
  const data   = new FormData();
  const vals   = {};
  inputs.forEach(el => { if (el.name) { data.append(el.name, el.value); vals[el.name] = el.value; } });

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
    f.style.display = 'none';
    if (s) s.classList.add('show'); // show success so UX is seamless
    return;
  }

  /* ── 7. Client-side rate limit (max 3 per 10 min) ── */
  if (!_checkRateLimit()) {
    showToast('Too many submissions — please wait a few minutes or call us directly');
    return;
  }

  /* ── 8. Disable button, show loading state ── */
  const btn = f.querySelector('.form-submit-btn') || f.parentElement.querySelector('.form-submit-btn');
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

  /* ── 11. POST to Formspree ── */
  fetch('https://formspree.io/f/' + settings.formspreeId, {
    method: 'POST', body: data, headers: { 'Accept': 'application/json' }
  })
  .then(r => {
    if (r.ok) {
      f.style.display = 'none';
      if (s) s.classList.add('show');

      /* ── 12. Build lead object & inject into system ── */
      const newId  = 'L' + String(Date.now()).slice(-6);
      const now    = new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
      const fullName = sanitizeHTML(`${vals['first_name']||''} ${vals['last_name']||''}`.trim() || 'New Lead');
      const lead   = {
        id:              newId,
        _ts:             Date.now(),   // internal timestamp for duplicate/rate logic
        name:            fullName,
        phone:           sanitizeHTML(vals['phone']  || ''),
        email:           sanitizeHTML(vals['email']  || ''),
        address:         '', city: '',
        county:          sanitizeHTML(countyRaw),
        state:           sanitizeHTML(stateRaw),
        service:         'Level 2 Home Charger',
        panel:           panelSize === '200amp' ? '200A' : panelSize === '150amp' ? '150A' : panelSize === '100amp' ? '100A' : 'TBD',
        charger:         vals['charger_brand'] || 'TBD',
        rebate:          stateRaw === 'NJ' ? 'PSE&G $250' : 'PECO $250',
        status:          assignedId ? 'assigned' : 'new',
        contractor:      assignedId || null,
        created:         now,
        value:           valEst.mid,
        notes:           assignedId ? [{ author:'System', text:'Auto-assigned via territory routing (round-robin).', time:'Just now' }] : [],
        priority:        complexity === 'Commercial Install' ? 'high' : 'normal',
        complexity,      panelSize,     distance,
        installLocation: vals['install_location'] || '',
        chargerBrand:    vals['charger_brand']     || '',
        leadSource:      vals['lead_source']        || 'Direct',
        contactedAt:     null,
        review:          null,
        isDuplicate:     false,
      };

      /* Enrich with job intelligence */
      const ji         = getJobIntelligence(lead);
      lead.installTime     = ji.timeLabel;
      lead.profitPotential = ji.profit;
      lead.difficulty      = ji.difficulty;

      leads.unshift(lead);
      persist(); // ← write to localStorage immediately

      if (typeof buildSidebar === 'function') buildSidebar();
      if (typeof addNotification === 'function') {
        const contractor = assignedId ? CONTRACTORS.find(c => c.id === assignedId) : null;
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

    } else {
      if (btn) { btn.disabled = false; btn.textContent = '⚡ Get My Free Quote'; }
      showToast('Submission failed — please call us directly or try again');
    }
  })
  .catch(() => {
    if (btn) { btn.disabled = false; btn.textContent = '⚡ Get My Free Quote'; }
    showToast('Network error — please call us or try again shortly');
  });
}

function focusForm() {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById('main-phone-input');
    if (el) { el.scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(() => el.focus(), 500); }
  }, 80);
}

function sid(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
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



// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
const USERS = {
  'admin@expertev.com':   { password:'admin123',    role:'admin',      name:'Sarah Mitchell' },
  'redflow@expertev.com': { password:'redflow123',  role:'contractor', name:'Red Flow Electric', id:'c1' }
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
  adminEmail: 'admin@expertev.com',
  paPhone: '(215) 555-0199',
  njPhone: '(856) 555-0199',
  leadFee: 75,
  commissionPct: 15,
  emailAlerts: true,
  smsAlerts: false,
  autoAssign: false,
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

/* Enrich existing leads with job intelligence fields if missing */
leads.forEach(l => {
  if (!l.installTime || !l.profitPotential) {
    const ji = getJobIntelligence(l);
    if (!l.installTime)      l.installTime      = ji.timeLabel;
    if (!l.profitPotential)  l.profitPotential  = ji.profit;
    if (!l.difficulty)       l.difficulty       = ji.difficulty;
  }
});

let currentUser = null;
let notifOpen = false;

// ═══════════════════════════════════════════════════════════════
// PERSISTENCE ENGINE — localStorage bridge
// Every write operation calls persist() so data survives refresh.
// On a real production deployment, replace persist() and
// _loadPersisted() with Supabase API calls (schema below in docs).
// ═══════════════════════════════════════════════════════════════
const _STORE = {
  leads:    'eev_v1_leads',
  notifs:   'eev_v1_notifs',
  settings: 'eev_v1_settings',
  checklist:'eev_v1_checklist',
};

function persist() {
  try {
    localStorage.setItem(_STORE.leads,    JSON.stringify(leads));
    localStorage.setItem(_STORE.notifs,   JSON.stringify(notifications.slice(0, 100)));
    localStorage.setItem(_STORE.settings, JSON.stringify(settings));
  } catch(e) { console.warn('[EEV] localStorage quota:', e.message); }
}

(function _loadPersisted() {
  try {
    const sl = localStorage.getItem(_STORE.leads);
    if (sl) {
      const p = JSON.parse(sl);
      if (Array.isArray(p) && p.length > 0) leads.splice(0, leads.length, ...p);
    }
    const sn = localStorage.getItem(_STORE.notifs);
    if (sn) {
      const p = JSON.parse(sn);
      if (Array.isArray(p)) notifications.splice(0, notifications.length, ...p);
    }
    const ss = localStorage.getItem(_STORE.settings);
    if (ss) Object.assign(settings, JSON.parse(ss));
  } catch(e) { console.warn('[EEV] Could not restore persisted data:', e.message); }
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

// ═══════════════════════════════════════════════════════════════
// SPAM PROTECTION
// 1. Honeypot field check (bots fill hidden fields, humans don't)
// 2. Client-side rate limiting (max 3 submissions per 10 minutes)
// 3. Duplicate detection (same phone/email within 10 minutes)
// 4. Phone format validation (US 10-digit)
// ═══════════════════════════════════════════════════════════════
const _RATE_KEY = 'eev_v1_rate';
const _RATE_WIN = 10 * 60 * 1000; // 10 minutes
const _RATE_MAX = 3;

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

function _validatePhone(raw) {
  const cleaned = (raw || '').replace(/[\s\-\(\)\.\+ext]/gi, '');
  return /^1?\d{10}$/.test(cleaned);
}

// ═══════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════
function fillDemo(role) {
  document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
  if (role === 'admin') {
    document.getElementById('login-email').value = 'admin@expertev.com';
    document.getElementById('login-password').value = 'admin123';
    document.getElementById('demo-admin').classList.add('active');
  } else {
    document.getElementById('login-email').value = 'redflow@expertev.com';
    document.getElementById('login-password').value = 'redflow123';
    document.getElementById('demo-contractor').classList.add('active');
  }
}
function doLogin() {
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;
  const user = USERS[email];
  if (user && user.password === pass) {
    currentUser = {...user, email};
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    initApp();
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Enter' && document.getElementById('login-screen').style.display !== 'none') doLogin(); });
function doLogout() {
  currentUser = null;
  document.getElementById('app').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-error').style.display = 'none';
}

// ═══════════════════════════════════════════════════════════════
// APP INIT
// ═══════════════════════════════════════════════════════════════
function initApp() {
  const av = document.getElementById('user-avatar');
  if (currentUser.role === 'contractor') {
    av.innerHTML = '<img src="redflowelectric.png" alt="Red Flow Electric" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
    av.textContent = '';
  } else {
    av.textContent = currentUser.name[0];
  }
  av.className = 'user-avatar ' + currentUser.role;
  document.getElementById('user-name-display').textContent = currentUser.name;
  document.getElementById('user-role-display').textContent = currentUser.role === 'admin' ? 'Administrator' : 'Contractor Partner';
  renderNotifDot();
  buildPages();
  buildSidebar();
  navTo(currentUser.role === 'admin' ? 'dashboard' : 'my-leads');
}

const ADMIN_NAV = [
  { section:'Overview', items:[{id:'dashboard',icon:'📊',label:'Dashboard'},{id:'pipeline',icon:'📋',label:'Pipeline'}] },
  { section:'Leads',    items:[{id:'all-leads',icon:'⚡',label:'All Leads',badgeNew:true},{id:'assign',icon:'🔄',label:'Assign Leads',badgeNew:true}] },
  { section:'People',   items:[{id:'contractors',icon:'🔧',label:'Contractors'}] },
  { section:'Business', items:[{id:'revenue',icon:'💰',label:'Revenue'},{id:'coverage',icon:'🗺️',label:'Coverage'},{id:'sms-templates',icon:'💬',label:'SMS Templates'},{id:'deploy',icon:'🚀',label:'Launch Guide'}] },
  { section:'Setup',    items:[{id:'onboarding',icon:'✅',label:'Setup Checklist',badgeSetup:true},{id:'settings',icon:'⚙️',label:'Settings'}] },
];
const CONTRACTOR_NAV = [
  { section:'My Work',   items:[{id:'my-leads',icon:'⚡',label:'My Leads',badgeAssigned:true},{id:'my-pipeline',icon:'📋',label:'My Pipeline'},{id:'my-revenue',icon:'📊',label:'Performance'}] },
  { section:'Resources', items:[{id:'sms-templates',icon:'💬',label:'SMS Scripts'},{id:'my-profile',icon:'🏢',label:'My Profile'}] },
];

function buildSidebar() {
  const nav = currentUser.role === 'admin' ? ADMIN_NAV : CONTRACTOR_NAV;
  let html = '';
  nav.forEach(section => {
    html += `<div class="sidebar-section-label">${section.section}</div>`;
    section.items.forEach(item => {
      let badge = '';
      if (item.badgeNew) { const cnt = leads.filter(l => l.status === 'new').length; if (cnt > 0) badge = `<span class="nav-badge red">${cnt}</span>`; }
      if (item.badgeAssigned) { const cnt = leads.filter(l => l.contractor === currentUser.id && l.status === 'assigned').length; if (cnt > 0) badge = `<span class="nav-badge">${cnt}</span>`; }
      if (item.badgeSetup) { const done = checklist.filter(c => settings.checklistDone[c.id]).length; const rem = checklist.length - done; if (rem > 0) badge = `<span class="nav-badge" style="background:var(--orange)">${rem}</span>`; }
      html += `<div class="nav-item" id="nav-${item.id}" onclick="navTo('${item.id}')"><span class="nav-icon">${item.icon}</span>${item.label}${badge}</div>`;
    });
  });
  document.getElementById('sidebar-nav').innerHTML = html;
}

const PAGE_TITLES = { dashboard:'Dashboard Overview', pipeline:'Lead Pipeline', 'all-leads':'All Leads', assign:'Assign Leads', contractors:'Contractors', revenue:'Revenue & Billing', coverage:'Coverage Map', 'sms-templates':'SMS Scripts & Sales Tools', deploy:'🚀 Launch Guide', onboarding:'Setup Checklist', settings:'Settings & Security', 'my-leads':'My Leads', 'my-pipeline':'My Pipeline', 'my-revenue':'Performance Analytics', 'my-profile':'My Profile' };

function navTo(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  document.querySelectorAll('#pages .page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) { page.classList.add('active'); document.getElementById('topbar-title').textContent = PAGE_TITLES[id] || id; }
  if (id === 'all-leads')   renderLeadsTable();
  if (id === 'assign')      renderAssignTable();
  if (id === 'my-leads')    renderMyLeads();
  if (id === 'onboarding')  renderChecklist();
  if (id === 'dashboard')   setTimeout(renderFollowUpAlerts, 50);
  document.getElementById('notif-panel').classList.remove('open');
  notifOpen = false;
}

// ═══════════════════════════════════════════════════════════════
// BUILD ALL PAGES
// ═══════════════════════════════════════════════════════════════
function buildPages() {
  const c = document.getElementById('pages');
  let html = '';
  if (currentUser.role === 'admin') {
    html += pgAdminDashboard() + pgPipeline() + pgAllLeads() + pgAssign() + pgContractors() + pgRevenue() + pgCoverage() + pgSmsTemplates() + pgDeploy() + pgOnboarding() + pgSettings();
  } else {
    html += pgMyLeads() + pgMyPipeline() + pgMyRevenue() + pgSmsTemplates() + pgMyProfile();
  }
  c.innerHTML = html;
}

// ─── ADMIN DASHBOARD ────────────────────────────────────────────
function pgAdminDashboard() {
  const newC      = leads.filter(l => l.status === 'new').length;
  const pipeline  = leads.filter(l => !['completed','lost'].includes(l.status)).length;
  const completed = leads.filter(l => l.status === 'completed').length;
  const revenue   = leads.filter(l => l.status === 'completed').reduce((s,l) => s+l.value, 0);
  const counties  = ['Philadelphia','Montgomery','Bucks','Chester','Delaware','Burlington','Camden','Gloucester'];
  const maxC      = Math.max(...counties.map(c => leads.filter(l => l.county===c).length), 1);
  const recent    = leads.slice().reverse().slice(0,6);
  const done      = checklist.filter(c => settings.checklistDone[c.id]).length;
  const setupPct  = Math.round(done/checklist.length*100);
  return `<div class="page" id="page-dashboard">
    <div class="page-header">
      <div><h1>Dashboard Overview</h1><p>ExpertEV Installers · PA/NJ Territory</p></div>
      <div class="page-header-actions">
        <button class="btn btn-outline" onclick="navTo('onboarding')">⚙️ Setup ${setupPct}%</button>
        <button class="btn btn-primary" onclick="openAddLead()">+ New Lead</button>
      </div>
    </div>
    ${setupPct < 100 ? `<div class="alert-box warn">⚠️ <div><strong>Setup incomplete (${done}/${checklist.length} tasks done)</strong> — Complete the <span style="text-decoration:underline;cursor:pointer" onclick="navTo('onboarding')">Setup Checklist</span> to go live.</div></div>` : `<div class="alert-box success">✅ <div><strong>You're fully set up and live!</strong> All systems configured.</div></div>`}
    <div class="stats-grid">
      <div class="stat-card blue"><div class="stat-icon">⚡</div><div class="stat-value blue">${newC}</div><div class="stat-label">New Leads</div><div class="stat-change up">↑ 3 this week</div></div>
      <div class="stat-card yellow"><div class="stat-icon">🔄</div><div class="stat-value yellow">${pipeline}</div><div class="stat-label">Active Pipeline</div><div class="stat-change up">↑ 2 today</div></div>
      <div class="stat-card green"><div class="stat-icon">✅</div><div class="stat-value green">${completed}</div><div class="stat-label">Completed Jobs</div><div class="stat-change up">↑ 1 this week</div></div>
      <div class="stat-card cyan"><div class="stat-icon">💰</div><div class="stat-value cyan">$${revenue.toLocaleString()}</div><div class="stat-label">Revenue Generated</div></div>
      <div class="stat-card blue"><div class="stat-icon">🔧</div><div class="stat-value blue">${CONTRACTORS.length}</div><div class="stat-label">Active Contractors</div></div>
    </div>
    <div class="two-col">
      <div class="card">
        <div class="card-header"><span>⚡</span><div class="card-title">Recent Leads</div><button class="btn btn-outline btn-sm" onclick="navTo('all-leads')">View All</button></div>
        <table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Status</th><th></th></tr></thead><tbody>
        ${recent.map(l=>`<tr>
          <td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.phone}</div></td>
          <td>${l.county},${l.state}</td>
          <td style="font-size:.8rem;max-width:140px">${l.service}</td>
          <td><span class="badge badge-${l.status}">${cap(l.status)}</span>${l.priority==='high'?'<span class="warn-tag" style="margin-left:4px;font-size:.68rem">HIGH</span>':''}</td>
          <td><button class="btn-icon" onclick="openLeadDetail('${l.id}')">→</button></td>
        </tr>`).join('')}
        </tbody></table>
      </div>
      <div class="card">
        <div class="card-header"><span>🗺️</span><div class="card-title">Leads by County</div></div>
        <div class="card-body" style="padding:16px 20px">
          ${counties.map(c => { const cnt = leads.filter(l=>l.county===c).length; return `<div class="county-row"><div class="county-name">${c}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(cnt/maxC*100)}%"></div></div><div class="county-count">${cnt}</div></div>`;}).join('')}
        </div>
      </div>
    </div>
    <div class="two-col">
      <div class="card">
        <div class="card-header"><span>🕐</span><div class="card-title">Recent Activity</div></div>
        <div class="card-body">
          <div class="activity-item"><div class="activity-dot" style="background:var(--blue)"></div><div><div class="activity-text"><strong>Marcus Thompson</strong> submitted — Level 2 Home Charger, Philadelphia</div><div class="activity-time">2 min ago</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--yellow)"></div><div><div class="activity-text">Lead <strong>L006 — Allison Cho</strong> scheduled for April 2nd</div><div class="activity-time">18 min ago</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--green)"></div><div><div class="activity-text"><strong>David Kim</strong> job completed by Red Flow Electric — $2,100</div><div class="activity-time">1 hr ago</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--blue)"></div><div><div class="activity-text"><strong>Rosa Martinez</strong> commercial fleet install — Burlington, NJ</div><div class="activity-time">3 hrs ago</div></div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--cyan)"></div><div><div class="activity-text">Red Flow Electric accepted assignment for <strong>Jennifer Walsh</strong></div><div class="activity-time">Yesterday</div></div></div>
        </div>
      </div>
      <div class="card">
        <div class="card-header"><span>⚠️</span><div class="card-title">Follow-Up Alerts</div><span id="followup-count" style="font-size:.72rem;background:rgba(245,158,11,.15);color:var(--yellow);border:1px solid rgba(245,158,11,.3);border-radius:4px;padding:2px 8px"></span></div>
        <div class="card-body" id="followup-list" style="padding:8px 0"></div>
      </div>
    </div>
    <div class="card" style="margin-top:0">
      <div class="card-header"><span>📊</span><div class="card-title">Lead Source Performance</div></div>
      <div class="card-body" style="padding:16px 20px">
        ${(()=>{const sources=['Google Ads','SEO','Facebook Ads','Direct'];const maxS=Math.max(...sources.map(s=>leads.filter(l=>l.leadSource===s).length),1);return sources.map(s=>{const cnt=leads.filter(l=>l.leadSource===s).length;const won=leads.filter(l=>l.leadSource===s&&l.status==='completed').length;return`<div class="county-row"><div class="county-name" style="width:120px">${s}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(cnt/maxS*100)}%"></div></div><div class="county-count" style="width:30px">${cnt}</div><div style="font-size:.72rem;color:var(--green);width:60px">${cnt?Math.round(won/cnt*100)+'% close':''}</div></div>`;}).join('');})()}
      </div>
    </div>
  </div>`;
}

function renderFollowUpAlerts() {
  const list = document.getElementById('followup-list');
  const cntEl = document.getElementById('followup-count');
  if (!list) return;
  const now = new Date();
  const uncontacted = leads.filter(l => !l.contactedAt && l.contractor && !['completed','lost'].includes(l.status));
  if (!uncontacted.length) {
    list.innerHTML = `<div style="color:var(--gray);font-size:.82rem;padding:16px">No follow-up alerts. All assigned leads contacted. ✅</div>`;
    if (cntEl) cntEl.textContent = '';
    return;
  }
  if (cntEl) cntEl.textContent = `${uncontacted.length} pending`;
  list.innerHTML = uncontacted.map(l => {
    const ctr = CONTRACTORS.find(c=>c.id===l.contractor);
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
      const totalVal = sl.reduce((x,l)=>x+l.value,0);
      return `<div class="pipeline-col">
        <div class="pipeline-col-header" style="border-top:2px solid ${colors[s]};padding-top:10px">${labels[s]}<span class="pipeline-count">${sl.length}</span></div>
        ${sl.length>0?`<div style="font-size:.72rem;color:var(--green);margin-bottom:10px">$${totalVal.toLocaleString()} est.</div>`:''}
        ${sl.length===0?`<div style="color:var(--gray);font-size:.78rem;text-align:center;padding:20px 0">No leads</div>`:''}
        ${sl.map(l=>`<div class="pipeline-card" onclick="openLeadDetail('${l.id}')">
          <div class="pipeline-card-name">${l.name}${l.priority==='high'?'<span style="color:var(--orange);margin-left:5px;font-size:.7rem">●</span>':''}</div>
          <div class="pipeline-card-detail">${l.complexity||l.service}</div>
          <div class="pipeline-card-detail" style="color:var(--green);margin-top:3px">$${l.value.toLocaleString()}</div>
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
  const cName = id => id ? (CONTRACTORS.find(c => c.id === id) || {}).name || '—' : '—';
  const wrap = document.getElementById('leads-table-wrap');
  if (!wrap) return;
  wrap.innerHTML = filtered.length === 0
    ? `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No leads found</h3><p>Try adjusting the filters</p></div>`
    : `<table class="leads-table"><thead><tr><th>ID</th><th>Customer</th><th>County</th><th>Complexity</th><th>Value</th><th>Source</th><th>Contractor</th><th>Status</th><th>Date</th><th></th></tr></thead><tbody>
      ${filtered.map(l=>`<tr>
        <td><span class="mono" style="color:var(--gray);font-size:.78rem">${l.id}</span></td>
        <td><div class="lead-name">${l.name}${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px;font-size:.68rem">HIGH</span>':''}</div><div class="lead-sub">${l.phone}</div></td>
        <td>${l.county},${l.state}</td>
        <td style="font-size:.78rem">${l.complexity||'—'}</td>
        <td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td>
        <td style="font-size:.78rem;color:var(--gray)">${l.leadSource||'Direct'}</td>
        <td style="font-size:.82rem">${cName(l.contractor)}</td>
        <td><span class="badge badge-${l.status}">${cap(l.status)}</span></td>
        <td style="font-size:.8rem;color:var(--gray)">${l.created}</td>
        <td style="display:flex;gap:4px">
          <button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Details">→</button>
          <button class="btn-icon" onclick="openQualityReview('${l.id}')" title="Quality Review" style="font-size:.8rem">🔍</button>
        </td>
      </tr>`).join('')}
    </tbody></table>`;
}

// ─── ASSIGN PAGE ────────────────────────────────────────────────
function pgAssign() {
  return `<div class="page" id="page-assign"><div class="page-header"><div><h1>Assign Leads</h1><p>Unassigned leads need a contractor</p></div></div><div id="assign-table-wrap"></div></div>`;
}
function renderAssignTable() {
  const unassigned = leads.filter(l => l.status === 'new');
  const wrap = document.getElementById('assign-table-wrap');
  if (!wrap) return;
  wrap.innerHTML = unassigned.length === 0
    ? `<div class="card"><div class="empty-state"><div class="empty-state-icon">✅</div><h3>All leads assigned!</h3><p>New leads appear here as they come in.</p></div></div>`
    : `<div class="card"><table class="leads-table"><thead><tr><th>Customer</th><th>County / State</th><th>Service</th><th>Value</th><th>Priority</th><th>Assign To</th><th></th></tr></thead><tbody>
      ${unassigned.map(l=>`<tr>
        <td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.address}</div></td>
        <td>${l.county},${l.state}</td>
        <td style="font-size:.8rem">${l.service}</td>
        <td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td>
        <td><select class="filter-select" style="font-size:.75rem;padding:4px 8px" onchange="setLeadPriority('${l.id}',this.value)"><option value="normal" ${l.priority==='normal'?'selected':''}>Normal</option><option value="high" ${l.priority==='high'?'selected':''}>High</option></select></td>
        <td><select class="filter-select" id="asel-${l.id}" style="width:190px"><option value="">Select contractor...</option>${CONTRACTORS.filter(c=>c.counties.includes(l.county)).map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select></td>
        <td><button class="btn btn-primary btn-sm" onclick="assignLead('${l.id}')">Assign →</button></td>
      </tr>`).join('')}
    </tbody></table></div>`;
}
function setLeadPriority(id, priority) { const l = leads.find(x=>x.id===id); if(l) l.priority=priority; }
function assignLead(lid) {
  const sel = document.getElementById('asel-' + lid);
  if (!sel || !sel.value) { showToast('Please select a contractor first'); return; }
  const lead = leads.find(l=>l.id===lid);
  if (!lead) return;
  const contractor = CONTRACTORS.find(c=>c.id===sel.value) || {};
  lead.status = 'assigned';
  lead.contractor = sel.value;
  addNote(lid, 'Admin', `Assigned to ${contractor.name}.`);
  renderAssignTable(); buildSidebar();
  persist();
  showToast('Lead assigned to ' + contractor.name);
  addNotification(`Lead assigned to <strong>${sanitizeHTML(contractor.name)}</strong> — ${sanitizeHTML(lead.name)}`);
}

// ─── CONTRACTORS ────────────────────────────────────────────────
function pgContractors() {
  return `<div class="page" id="page-contractors">
    <div class="page-header"><div><h1>Contractors</h1><p>${CONTRACTORS.length} active partner contractors</p></div>
    <button class="btn btn-outline" onclick="showAddContractorModal()">+ Invite Contractor</button></div>
    <div style="display:flex;flex-direction:column;gap:14px">
    ${CONTRACTORS.map(c=>`<div class="contractor-card">
      <div class="contractor-avatar" style="${c.id==='c1' ? 'background:#e53935;overflow:hidden;' : 'background:linear-gradient(135deg,var(--green),#059669)'}">${c.id==='c1' ? '<img src="redflowelectric.png" alt="Red Flow Electric" style="width:100%;height:100%;object-fit:cover;">' : c.name[0]}</div>
      <div class="contractor-info">
        <div class="contractor-name">${c.name} <span class="badge badge-completed" style="font-size:.7rem;margin-left:6px">Active</span></div>
        <div class="contractor-meta">${c.contact} · ${c.phone} · ${c.email}</div>
        <div class="contractor-meta" style="margin-top:3px">🪪 ${c.license} &nbsp;·&nbsp; 📍 ${c.counties.join(', ')}</div>
      </div>
      <div class="contractor-stats">
        <div><div class="c-stat-val">${leads.filter(l=>l.contractor===c.id).length}</div><div class="c-stat-lbl">Leads</div></div>
        <div><div class="c-stat-val" style="color:var(--green)">${leads.filter(l=>l.contractor===c.id&&l.status==='completed').length}</div><div class="c-stat-lbl">Won</div></div>
        <div><div class="c-stat-val" style="color:var(--cyan)">${leads.filter(l=>l.contractor===c.id&&l.contactedAt).length}</div><div class="c-stat-lbl">Contacted</div></div>
        <div><div class="c-stat-val" style="color:var(--cyan)">$${(leads.filter(l=>l.contractor===c.id&&l.status==='completed').reduce((s,l)=>s+l.value,0)/1000).toFixed(1)}k</div><div class="c-stat-lbl">Revenue</div></div>
        <div><div class="c-stat-val" style="color:var(--yellow)">${leads.filter(l=>l.contractor===c.id).length?Math.round(leads.filter(l=>l.contractor===c.id&&l.status==='completed').length/leads.filter(l=>l.contractor===c.id).length*100)+'%':'—'}</div><div class="c-stat-lbl">Close Rate</div></div>
        <div><div class="c-stat-val" style="color:var(--yellow)">⭐${c.rating}</div><div class="c-stat-lbl">Rating</div></div>
      </div>
      <button class="btn btn-outline btn-sm" onclick="viewContractor('${c.id}')">Details →</button>
    </div>`).join('')}
    </div>
  </div>`;
}
function viewContractor(id) {
  const c = CONTRACTORS.find(x=>x.id===id);
  const cLeads = leads.filter(l=>l.contractor===id);
  openModalWith(c.name,`
    <div class="detail-row"><div class="detail-label">Contact</div><div class="detail-value">${c.contact}</div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value"><a href="tel:${c.phone}" style="color:var(--blue-bright);text-decoration:none">${c.phone}</a></div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:${c.email}" style="color:var(--blue-bright);text-decoration:none">${c.email}</a></div></div>
    <div class="detail-row"><div class="detail-label">License</div><div class="detail-value mono">${c.license}</div></div>
    <div class="detail-row"><div class="detail-label">Coverage</div><div class="detail-value">${c.counties.join(', ')}</div></div>
    <div class="detail-row"><div class="detail-label">Revenue</div><div class="detail-value" style="color:var(--cyan)">$${c.revenue.toLocaleString()}</div></div>
    <div class="detail-row"><div class="detail-label">Rating</div><div class="detail-value">⭐ ${c.rating}</div></div>
    <div style="margin:16px 0 10px;font-family:'Rajdhani',sans-serif;font-size:.88rem;font-weight:700">Assigned Leads (${cLeads.length})</div>
    ${cLeads.map(l=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(30,45,74,0.4)"><div><div style="font-size:.85rem;font-weight:500">${l.name}</div><div style="font-size:.75rem;color:var(--gray)">${l.county},${l.state} · $${l.value.toLocaleString()}</div></div><span class="badge badge-${l.status}">${cap(l.status)}</span></div>`).join('')}`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Close</button>`);
}
function showAddContractorModal() {
  openModalWith('Invite Contractor',`
    <div class="alert-box info">ℹ️ The contractor will receive a login link via email and can only see their own assigned leads.</div>
    <div class="form-group"><label class="form-label">Company Name</label><input class="form-input" id="ac-company" placeholder="e.g. Volt Masters LLC"></div>
    <div class="form-group"><label class="form-label">Contact Person</label><input class="form-input" id="ac-contact" placeholder="Full name"></div>
    <div class="form-group"><label class="form-label">Email</label><input class="form-input" type="email" id="ac-email" placeholder="contact@company.com"></div>
    <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="ac-phone" placeholder="(xxx) xxx-xxxx"></div>
    <div class="form-group"><label class="form-label">License #</label><input class="form-input" id="ac-lic" placeholder="PA-EL-XXXXX or NJ-EL-XXXXX"></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button><button class="btn btn-primary" onclick="closeModalDirect();showToast('Invite sent to '+document.getElementById('ac-email').value)">Send Invite →</button>`);
}

// ─── REVENUE ────────────────────────────────────────────────────
function pgRevenue() {
  const done  = leads.filter(l=>l.status==='completed');
  const total = done.reduce((s,l)=>s+l.value,0);
  const fee   = Math.round(total * settings.commissionPct/100);
  const bars  = [3200,4800,5100,6200,7400,total];
  const months= ['Oct','Nov','Dec','Jan','Feb','Mar'];
  const maxB  = Math.max(...bars);
  return `<div class="page" id="page-revenue">
    <div class="page-header"><div><h1>Revenue & Billing</h1><p>Commissions, lead fees, contractor payouts</p></div>
    <button class="btn btn-outline btn-sm" onclick="exportCSV('completed')">⬇ Export</button></div>
    <div class="stats-grid">
      <div class="stat-card green"><div class="stat-icon">💰</div><div class="stat-value green">$${total.toLocaleString()}</div><div class="stat-label">Total Job Value</div></div>
      <div class="stat-card cyan"><div class="stat-icon">💸</div><div class="stat-value cyan">$${fee.toLocaleString()}</div><div class="stat-label">Platform Fee (${settings.commissionPct}%)</div></div>
      <div class="stat-card blue"><div class="stat-icon">✅</div><div class="stat-value blue">${done.length}</div><div class="stat-label">Completed Jobs</div></div>
      <div class="stat-card yellow"><div class="stat-icon">📊</div><div class="stat-value yellow">$${Math.round(total/(done.length||1)).toLocaleString()}</div><div class="stat-label">Avg Job Value</div></div>
    </div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>📈</span><div class="card-title">Monthly Revenue Trend</div></div>
        <div class="card-body"><div class="revenue-chart">
          ${months.map((m,i) => { const h=Math.round((bars[i]/maxB)*110); return `<div class="rev-bar-wrap"><div class="rev-bar ${i===months.length-1?'current':''}" style="height:${h}px"></div><div class="rev-month">${m}</div></div>`;}).join('')}
        </div></div>
      </div>
      <div class="card"><div class="card-header"><span>🔧</span><div class="card-title">By Contractor</div></div>
        <div class="card-body">
          ${CONTRACTORS.map(c=>`<div class="county-row"><div class="county-name" style="width:140px">${c.name}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(c.revenue/Math.max(...CONTRACTORS.map(x=>x.revenue))*100)}%"></div></div><div class="county-count" style="width:60px;color:var(--green)">$${(c.revenue/1000).toFixed(1)}k</div></div>`).join('')}
          <div style="margin-top:16px;font-size:.8rem;color:var(--gray)">Platform fee per contractor at ${settings.commissionPct}% commission rate</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><span>✅</span><div class="card-title">Completed Jobs</div></div>
      ${done.length===0?`<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No completed jobs yet</h3></div>`
      :`<table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Contractor</th><th>Job Value</th><th>Platform Fee</th><th>Date</th></tr></thead><tbody>
        ${done.map(l=>{const c=CONTRACTORS.find(x=>x.id===l.contractor); return `<tr><td>${l.name}</td><td>${l.county},${l.state}</td><td style="font-size:.8rem">${l.service}</td><td style="font-size:.82rem">${c?c.name:'—'}</td><td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td><td style="color:var(--cyan)">$${Math.round(l.value*settings.commissionPct/100).toLocaleString()}</td><td style="font-size:.8rem;color:var(--gray)">${l.created}</td></tr>`;}).join('')}
      </tbody></table>`}
    </div>
  </div>`;
}

// ─── COVERAGE ───────────────────────────────────────────────────
function pgCoverage() {
  const pa = ['Philadelphia','Montgomery','Bucks','Chester','Delaware'];
  const nj = ['Burlington','Camden','Gloucester'];
  return `<div class="page" id="page-coverage">
    <div class="page-header"><div><h1>Coverage Map</h1><p>Active territory — PA and NJ</p></div></div>
    <div class="alert-box info">🗺️ <div>To add an interactive Google Map, add your Google Maps API key in <span style="cursor:pointer;text-decoration:underline" onclick="navTo('settings')">Settings → Integrations</span>.</div></div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>🗺️</span><div class="card-title">Territory Map</div></div>
        <div class="card-body"><div style="height:240px;background:var(--navy-light);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;color:var(--gray);border:1px dashed var(--navy-border)">
          <div style="font-size:2.5rem">🗺️</div>
          <div style="font-weight:600;color:var(--white)">Interactive Map</div>
          <div style="font-size:.8rem;text-align:center;max-width:260px">Add a Google Maps API key in Settings to activate live territory visualization</div>
          <div style="display:flex;gap:10px;margin-top:8px">
            <span style="font-size:.78rem;background:rgba(37,99,235,.15);color:var(--blue-bright);padding:4px 12px;border-radius:20px;border:1px solid rgba(37,99,235,.3)">5 PA Counties</span>
            <span style="font-size:.78rem;background:rgba(6,182,212,.12);color:var(--cyan);padding:4px 12px;border-radius:20px;border:1px solid rgba(6,182,212,.3)">3 NJ Counties</span>
          </div>
        </div></div>
      </div>
      <div class="card"><div class="card-header"><span>📍</span><div class="card-title">County Status</div></div>
        <div class="card-body" style="padding:16px 20px">
          <div style="font-family:'Rajdhani',sans-serif;font-size:.78rem;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px">Pennsylvania</div>
          ${pa.map(c=>{const cnt=leads.filter(l=>l.county===c).length;const done=leads.filter(l=>l.county===c&&l.status==='completed').length;return`<div class="county-row"><div class="county-name">${c}</div><div style="flex:1;font-size:.78rem;color:var(--gray)">${cnt} leads · ${done} done</div><span class="badge badge-completed" style="font-size:.68rem">Active</span></div>`;}).join('')}
          <div style="font-family:'Rajdhani',sans-serif;font-size:.78rem;font-weight:700;color:var(--gray);text-transform:uppercase;letter-spacing:.08em;margin:16px 0 12px">New Jersey</div>
          ${nj.map(c=>{const cnt=leads.filter(l=>l.county===c).length;const done=leads.filter(l=>l.county===c&&l.status==='completed').length;return`<div class="county-row"><div class="county-name">${c}</div><div style="flex:1;font-size:.78rem;color:var(--gray)">${cnt} leads · ${done} done</div><span class="badge badge-completed" style="font-size:.68rem">Active</span></div>`;}).join('')}
        </div>
      </div>
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
    { label:'💰 Rebate Reminder', text:`Hi [NAME]! Great news — your installation qualifies for a [UTILITY] rebate of up to [AMOUNT]. We'll handle the paperwork, but I wanted you to know the savings are coming your way. Keep your receipt! Let me know if you have questions.` },
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
    { title:'1. Register Your Domain', desc:'Go to Namecheap.com and register expertevinstallers.com (~$12/yr). If taken, try expertevpa.com or expertevnj.com. This is your brand URL — it matters.',
      code:'Recommended: Namecheap · GoDaddy · Google Domains\nTarget domain: expertevinstallers.com', link:'https://www.namecheap.com', linkText:'Open Namecheap' },
    { title:'2. Deploy to Netlify (Free)', desc:'Sign up at netlify.com with your email. Drag and drop both HTML files (website + dashboard) into the deploy box. Netlify gives you a free HTTPS URL instantly. Then connect your domain in Site Settings → Domain Management.',
      code:'netlify.com → New site → Drag & drop files\nFiles to upload: expertev-credibility-first.html, expertev-dashboard.html', link:'https://app.netlify.com', linkText:'Open Netlify' },
    { title:'3. Connect Formspree (Free Lead Capture)', desc:'Go to formspree.io → New Form. Copy your form ID (looks like "xyzabcde"). Paste it into Settings → Integrations in this dashboard. Then update the website HTML: find action="https://formspree.io/f/YOUR_ID" and replace YOUR_ID with your real form ID.',
      code:'formspree.io → Create account → New Form\nYour form ID goes in: action="https://formspree.io/f/[YOUR_ID]"', link:'https://formspree.io', linkText:'Open Formspree' },
    { title:'4. Set Up Email Alerts', desc:'In Formspree, go to Notifications → Email and enter your real email. Every time a lead fills out the form on your website, you\'ll get an instant email with their info. Set this up BEFORE you share your website URL.',
      code:'Formspree → Settings → Email Notifications\nEnter: your real email address' },
    { title:'5. Update Phone Numbers', desc:'In Settings → Business Info, replace the placeholder PA and NJ numbers with real numbers. You can use Google Voice (free) to get a local number that forwards to your cell. Having a real phone number on the site builds massive trust.',
      code:'PA line: Google Voice PA area code (215, 610, 267, 484)\nNJ line: Google Voice NJ area code (856, 609)', link:'https://voice.google.com', linkText:'Get Google Voice' },
    { title:'6. Get Red Flow Partnership in Writing', desc:'Before using Red Flow Electric\'s name publicly, have a simple written agreement. Even a short email confirming they approve of you co-branding your lead-gen with their name is enough to protect both sides. Key points: their license #, approved counties, response time SLA.',
      code:'Email template: "Confirming Red Flow Electric approves ExpertEV\nusing our name/license for EV charger lead generation\nin [COUNTIES]. Agreed lead response time: [X] hours."' },
    { title:'7. Share & Get Your First Lead', desc:'Share your website link in: Facebook neighborhood groups, Nextdoor posts in your coverage counties, Red Flow\'s existing customer list (ask permission), your personal LinkedIn/Facebook. Your first 3 leads often come from your immediate network.',
      code:'Top free channels:\n• Nextdoor (hyperlocal, high intent)\n• Facebook local groups\n• Google Business Profile (register free)\n• Red Flow Electric existing customers' },
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
          <div class="form-group">
            <label class="form-label">Google Maps API Key</label>
            <input class="form-input" id="s-gmap" value="" placeholder="AIzaSy...">
            <div style="font-size:.75rem;color:var(--gray);margin-top:4px">For interactive coverage map. Optional — get from Google Cloud Console.</div>
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
          <div class="setting-info"><div class="setting-name">SMS alert on new lead</div><div class="setting-desc">Instant SMS to contractor within 5 seconds of lead assignment. Requires Twilio integration.</div></div>
          <div class="toggle ${settings.smsAlerts?'on':''}" id="toggle-sms" onclick="toggleSetting('smsAlerts','toggle-sms')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Auto-assign new leads</div><div class="setting-desc">Automatically assign leads to the contractor covering that county — round-robin if multiple</div></div>
          <div class="toggle ${settings.autoAssign?'on':''}" id="toggle-auto" onclick="toggleSetting('autoAssign','toggle-auto')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Follow-up alerts (10 min / 2 hr)</div><div class="setting-desc">Alert admin if a contractor does not contact a lead within 10 minutes (and again at 2 hours)</div></div>
          <div class="toggle on" id="toggle-followup"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Post-completion review requests</div><div class="setting-desc">Automatically send a review request SMS to customers when job status changes to Completed</div></div>
          <div class="toggle" id="toggle-review"></div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><span>🛡️</span><div class="card-title">Security & Infrastructure</div></div>
      <div class="card-body" style="padding:8px 22px">
        ${[
          ['Rate Limiting','Prevents spam form submissions — max 3 requests per IP per hour','✅ Active','var(--green)'],
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
}
function saveSettings() {
  settings.adminEmail  = document.getElementById('s-email')?.value      || settings.adminEmail;
  settings.paPhone     = document.getElementById('s-paphone')?.value    || settings.paPhone;
  settings.njPhone     = document.getElementById('s-njphone')?.value    || settings.njPhone;
  settings.formspreeId = document.getElementById('s-formspree')?.value  || settings.formspreeId;
  settings.commissionPct = parseInt(document.getElementById('s-commission')?.value) || settings.commissionPct;
  settings.leadFee     = parseInt(document.getElementById('s-leadfee')?.value)     || settings.leadFee;
  persist();
  showToast('Settings saved!');
}

// ─── CONTRACTOR PAGES ────────────────────────────────────────────
function pgMyLeads() {
  return `<div class="page" id="page-my-leads">
    <div class="page-header">
      <div><h1>My Leads</h1><p>Pre-qualified electrical projects — Red Flow Electric</p></div>
      <div class="page-header-actions">
        <button class="btn btn-outline btn-sm" onclick="toggleMyLeadsView()">⊞ Toggle View</button>
      </div>
    </div>
    <div class="alert-box info" style="margin-bottom:16px">⚡ <div><strong>Lead Profit Estimator is active.</strong> Each card shows estimated job value, install time, difficulty, and profit potential — so you can prioritize before calling.</div></div>
    <div id="my-leads-wrap"></div>
  </div>`;
}

let _myLeadsView = 'cards'; // 'cards' | 'table'
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
          ${l.status==='scheduled'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','quote-sent')">Quote Sent</button>`:''}
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

function buildIntelCard(l) {
  const ji = getJobIntelligence(l);
  const distLabel = {under10:'Under 10 ft',  '10to25':'10–25 ft', '25to50':'25–50 ft', over50:'Over 50 ft', notsure:'Unknown'}[l.distance] || l.distance || '—';
  const panelLabel = {under10:'<10ft','10to25':'10–25ft','25to50':'25–50ft',over50:'>50ft',notsure:'?'}[l.distance]||'';
  const profitGrad = { High:'linear-gradient(90deg,#4ade80,#22c55e)', Medium:'linear-gradient(90deg,#fbbf24,#f59e0b)', Low:'linear-gradient(90deg,#94a3b8,#64748b)' }[ji.profit] || '';
  const actionBtns = `
    ${l.status==='assigned'?`<button class="btn btn-primary btn-sm" onclick="upd('${l.id}','contacted');renderMyLeads()">✓ Mark Contacted</button>`:''}
    ${l.status==='contacted'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','scheduled');renderMyLeads()">📅 Schedule Est.</button>`:''}
    ${l.status==='scheduled'?`<button class="btn btn-outline btn-sm" onclick="upd('${l.id}','quote-sent');renderMyLeads()">📄 Quote Sent</button>`:''}
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
        <div class="intel-label">Rebate Available</div>
        <div class="intel-val">${l.rebate || '—'}</div>
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
              <div class="pipeline-card-detail" style="color:#4ade80;font-size:.78rem;font-weight:700">${ji.valueLabel}</div>
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
  const myLeads    = leads.filter(l=>l.contractor===currentUser.id);
  const done       = myLeads.filter(l=>l.status==='completed');
  const contacted  = myLeads.filter(l=>l.contactedAt);
  const total      = done.reduce((s,l)=>s+l.value,0);
  const avgVal     = Math.round(total/(done.length||1));
  const closeRate  = myLeads.length ? Math.round(done.length/myLeads.length*100) : 0;
  const reviewd    = done.filter(l=>l.review);
  const avgRating  = reviewd.length ? (reviewd.reduce((s,l)=>s+l.review.rating,0)/reviewd.length).toFixed(1) : '—';
  return `<div class="page" id="page-my-revenue">
    <div class="page-header"><div><h1>Performance Analytics</h1><p>Red Flow Electric — your stats</p></div></div>
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
  const c = CONTRACTORS[0];
  return `<div class="page" id="page-my-profile">
    <div class="page-header"><div><h1>My Profile</h1><p>Red Flow Electric — Partner Account</p></div></div>
    <div class="grid-2">
      <div class="card"><div class="card-header"><span>🏢</span><div class="card-title">Company Info</div></div><div class="card-body">
        <div class="detail-row"><div class="detail-label">Company</div><div class="detail-value" style="font-weight:600">${c.name}</div></div>
        <div class="detail-row"><div class="detail-label">Contact</div><div class="detail-value">${c.contact}</div></div>
        <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">${c.phone}</div></div>
        <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value">${c.email}</div></div>
        <div class="detail-row"><div class="detail-label">License</div><div class="detail-value mono">${c.license}</div></div>
        <div class="detail-row"><div class="detail-label">Status</div><div class="detail-value"><span class="badge badge-completed">Active Partner</span></div></div>
      </div></div>
      <div class="card"><div class="card-header"><span>📍</span><div class="card-title">Service Territory</div></div><div class="card-body">
        ${c.counties.map(county=>`<div class="county-row"><div class="county-name">${county}</div><div style="flex:1"></div><span class="badge badge-completed" style="font-size:.68rem">Covered</span></div>`).join('')}
      </div></div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// LEAD DETAIL MODAL (with notes)
// ═══════════════════════════════════════════════════════════════
function openLeadDetail(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  const cName = l.contractor ? (CONTRACTORS.find(c=>c.id===l.contractor)||{}).name || 'Unassigned' : 'Unassigned';
  document.getElementById('modal').classList.toggle('modal-lg', true);
  document.getElementById('modal-title').textContent = `${l.id} — ${l.name}`;
  const _ji = getJobIntelligence(l);
  document.getElementById('modal-body').innerHTML = `
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab(event,'tab-intel')">⚡ Job Intelligence</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-details')">Details</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-notes')">Notes (${l.notes.length})</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-actions')">Update Status</button>
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
          ${[
            ['Customer',      l.name],
            ['Location',      `${l.county}, ${l.state}`],
            ['Project Type',  l.service],
            ['Panel Size',    l.panel || '—'],
            ['Distance',      {under10:'Under 10 ft','10to25':'10–25 ft','25to50':'25–50 ft',over50:'Over 50 ft',notsure:'Unknown'}[l.distance]||l.distance||'—'],
            ['Charger Brand', l.charger || '—'],
          ].map(([lbl,val],i)=>`
            <div style="padding:8px ${i%2===0?'16px 8px 0':'0 8px 0'};${i%2===0?'border-right:1px solid rgba(30,45,74,.6)':''}">
              <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--gray);margin-bottom:2px">${lbl}</div>
              <div style="font-size:.85rem;font-weight:600;color:var(--white)">${val}</div>
            </div>`).join('')}
        </div>
      </div>
      <!-- Job Value Intelligence -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px">
        <div style="background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#4ade80;margin-bottom:6px">Est. Job Value</div>
          <div style="font-size:1.05rem;font-weight:800;color:#4ade80">${_ji.valueLabel}</div>
        </div>
        <div style="background:rgba(99,102,241,0.08);border:1px solid rgba(99,102,241,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#a5b4fc;margin-bottom:6px">Install Time</div>
          <div style="font-size:1.05rem;font-weight:800;color:#a5b4fc">${_ji.timeLabel}</div>
        </div>
        <div style="background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.25);border-radius:10px;padding:14px 16px;text-align:center">
          <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#fbbf24;margin-bottom:6px">Lead Source</div>
          <div style="font-size:1.05rem;font-weight:800;color:#fbbf24">${l.leadSource||'Direct'}</div>
        </div>
      </div>
      <!-- AI Panel Analysis -->
      <div id="ai-panel-section-${l.id}" class="ai-panel">
        <div class="ai-panel-header">
          <span style="font-size:1rem">🤖</span>
          <div class="ai-panel-title">AI Panel Photo Analysis — Phase 2</div>
        </div>
        ${l.aiAnalysis ? `
          <div style="margin-bottom:8px;font-size:.75rem;color:#6ee7b7;display:flex;align-items:center;gap:6px"><span>✅</span> Analysis complete · Analyzed at ${l.aiAnalysis.analyzedAt||'recently'}</div>
          ${[
            ['Panel Type',         l.aiAnalysis.panelType],
            ['Detected Amperage',  l.aiAnalysis.amperage],
            ['Available Breakers', l.aiAnalysis.breakers],
            ['Upgrade Required',   l.aiAnalysis.upgradeNeeded],
            ['Adjusted Complexity',l.aiAnalysis.adjustedComplexity],
            ['Adjusted Est. Value',l.aiAnalysis.adjustedValue],
          ].map(([lbl,val])=>`<div class="ai-result-row"><span class="ai-result-label">${lbl}</span><span class="ai-result-val">${val||'—'}</span></div>`).join('')}
        ` : `
          <div style="font-size:.82rem;color:var(--gray);margin-bottom:12px">Upload a panel photo on the quote form to enable AI analysis. This feature automatically detects panel type, amperage, and available capacity — improving estimate accuracy.</div>
          <button class="btn btn-outline btn-sm" style="border-color:rgba(99,102,241,.5);color:#a5b4fc" onclick="runPanelAnalysis('${l.id}')">🔬 Simulate Panel Analysis</button>
        `}
      </div>
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
          <div class="detail-row"><div class="detail-label">Rebate</div><div class="detail-value"><span class="rebate-tag">${l.rebate}</span></div></div>
          <div class="detail-row"><div class="detail-label">Est. Value</div><div class="detail-value" style="color:var(--green);font-weight:600;font-size:1.05rem">$${l.value.toLocaleString()}</div></div>
          <div class="detail-row"><div class="detail-label">Assigned To</div><div class="detail-value">${cName}</div></div>
          <div class="detail-row"><div class="detail-label">Submitted</div><div class="detail-value">${l.created}</div></div>
          ${l.contactedAt ? `<div class="detail-row"><div class="detail-label">Contacted</div><div class="detail-value" style="color:var(--green)">${l.contactedAt}</div></div>` : `<div class="detail-row"><div class="detail-label">Contacted</div><div class="detail-value" style="color:var(--red)">Not yet</div></div>`}
        </div>
      </div>
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
    <div class="tab-panel" id="tab-actions">
      <div class="form-group"><label class="form-label">Status</label>
        <select class="form-input" id="mstatus">
          ${[['new','New Lead'],['assigned','Assigned'],['contacted','Contacted'],['scheduled','Est. Scheduled'],['quote-sent','Quote Sent'],['completed','Job Won'],['lost','Job Lost']].map(([v,lbl])=>`<option value="${v}" ${l.status===v?'selected':''}>${lbl}</option>`).join('')}
        </select>
      </div>
      ${currentUser.role==='admin'?`<div class="form-group"><label class="form-label">Assign Contractor</label>
        <select class="form-input" id="mcontractor">
          <option value="">Unassigned</option>
          ${CONTRACTORS.map(c=>`<option value="${c.id}" ${l.contractor===c.id?'selected':''}>${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label class="form-label">Priority</label>
        <select class="form-input" id="mpriority">
          <option value="normal" ${l.priority==='normal'?'selected':''}>Normal</option>
          <option value="high" ${l.priority==='high'?'selected':''}>High Priority</option>
        </select>
      </div>`:''}
    </div>`;
  document.getElementById('modal-footer').innerHTML = `
    <button class="btn btn-outline" onclick="closeModalDirect()">Close</button>
    <button class="btn btn-primary" onclick="saveModal('${l.id}')">Save Changes</button>`;
  document.getElementById('modal-overlay').classList.add('open');
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
  if (l) { l.notes.push({ author, text, time: 'Just now' }); persist(); }
}

function saveModal(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  const s = document.getElementById('mstatus');
  if (s) { const prev = l.status; l.status = s.value; if (s.value === 'contacted' && !l.contactedAt) l.contactedAt = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
  const c = document.getElementById('mcontractor');
  if (c) { l.contractor = c.value || null; if (c.value) addNote(id, 'Admin', `Assigned to ${(CONTRACTORS.find(x=>x.id===c.value)||{}).name}.`); }
  const p = document.getElementById('mpriority');
  if (p) l.priority = p.value;
  closeModalDirect();
  if (document.getElementById('page-all-leads')?.classList.contains('active'))  renderLeadsTable();
  if (document.getElementById('page-assign')?.classList.contains('active'))     renderAssignTable();
  if (document.getElementById('page-my-leads')?.classList.contains('active'))   renderMyLeads();
  buildSidebar();
  persist();
  showToast('Lead updated');
}

function upd(id, status) {
  const l = leads.find(x => x.id === id);
  if (l) {
    l.status = status;
    if (status === 'contacted' && !l.contactedAt) l.contactedAt = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    addNote(id, currentUser.name, `Status changed to ${cap(status)}.`);
  }
  /* Refresh whichever view is currently active */
  if (document.getElementById('page-my-leads')?.classList.contains('active'))  renderMyLeads();
  if (document.getElementById('page-all-leads')?.classList.contains('active')) renderLeadsTable();
  buildSidebar();
  persist();
  showToast('Status updated → ' + cap(status));
}

// ─── ADD LEAD MODAL ─────────────────────────────────────────────
function openAddLead() {
  openModalWith('Add New Lead',`
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Name</label><input class="form-input" id="nl-name" placeholder="Full name"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="nl-phone" placeholder="(xxx) xxx-xxxx"></div>
    </div>
    <div class="form-group"><label class="form-label">Email</label><input class="form-input" id="nl-email" type="email"></div>
    <div class="form-group"><label class="form-label">Address</label><input class="form-input" id="nl-address" placeholder="Street address"></div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">County</label><select class="form-input" id="nl-county"><option>Philadelphia</option><option>Montgomery</option><option>Bucks</option><option>Chester</option><option>Delaware</option><option>Burlington</option><option>Camden</option><option>Gloucester</option></select></div>
      <div class="form-group"><label class="form-label">State</label><select class="form-input" id="nl-state"><option value="PA">Pennsylvania</option><option value="NJ">New Jersey</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Service</label><select class="form-input" id="nl-service"><option>Level 2 Home Charger</option><option>Level 2 + Smart Panel Upgrade</option><option>Commercial Fleet Charger</option><option>Level 2 Condo Install</option><option>Level 2 Outlet Upgrade</option></select></div>
    <div class="grid-2" style="gap:12px">
      <div class="form-group"><label class="form-label">Est. Value ($)</label><input class="form-input" id="nl-value" type="number" placeholder="1200"></div>
      <div class="form-group"><label class="form-label">Priority</label><select class="form-input" id="nl-priority"><option value="normal">Normal</option><option value="high">High</option></select></div>
    </div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button><button class="btn btn-primary" onclick="saveNewLead()">Add Lead →</button>`);
}
function saveNewLead() {
  const rawName = document.getElementById('nl-name')?.value?.trim();
  if (!rawName) { showToast('Please enter a customer name'); return; }
  const name     = sanitizeHTML(rawName);
  const county   = sanitizeHTML(document.getElementById('nl-county').value);
  const state    = sanitizeHTML(document.getElementById('nl-state').value);
  const service  = sanitizeHTML(document.getElementById('nl-service').value);
  const newLead  = {
    id: 'L' + String(Date.now()).slice(-6),
    name, phone: sanitizeHTML(document.getElementById('nl-phone').value),
    email: sanitizeHTML(document.getElementById('nl-email').value),
    address: sanitizeHTML(document.getElementById('nl-address').value), city:'',
    county, state, service,
    panel:'200A', charger:'TBD',
    rebate: state==='NJ' ? 'PSE&G $250' : 'PECO $250',
    status:'new', contractor:null,
    created: new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}),
    value: parseInt(document.getElementById('nl-value').value) || 1200,
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
  closeModalDirect();
  renderLeadsTable(); buildSidebar();
  addNotification(`New lead added manually: <strong>${sanitizeHTML(name)}</strong>`);
  showToast('Lead added — ' + name);
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
  list.innerHTML = notifications.map(n=>`<div class="notif-item" style="${!n.read?'background:rgba(59,130,246,0.05)':''}"><span style="font-size:.83rem">${n.text}</span><div class="notif-time">${n.time}</div></div>`).join('');
}
function toggleNotif() {
  notifOpen = !notifOpen;
  const panel = document.getElementById('notif-panel');
  panel.classList.toggle('open', notifOpen);
  if (notifOpen) { notifications.forEach(n=>n.read=true); renderNotifDot(); renderNotifList(); }
}
function clearNotifs() { notifications=[]; renderNotifList(); persist(); showToast('Notifications cleared'); }
function addNotification(text) {
  notifications.unshift({id:Date.now(),text,time:'Just now',read:false});
  renderNotifDot();
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
    l.contractor ? (CONTRACTORS.find(c=>c.id===l.contractor)||{}).name||'' : '',
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
      <input class="form-input" id="qa-note" placeholder="e.g. Customer disputed install quality. Escalating to Red Flow."></div>
    <div class="form-group"><label class="form-label">Override Contractor Assignment</label>
      <select class="form-input" id="qa-contractor">
        <option value="">— Keep current —</option>
        ${CONTRACTORS.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}
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

// ═══════════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════════
const STATUS_LABELS = {new:'New Lead',assigned:'Assigned',contacted:'Contacted',scheduled:'Est. Scheduled','quote-sent':'Quote Sent',completed:'Job Won',lost:'Job Lost'};
function cap(s) { return STATUS_LABELS[s] || (s ? s.charAt(0).toUpperCase() + s.slice(1) : s); }
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t=>t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--navy-mid);border:1px solid var(--blue);color:var(--white);padding:12px 20px;border-radius:10px;font-size:.88rem;z-index:9999;box-shadow:0 8px 20px rgba(0,0,0,.4);animation:fadeInUp .2s';
  t.textContent = '✅ ' + msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2800);
}

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

let _dashInited = false;
function openDashboard() {
  const overlay = document.getElementById('dash-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!_dashInited) {
    _dashInited = true;
    // Small delay to let overlay render before JS reads layout
    setTimeout(() => {
      fillDemo('admin');
      renderNotifList();
    }, 50);
  }
}

function closeDashboardOverlay() {
  const overlay = document.getElementById('dash-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('page-home')?.classList.add('active');
    // Log out when closing so dashboard resets if re-opened
    if (typeof doLogout === 'function' && typeof currentUser !== 'undefined' && currentUser) {
      // silently reset state without showing login screen flicker
      currentUser = null;
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


