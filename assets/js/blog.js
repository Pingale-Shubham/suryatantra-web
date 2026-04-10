/* ═══════════════════════════════════════════════════════════
   blog.js — Suryatantra Enterprises LLP
   Handles: blog data, modal, filter, search, scroll-reveal,
            nav scroll-shadow, mobile menu, card stagger
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   1. BLOG DATA
───────────────────────────────────────── */
const BLOGS = {
  1: {
    title:    'Choosing the Right PCB Drill Bits',
    tag:      'Drilling',
    readTime: '4 min read',
    image:    'https://images.unsplash.com/photo-1581093588401-16f2c1b2f7b3?w=900&q=80',
    body: `
      <h3>Why Drill Bit Selection Matters</h3>
      <p>In PCB fabrication, hole quality directly impacts plating adhesion, signal integrity, and long-term reliability. Choosing an incorrect bit leads to burring, delamination, and costly rework.</p>
      <h3>Key Parameters</h3>
      <ul>
        <li><strong>Diameter tolerance</strong> — ±0.010 mm ensures proper annular ring clearance.</li>
        <li><strong>Flute geometry</strong> — Tight helix angles clear swarf efficiently in high-stack drilling.</li>
        <li><strong>Coating</strong> — TiN or DLC coatings extend tool life in abrasive laminates like Rogers or PTFE.</li>
        <li><strong>Point angle</strong> — 130° is standard; use 120° for softer materials to reduce breakthrough burr.</li>
      </ul>
      <h3>Material-Specific Guidance</h3>
      <p>Standard FR4 works well with uncoated carbide at feeds of 0.020–0.025 mm/rev. High-frequency laminates require slower RPM and sharper geometry to prevent resin smear. Always match the manufacturer's recommended chip load for the specific laminate stack.</p>
      <h3>Tool Life Signals</h3>
      <p>Monitor hole entry quality and exit burr. A visible increase in exit burr or entry ring fracture signals that it's time to replace or resharpen — don't rely solely on hit count.</p>
    `
  },
  2: {
    title:    'High-Speed Spindles in PCB Production',
    tag:      'Spindles',
    readTime: '5 min read',
    image:    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    body: `
      <h3>The Case for High RPM</h3>
      <p>Modern PCB drilling machines operate spindles at 60,000–300,000 RPM. At these speeds, the chip-thinning effect allows faster feed rates without increasing cutting forces, which directly improves surface finish inside drilled holes.</p>
      <h3>Spindle Types</h3>
      <ul>
        <li><strong>Air-bearing spindles</strong> — Ultra-smooth rotation with virtually no runout; ideal for micro-drill diameters below 0.3 mm.</li>
        <li><strong>Mechanical-bearing spindles</strong> — Better suited for larger diameters and higher axial loads.</li>
        <li><strong>Motorised cartridge spindles</strong> — Easy swap-out for minimal downtime during maintenance.</li>
      </ul>
      <h3>Runout and Its Consequences</h3>
      <p>Even 5 µm of TIR runout at 200,000 RPM can cause measurable hole positional deviation. Specify spindles with ≤3 µm TIR for fine-pitch HDI work. Regular collet inspection and replacement is critical.</p>
      <h3>Maintenance Schedule</h3>
      <p>Air-filter replacement, bearing condition monitoring via vibration analysis, and lubrication intervals set per OEM spec are non-negotiable for sustained spindle accuracy. Document every intervention.</p>
    `
  },
  3: {
    title:    'PCB Routing Tools Explained',
    tag:      'Routing',
    readTime: '4 min read',
    image:    'https://images.unsplash.com/photo-1581091012184-5c3f6e7a3d52?w=900&q=80',
    body: `
      <h3>Routing vs. Punching vs. V-Scoring</h3>
      <p>CNC routing is the most versatile depanelization method — it accommodates any board outline, including complex curves and tight internal cutouts. The trade-off is routing dust and slightly lower throughput compared to V-scoring for simple rectangular boards.</p>
      <h3>Router Bit Geometry</h3>
      <ul>
        <li><strong>Up-cut spiral</strong> — Clears chips upward; preferred for clean bottom-side edges.</li>
        <li><strong>Down-cut spiral</strong> — Forces chips downward; better for top-side surface finish.</li>
        <li><strong>Compression bits</strong> — Combines both for simultaneous top and bottom edge quality on double-sided laminates.</li>
      </ul>
      <h3>Feed and Speed Optimisation</h3>
      <p>Starting parameters for FR4: 40,000 RPM, 1.2 m/min feed, 0.9 mm diameter. Adjust incrementally and inspect edge quality under 20× magnification before committing to production settings.</p>
      <h3>Tool Wear Indicators</h3>
      <p>Fibre fraying on cut edges and increased cutting noise are early signs. Replace bits before full failure to avoid board damage and machine downtime.</p>
    `
  },
  4: {
    title:    'V-Cut Scoring: Precision Panel Separation',
    tag:      'V-Cut',
    readTime: '3 min read',
    image:    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    body: `
      <h3>What Is V-Cut Scoring?</h3>
      <p>V-cut scoring machines pass a pair of opposed circular blades along the panel, creating a groove that typically leaves 30–40% of the original board thickness intact. The panel snaps cleanly along the score line during depanelization.</p>
      <h3>Blade Angle Selection</h3>
      <ul>
        <li><strong>30°</strong> — Deeper groove; easier snap but narrower keep-out zone required.</li>
        <li><strong>45°</strong> — Standard for most FR4 thicknesses (1.0–2.0 mm).</li>
        <li><strong>60°</strong> — Shallower groove; stronger panel during handling but requires more force to separate.</li>
      </ul>
      <h3>Limitations to Know</h3>
      <p>V-cut is restricted to straight-line separations. Components must maintain a minimum clearance (typically 0.5–1.0 mm) from the score line to avoid mechanical stress damage during separation. Not suitable for curved outlines.</p>
      <h3>Blade Maintenance</h3>
      <p>Inspect blade sharpness every 500–800 linear metres. Worn blades produce uneven groove depth, causing inconsistent snap force and edge cracking. Track blade mileage per blade pair.</p>
    `
  },
  5: {
    title:    'Optimising Drill Stack-Up for Multilayer PCBs',
    tag:      'Drilling',
    readTime: '6 min read',
    image:    'https://images.unsplash.com/photo-1581093588401-16f2c1b2f7b3?w=900&q=80',
    body: `
      <h3>Stack-Up Fundamentals</h3>
      <p>A drill stack-up consists of an entry material, the panel set (typically 1–3 boards), and a backer board. Each layer affects chip evacuation, heat dissipation, and hole exit quality.</p>
      <h3>Entry Materials</h3>
      <ul>
        <li><strong>Aluminium foil (0.15 mm)</strong> — Standard; reduces entry burr and provides lubrication for the drill tip.</li>
        <li><strong>Phenolic resin entry</strong> — Better for small diameters; higher stiffness reduces wander.</li>
        <li><strong>Melamine composite</strong> — For very high-speed applications where aluminium galling is a concern.</li>
      </ul>
      <h3>Backer Board Selection</h3>
      <p>Use cellulosic or phenolic backers to support the exit face. Avoid MDF for HDI work — fibre contamination can clog flutes. Vacuum-backed drilling tables eliminate the need for physical backers in automated setups.</p>
      <h3>Panel Count per Stack</h3>
      <p>Stacking more panels increases throughput but raises drill temperature and wander risk. For diameters below 0.3 mm, drill single-up. For 0.4–0.8 mm, double-up is generally safe. Validate with hole position accuracy (HPA) measurements on the first articles of any new stack configuration.</p>
      <h3>Clamp Pressure</h3>
      <p>Insufficient clamping allows micro-movement between cycles, causing positional drift. Over-clamping deforms thin laminates. Target clamp force per OEM specification and verify periodically with pressure-sensitive film.</p>
    `
  },
  6: {
    title:    'Automating PCB Depanelization for High-Volume Lines',
    tag:      'Routing',
    readTime: '5 min read',
    image:    'https://images.unsplash.com/photo-1581091012184-5c3f6e7a3d52?w=900&q=80',
    body: `
      <h3>Inline vs. Offline Depanelization</h3>
      <p>Offline systems require operator transfer between stations, adding handling risk. Inline routers integrate directly into the SMT line, feeding separated boards to the next process automatically and eliminating manual touch points.</p>
      <h3>System Selection Criteria</h3>
      <ul>
        <li><strong>Throughput</strong> — Panels per hour must match line speed; bottlenecks are costly.</li>
        <li><strong>Vision alignment</strong> — Fiducial-based vision systems compensate for panel stretch and thermal expansion.</li>
        <li><strong>Fixturing</strong> — Vacuum fixtures secure populated assemblies without stressing solder joints during cutting.</li>
        <li><strong>Dust extraction</strong> — HEPA-filtered extraction is mandatory to prevent FR4 dust contamination of nearby PCBs.</li>
      </ul>
      <h3>ROI Calculation</h3>
      <p>Quantify manual handling damage rate (typically 0.1–0.5% for populated boards), operator labour cost, and yield loss from inconsistent separation. Inline systems commonly achieve payback within 12–24 months at volumes above 500 panels/day.</p>
      <h3>Programming and Changeover</h3>
      <p>Modern systems accept Gerber or DXF files for automatic tool-path generation. Changeover between products should take under 10 minutes with offline programming — critical for high-mix environments.</p>
    `
  }
};


