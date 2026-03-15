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

/* ── Auto Territory Assignment (round-robin) ── */
function autoAssignByCounty(county, state) {
  if (!settings.autoAssign) return null;
  const eligible = _getContractors().filter(c => c.counties.includes(county) && c.status === 'active');
  if (!eligible.length) return null;
  const key = county;
  _rrIndex[key] = (_rrIndex[key] || 0) % eligible.length;
  const assigned = eligible[_rrIndex[key]];
  _rrIndex[key]++;
  return assigned.id;
}

function submitForm(fieldsId, successId) {
  console.log('[FORM] submitForm called | fieldsId:', fieldsId, '| Supabase ready:', isSupabaseReady(), '| adminEmail:', settings.adminEmail);
  const f = document.getElementById(fieldsId);
  const s = document.getElementById(successId);
  if (!f) { console.error('[FORM] form element not found for id:', fieldsId); return; }

  /* ── 1. HONEYPOT: bots fill hidden fields, humans don't ── */
  const honeypot = f.querySelector('[name="website"]');
  if (honeypot && honeypot.value.trim() !== '') return; // silent reject

  /* ── 2. Collect field values ── */
  const inputs = f.querySelectorAll('input:not([name="website"]), select, textarea');
  const data   = new FormData();
  const vals   = {};
  inputs.forEach(el => {
    if (!el.name) return;
    if (el.type === 'file') {
      // Formspree free tier returns 422 for real file attachments sent via AJAX.
      // Instead: if a file was selected, send its filename as a plain text field
      // (shows up in Formspree email as "panel_photo_name: IMG_1234.jpg").
      // Actual file storage will be handled via Supabase in a later phase.
      if (el.files && el.files.length > 0) {
        const fname = el.files[0].name;
        data.append(el.name + '_name', fname); // text field, not a file — Formspree accepts this
        vals[el.name] = fname;                 // store filename in lead for reference
      }
      // No file selected → skip entirely
    } else {
      data.append(el.name, el.value);
      vals[el.name] = el.value;
    }
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
    rebate:          stateRaw === 'NJ' ? 'PSE&G $250' : 'PECO $250',
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
  };

  /* Enrich with job intelligence */
  const ji = getJobIntelligence(lead);
  lead.installTime     = ji.timeLabel;
  lead.profitPotential = ji.profit;
  lead.difficulty      = ji.difficulty;

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
        }
      })
      .catch(e => console.error('[LEADS] INSERT THREW | source:', _formSource, '| lead_id:', newId, '| error:', e.message));
  } else {
    console.warn('[SUPABASE] not ready — lead saved to localStorage only | lead_id:', newId,
      '| Supabase key/URL may be incorrect, or CDN failed to load');
  }

  /* Show success — lead is captured */
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
  console.log('[VERSION] build=forensic-fix-2026-03-14-v1');
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
    if (ss) {
      const keyBefore = settings.googleMapsKey; // preserve non-empty default
      Object.assign(settings, JSON.parse(ss));
      if (!settings.googleMapsKey && keyBefore) settings.googleMapsKey = keyBefore;
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
      await _resolveAuthUser(user);
      if (!currentUser) {
        errEl.textContent = 'Account not recognized. Contact your administrator.';
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
  // Clear in-memory lead and notification data so prior user's data never leaks
  // to the next login session within the same browser tab.
  leads.splice(0, leads.length);
  notifications.splice(0, notifications.length);
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

    currentContractor = record;
    currentUser = {
      email,
      role: 'contractor',
      name: record.companyName || record.name,
      id:   record.id,
    };

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
        // Preserve local-only leads not yet in DB (same merge strategy as initApp hydration)
        const dbIds = new Set(rows.map(r => r.id));
        const localOnly = leads.filter(l => !dbIds.has(l.id));
        leads.splice(0, leads.length, ...rows, ...localOnly);
        persist();
        buildSidebar();
        const pg = document.querySelector('#pages .page.active')?.id;
        if (pg === 'page-all-leads')        renderLeadsTable();
        else if (pg === 'page-pipeline')    buildPages();
        else if (pg === 'page-dashboard')   refreshAdminDashboard();
        else if (pg === 'page-assign')      renderAssignTable();
        else if (pg === 'page-my-leads')    renderMyLeads();
        else if (pg === 'page-my-pipeline') buildPages();
        console.log('[Realtime] leads refreshed —', rows.length, 'rows from DB' + (localOnly.length ? ' + ' + localOnly.length + ' local-only preserved' : ''));
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
  console.log('[BUILD] initApp — version=forensic-fix-2026-03-14-v1 | role:', currentUser?.role, '| email:', currentUser?.email, '| Supabase ready:', isSupabaseReady());
  const av = document.getElementById('user-avatar');
  const nameInitial = (currentUser.name || currentUser.email || '?')[0].toUpperCase();
  av.textContent = nameInitial;
  av.className = 'user-avatar ' + currentUser.role;
  document.getElementById('user-name-display').textContent = currentUser.name;
  document.getElementById('user-role-display').textContent = currentUser.role === 'admin' ? 'Administrator' : 'Contractor Partner';
  renderNotifDot();
  buildPages();
  buildSidebar();
  navTo(currentUser.role === 'admin' ? 'dashboard' : 'my-leads');
  // Seed poll baseline and start lead-polling interval
  _lastNewLeadCount = leads.filter(l => l.status === 'new').length;
  if (_pollInterval) clearInterval(_pollInterval);
  _pollInterval = setInterval(_pollNewLeads, 10000);
  // Hydrate from Supabase in the background.
  // Strategy: DB is the source of truth. Any locally-staged leads (id not in DB)
  // are preserved so nothing is lost if a previous insert failed transiently.
  if (isSupabaseReady()) {
    sbFetchLeadsWithNotes().then(rows => {
      if (!currentUser) return; // user may have logged out while fetch was in flight
      if (!Array.isArray(rows)) {
        console.warn('[DB] hydrate: sbFetchLeadsWithNotes returned non-array — keeping local data');
        return;
      }
      // Build a set of IDs that exist in DB
      const dbIds = new Set(rows.map(r => r.id));
      // Preserve any local-only leads not yet confirmed in DB (e.g., failed insert)
      const localOnly = leads.filter(l => !dbIds.has(l.id));
      if (localOnly.length > 0) {
        console.warn('[DB] hydrate: found', localOnly.length, 'local-only lead(s) not in Supabase:', localOnly.map(l => l.id));
      }
      // Merge: DB rows first (authoritative), then any local-only leftovers
      // Capture active page BEFORE buildPages() wipes all active classes.
      const activePageId = document.querySelector('#pages .page.active')?.id?.replace('page-', '') || 'dashboard';
      leads.splice(0, leads.length, ...rows, ...localOnly);
      persist();
      buildPages();
      buildSidebar();
      _lastNewLeadCount = leads.filter(l => l.status === 'new').length;
      console.log('[DB] Hydrated', rows.length, 'leads from Supabase' + (localOnly.length ? ' + ' + localOnly.length + ' local-only preserved' : ''));
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

/* Replaces the coverage page node so it always reflects the current API key
   and live lead counts. The map init runs separately via initCoverageMap(). */
function refreshCoveragePage() {
  const el = document.getElementById('page-coverage');
  if (!el) return;
  const wasActive = el.classList.contains('active');
  const tmp = document.createElement('div');
  tmp.innerHTML = pgCoverage();
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
    html += pgAdminDashboard() + pgPipeline() + pgAllLeads() + pgAssign() + pgContractors() + pgRevenue() + pgSmsTemplates() + pgSettings();
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
  return `<div class="page" id="page-dashboard">
    <div class="page-header">
      <div><h1>Dashboard Overview</h1><p>ExpertEV Installers · PA/NJ Territory</p></div>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="openAddLead()">+ New Lead</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card blue"><div class="stat-icon">⚡</div><div class="stat-value blue">${newC}</div><div class="stat-label">New Leads</div><div class="stat-change up">↑ 3 this week</div></div>
      <div class="stat-card yellow"><div class="stat-icon">🔄</div><div class="stat-value yellow">${pipeline}</div><div class="stat-label">Active Pipeline</div><div class="stat-change up">↑ 2 today</div></div>
      <div class="stat-card green"><div class="stat-icon">✅</div><div class="stat-value green">${completed}</div><div class="stat-label">Completed Jobs</div><div class="stat-change up">↑ 1 this week</div></div>
      <div class="stat-card cyan"><div class="stat-icon">💰</div><div class="stat-value cyan">$${revenue.toLocaleString()}</div><div class="stat-label">Revenue Generated</div></div>
      <div class="stat-card blue"><div class="stat-icon">🔧</div><div class="stat-value blue">${_getContractors().length}</div><div class="stat-label">Active Contractors</div></div>
    </div>
    <div class="two-col">
      <div class="card">
        <div class="card-header"><span>⚡</span><div class="card-title">Recent Leads</div><button class="btn btn-outline btn-sm" onclick="navTo('all-leads')">View All</button></div>
        <table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Description</th><th>Status</th><th></th></tr></thead><tbody>
        ${recent.map(l=>{ const cn=l.notes.find(n=>n.author==='Customer'); return `<tr>
          <td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.phone}</div></td>
          <td>${l.county},${l.state}</td>
          <td style="font-size:.8rem">${l.service}</td>
          <td style="font-size:.8rem;color:var(--gray);max-width:160px">${cn ? `<span title="${sanitizeHTML(cn.text)}">${sanitizeHTML(cn.text.length>60?cn.text.slice(0,60)+'…':cn.text)}</span><button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Full details" style="margin-left:4px;font-size:.7rem">⬆</button>` : '—'}</td>
          <td><span class="badge badge-${l.status}">${cap(l.status)}</span>${l.priority==='high'?'<span class="warn-tag" style="margin-left:4px;font-size:.68rem">HIGH</span>':''}</td>
          <td><button class="btn-icon" onclick="openLeadDetail('${l.id}')">→</button></td>
        </tr>`; }).join('')}
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
  const cName = id => id ? (_getContractors().find(c => c.id === id) || {}).name || '—' : '—';
  const wrap = document.getElementById('leads-table-wrap');
  if (!wrap) return;
  wrap.innerHTML = filtered.length === 0
    ? `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No leads found</h3><p>Try adjusting the filters</p></div>`
    : `<table class="leads-table"><thead><tr><th>ID</th><th>Customer</th><th>County</th><th>Description</th><th>Complexity</th><th>Value</th><th>Contractor</th><th>Status</th><th>Date</th><th></th></tr></thead><tbody>
      ${filtered.map(l=>{ const cn=l.notes.find(n=>n.author==='Customer'); return `<tr>
        <td><span class="mono" style="color:var(--gray);font-size:.78rem">${l.id}</span></td>
        <td><div class="lead-name">${l.name}${l.priority==='high'?'<span class="warn-tag" style="margin-left:6px;font-size:.68rem">HIGH</span>':''}</div><div class="lead-sub">${l.phone}</div></td>
        <td>${l.county},${l.state}</td>
        <td style="font-size:.78rem;color:var(--gray);max-width:180px">${cn?`<span title="${sanitizeHTML(cn.text)}">${sanitizeHTML(cn.text.length>70?cn.text.slice(0,70)+'…':cn.text)}</span>`:l.service}</td>
        <td style="font-size:.78rem">${l.complexity||'—'}</td>
        <td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td>
        <td style="font-size:.82rem">${cName(l.contractor)}</td>
        <td><span class="badge badge-${l.status}">${cap(l.status)}</span></td>
        <td style="font-size:.8rem;color:var(--gray)">${l.created}</td>
        <td style="display:flex;gap:4px">
          <button class="btn-icon" onclick="openLeadDetail('${l.id}')" title="Full Details">→</button>
          <button class="btn-icon" onclick="openQualityReview('${l.id}')" title="Quality Review" style="font-size:.8rem">🔍</button>
        </td>
      </tr>`; }).join('')}
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

  const allContractors = _getContractors();
  console.log('[Assign] contractors available:', allContractors.length, allContractors.map(c => c.name + '(counties:' + (c.counties||[]).length + ')'));

  wrap.innerHTML = unassigned.length === 0
    ? `<div class="card"><div class="empty-state"><div class="empty-state-icon">✅</div><h3>All leads assigned!</h3><p>New leads appear here as they come in.</p></div></div>`
    : `<div class="card"><table class="leads-table"><thead><tr><th>Customer</th><th>County / State</th><th>Service</th><th>Value</th><th>Priority</th><th>Assign To</th><th></th></tr></thead><tbody>
      ${unassigned.map(l => {
        // Split contractors: county-match first (if any), then all others.
        // This gives a useful suggestion without hiding anyone.
        const inCounty  = allContractors.filter(c => (c.counties||[]).includes(l.county));
        const outCounty = allContractors.filter(c => !(c.counties||[]).includes(l.county));
        const countyOpts = inCounty.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        const otherOpts  = outCounty.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        const opts = inCounty.length && outCounty.length
          ? `<optgroup label="Covers ${l.county}">${countyOpts}</optgroup><optgroup label="All others">${otherOpts}</optgroup>`
          : (countyOpts || otherOpts);
        return `<tr>
          <td><div class="lead-name">${l.name}</div><div class="lead-sub">${l.address}</div></td>
          <td>${l.county},${l.state}</td>
          <td style="font-size:.8rem">${l.service}</td>
          <td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td>
          <td><select class="filter-select" style="font-size:.75rem;padding:4px 8px" onchange="setLeadPriority('${l.id}',this.value)"><option value="normal" ${l.priority==='normal'?'selected':''}>Normal</option><option value="high" ${l.priority==='high'?'selected':''}>High</option></select></td>
          <td><select class="filter-select" id="asel-${l.id}" style="width:190px"><option value="">Select contractor...</option>${opts}</select></td>
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
  lead.status = 'assigned';
  lead.contractor = sel.value;
  addNote(lid, 'Admin', `Assigned to ${contractorName}.`);
  renderAssignTable(); buildSidebar();
  persist();
  showToast('Lead assigned to ' + contractorName);
  addNotification(`Lead assigned to <strong>${sanitizeHTML(contractorName)}</strong> — ${sanitizeHTML(lead.name)}`);
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
  return `<div class="page" id="page-contractors">
    <div class="page-header"><div><h1>Contractors</h1><p>${list.length} active partner contractor${list.length !== 1 ? 's' : ''}</p></div>
    <button class="btn btn-primary" onclick="showAddContractorModal()">+ Add Contractor</button></div>
    <div style="display:flex;flex-direction:column;gap:14px">
    ${list.map(c => {
      const cLeads     = leads.filter(l => l.contractor === c.id);
      const cCompleted = cLeads.filter(l => l.status === 'completed');
      const cRevenue   = cCompleted.reduce((s, l) => s + l.value, 0);
      const initial    = (c.companyName || c.name || '?')[0].toUpperCase();
      const inviteTag  = c.lastLoginAt
        ? `<span class="badge badge-completed" style="font-size:.68rem;margin-left:6px">Activated</span>`
        : c.invitedAt
          ? `<span class="badge" style="font-size:.68rem;margin-left:6px;background:rgba(59,130,246,.15);color:var(--blue-bright);border:1px solid rgba(59,130,246,.3)">Invite Sent</span>`
          : `<span class="badge" style="font-size:.68rem;margin-left:6px;background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3)">Pending Invite</span>`;
      return `<div class="contractor-card">
        <div class="contractor-avatar" style="background:linear-gradient(135deg,var(--blue-bright),var(--green))">${initial}</div>
        <div class="contractor-info">
          <div class="contractor-name">${sanitizeHTML(c.companyName || c.name)} ${c.isActive !== false ? `<span class="badge badge-completed" style="font-size:.7rem;margin-left:6px">Active</span>` : `<span class="badge" style="font-size:.7rem;margin-left:6px;background:rgba(239,68,68,.15);color:#ef4444;border:1px solid rgba(239,68,68,.3)">Inactive</span>`}${inviteTag}</div>
          <div class="contractor-meta">${sanitizeHTML(c.contactName || c.contact)} · ${sanitizeHTML(c.phone)} · ${sanitizeHTML(c.email)}</div>
          <div class="contractor-meta" style="margin-top:3px">🪪 ${sanitizeHTML(c.license || '—')} &nbsp;·&nbsp; 📍 ${sanitizeHTML((c.counties || []).slice(0,4).join(', '))}${(c.counties||[]).length > 4 ? ` +${c.counties.length-4} more` : ''}</div>
        </div>
        <div class="contractor-stats">
          <div><div class="c-stat-val">${cLeads.length}</div><div class="c-stat-lbl">Leads</div></div>
          <div><div class="c-stat-val" style="color:var(--green)">${cCompleted.length}</div><div class="c-stat-lbl">Won</div></div>
          <div><div class="c-stat-val" style="color:var(--cyan)">$${(cRevenue/1000).toFixed(1)}k</div><div class="c-stat-lbl">Revenue</div></div>
          <div><div class="c-stat-val" style="color:var(--yellow)">⭐${c.rating || '—'}</div><div class="c-stat-lbl">Rating</div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
          <button class="btn btn-outline btn-sm" onclick="editContractor('${c.id}')">✏️ Edit</button>
          <button class="btn btn-outline btn-sm" onclick="viewContractor('${c.id}')">Details →</button>
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
  const cLeads = leads.filter(l => l.contractor === id);
  openModalWith(sanitizeHTML(c.companyName || c.name), `
    <div class="detail-row"><div class="detail-label">Contact</div><div class="detail-value">${sanitizeHTML(c.contactName || c.contact || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value"><a href="tel:${sanitizeHTML(c.phone)}" style="color:var(--blue-bright);text-decoration:none">${sanitizeHTML(c.phone || '—')}</a></div></div>
    <div class="detail-row"><div class="detail-label">Email</div><div class="detail-value"><a href="mailto:${sanitizeHTML(c.email)}" style="color:var(--blue-bright);text-decoration:none">${sanitizeHTML(c.email || '—')}</a></div></div>
    <div class="detail-row"><div class="detail-label">License</div><div class="detail-value mono">${sanitizeHTML(c.license || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Coverage</div><div class="detail-value">${sanitizeHTML((c.counties||[]).join(', ') || '—')}</div></div>
    <div class="detail-row"><div class="detail-label">Revenue</div><div class="detail-value" style="color:var(--cyan)">$${(c.revenue||0).toLocaleString()}</div></div>
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
    ${cLeads.length === 0 ? '<div style="color:var(--gray);font-size:.85rem">No leads assigned yet.</div>' : cLeads.map(l=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(30,45,74,0.4)"><div><div style="font-size:.85rem;font-weight:500">${sanitizeHTML(l.name)}</div><div style="font-size:.75rem;color:var(--gray)">${sanitizeHTML(l.county)},${sanitizeHTML(l.state)} · $${l.value.toLocaleString()}</div></div><span class="badge badge-${l.status}">${cap(l.status)}</span></div>`).join('')}`,
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
      <div class="form-group"><label class="form-label">Company Name *</label><input class="form-input" id="ac-company" placeholder="e.g. Volt Masters LLC"></div>
      <div class="form-group"><label class="form-label">Contact Person *</label><input class="form-input" id="ac-contact" placeholder="Full name"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Email *</label><input class="form-input" type="email" id="ac-email" placeholder="contact@company.com"></div>
      <div class="form-group"><label class="form-label">Phone</label><input class="form-input" id="ac-phone" placeholder="(xxx) xxx-xxxx"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">License #</label><input class="form-input" id="ac-lic" placeholder="PA-EL-XXXXX or NJ-EL-XXXXX"></div>
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
  const license = document.getElementById('ac-lic')?.value.trim()   ?? '';
  const errEl   = document.getElementById('ac-error');
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
      company_name: company,
      contact_name: contact,
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
    status:      'active',
    isActive:    true,
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

  const updates = { companyName: company, name: company, contactName: contact, contact, email, phone, license, status, counties: selectedCounties, isActive: status === 'active' };

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

function deleteContractor(id) {
  const c = _getContractors().find(x => x.id === id);
  if (!c) return;
  const name = c.companyName || c.name || 'this contractor';
  openModalWith('Delete Contractor',
    `<div class="alert-box warn">⚠️ <div><strong>Are you sure you want to delete "${sanitizeHTML(name)}"?</strong><br>This cannot be undone. Any leads assigned to them will become unassigned.</div></div>`,
    `<button class="btn btn-outline" onclick="closeModalDirect()">Cancel</button>
     <button class="btn btn-sm" style="background:rgba(239,68,68,.15);color:#f87171;border:1px solid rgba(239,68,68,.3);padding:8px 18px" onclick="confirmDeleteContractor('${id}')">Yes, Delete</button>`
  );
}

async function confirmDeleteContractor(id) {
  closeModalDirect();
  // Remove from in-memory array
  const idx = dbContractors.findIndex(x => x.id === id);
  if (idx !== -1) dbContractors.splice(idx, 1);
  // Unassign any leads that referenced this contractor
  leads.forEach(l => { if (l.contractor === id) { l.contractor = null; l.status = 'new'; } });
  persist();
  // Delete from DB
  if (isSupabaseReady()) {
    const { error } = await (_db()?.from('contractors').delete().eq('id', id) ?? Promise.resolve({ error: null }));
    if (error) console.error('[DB] deleteContractor:', error.message);
  }
  buildPages();
  navTo('contractors');
  showToast('Contractor removed.');
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
          ${(()=>{ const cs=_getContractors(); const maxRev=Math.max(...cs.map(x=>x.revenue),1); return cs.map(c=>`<div class="county-row"><div class="county-name" style="width:140px">${c.name}</div><div class="county-bar-wrap"><div class="county-bar" style="width:${Math.round(c.revenue/maxRev*100)}%"></div></div><div class="county-count" style="width:60px;color:var(--green)">$${(c.revenue/1000).toFixed(1)}k</div></div>`).join(''); })()}
          <div style="margin-top:16px;font-size:.8rem;color:var(--gray)">Platform fee per contractor at ${settings.commissionPct}% commission rate</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><span>✅</span><div class="card-title">Completed Jobs</div></div>
      ${done.length===0?`<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No completed jobs yet</h3></div>`
      :`<table class="leads-table"><thead><tr><th>Customer</th><th>County</th><th>Service</th><th>Contractor</th><th>Job Value</th><th>Platform Fee</th><th>Date</th></tr></thead><tbody>
        ${done.map(l=>{const c=_getContractors().find(x=>x.id===l.contractor); return `<tr><td>${l.name}</td><td>${l.county},${l.state}</td><td style="font-size:.8rem">${l.service}</td><td style="font-size:.82rem">${c?c.name:'—'}</td><td style="color:var(--green);font-weight:600">$${l.value.toLocaleString()}</td><td style="color:var(--cyan)">$${Math.round(l.value*settings.commissionPct/100).toLocaleString()}</td><td style="font-size:.8rem;color:var(--gray)">${l.created}</td></tr>`;}).join('')}
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
    <div id="coverage-map-alert"></div>
    <div class="grid-2">
      <div class="card" style="overflow:visible"><div class="card-header"><span>🗺️</span><div class="card-title">Territory Map</div></div>
        <div class="card-body" style="overflow:visible;padding:0"><div id="coverage-map-container" style="height:340px;border-radius:0 0 14px 14px;background:var(--navy-light);width:100%;display:block"></div></div>
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

// ─── COVERAGE MAP INIT ──────────────────────────────────────────
// Uses Maps Embed API (iframe) — works on all devices including iOS Safari.
// The JS API approach fails on mobile inside position:fixed/overflow:auto containers.
function initCoverageMap() {
  const container = document.getElementById('coverage-map-container');
  const alertEl   = document.getElementById('coverage-map-alert');
  if (!container) return;

  if (!settings.googleMapsKey) {
    container.innerHTML = `
      <div style="min-height:240px;height:100%;display:flex;align-items:center;justify-content:center;
                  flex-direction:column;gap:12px;color:var(--gray);
                  border:2px dashed var(--navy-border);border-radius:0 0 14px 14px;box-sizing:border-box;padding:20px">
        <div style="font-size:2.5rem">🗺️</div>
        <div style="font-weight:600;color:var(--white)">Coverage Map</div>
        <div style="font-size:.82rem;text-align:center;max-width:280px;line-height:1.5">
          Enter your Google Maps API key in
          <span style="cursor:pointer;color:var(--blue-bright);text-decoration:underline"
                onclick="navTo('settings')">Settings → Integrations</span>
          to activate the interactive map
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:4px">
          <span style="font-size:.75rem;background:rgba(37,99,235,.15);color:var(--blue-bright);padding:4px 12px;border-radius:20px;border:1px solid rgba(37,99,235,.3)">5 PA Counties</span>
          <span style="font-size:.75rem;background:rgba(6,182,212,.12);color:var(--cyan);padding:4px 12px;border-radius:20px;border:1px solid rgba(6,182,212,.3)">3 NJ Counties</span>
        </div>
      </div>`;
    if (alertEl) alertEl.innerHTML = `<div class="alert-box warn">⚠️ <div><strong>No Google Maps API key set.</strong> <span style="cursor:pointer;text-decoration:underline" onclick="navTo('settings')">Add it in Settings → Integrations</span> then return here. Enable <strong>Maps Embed API</strong> in Google Cloud Console.</div></div>`;
    return;
  }

  if (alertEl) alertEl.innerHTML = `<div class="alert-box info">🗺️ <div>Showing 8-county PA/NJ service territory. If the map shows an error, enable <strong>Maps Embed API</strong> in your Google Cloud Console and ensure billing is active.</div></div>`;

  // Build county marker pins for the embed URL
  const markers = [
    { lat:39.9526, lng:-75.1652, label:'PHL' },
    { lat:40.2115, lng:-75.3874, label:'MON' },
    { lat:40.3451, lng:-75.0619, label:'BUC' },
    { lat:39.9735, lng:-75.7407, label:'CHE' },
    { lat:39.9068, lng:-75.4093, label:'DEL' },
    { lat:40.0110, lng:-74.7143, label:'BUR' },
    { lat:39.8007, lng:-74.9636, label:'CAM' },
    { lat:39.7090, lng:-75.1493, label:'GLO' },
  ];
  const markerParams = markers.map(m => `markers=color:blue%7Clabel:${m.label}%7C${m.lat},${m.lng}`).join('&');
  const src = `https://www.google.com/maps/embed/v1/view?key=${encodeURIComponent(settings.googleMapsKey)}&center=40.05,-75.15&zoom=9&maptype=roadmap`;

  container.innerHTML = `
    <iframe
      src="${src}"
      width="100%"
      height="100%"
      style="border:0;display:block;width:100%;height:100%;min-height:280px;border-radius:0 0 14px 14px"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="ExpertEV Coverage Territory">
    </iframe>`;
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
            <input class="form-input" id="s-gmap" value="${settings.googleMapsKey||''}" placeholder="AIzaSy...">
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
          <div class="toggle ${settings.followUpAlerts?'on':''}" id="toggle-followup" onclick="toggleSetting('followUpAlerts','toggle-followup')"></div>
        </div>
        <div class="setting-row">
          <div class="setting-info"><div class="setting-name">Post-completion review requests</div><div class="setting-desc">Automatically send a review request SMS to customers when job status changes to Completed</div></div>
          <div class="toggle ${settings.reviewRequests?'on':''}" id="toggle-review" onclick="toggleSetting('reviewRequests','toggle-review')"></div>
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
  settings.adminEmail  = document.getElementById('s-email')?.value      || settings.adminEmail;
  settings.paPhone     = document.getElementById('s-paphone')?.value    || settings.paPhone;
  settings.njPhone     = document.getElementById('s-njphone')?.value    || settings.njPhone;
  settings.formspreeId   = document.getElementById('s-formspree')?.value  || settings.formspreeId;
  settings.googleMapsKey = (document.getElementById('s-gmap')?.value ?? '').trim();
  settings.commissionPct = parseInt(document.getElementById('s-commission')?.value) || settings.commissionPct;
  settings.leadFee       = parseInt(document.getElementById('s-leadfee')?.value)    || settings.leadFee;
  persist();
  if (isSupabaseReady()) sbUpdateSettings(settings).catch(e => console.warn('[DB] updateSettings:', e.message));
  showToast('Settings saved!');
}

// ─── CONTRACTOR PAGES ────────────────────────────────────────────
function pgMyLeads() {
  return `<div class="page" id="page-my-leads">
    <div class="page-header">
      <div><h1>My Leads</h1><p>Pre-qualified electrical projects — ${currentUser?.name || ''}</p></div>
      <div class="page-header-actions">
        <button class="btn btn-outline btn-sm" onclick="toggleMyLeadsView()">⊞ Toggle View</button>
      </div>
    </div>
    <div class="alert-box info" style="margin-bottom:16px">⚡ <div><strong>Lead Profit Estimator is active.</strong> Each card shows estimated job value, install time, difficulty, and profit potential — so you can prioritize before calling.</div></div>
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
    <div class="page-header"><div><h1>Performance Analytics</h1><p>${sanitizeHTML((currentContractor && (currentContractor.companyName || currentContractor.name)) || currentUser.name || 'Your')} — your stats</p></div></div>
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
  const c = currentContractor || _getContractors().find(x => x.id === currentUser?.id) || _getContractors()[0] || {};
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
  const cName = l.contractor ? (_getContractors().find(c=>c.id===l.contractor)||{}).name || 'Unassigned' : 'Unassigned';
  document.getElementById('modal').classList.toggle('modal-lg', true);
  document.getElementById('modal-title').textContent = `${l.id} — ${l.name}`;
  const _ji = getJobIntelligence(l);
  document.getElementById('modal-body').innerHTML = `
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab(event,'tab-intel')">⚡ Job Intelligence</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-details')">Details</button>
      <button class="tab-btn" onclick="switchTab(event,'tab-notes')">Notes (${l.notes.length})</button>
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
  if (c) { l.contractor = c.value || null; if (c.value) addNote(id, 'Admin', `Assigned to ${(_getContractors().find(x=>x.id===c.value)||{}).name}.`); }
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
  if (l) {
    const prev = l.status;
    l.status = status;
    if (status === 'contacted' && !l.contactedAt) l.contactedAt = new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    addNote(id, currentUser.name, `Status changed to ${cap(status)}.`);
    if (status === 'completed' && prev !== 'completed') _onLeadCompleted(l);
  }
  /* Refresh whichever view is currently active */
  if (document.getElementById('page-my-leads')?.classList.contains('active'))  renderMyLeads();
  if (document.getElementById('page-all-leads')?.classList.contains('active')) renderLeadsTable();
  buildSidebar();
  refreshAdminDashboard();
  persist();
  if (isSupabaseReady()) {
    sbUpdateLeadStatus(id, status).then(r => {
      if (!r) console.error('[DB]', JSON.stringify({ step: 'lead_status_update', lead_id: id, status, result: 'failure', error: 'updateLeadStatus returned null — likely RLS policy' }));
    }).catch(e => console.error('[DB]', JSON.stringify({ step: 'lead_status_update', lead_id: id, error: e.message })));
  }
  showToast('Status updated → ' + cap(status));
}

/* Fired once when any lead transitions into 'completed' status.
   Unconditional: always notifies. Review request prompt is separate. */
function _onLeadCompleted(l) {
  addNotification(`✅ <strong>Job Won — ${sanitizeHTML(l.name)}</strong> · $${l.value.toLocaleString()} · ${sanitizeHTML(l.county)}`);
  if (settings.reviewRequests) {
    addNotification(`📩 <strong>Review request queued</strong> for ${sanitizeHTML(l.name)} — open lead to send`);
  }
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
  if (isSupabaseReady()) {
    sbCreateLead(newLead).then(r => {
      if (!r) console.error('[DB]', JSON.stringify({ step: 'lead_insert', source: 'manual_entry', lead_id: newLead.id, result: 'failure', error: 'createLead returned null — likely RLS policy. Run schema_v3_rls_fix.sql.' }));
    }).catch(e => console.error('[DB]', JSON.stringify({ step: 'lead_insert', source: 'manual_entry', lead_id: newLead.id, error: e.message })));
  }
  closeModalDirect();
  renderLeadsTable(); buildSidebar();
  refreshAdminDashboard();
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
      <input class="form-input" id="qa-note" placeholder="e.g. Customer disputed install quality. Escalating to Red Flow."></div>
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

function openDashboard() {
  const overlay = document.getElementById('dash-overlay');
  if (!overlay) return;
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


