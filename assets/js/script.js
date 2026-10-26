
/* =========================================================
   MAIN SCRIPT.JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

/* =========================================================
   APP INITIALIZER
   ========================================================= */

const App = {
  init() {
    NavHighlight.init();
    NavScroll.init();
    MobileMenu.init();
    FooterLoader.init();
    GoTop.init();
    ScrollReveal.init();
    CounterAnimation.init();

    // Optional modules
    
  }
};

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const NavHighlight = {
  init() {
    const currentPage =
      location.pathname
        .split('/')
        .pop()
        .replace('.html', '') || 'index';

    document.querySelectorAll('[data-page]').forEach(link => {
      const isActive = link.dataset.page === currentPage;
      link.classList.toggle('nav-active', isActive);
    });
  }
};

/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const NavScroll = {
  init() {
    this.navbar = document.getElementById('navbar');

    if (!this.navbar) return;

    this.handleScroll();

    window.addEventListener(
      'scroll',
      () => this.handleScroll(),
      { passive: true }
    );
  },

  handleScroll() {
    this.navbar.classList.toggle(
      'nav-scrolled',
      window.scrollY > 24
    );
  }
};

/* =========================================================
   MOBILE MENU
   ========================================================= */

const MobileMenu = {
  init() {
    this.toggle = document.getElementById('menuToggle');
    this.menu = document.getElementById('mobileMenu');

    if (!this.toggle || !this.menu) return;

    this.bars = [
      ...this.toggle.querySelectorAll('.hb, .hamburger')
    ];

    this.toggle.addEventListener('click', () => {
      this.toggleMenu();
    });

    document.addEventListener('click', e => {
      if (
        !this.menu.contains(e.target) &&
        !this.toggle.contains(e.target)
      ) {
        this.closeMenu();
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
  },

  toggleMenu() {
    const isOpen = this.menu.classList.toggle('menu-open');

    this.toggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    this.animateBars(isOpen);
  },

  closeMenu() {
    this.menu.classList.remove('menu-open');

    this.toggle.setAttribute('aria-expanded', 'false');

    this.animateBars(false);
  },

  animateBars(open) {
    if (this.bars.length < 3) return;

    const [bar1, bar2, bar3] = this.bars;

    if (open) {
      bar1.style.transform =
        'rotate(45deg) translate(5px, 5px)';

      bar2.style.opacity = '0';

      bar3.style.transform =
        'rotate(-45deg) translate(5px, -5px)';
    } else {
      bar1.style.transform = '';
      bar2.style.opacity = '';
      bar3.style.transform = '';
    }
  }
};

/* =========================================================
   FOOTER LOADER
   ========================================================= */

const FooterLoader = {
  init() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }
};

const GoTop = {
  init() {
    document.addEventListener('click', (event) => {
      const button = event.target.closest && event.target.closest('[data-go-top]');
      if (!button) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }
};

/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const ScrollReveal = {
  selector: '.fade-up',
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
  staggerDelay: 90,

  init() {
    const elements =
      document.querySelectorAll(this.selector);

    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(element => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const siblings = [
            ...entry.target.parentElement.querySelectorAll(
              `${this.selector}:not(.visible)`
            )
          ];

          const index = siblings.indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * this.staggerDelay);

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: this.threshold,
        rootMargin: this.rootMargin
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });
  }
};

/* =========================================================
   COUNTER ANIMATION
   ========================================================= */

const CounterAnimation = {
  init() {
    const counters =
      document.querySelectorAll('[data-count]');

    if (!counters.length) return;

    const showFinal = (element) => {
      const target = element.dataset.count;
      const suffix = element.dataset.suffix || '';
      element.textContent = `${target}${suffix}`;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counters.forEach(showFinal);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const element = entry.target;

          const target = Number(element.dataset.count);
          const suffix = element.dataset.suffix || '';
          const duration = 1800;

          const startTime = performance.now();

          const animate = currentTime => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const value = Math.floor(progress * target);

            element.textContent = `${value}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.6
      }
    );

    counters.forEach(counter => {
      showFinal(counter);
      observer.observe(counter);
    });
  }
};

/* =========================================================
   DIALOG FOCUS TRAP
   ========================================================= */

const DialogFocus = {
  previous: null,
  dialog: null,
  onKeyDown: null,

  focusable(dialog) {
    return [...dialog.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )];
  },

  activate(dialog) {
    this.deactivate(false);
    this.previous = document.activeElement;
    this.dialog = dialog;

    if (!dialog.hasAttribute('tabindex')) {
      dialog.setAttribute('tabindex', '-1');
    }

    this.onKeyDown = (event) => {
      if (event.key !== 'Tab' || !this.dialog) return;

      const items = this.focusable(this.dialog);
      if (!items.length) {
        event.preventDefault();
        this.dialog.focus();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === this.dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || active === this.dialog)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', this.onKeyDown);
    const items = this.focusable(dialog);
    (items[0] || dialog).focus();
  },

  deactivate(restore = true) {
    if (this.onKeyDown) {
      document.removeEventListener('keydown', this.onKeyDown);
      this.onKeyDown = null;
    }

    const previous = this.previous;
    this.dialog = null;
    this.previous = null;

    if (restore && previous && typeof previous.focus === 'function') {
      previous.focus();
    }
  }
};