/* ─────────────────────────────────────────
   2. MODAL
───────────────────────────────────────── */
const BlogModal = {
  el: document.getElementById('blogModal'),

  open(id) {
    const d = BLOGS[id];
    if (!d) return;

    document.getElementById('modalTitle').textContent    = d.title;
    document.getElementById('modalTag').textContent      = d.tag;
    document.getElementById('modalReadTime').textContent = d.readTime;
    document.getElementById('modalImage').src            = d.image;
    document.getElementById('modalImage').alt            = d.title;
    document.getElementById('modalBody').innerHTML       = d.body;

    this.el.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => this.el.classList.add('modal-open'));
  },

  close() {
    this.el.classList.remove('modal-open');
    document.body.style.overflow = '';
    setTimeout(() => this.el.classList.add('hidden'), 300);
  }
};

// "Read Article" buttons
document.querySelectorAll('[data-blog-id]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    BlogModal.open(+btn.dataset.blogId);
  });
});

// Clicking anywhere on the card also opens modal
document.querySelectorAll('[data-blog-card]').forEach(card => {
  card.addEventListener('click', () => {
    const btn = card.querySelector('[data-blog-id]');
    if (btn) BlogModal.open(+btn.dataset.blogId);
  });
});

// Close triggers
document.getElementById('modalClose').addEventListener('click',   () => BlogModal.close());
document.getElementById('modalClose2').addEventListener('click',  () => BlogModal.close());
document.getElementById('modalOverlay').addEventListener('click', () => BlogModal.close());

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') BlogModal.close();
});


