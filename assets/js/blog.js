// ===============================
// BLOG DATA
// ===============================
const blogData = [
  {
    id: 1,
    title: "Choosing PCB Drill Bits",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/bg.png",
    content: "Selecting the correct drill bit improves precision and tool life."
  },
  {
    id: 2,
    title: "High-Speed Spindles",
    category: "Spindles",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_automation.png",
    content: "High RPM spindles improve drilling performance."
  },
  {
    id: 3,
    title: "Routing Tools",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    content: "Routing tools define PCB edge quality."
  },
  {
    id: 4,
    title: "V-Cut Scoring",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    content: "V-cut allows clean PCB separation."
  },
  {
    id: 5,
    title: "Drill Stack-Up",
    category: "Drilling",
    readTime: "6 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    content: "Stack-up improves multilayer drilling."
  },
  {
    id: 6,
    title: "PCB Automation",
    category: "Routing",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    content: "Automation boosts production."
  }
];

// ===============================
// SELECTORS
// ===============================
const blogGrid = document.getElementById("blogGrid");
const searchInput = document.getElementById("blogSearch");
const filterBtns = document.querySelectorAll(".filter-btn");
const emptyState = document.getElementById("emptyState");

const modal = document.getElementById("blogModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalReadTime = document.getElementById("modalReadTime");
const modalClose = document.getElementById("modalClose");

// ===============================
// STATE
// ===============================
let activeFilter = "All";

// ===============================
// RENDER BLOGS
// ===============================
function renderBlogs() {
  blogGrid.innerHTML = "";

  blogData.forEach(blog => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded overflow-hidden flex flex-col";
    card.dataset.category = blog.category;
    card.dataset.title = blog.title.toLowerCase();

    card.innerHTML = `
      <img src="${blog.image}" class="h-48 w-full object-cover"/>
      <div class="p-4 flex flex-col flex-grow">
        <h2 class="font-bold mb-2">${blog.title}</h2>
        <p class="text-sm text-gray-400 mb-4">${blog.readTime}</p>
        <button class="read-more mt-auto text-orange-400" data-id="${blog.id}">
          Read More →
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
  const cards = blogGrid.children;
  const search = searchInput.value.toLowerCase();

  let visible = 0;

  [...cards].forEach(card => {
    const matchFilter = activeFilter === "All" || card.dataset.category === activeFilter;
    const matchSearch = card.dataset.title.includes(search);

    if (matchFilter && matchSearch) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.classList.toggle("hidden", visible !== 0);
}

// ===============================
// FILTER EVENTS
// ===============================
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    filterBlogs();
  });
});

searchInput.addEventListener("input", filterBlogs);

// ===============================
// READ MORE (FIXED)
// ===============================
blogGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".read-more");
  if (!btn) return;

  const blog = blogData.find(b => b.id == btn.dataset.id);
  if (!blog) return;

  modalImage.src = blog.image;
  modalTitle.textContent = blog.title;
  modalBody.textContent = blog.content;
  modalReadTime.textContent = blog.readTime;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// ===============================
// MODAL CLOSE
// ===============================
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

modalClose.onclick = closeModal;
modal.onclick = (e) => {
  if (e.target === modal) closeModal();
};

// ===============================
// INIT
// ===============================
renderBlogs();