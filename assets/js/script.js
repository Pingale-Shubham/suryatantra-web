document.addEventListener('DOMContentLoaded', () => {
  NavHighlight.init();
  NavScroll.init();
  MobileMenu.init();
  FooterLoader.init();
  ScrollReveal.init();
  CounterAnimation.init();
  ContactForm.init();
  FAQ.init();
  EnquiryModal.init();
});

/* ───────── NAV ACTIVE ───────── */
const NavHighlight = {
  init() {
    const current = location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(link => {
      link.classList.toggle('nav-active', link.dataset.page === current);
    });
  }
};

/* ───────── NAV SCROLL ───────── */
const NavScroll = {
  init() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 24);
    }, { passive: true });
  }
};

/* ───────── MOBILE MENU ───────── */
const MobileMenu = {
  init() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    const bars = toggle.querySelectorAll('.hb, .hamburger');

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', isOpen);

      if (bars.length === 3) {
        bars[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
        bars[1].style.opacity = isOpen ? '0' : '';
        bars[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
      }
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        bars.forEach(b => {
          b.style.transform = '';
          b.style.opacity = '';
        });
      }
    });
  }
};

/* ───────── FOOTER LOAD ───────── */
const FooterLoader = {
  init() {
    const el = document.getElementById('footer-placeholder');
    if (!el) return;

    fetch('./components/footer.html')
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
        const year = el.querySelector('#footer-year');
        if (year) year.textContent = new Date().getFullYear();
      })
      .catch(err => console.error(err));
  }
};

/* ───────── SCROLL REVEAL ───────── */
const ScrollReveal = {
  init() {
    const els = document.querySelectorAll('.fade-up');
    if (!els.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    els.forEach(el => io.observe(el));
  }
};

/* ───────── COUNTER ───────── */
const CounterAnimation = {
  init() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = Math.floor(progress * target) + suffix;

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        io.unobserve(el);
      });
    }, { threshold: 0.6 });

    els.forEach(el => io.observe(el));
  }
};


/* ───────── FAQ ───────── */
const FAQ = {
  init() {
    const btns = document.querySelectorAll('.faq-btn');
    if (!btns.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isOpen = btn.classList.contains('faq-open');

        document.querySelectorAll('.faq-btn').forEach(b => {
          b.classList.remove('faq-open');
          b.nextElementSibling.style.maxHeight = null;
        });

        if (!isOpen) {
          btn.classList.add('faq-open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }
};

/* ───────── ENQUIRY MODAL ───────── */
const EnquiryModal = {
  init() {
    const btn = document.getElementById('openEnquiry');
    const wrapper = document.getElementById('enquiryWrapper');

    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });

    window.closeEnquiry = () => {
      wrapper?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };
  }
};