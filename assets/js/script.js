document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll("[data-page]");

  if (!menuToggle || !mobileMenu || !navbar) return;

  /* ================= MOBILE TOGGLE ================= */
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  /* Close mobile menu on link click */
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });

  /* ================= ACTIVE PAGE ================= */
  const currentPage =
    location.pathname.split("/").pop().replace(".html", "") || "index";

  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active-link");
    }
  });

  /* ================= SCROLL SHADOW ================= */
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shadow-lg", window.scrollY > 50);
  });
});
