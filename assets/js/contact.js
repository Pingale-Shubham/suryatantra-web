/* =============================================================
   Suryatantra Enterprises LLP — contact.js
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const product = new URLSearchParams(location.search).get("product");
  const quoteName = product && product.trim() ? product.trim() : "";
  const message = document.getElementById("message");
  const productField = document.getElementById("product");
  if (productField && !productField.value.trim()) {
    productField.value = quoteName || "PCB tooling";
    productField.setAttribute("value", productField.value);
  }
  if (quoteName && message && !message.value.trim()) {
    message.value = `I would like a quote for ${quoteName}.`;
    message.defaultValue = message.value;
  }
  if (quoteName) {
    const quoteUrl = `https://wa.me/919730429324?text=${encodeURIComponent(`Hello, I would like a quote for ${quoteName}.`)}`;
    const quoteWhatsapp = document.getElementById("quote-whatsapp");
    if (quoteWhatsapp) quoteWhatsapp.href = quoteUrl;
  }
  const params = new URLSearchParams(location.search);
  const sent = params.get("sent");
  const asked = params.get("ask") === "1";
  const status = document.getElementById("formStatus");
  const askStatus = document.getElementById("askStatus");
  if (!asked && status && sent === "1") {
    status.hidden = false;
    status.className = "text-sm font-semibold mb-2 text-emerald-700";
    status.textContent = params.get("mail") === "0"
      ? "Your quote request was saved. We will reply within 24 hours. You can also WhatsApp +91 97304 29324."
      : "Your quote request was emailed to suryatantraa@gmail.com. We will reply within 24 hours.";
  }
  if (!asked && status && sent === "0") {
    status.hidden = false;
    status.className = "text-sm font-semibold mb-2 text-red-700";
    status.textContent = "This quote did not reach suryatantraa@gmail.com. Please WhatsApp +91 97304 29324.";
  }
  if (askStatus && asked && sent === "1") {
    askStatus.hidden = false;
    askStatus.className = "mt-3 text-sm font-semibold text-emerald-700";
    askStatus.textContent = params.get("mail") === "0"
      ? "Your question was saved. We will reply within 24 hours. You can also WhatsApp +91 97304 29324."
      : "Your question was sent. We will reply within 24 hours.";
    askStatus.scrollIntoView({ block: "center" });
  }
  if (askStatus && asked && sent === "0") {
    askStatus.hidden = false;
    askStatus.className = "mt-3 text-sm font-semibold text-red-700";
    askStatus.textContent = "This question did not go through. Please WhatsApp +91 97304 29324.";
  }
  FAQ.init();
  ContactForm.init();
  AskForm.init();
  initFaqScroller();
});

function initFaqScroller() {
  const row = document.getElementById("faqRow");
  const prev = document.getElementById("faqPrev");
  const next = document.getElementById("faqNext");
  if (!row || !prev || !next) return;

  function pageSize() {
    if (window.matchMedia("(min-width: 1024px)").matches) return 4;
    if (window.matchMedia("(min-width: 768px)").matches) return 2;
    return 1;
  }

  function cards() {
    return Array.from(row.querySelectorAll(".faq-item"));
  }

  function currentIndex() {
    const items = cards();
    const left = row.scrollLeft;
    let index = 0;
    items.forEach((card, i) => {
      if (card.offsetLeft <= left + 8) index = i;
    });
    return index;
  }

  function update() {
    const items = cards();
    const max = row.scrollWidth - row.clientWidth;
    const canScroll = max > 8;
    const start = currentIndex();
    const end = Math.min(items.length, start + pageSize());
    const count = document.getElementById("faqCount");
    if (count) count.textContent = `${start + 1}–${end} of ${items.length}`;
    prev.hidden = !canScroll;
    next.hidden = !canScroll;
    prev.disabled = row.scrollLeft <= 2;
    next.disabled = row.scrollLeft >= max - 2 || start + pageSize() >= items.length;
  }

  function move(direction) {
    const items = cards();
    const size = pageSize();
    const index = currentIndex();
    const target = Math.max(0, Math.min(items.length - 1, index + direction * size));
    row.scrollTo({ left: items[target].offsetLeft, behavior: "smooth" });
  }

  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  row.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  update();
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */

const FAQ = {

  BTN_SELECTOR: ".faq-btn",

  init() {

    const btns =
      document.querySelectorAll(this.BTN_SELECTOR);

    if (!btns.length) return;

    btns.forEach((btn, index) => {

      const item =
        btn.closest(".faq-item");

      const content =
        item.querySelector(".faq-content");

      const panelId = content.id || `faq-panel-${index}`;
      content.id = panelId;
      btn.setAttribute("type", "button");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", panelId);

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

        b.setAttribute("aria-expanded", "false");
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

      btn.setAttribute("aria-expanded", "true");
      btn.classList.add("faq-open");
    }
  },
};


/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */

function phoneDigits(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return digits;
}

function isPhoneNumber(value) {
  return phoneDigits(value).length === 10;
}

function keepPhoneCharacters(input) {
  input.addEventListener("input", () => {
    const cleaned = input.value.replace(/[^\d+\s()-]/g, "");
    if (cleaned !== input.value) input.value = cleaned;
  });
}

const PHONE_HINT = "Enter a 10-digit phone number, for example 97304 29324.";
const EMAIL_HINT = "Enter a full email address, for example name@company.com.";

function isEmailAddress(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || "").trim());
}

