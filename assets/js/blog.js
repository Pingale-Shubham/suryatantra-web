// ===============================
// BLOG DATA
// ===============================
const blogData = [
  {
    id: 1,
    title: "Choosing PCB Drill Bits",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "Selecting the correct drill bit improves precision and tool life across all board types.",
    content: "Selecting the correct drill bit improves precision and tool life. The right bit reduces board waste and prevents micro-fractures in laminate layers, especially at high production volumes. Carbide bits are recommended for FR4 materials operating above 100k RPM, and bit diameter tolerance should stay within ±0.01mm for fine-pitch designs."
  },
  {
    id: 2,
    title: "High-Speed Spindles",
    category: "Spindles",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "High RPM spindles improve drilling performance and consistency in multilayer production.",
    content: "High RPM spindles dramatically improve drilling performance across multilayer boards. Thermal stability and vibration dampening are critical factors when operating above 150,000 RPM. Air-bearing spindles offer the lowest runout for fine-pitch applications and should be paired with auto-balancing collets for extended tool life."
  },
  {
    id: 3,
    title: "Routing Tools for PCB Edges",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "Routing tools define PCB edge quality and directly affect dimensional accuracy.",
    content: "Routing tools define PCB edge quality and directly affect dimensional accuracy. Tool geometry, chip load, and feed rate must be tuned to the board material for optimal results. Undersized tools leave burrs; oversized tools create mechanical stress in the laminate. Compression routers work best on double-sided copper boards."
  },
  {
    id: 4,
    title: "V-Cut Scoring Techniques",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "V-cut allows clean PCB panel separation with minimal stress on edge components.",
    content: "V-cut scoring allows clean PCB panel separation without mechanical stress on components near board edges. Scoring depth and angle tolerances are critical to consistent breakout force. Standard V-cut depth is typically one-third of total board thickness, with a 30° or 45° blade angle depending on material stack-up."
  },
  {
    id: 5,
    title: "Drill Stack-Up Strategies",
    category: "Drilling",
    readTime: "6 min read",
    image: "./assets/Images/blog/pcb_automation.png",
    excerpt: "Stack-up improves multilayer drilling yield and significantly reduces bit wear.",
    content: "Stack-up strategy improves multilayer drilling yield and reduces drill bit wear. Selecting the right backup and entry materials is as important as the drill geometry itself. Aluminium entry sheets prevent burring on copper foil surfaces, while phenolic backup boards support clean exit hole quality on the bottom layer."
  },
  {
    id: 6,
    title: "PCB Automation Trends",
    category: "Routing",
    readTime: "5 min read",
    image: "./assets/Images/bg.png",
    excerpt: "Automation boosts throughput and reduces operator error in high-volume PCB fabrication.",
    content: "Automation boosts production throughput and reduces operator error in high-volume PCB fabrication. Vision systems and real-time adaptive feeds are now standard in modern CNC routing lines. Inline AOI integration cuts defect escape rates by up to 40%, and closed-loop spindle control maintains consistent chip load across full production shifts."
  }
];


// ===============================
// DOM REFERENCES
// ===============================
const blogGrid       = document.getElementById("blogGrid");
const searchInput    = document.getElementById("blogSearch");
const filterBtns     = document.querySelectorAll(".filter-btn");
const emptyState     = document.getElementById("emptyState");
const resultCount    = document.getElementById("resultCount");

const modal              = document.getElementById("blogModal");
const modalImage         = document.getElementById("modalImage");
const modalImgFallback   = document.getElementById("modalImgFallback");
const modalFallbackCat   = document.getElementById("modalFallbackCat");
const modalTitle         = document.getElementById("modalTitle");
const modalBody          = document.getElementById("modalBody");
const modalReadTimeText  = document.getElementById("modalReadTimeText");
const modalCat           = document.getElementById("modalCat");
const modalClose         = document.getElementById("modalClose");
const modalOverlay       = document.getElementById("modalOverlay");


// ===============================
// STATE
// ===============================
let activeFilter = "All";


// ===============================
// RENDER CARDS
// ===============================
function renderBlogs() {
  blogGrid.innerHTML = "";

  blogData.forEach(blog => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.dataset.category = blog.category;
    card.dataset.title    = blog.title.toLowerCase();

    card.innerHTML = `
      <img
        class="blog-card-img"
        src="${blog.image}"
        alt="${blog.title}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="blog-card-img-fallback">
        <span class="cat-badge">${blog.category}</span>
      </div>
      <div class="blog-card-body">
        <p class="blog-card-cat">${blog.category}</p>
        <h3 class="blog-card-title">${blog.title}</h3>
        <p class="blog-card-meta">
          <i class="fa fa-clock"></i> ${blog.readTime}
        </p>
        <p class="blog-card-excerpt">${blog.excerpt}</p>
        <button class="read-more-btn" data-id="${blog.id}" aria-label="Read more about ${blog.title}">
          Read more <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    `;

    blogGrid.appendChild(card);
  });
}


// ===============================
// FILTER + SEARCH
// ===============================
function filterBlogs() {
  const cards  = Array.from(blogGrid.children);
  const search = searchInput.value.toLowerCase().trim();
  let visible  = 0;

  cards.forEach(card => {
    const matchFilter = activeFilter === "All" || card.dataset.category === activeFilter;
    const matchSearch = !search ||
                        card.dataset.title.includes(search) ||
                        card.dataset.category.toLowerCase().includes(search);

    if (matchFilter && matchSearch) {
      card.style.display = "";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.style.display  = visible === 0 ? "block" : "none";
  resultCount.textContent   = visible + " article" + (visible !== 1 ? "s" : "");
}


// ===============================
// FILTER BUTTON EVENTS
// ===============================
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("filter-active"));
    btn.classList.add("filter-active");
    activeFilter = btn.dataset.filter;
    filterBlogs();
  });
});

searchInput.addEventListener("input", filterBlogs);


// ===============================
// OPEN MODAL  (event delegation)
// ===============================
blogGrid.addEventListener("click", e => {
  const btn = e.target.closest(".read-more-btn");
  if (!btn) return;

  const blog = blogData.find(b => b.id == btn.dataset.id);
  if (!blog) return;

  // Populate modal fields
  modalCat.textContent           = blog.category;
  modalTitle.textContent         = blog.title;
  modalBody.textContent          = blog.content;
  modalReadTimeText.textContent  = blog.readTime;
  modalFallbackCat.textContent   = blog.category;

  // Image with graceful fallback
  modalImage.style.display       = "block";
  modalImgFallback.style.display = "none";
  modalImage.alt                 = blog.title;
  modalImage.src                 = blog.image;
  modalImage.onerror = () => {
    modalImage.style.display       = "none";
    modalImgFallback.style.display = "flex";
  };

  // Open modal
  modal.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
});


// ===============================
// CLOSE MODAL
// ===============================
function closeModal() {
  modal.classList.remove("modal-open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("modal-open")) closeModal();
});


// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}


// ===============================
// INIT
// ===============================
renderBlogs();
filterBlogs();