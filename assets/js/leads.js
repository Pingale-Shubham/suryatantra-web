/* Enquiry capture, WhatsApp details, and source counts. */
(function () {
  const GA_MEASUREMENT_ID = "G-CR3EZM0MPL";

  function pageName() {
    const name = location.pathname.split("/").pop();
    return name || "index.html";
  }

  function classify(referrer) {
    if (!referrer) return "Direct";
    let host = "";
    try {
      host = new URL(referrer).hostname.toLowerCase();
    } catch (error) {
      return "Other";
    }
    if (host.indexOf("indiamart.") !== -1) return "IndiaMART";
    if (host.indexOf("google.") !== -1 || host === "www.google.com" || host.indexOf("googleadservices.") !== -1) return "Google";
    if (host === location.hostname) return "This website";
    return host || "Other";
  }

  function rememberVisit() {
    try {
      if (!sessionStorage.getItem("st-source")) {
        sessionStorage.setItem("st-source", classify(document.referrer));
        sessionStorage.setItem("st-referrer", document.referrer || "");
        sessionStorage.setItem("st-landing", pageName());
      }
    } catch (error) {
      /* Private browsing can block storage. The enquiry can still be sent. */
    }
  }

  function visit() {
    let source = "Direct";
    let referrer = "";
    let landing = pageName();
    try {
      source = sessionStorage.getItem("st-source") || source;
      referrer = sessionStorage.getItem("st-referrer") || "";
      landing = sessionStorage.getItem("st-landing") || landing;
    } catch (error) {
      source = classify(document.referrer);
      referrer = document.referrer || "";
    }
    return { source: source, referrer: referrer, landing: landing, page: pageName() };
  }

  function postLead(body) {
    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 4000);
    return fetch("./lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
      signal: controller.signal
    }).catch(function () {
      return null;
    }).finally(function () {
      clearTimeout(timer);
    });
  }

  function productFromHref(href) {
    try {
      const text = new URL(href, location.href).searchParams.get("text") || "";
      const match = text.match(/quote for\s+(.+)$/i);
      if (!match) return "";
      return match[1].replace(/\.\s*$/, "").trim();
    } catch (error) {
      return "";
    }
  }

  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }

  function ensureDialog() {
    let dialog = document.getElementById("quote-capture");
    if (dialog) return dialog;
    dialog = document.createElement("div");
    dialog.id = "quote-capture";
    dialog.className = "quote-capture";
    dialog.hidden = true;
    dialog.innerHTML =
      '<div class="quote-capture-card" role="dialog" aria-modal="true" aria-labelledby="quote-capture-title">' +
        '<button type="button" class="quote-capture-close" data-close aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>' +
        '<p class="quote-capture-kicker">WhatsApp</p>' +
        '<h2 id="quote-capture-title">Send your requirement</h2>' +
        '<p class="quote-capture-lead">Share the part and quantity. We open a chat with these details and reply within 24 hours.</p>' +
        '<form id="quote-capture-form">' +
          '<div class="quote-capture-grid">' +
            '<div class="field"><label for="quote-name">Your name</label><input id="quote-name" name="name" autocomplete="name" required></div>' +
            '<div class="field"><label for="quote-phone">Phone number</label><input id="quote-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="97304 29324" required></div>' +
            '<div class="field"><label for="quote-company">Company name</label><input id="quote-company" name="company" autocomplete="organization" required></div>' +
            '<div class="field"><label for="quote-city">City</label><input id="quote-city" name="city" autocomplete="address-level2" required></div>' +
            '<div class="field"><label for="quote-product">Tool or part</label><input id="quote-product" name="product" required></div>' +
            '<div class="field"><label for="quote-quantity">Quantity</label><input id="quote-quantity" name="quantity" inputmode="numeric" required></div>' +
          '</div>' +
          '<div class="quote-capture-actions">' +
            '<button type="button" data-close>Cancel</button>' +
            '<button type="submit"><i class="fab fa-whatsapp" aria-hidden="true"></i> Continue on WhatsApp</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    document.body.appendChild(dialog);
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeDialog();
    });
    dialog.querySelectorAll("[data-close]").forEach(function (button) {
      button.addEventListener("click", closeDialog);
    });
    dialog.querySelector("form").addEventListener("submit", submitDialog);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !dialog.hidden) closeDialog();
    });
    return dialog;
  }

  let pendingLink = null;
  let lastFocus = null;

  function openDialog(link) {
    const dialog = ensureDialog();
    const form = dialog.querySelector("form");
    pendingLink = link;
    lastFocus = document.activeElement;
    form.reset();
    form.elements.product.value = link.dataset.product || productFromHref(link.href) || "PCB tooling";
    dialog.hidden = false;
    document.body.classList.add("quote-capture-open");
    form.elements.name.focus();
  }

  function closeDialog() {
    const dialog = document.getElementById("quote-capture");
    if (!dialog) return;
    dialog.hidden = true;
    document.body.classList.remove("quote-capture-open");
    pendingLink = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function submitDialog(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const link = pendingLink;
    if (!link || form.dataset.sending === "1") return;
    form.dataset.sending = "1";
    const info = visit();
    const details = {
      action: "lead",
      channel: "whatsapp",
      name: form.elements.name.value,
      phone: form.elements.phone.value,
      company: form.elements.company.value,
      product: form.elements.product.value,
      quantity: form.elements.quantity.value,
      city: form.elements.city.value,
      email: "",
      message: "WhatsApp quote request",
      page: info.page,
      landing: info.landing,
      source: info.source,
      referrer: info.referrer
    };
    const text = [
      "Hello, I would like a quote for " + details.product + ".",
      "Name: " + details.name,
      "Phone: " + details.phone,
      "Company: " + details.company,
      "Quantity: " + details.quantity,
      "City: " + details.city
    ].join("\n");
    postLead(details).finally(function () {
      const url = new URL(link.href, location.href);
      url.searchParams.set("text", text);
      window.open(url.toString(), "_blank", "noopener");
      form.dataset.sending = "";
      closeDialog();
    });
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest && event.target.closest('a[href*="wa.me/"]');
    if (!link) return;
    if (pageName() === "contact.html" || link.id === "quote-whatsapp" || link.id === "ask-whatsapp") return;
    event.preventDefault();
    const info = visit();
    postLead({
      action: "event",
      type: "whatsapp",
      page: info.page,
      source: info.source
    });
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", { page: info.page, source: info.source });
    }
    openDialog(link);
  });

  window.SuryatantraLeads = {
    prepareForm(form) {
      const info = visit();
      const page = form.querySelector("[name='source_page']");
      const source = form.querySelector("[name='lead_source']");
      const landing = form.querySelector("[name='landing_page']");
      if (page) page.value = info.page;
      if (source) source.value = info.source;
      if (landing) landing.value = info.landing;
      if (window.gtag) {
        window.gtag("event", "form_send", { page: info.page, source: info.source });
      }
    }
  };

  rememberVisit();
  loadAnalytics();
})();
