/* =============================================================
   Suryatantra Enterprises LLP — script.js
   Shared across: index.html, about.html, blog.html
   contact.html, product.html (partial — nav/footer only)
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  NavHighlight.init();
  NavScroll.init();
  MobileMenu.init();
  FooterLoader.init();
  ScrollReveal.init();
  CounterAnimation.init();
  ContactForm.init();
  FAQ.init();
});

/* ─────────────────────────────────────────────────────────────
   1. NAV ACTIVE HIGHLIGHT
   Matches data-page attribute against current filename.
───────────────────────────────────────────────────────────── */
const NavHighlight = {
  init() {
    const current = location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach((link) => {
      link.classList.toggle('nav-active', link.dataset.page === current);
    });
  },
};

/* ─────────────────────────────────────────────────────────────
   2. NAVBAR SCROLL EFFECT
   Adds .nav-scrolled after 24 px of scroll for deeper bg.
───────────────────────────────────────────────────────────── */
const NavScroll = {
  header: null,
  init() {
    this.header = document.getElementById('navbar');
    if (!this.header) return;
    window.addEventListener('scroll', () => {
      this.header.classList.toggle('nav-scrolled', window.scrollY > 24);
    }, { passive: true });
  },
};

/* ─────────────────────────────────────────────────────────────
   3. MOBILE MENU
   Hamburger → X animation + outside-click + ESC close.
   Works with .hb spans (about/blog/index/product) AND
   the legacy .hamburger spans (original pages).
───────────────────────────────────────────────────────────── */
const MobileMenu = {
  toggle:  null,
  menu:    null,
  bars:    [],

  init() {
    this.toggle = document.getElementById('menuToggle');
    this.menu   = document.getElementById('mobileMenu');
    if (!this.toggle || !this.menu) return;

    // Support both .hb (new) and .hamburger (legacy)
    this.bars = [
      ...this.toggle.querySelectorAll('.hb'),
      ...this.toggle.querySelectorAll('.hamburger'),
    ];

    this.toggle.addEventListener('click', () => this.handleToggle());

    document.addEventListener('click', (e) => {
      if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  handleToggle() {
    // Support both class names used across pages
    const isOpen = this.menu.classList.contains('menu-open') ||
                   this.menu.classList.contains('open');

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  },

  open() {
    this.menu.classList.add('menu-open', 'open');
    this.toggle?.classList.add('active');
    this.toggle?.setAttribute('aria-expanded', 'true');
    this._animateBars(true);
  },

  close() {
    this.menu.classList.remove('menu-open', 'open');
    this.toggle?.classList.remove('active');
    this.toggle?.setAttribute('aria-expanded', 'false');
    this._animateBars(false);
  },

  _animateBars(open) {
    if (!this.bars.length) return;
    const [b1, b2, b3] = this.bars;
    if (open) {
      if (b1) b1.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (b2) b2.style.opacity   = '0';
      if (b3) b3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      this.bars.forEach((b) => { b.style.transform = ''; b.style.opacity = ''; });
    }
  },
};

/* ─────────────────────────────────────────────────────────────
   4. FOOTER LOADER
   Fetches ./components/footer.html into #footer-placeholder.
───────────────────────────────────────────────────────────── */
const FooterLoader = {
  init() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    fetch('./components/footer.html')
      .then((r) => r.text())
      .then((html) => {
        placeholder.innerHTML = html;
        // Set copyright year inside fetched footer
        const yearEl = placeholder.querySelector('#footer-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      })
      .catch((err) => console.error('Footer load error:', err));
  },
};

/* ─────────────────────────────────────────────────────────────
   5. SCROLL-REVEAL
   IntersectionObserver on .fade-up elements.
   Staggers siblings 80 ms apart. Unobserves after reveal.
───────────────────────────────────────────────────────────── */
const ScrollReveal = {
  SELECTOR:    '.fade-up',
  THRESHOLD:   0.10,
  ROOT_MARGIN: '0px 0px -40px 0px',
  STAGGER_MS:  80,

  init() {
    const els = document.querySelectorAll(this.SELECTOR);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => this._reveal(e, io)),
      { threshold: this.THRESHOLD, rootMargin: this.ROOT_MARGIN }
    );
    els.forEach((el) => io.observe(el));
  },

  // Can be called externally for dynamically inserted elements (e.g. product.js)
  observe(els) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => this._reveal(e, io)),
      { threshold: this.THRESHOLD, rootMargin: this.ROOT_MARGIN }
    );
    [...els].forEach((el) => io.observe(el));
  },

  _reveal(entry, io) {
    if (!entry.isIntersecting) return;
    const siblings = [
      ...entry.target.parentElement.querySelectorAll(`${this.SELECTOR}:not(.visible)`),
    ];
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * this.STAGGER_MS);
    io.unobserve(entry.target);
  },
};