/* ─────────────────────────────────────────
   3. FILTER + SEARCH
───────────────────────────────────────── */
let activeFilter = 'All';
let searchQuery  = '';

function updateGrid() {
  const cards       = document.querySelectorAll('[data-blog-card]');
  const emptyState  = document.getElementById('emptyState');
  const resultBadge = document.getElementById('resultCount');
  let visible = 0;

  cards.forEach(card => {
    const matchCat    = activeFilter === 'All' || card.dataset.category === activeFilter;
    const matchSearch = !searchQuery || card.dataset.title.includes(searchQuery.toLowerCase());
    const show        = matchCat && matchSearch;

    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  // Empty state
  emptyState.classList.toggle('hidden', visible > 0);

  // Result badge in filter bar
  const isFiltered = activeFilter !== 'All' || searchQuery;
  if (isFiltered) {
    resultBadge.textContent = `${visible} result${visible !== 1 ? 's' : ''}`;
    resultBadge.classList.remove('hidden');
  } else {
    resultBadge.classList.add('hidden');
  }

  // Hero article count
  const heroCount = document.getElementById('heroCount');
  if (heroCount) {
    heroCount.textContent = `${visible} Article${visible !== 1 ? 's' : ''}`;
  }
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
    btn.classList.add('filter-active');
    activeFilter = btn.dataset.filter;
    updateGrid();
  });
});

// Search with debounce
let searchTimer;
document.getElementById('blogSearch').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.trim();
    updateGrid();
  }, 220);
});

// Reset — called by empty-state button in HTML
function resetFilters() {
  activeFilter = 'All';
  searchQuery  = '';
  document.getElementById('blogSearch').value = '';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
  document.querySelector('[data-filter="All"]').classList.add('filter-active');
  updateGrid();
}


/* ─────────────────────────────────────────
   4. SCROLL REVEAL
───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));


/* ─────────────────────────────────────────
   5. NAV SCROLL SHADOW
───────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('nav-scrolled', window.scrollY > 40);
}, { passive: true });


/* ─────────────────────────────────────────
   6. MOBILE MENU TOGGLE
───────────────────────────────────────── */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', isOpen);

  const [a, b, c] = menuToggle.querySelectorAll('.hb');
  if (isOpen) {
    a.style.transform = 'translateY(6.5px) rotate(45deg)';
    b.style.opacity   = '0';
    c.style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    a.style.transform = '';
    b.style.opacity   = '1';
    c.style.transform = '';
  }
});

// Close menu on outside click
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) {
    mobileMenu.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelectorAll('.hb').forEach(b => {
      b.style.transform = '';
      b.style.opacity   = '1';
    });
  }
});


/* ─────────────────────────────────────────
   7. CARD STAGGER ON LOAD
───────────────────────────────────────── */
document.querySelectorAll('.blog-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});