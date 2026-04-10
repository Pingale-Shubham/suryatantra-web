/* =============================================================
   Suryatantra Enterprises LLP — contact.js
   All interactivity for contact.html
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  MobileMenu.init();
  NavScroll.init();
  NavHighlight.init();
  ScrollReveal.init();
  FAQ.init();
  ContactForm.init();
});

/* ─── Mobile Menu ────────────────────────────────────────────── */
const MobileMenu = {
  toggle: null,
  menu:   null,
  bars:   [],

  init() {
    this.toggle = document.getElementById('menuToggle');
    this.menu   = document.getElementById('mobileMenu');
    if (!this.toggle || !this.menu) return;
    this.bars = [...this.toggle.querySelectorAll('.hb')];

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
    const isOpen = this.menu.classList.toggle('menu-open');
    this.toggle.setAttribute('aria-expanded', String(isOpen));
    this.animateBars(isOpen);
  },

  close() {
    this.menu.classList.remove('menu-open');
    this.toggle?.setAttribute('aria-expanded', 'false');
    this.animateBars(false);
  },

  animateBars(open) {
    if (!this.bars.length) return;
    const [b1, b2, b3] = this.bars;
    if (open) {
      b1.style.transform = 'rotate(45deg) translate(5px, 5px)';
      b2.style.opacity   = '0';
      b3.style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      b1.style.transform = '';
      b2.style.opacity   = '';
      b3.style.transform = '';
    }
  },
};

/* ─── Navbar background on scroll ───────────────────────────── */
const NavScroll = {
  header: null,

  init() {
    this.header = document.getElementById('navbar');
    if (!this.header) return;
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  },

  onScroll() {
    this.header.classList.toggle('nav-scrolled', window.scrollY > 24);
  },
};

/* ─── Active nav link ────────────────────────────────────────── */
const NavHighlight = {
  CURRENT_PAGE: 'contact',

  init() {
    document.querySelectorAll('[data-page]').forEach((link) => {
      if (link.dataset.page === this.CURRENT_PAGE) {
        link.classList.add('nav-active');
      }
    });
  },
};

/* ─── Scroll-reveal (IntersectionObserver) ───────────────────── */
const ScrollReveal = {
  SELECTOR:    '.fade-up',
  THRESHOLD:   0.12,
  ROOT_MARGIN: '0px 0px -40px 0px',
  STAGGER_MS:  90,

  init() {
    const els = document.querySelectorAll(this.SELECTOR);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => this.reveal(entry)),
      { threshold: this.THRESHOLD, rootMargin: this.ROOT_MARGIN }
    );

    els.forEach((el) => io.observe(el));
  },

  reveal(entry) {
    if (!entry.isIntersecting) return;

    const siblings = [
      ...entry.target.parentElement.querySelectorAll(`${this.SELECTOR}:not(.visible)`),
    ];
    const idx = siblings.indexOf(entry.target);

    setTimeout(() => {
      entry.target.classList.add('visible');
    }, idx * this.STAGGER_MS);
  },
};

/* ─── FAQ Accordion ──────────────────────────────────────────── */
const FAQ = {
  BTN_SELECTOR: '.faq-btn',

  init() {
    const btns = document.querySelectorAll(this.BTN_SELECTOR);
    if (!btns.length) return;

    btns.forEach((btn) => {
      btn.addEventListener('click', () => this.toggle(btn));
    });
  },

  toggle(btn) {
    const item    = btn.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const icon    = btn.querySelector('i');
    const isOpen  = !content.classList.contains('hidden');

    // Close all open items first
    document.querySelectorAll('.faq-item').forEach((el) => {
      el.querySelector('.faq-content').classList.add('hidden');
      el.querySelector('.faq-content').style.maxHeight = null;
      const ic = el.querySelector('.faq-btn i');
      if (ic) {
        ic.classList.remove('fa-minus', 'rotate-180');
        ic.classList.add('fa-plus');
      }
      el.querySelector('.faq-btn').classList.remove('faq-open');
    });

    // If it wasn't open, open it
    if (!isOpen) {
      content.classList.remove('hidden');
      // Animate height
      content.style.maxHeight = content.scrollHeight + 'px';
      if (icon) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus', 'rotate-180');
      }
      btn.classList.add('faq-open');
    }
  },
};

/* ─── Contact Form (EmailJS) ─────────────────────────────────── */
const ContactForm = {
  FORM_ID:       'contactForm',
  STATUS_ID:     'formStatus',
  BTN_ID:        'submitBtn',
  SERVICE_ID:    'YOUR_SERVICE_ID',   // ← replace with your EmailJS service ID
  TEMPLATE_ID:   'YOUR_TEMPLATE_ID', // ← replace with your EmailJS template ID

  init() {
    const form = document.getElementById(this.FORM_ID);
    if (!form) return;
    form.addEventListener('submit', (e) => this.handleSubmit(e));
  },

  async handleSubmit(e) {
    e.preventDefault();
    const form   = document.getElementById(this.FORM_ID);
    const status = document.getElementById(this.STATUS_ID);
    const btn    = document.getElementById(this.BTN_ID);

    // Loading state
    btn.disabled        = true;
    btn.innerHTML       = '<i class="fa fa-spinner fa-spin mr-2"></i> Sending…';
    status.className    = 'text-sm font-semibold text-center text-slate-400';
    status.textContent  = '';
    status.classList.remove('hidden');

    try {
      await emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, form);
      this.showStatus(status, 'Message sent successfully! We\'ll be in touch soon.', true);
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      this.showStatus(status, 'Something went wrong. Please try again or email us directly.', false);
    } finally {
      btn.disabled    = false;
      btn.innerHTML   = '<i class="fa fa-paper-plane mr-2"></i> Send Message';
    }
  },

  showStatus(el, msg, success) {
    el.textContent  = msg;
    el.className    = `text-sm font-semibold text-center ${success ? 'text-green-400' : 'text-red-400'}`;
    el.classList.remove('hidden');
    // Auto-hide after 6s
    setTimeout(() => el.classList.add('hidden'), 6000);
  },
};
