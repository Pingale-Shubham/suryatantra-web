
// Tailwind
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              display: ['"Outfit"', "sans-serif"],
              body: ['"Inter"', "sans-serif"],
            },
            fontSize: {
              xs: ["13px", "1.6"],
              sm: ["15px", "1.6"],
              base: ["17px", "1.6"],
              lg: ["20px", "1.5"],
              xl: ["24px", "1.4"],
              "2xl": ["30px", "1.3"],
              "3xl": ["36px", "1.2"],
              "4xl": ["48px", "1.1"],
              "5xl": ["64px", "1.0"],
            },
            colors: {
              navy: "#071428",
              mid: "#0b1f3a",
              deep: "#0e2a4f",
              card: "#111f33",
              orange: "#f97316",
              amber: "#fbbf24",
            },
            backgroundImage: {
              "hero-gradient":
                "linear-gradient(135deg,#071428 0%,#0b1f3a 55%,#0e2a4f 100%)",
              "section-gradient":
                "linear-gradient(180deg,#09192f 0%,#071428 100%)",
              "orange-gold": "linear-gradient(135deg,#f97316,#fbbf24)",
            },
            boxShadow: {
              "orange-glow": "0 8px 30px rgba(249,115,22,0.35)",
              "orange-lg": "0 14px 40px rgba(249,115,22,0.5)",
              "card-lift": "0 24px 60px rgba(0,0,0,0.35)",
            },
            keyframes: {
              "pulse-ring": {
                "0%,100%": { opacity: "0.2" },
                "50%": { opacity: "0.5" },
              },
              float: {
                "0%,100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-8px)" },
              },
            },
            animation: {
              "pulse-ring": "pulse-ring 4s ease-in-out infinite",
              float: "float 6s ease-in-out infinite",
            },
          },
        },
      };


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
    const footerPlaceholder =
      document.getElementById('footer-placeholder');

    if (!footerPlaceholder) return;

    fetch('./components/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Footer file not found');
        }

        return response.text();
      })
      .then(html => {
        footerPlaceholder.innerHTML = html;

        const year =
          footerPlaceholder.querySelector('#footer-year');

        if (year) {
          year.textContent = new Date().getFullYear();
        }
      })
      .catch(error => {
        console.error('Footer load error:', error);
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
      observer.observe(counter);
    });
  }
};
