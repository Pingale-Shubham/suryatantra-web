/* =============================================================
   Suryatantra Enterprises LLP — contact.js
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  MobileMenu.init();
  NavScroll.init();
  NavHighlight.init();
  ScrollReveal.init();
  FAQ.init();
  ContactForm.init();
});


/* ─────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────── */

const MobileMenu = {

  toggle: null,
  menu: null,
  bars: [],

  init() {

    this.toggle = document.getElementById("menuToggle");
    this.menu = document.getElementById("mobileMenu");

    if (!this.toggle || !this.menu) return;

    this.bars = [
      ...this.toggle.querySelectorAll(".hb")
    ];

    this.toggle.addEventListener("click", () => {
      this.handleToggle();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {

      if (
        !this.menu.contains(e.target) &&
        !this.toggle.contains(e.target)
      ) {
        this.close();
      }

    });

    // ESC key close
    document.addEventListener("keydown", (e) => {

      if (e.key === "Escape") {
        this.close();
      }

    });
  },

  handleToggle() {

    const isOpen =
      this.menu.classList.toggle("menu-open");

    this.toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    this.animateBars(isOpen);
  },

  close() {

    this.menu.classList.remove("menu-open");

    this.toggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    this.animateBars(false);
  },

  animateBars(open) {

    if (!this.bars.length) return;

    const [b1, b2, b3] = this.bars;

    if (open) {

      b1.style.transform =
        "rotate(45deg) translate(5px, 5px)";

      b2.style.opacity = "0";

      b3.style.transform =
        "rotate(-45deg) translate(5px, -5px)";

    } else {

      b1.style.transform = "";
      b2.style.opacity = "";
      b3.style.transform = "";
    }
  },
};


/* ─────────────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────────────── */

const NavScroll = {

  header: null,

  init() {

    this.header =
      document.getElementById("navbar");

    if (!this.header) return;

    this.onScroll();

    window.addEventListener(
      "scroll",
      () => this.onScroll(),
      { passive: true }
    );
  },

  onScroll() {

    this.header.classList.toggle(
      "nav-scrolled",
      window.scrollY > 24
    );
  },
};


/* ─────────────────────────────────────────────
   ACTIVE NAV LINK
───────────────────────────────────────────── */

const NavHighlight = {

  CURRENT_PAGE: "contact",

  init() {

    document
      .querySelectorAll("[data-page]")
      .forEach((link) => {

        if (
          link.dataset.page === this.CURRENT_PAGE
        ) {
          link.classList.add("nav-active");
        }

      });
  },
};


/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */

const ScrollReveal = {

  SELECTOR: ".fade-up",
  THRESHOLD: 0.12,
  ROOT_MARGIN: "0px 0px -40px 0px",
  STAGGER_MS: 90,

  init() {

    const els =
      document.querySelectorAll(this.SELECTOR);

    if (!els.length) return;

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const siblings = [
              ...entry.target.parentElement.querySelectorAll(
                `${this.SELECTOR}:not(.visible)`
              ),
            ];

            const idx =
              siblings.indexOf(entry.target);

            setTimeout(() => {

              entry.target.classList.add(
                "visible"
              );

            }, idx * this.STAGGER_MS);

          });

        },

        {
          threshold: this.THRESHOLD,
          rootMargin: this.ROOT_MARGIN,
        }
      );

    els.forEach((el) => {
      observer.observe(el);
    });
  },
};


/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */

const FAQ = {

  BTN_SELECTOR: ".faq-btn",

  init() {

    const btns =
      document.querySelectorAll(this.BTN_SELECTOR);

    if (!btns.length) return;

    btns.forEach((btn) => {

      const item =
        btn.closest(".faq-item");

      const content =
        item.querySelector(".faq-content");

      // Start closed
      content.classList.add("hidden");
      content.style.maxHeight = null;

      btn.addEventListener("click", () => {
        this.toggle(btn);
      });

    });
  },

  toggle(btn) {

    const item =
      btn.closest(".faq-item");

    const content =
      item.querySelector(".faq-content");

    const icon =
      btn.querySelector("i");

    const isOpen =
      !content.classList.contains("hidden");

    // Close all
    document
      .querySelectorAll(".faq-item")
      .forEach((el) => {

        const c =
          el.querySelector(".faq-content");

        const i =
          el.querySelector(".faq-btn i");

        const b =
          el.querySelector(".faq-btn");

        c.classList.add("hidden");
        c.style.maxHeight = null;

        if (i) {

          i.classList.remove(
            "fa-minus",
            "rotate-180"
          );

          i.classList.add("fa-plus");
        }

        b.classList.remove("faq-open");

      });

    // Open clicked item
    if (!isOpen) {

      content.classList.remove("hidden");

      content.style.maxHeight =
        content.scrollHeight + "px";

      if (icon) {

        icon.classList.remove("fa-plus");

        icon.classList.add(
          "fa-minus",
          "rotate-180"
        );
      }

      btn.classList.add("faq-open");
    }
  },
};


/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */

const ContactForm = {

  FORM_ID: "contactForm",
  STATUS_ID: "formStatus",
  BTN_ID: "submitBtn",

  init() {

    const form =
      document.getElementById(this.FORM_ID);

    if (!form) return;

    form.addEventListener(
      "submit",
      (e) => this.handleSubmit(e)
    );
  },

  handleSubmit() {

    const status =
      document.getElementById(this.STATUS_ID);

    const btn =
      document.getElementById(this.BTN_ID);

    // Button loading
    btn.disabled = true;

    btn.innerHTML = `
      <i class="fa fa-spinner fa-spin text-xs"></i>
      Sending...
    `;

    // Status
    status.textContent =
      "Sending your message...";

    status.className = `
      text-[13px]
      font-semibold
      text-center
      py-2
      px-3
      rounded-xl
      text-slate-400
    `;

    status.classList.remove("hidden");
  },
};