function showFormStatus(text) {
  const status = document.getElementById("formStatus");
  if (!status) return;
  status.hidden = false;
  status.className = "text-sm font-semibold mb-2 text-red-700";
  status.textContent = text;
}

const ContactForm = {

  FORM_ID: "contactForm",
  STATUS_ID: "formStatus",
  BTN_ID: "submitBtn",

  init() {

    const form =
      document.getElementById(this.FORM_ID);

    if (!form) return;
    const phone = document.getElementById("phone");
    if (phone) keepPhoneCharacters(phone);
    const quoteLink = document.getElementById("quote-whatsapp");

    function fieldValue(id) {
      const el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }

    function quoteText() {
      const rows = [
        ["Name", fieldValue("name")],
        ["Phone", fieldValue("phone")],
        ["Email", fieldValue("email")],
        ["Company", fieldValue("company")],
        ["City", fieldValue("city")],
        ["Pincode", fieldValue("pincode")],
        ["Tool or part", fieldValue("product")],
        ["Quantity", fieldValue("quantity")],
        ["Message", fieldValue("message")]
      ];
      const lines = ["Hello, I would like a quote."];
      rows.forEach(function (row) {
        if (row[1]) lines.push(row[0] + ": " + row[1]);
      });
      return lines.join("\n");
    }

    function quoteUrl() {
      return "https://wa.me/919730429324?text=" + encodeURIComponent(quoteText());
    }

    if (quoteLink) {
      form.addEventListener("input", function () {
        quoteLink.href = quoteUrl();
      });
      quoteLink.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        const phoneValue = fieldValue("phone");
        const emailValue = fieldValue("email");
        if (phoneValue && !isPhoneNumber(phoneValue)) {
          showFormStatus(PHONE_HINT);
          if (phone) phone.focus();
          return;
        }
        if (emailValue && !isEmailAddress(emailValue)) {
          showFormStatus(EMAIL_HINT);
          const email = document.getElementById("email");
          if (email) email.focus();
          return;
        }
        quoteLink.href = quoteUrl();
        window.open(quoteLink.href, "_blank", "noopener");
      }.bind(this));
    }

    form.addEventListener(
      "submit",
      (e) => this.handleSubmit(e)
    );
  },

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.dataset.leadSending === "1") return;
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    if (phone && !isPhoneNumber(phone.value)) {
      showFormStatus(PHONE_HINT);
      phone.focus();
      return;
    }
    if (email && !isEmailAddress(email.value)) {
      showFormStatus(EMAIL_HINT);
      email.focus();
      return;
    }
    form.dataset.leadSending = "1";

    const btn = document.getElementById(this.BTN_ID);
    if (btn) btn.disabled = true;

    if (window.SuryatantraLeads && window.SuryatantraLeads.prepareForm) {
      window.SuryatantraLeads.prepareForm(form);
    }
    HTMLFormElement.prototype.submit.call(form);
  },
};

const AskForm = {
  init() {
    const form = document.getElementById("askForm");
    if (!form) return;
    const link = document.getElementById("ask-whatsapp");
    const phoneInput = document.getElementById("ask-phone");
    if (phoneInput) keepPhoneCharacters(phoneInput);

    function details() {
      const name = (document.getElementById("ask-name") || {}).value || "";
      const phone = (document.getElementById("ask-phone") || {}).value || "";
      const question = (document.getElementById("ask-message") || {}).value || "";
      return {
        name: name.trim(),
        phone: phone.trim(),
        question: question.trim()
      };
    }

    function showAskError(text) {
      const askStatus = document.getElementById("askStatus");
      if (!askStatus) return;
      askStatus.hidden = false;
      askStatus.className = "mt-3 text-sm font-semibold text-red-700";
      askStatus.textContent = text;
    }

    function whatsappUrl() {
      const filled = details();
      const text = [
        "Hello, I have a question.",
        "Name: " + filled.name,
        "Phone: " + filled.phone,
        "Question: " + filled.question
      ].join("\n");
      return "https://wa.me/919730429324?text=" + encodeURIComponent(text);
    }

    if (link) {
      form.addEventListener("input", () => {
        link.href = whatsappUrl();
      });
      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const filled = details();
        if (!filled.name || !filled.question) {
          showAskError("Add your name and question before WhatsApp.");
          return;
        }
        if (!isPhoneNumber(filled.phone)) {
          showAskError(PHONE_HINT);
          if (phoneInput) phoneInput.focus();
          return;
        }
        link.href = whatsappUrl();
        window.open(link.href, "_blank", "noopener");
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.leadSending === "1") return;
      const filled = details();
      if (!isPhoneNumber(filled.phone)) {
        showAskError(PHONE_HINT);
        if (phoneInput) phoneInput.focus();
        return;
      }
      form.dataset.leadSending = "1";
      const btn = document.getElementById("askSubmit");
      if (btn) btn.disabled = true;
      if (window.SuryatantraLeads && window.SuryatantraLeads.prepareForm) {
        window.SuryatantraLeads.prepareForm(form);
      }
      HTMLFormElement.prototype.submit.call(form);
    });
  },
};