/* ─────────────────────────────────────────────────────────────
   6. COUNTER ANIMATION
   Animates elements that have data-count and data-suffix.
   Uses an ease-out cubic curve. Triggers at 60 % visibility.
───────────────────────────────────────────────────────────── */
const CounterAnimation = {
  DURATION_MS: 1800,
  THRESHOLD:   0.6,

  init() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => this._start(e, io)),
      { threshold: this.THRESHOLD }
    );
    els.forEach((el) => io.observe(el));
  },

  _start(entry, io) {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix ?? '';
    const start  = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / this.DURATION_MS, 1);
      // Ease-out cubic
      el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    io.unobserve(el);
  },
};

/* ─────────────────────────────────────────────────────────────
   7. CONTACT FORM (contact.html only)
   Handles validation + EmailJS submission.
   No-ops silently on pages without #contactForm.
───────────────────────────────────────────────────────────── */
const ContactForm = {
  init() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { name, phone, email, message } = form;

      // Validation
      if (name.value.trim().length < 2)
        return this._showStatus(statusEl, 'Please enter your full name.', 'error');

      if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(phone.value.trim()))
        return this._showStatus(statusEl, 'Please enter a valid 10-digit mobile number.', 'error');

      if (!/^\S+@\S+\.\S+$/.test(email.value.trim()))
        return this._showStatus(statusEl, 'Please enter a valid email address.', 'error');

      if (message.value.trim().length < 5)
        return this._showStatus(statusEl, 'Message must be at least 5 characters.', 'error');

      // Send
      submitBtn.disabled  = true;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>Sending…';
      statusEl?.classList.add('hidden');

      emailjs.send(
        'service_krjc8ra',
        'template_ow3end7',
        {
          name:      name.value.trim(),
          phone:     phone.value.trim(),
          email:     email.value.trim(),
          message:   message.value.trim(),
          from_name: name.value.trim(),
          reply_to:  email.value.trim(),
        }
      )
      .then(() => {
        this._showStatus(statusEl, '✅ Enquiry sent! We\'ll be in touch shortly.', 'success');
        form.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        this._showStatus(statusEl, '❌ Failed to send. Please try again or call us directly.', 'error');
      })
      .finally(() => {
        submitBtn.disabled  = false;
        submitBtn.innerHTML = 'Send Message <i class="fa fa-paper-plane ml-1.5"></i>';
      });
    });
  },

  _showStatus(el, msg, type) {
    if (!el) return;
    el.textContent = msg;
    el.className = type === 'success'
      ? 'text-sm font-semibold text-emerald-400 text-center'
      : 'text-sm font-semibold text-red-400 text-center';
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 6000);
  },
};

/* ─────────────────────────────────────────────────────────────
   8. FAQ ACCORDION (contact.html / any page with .faq-btn)
   Smooth max-height animation. Auto-closes siblings.
   No-ops silently on pages without .faq-btn elements.
───────────────────────────────────────────────────────────── */
/* FAQ accordion */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen  = btn.classList.contains('faq-open');
 
      /* Close all */
      document.querySelectorAll('.faq-btn.faq-open').forEach(ob => {
        ob.classList.remove('faq-open');
        ob.nextElementSibling.style.maxHeight = '0';
      });
 
      /* Open clicked */
      if (!isOpen) {
        btn.classList.add('faq-open');
        content.style.maxHeight = 'none';
        const h = content.offsetHeight;
        content.style.maxHeight = '0';
        content.offsetHeight; /* force reflow */
        content.style.maxHeight = h + 'px';
      }
    });
  });