/* =============================================================
   Suryatantra Enterprises LLP — contact.js
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  FAQ.init();
  ContactForm.init();
});

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