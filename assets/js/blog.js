// ======================================================
// BLOG DATA
// ======================================================

const blogData = [
  {
    id: 1,
    title: "Choosing PCB Drill Bits",
    category: "Drilling",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_drill_bits.png",
    excerpt: "Selecting the correct drill bit improves precision and tool life across all board types.",
    content: "Selecting the correct PCB drill bit is one of the most important decisions in the drilling process because it directly impacts hole quality, production efficiency, and tool life. PCB drilling requires extremely high precision, often involving thousands of holes on a single panel. Using the wrong drill bit can result in inaccurate hole diameters, rough edges, excessive burr formation, and increased scrap rates.<br>Carbide drill bits are the industry standard for PCB manufacturing due to their hardness, wear resistance, and ability to maintain dimensional accuracy at very high spindle speeds. For standard FR4 materials, carbide drills operating between 80,000 and 200,000 RPM provide the best combination of performance and durability. High-density interconnect (HDI) boards often require micro-drills with diameters below 0.20 mm, demanding even tighter manufacturing tolerances.<br>Bit geometry plays a significant role in drilling quality. Point angle, flute design, and cutting edge geometry determine chip evacuation efficiency and heat generation. Poor chip removal can lead to hole wall damage and premature tool failure. Manufacturers should regularly monitor drill wear and replace tools before hole quality begins to deteriorate.<br>Proper storage and handling are equally important. Carbide tools are brittle and can easily chip if mishandled. Automated tool management systems help track drill usage and ensure consistent performance throughout production runs. By selecting the correct drill bit specifications and maintaining proper operating conditions, manufacturers can achieve higher yields, improved reliability, and reduced production costs."
  },
  {
    id: 2,
    title: "High-Speed Spindles",
    category: "Spindles",
    readTime: "5 min read",
    image: "./assets/Images/blog/pcb_spindles.png",
    excerpt: "High RPM spindles improve drilling performance and consistency in multilayer production.",
    content: "High RPM spindles dramatically improve drilling performance across multilayer boards. Thermal stability and vibration dampening are critical factors when operating above 150,000 RPM. Air-bearing spindles offer the lowest runout for fine-pitch applications and should be paired with auto-balancing collets for extended tool life. High-speed spindles are the heart of modern PCB drilling machines, enabling manufacturers to produce precise holes at extremely high production rates. As PCB designs become more complex and feature smaller hole diameters, spindle performance becomes increasingly critical. Modern PCB drilling spindles commonly operate between 80,000 and 250,000 RPM depending on the application and material requirements.<br>The primary advantage of high-speed spindles is improved cutting efficiency. Higher rotational speeds reduce cutting forces, improve hole roundness, and minimize mechanical stress on delicate board structures. This is especially important when drilling multilayer boards containing thin copper layers and fragile dielectric materials.<br>Runout is one of the most important performance characteristics of a spindle. Excessive runout can cause oversized holes, poor registration, and accelerated drill wear. Air-bearing spindles offer exceptional precision by eliminating mechanical contact between rotating components, resulting in significantly lower vibration levels and superior accuracy.<br>Thermal stability is another key factor. Continuous operation at high RPM generates heat that can affect spindle alignment and bearing performance. Advanced cooling systems and precision-balanced rotating assemblies help maintain consistent operating conditions throughout long production shifts.<br>Maintenance practices greatly influence spindle lifespan. Regular inspection of bearings, collets, air supply systems, and vibration levels can prevent unexpected failures. Predictive maintenance systems using vibration analysis and real-time monitoring are becoming increasingly common in advanced PCB manufacturing facilities.<br>By investing in high-quality spindle technology and implementing proper maintenance procedures, manufacturers can increase productivity, reduce downtime, and achieve the precision required for modern electronic products."
  },
  {
    id: 3,
    title: "Routing Tools for PCB Edges",
    category: "Routing",
    readTime: "4 min read",
    image: "./assets/Images/blog/pcb_routing_tools.png",
    excerpt: "Routing tools define PCB edge quality and directly affect dimensional accuracy.",
    content: "Routing tools define PCB edge quality and directly affect dimensional accuracy. Tool geometry, chip load, and feed rate must be tuned to the board material for optimal results. Undersized tools leave burrs; oversized tools create mechanical stress in the laminate. Compression routers work best on double-sided copper boards.<br>Routing is a critical finishing process in PCB manufacturing that determines the final shape and edge quality of the board. High-quality routing tools ensure clean edges, accurate dimensions, and minimal mechanical stress on the laminate structure. Poor routing practices can result in burrs, delamination, fiber pull-out, and dimensional inaccuracies that affect assembly performance.<br>Tool geometry significantly influences routing performance. Factors such as flute count, cutting edge angle, and tool diameter must be carefully selected based on board material and production requirements. Compression routers are commonly used because they reduce burr formation on both top and bottom surfaces, particularly in double-sided copper-clad laminates.<br>Feed rate and spindle speed must be optimized together. Excessively high feed rates can increase tool loading and edge defects, while overly conservative settings reduce productivity and increase manufacturing costs. Proper chip evacuation is also essential to prevent heat buildup and maintain consistent cutting performance.<br>Tool wear monitoring is crucial in high-volume production environments. Worn routing tools can gradually degrade edge quality before operators notice visible defects. Automated vision systems and predictive maintenance software help identify wear patterns and schedule tool replacement before quality issues occur.<br>Dust extraction systems play an important role in routing operations. Fiberglass particles generated during cutting can contaminate equipment and pose health risks if not properly removed. Modern routing machines incorporate high-efficiency extraction systems to maintain a clean production environment.<br>When routing parameters are carefully optimized and tool condition is closely monitored, manufacturers can achieve superior edge quality, consistent dimensional accuracy, and longer tool life across a wide range of PCB designs."
  },
  {
    id: 4,
    title: "V-Cut Scoring Techniques",
    category: "V-Cut",
    readTime: "3 min read",
    image: "./assets/Images/blog/vcut_scoring.png",
    excerpt: "V-cut allows clean PCB panel separation with minimal stress on edge components.",
    content: "V-cut scoring allows clean PCB panel separation without mechanical stress on components near board edges. Scoring depth and angle tolerances are critical to consistent breakout force. Standard V-cut depth is typically one-third of total board thickness, with a 30° or 45° blade angle depending on material stack-up.<br>V-cut scoring is a popular PCB depanelization technique used to separate individual boards from a larger manufacturing panel. The process involves cutting V-shaped grooves into both sides of the panel while leaving a thin section of material intact. This allows boards to be separated easily after assembly while maintaining panel rigidity during production.<br>One of the primary advantages of V-cut technology is its efficiency. Unlike routing, V-cut scoring removes very little material and can be performed quickly across long panel lengths. This makes it particularly suitable for high-volume manufacturing environments where throughput is a major concern.<br>Scoring depth is a critical parameter. If the groove is too shallow, excessive force may be required during separation, increasing the risk of board damage. If the groove is too deep, panels may become fragile during handling and transportation. Most manufacturers target a residual material thickness of approximately one-third of the total board thickness.<br>Blade angle selection also affects separation quality. Common angles include 30° and 45°, with the choice depending on board thickness and material characteristics. Precision alignment between top and bottom scoring blades is essential to maintain consistent breakout force across the panel.<br>Engineers must consider component placement during design. Components positioned too close to the V-cut line may experience mechanical stress during depanelization. Adequate clearance helps protect solder joints and sensitive electronic components.<br>Properly implemented V-cut scoring provides a reliable, cost-effective solution for PCB separation while maintaining manufacturing efficiency and product quality."
  },
  {
    id: 5,
    title: "Drill Stack-Up Strategies",
    category: "Drilling",
    readTime: "6 min read",
    image: "./assets/Images/blog/pcb_automation.png",
    excerpt: "Stack-up improves multilayer drilling yield and significantly reduces bit wear.",
    content: "Stack-up strategy improves multilayer drilling yield and reduces drill bit wear. Selecting the right backup and entry materials is as important as the drill geometry itself. Aluminium entry sheets prevent burring on copper foil surfaces, while phenolic backup boards support clean exit hole quality on the bottom layer.<br>Drill stack-up strategy is a fundamental aspect of efficient PCB manufacturing, particularly when processing multilayer boards in high-volume production environments. A properly designed stack-up arrangement improves drilling productivity, reduces tool wear, enhances hole quality, and minimizes manufacturing defects.<br>A typical drilling stack consists of an entry material, one or more PCB panels, and a backup material. Each layer serves a specific purpose during the drilling process. Entry materials, commonly made from aluminum, help stabilize the drill bit as it enters the stack. This reduces burr formation on the copper surface and improves hole positioning accuracy. Backup materials support the drill as it exits the panel, minimizing breakout defects and maintaining clean hole edges.<br>Stack height selection requires careful consideration. Excessive stack heights can increase drill deflection, reduce positional accuracy, and accelerate tool wear. Conversely, very small stacks may limit production efficiency. Manufacturers must balance productivity requirements with quality objectives when determining optimal stack configurations.<br>Material properties also influence stack-up design. Different laminate thicknesses, copper weights, and board constructions respond differently to drilling forces. High-density interconnect boards often require specialized stack arrangements to maintain precise hole quality and registration accuracy.<br>Heat generation is another important factor. Drilling thousands of holes at high speeds produces significant frictional heat. Proper stack materials help dissipate heat and prevent damage to both the drill bit and board materials. Effective chip evacuation further reduces thermal stress and improves overall drilling performance.<br>Modern PCB facilities increasingly use simulation software and process monitoring systems to optimize stack-up configurations. These tools analyze drilling parameters, predict tool wear patterns, and identify opportunities for process improvement. Combined with automated tool management systems, they help manufacturers achieve consistent quality across large production volumes.<br>By carefully selecting entry materials, backup boards, stack heights, and drilling parameters, manufacturers can maximize productivity while maintaining the precision and reliability required for advanced electronic products."
  },
  {
    id: 6,
    title: "PCB Automation Trends",
    category: "Routing",
    readTime: "5 min read",
    image: "./assets/Images/bg.png",
    excerpt: "Automation boosts throughput and reduces operator error in high-volume PCB fabrication.",
    content: "Automation boosts production throughput and reduces operator error in high-volume PCB fabrication. Vision systems and real-time adaptive feeds are now standard in modern CNC routing lines. Inline AOI integration cuts defect escape rates by up to 40%, and closed-loop spindle control maintains consistent chip load across full production shifts.<br>Automation is transforming PCB manufacturing by increasing production efficiency, improving quality control, and reducing dependence on manual operations. As electronic devices become more sophisticated and production volumes continue to grow, manufacturers are adopting advanced automation technologies to remain competitive in a rapidly evolving industry.<br>Modern PCB production facilities utilize automated material handling systems to transport panels between process stations. These systems reduce handling errors, improve workflow efficiency, and minimize the risk of physical damage to sensitive boards. Automated loading and unloading solutions also allow machines to operate continuously with minimal operator intervention.<br>Machine vision technology has become a cornerstone of PCB automation. High-resolution cameras combined with artificial intelligence algorithms can detect alignment issues, tool wear, routing defects, and surface abnormalities in real time. Automated optical inspection systems significantly improve defect detection rates while reducing the workload on quality control personnel.<br>Adaptive machining technologies represent another major advancement. Modern CNC drilling and routing machines continuously monitor spindle load, vibration levels, and cutting conditions. Based on real-time feedback, control systems automatically adjust feed rates and spindle speeds to optimize performance and maintain consistent quality.<br>Data analytics and Industry 4.0 integration are enabling smarter manufacturing environments. Production equipment can now communicate with centralized monitoring platforms that collect performance metrics, maintenance data, and quality statistics. This information supports predictive maintenance programs, helping manufacturers reduce unexpected downtime and extend equipment life.<br>Collaborative robotics are also becoming more common in PCB factories. These systems assist operators with repetitive tasks such as panel handling, packaging, and inspection processes. By automating routine operations, manufacturers can focus skilled personnel on process optimization and quality improvement activities.<br>As automation technologies continue to evolve, PCB manufacturers will benefit from greater efficiency, improved consistency, lower operating costs, and enhanced product quality. Facilities that embrace digital transformation will be better positioned to meet the demands of future electronic manufacturing challenges."
  }
];

// =====================================
// DOM — wait for full page load
// =====================================

document.addEventListener("DOMContentLoaded", () => {

  const blogGrid      = document.getElementById("blogGrid");
  const searchInput   = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const modal        = document.getElementById("blogModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose   = document.getElementById("modalClose");
  const modalImage   = document.getElementById("modalImage");
  const modalTitle   = document.getElementById("modalTitle");
  const modalCategory= document.getElementById("modalCategory");
  const modalReadTime= document.getElementById("modalReadTime");
  const modalText    = document.getElementById("modalText");
  const resultCount  = document.getElementById("resultCount");
  const emptyState   = document.getElementById("emptyState");

  let activeFilter = "All";

  // =====================================
  // OPEN MODAL — force display via style, never rely on CSS class alone
  // =====================================

  function openModal(blog) {
    if (!modal) { console.error("blogModal element not found!"); return; }

    modalTitle.textContent     = blog.title;
    modalCategory.textContent  = blog.category;
    modalReadTime.textContent  = blog.readTime;
    modalImage.src             = blog.image;
    modalImage.alt             = blog.title;

    modalText.innerHTML = blog.content
      .split("<br>")
      .map(p => `<p style="margin-bottom:1rem">${p.trim()}</p>`)
      .join("");

    // Force visible — overrides ANY CSS class or stylesheet rule
    modal.style.cssText = `
      display: flex !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    `;
    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  }

  // =====================================
  // CLOSE MODAL
  // =====================================

  function closeModal() {
    if (!modal) return;
    modal.style.cssText = "display: none !important;";
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  // =====================================
  // RENDER BLOGS
  // =====================================

  function renderBlogs(data) {
    if (!blogGrid) return;
    blogGrid.innerHTML = "";

    if (resultCount) {
      resultCount.textContent = `${data.length} Article${data.length !== 1 ? "s" : ""}`;
    }

    if (!data.length) {
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }
    if (emptyState) emptyState.classList.add("hidden");

    data.forEach(blog => {
      const card = document.createElement("article");
      card.className =
        "blog-card bg-[#111f33] rounded-3xl overflow-hidden shadow-lg border border-white/5 hover:border-orange-500/30 transition duration-300 flex flex-col";

      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img
            src="${blog.image}"
            alt="${blog.title}"
            class="w-full h-[220px] object-cover"
            onerror="this.src='./assets/Images/bg.png'">
          <span class="absolute top-4 left-4 bg-orange text-white px-3 py-1 rounded-full text-xs font-bold">
            ${blog.category}
          </span>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="text-sm text-slate-400 mb-3">
            <i class="fa fa-clock text-orange mr-2"></i>${blog.readTime}
          </div>
          <h3 class="text-xl font-bold text-white mb-3">${blog.title}</h3>
          <p class="text-slate-400 mb-6">${blog.excerpt}</p>
          <button
            class="read-btn mt-auto bg-orange hover:bg-orange-600 text-white font-semibold rounded-full px-5 py-3 transition"
            data-id="${blog.id}">
            Read Article
          </button>
        </div>
      `;

      blogGrid.appendChild(card);
    });
  }

  // =====================================
  // FILTER
  // =====================================

  function filterBlogs() {
    const term = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = blogData.filter(blog => {
      const categoryMatch = activeFilter === "All" || blog.category === activeFilter;
      const searchMatch =
        blog.title.toLowerCase().includes(term) ||
        blog.excerpt.toLowerCase().includes(term) ||
        blog.category.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });

    renderBlogs(filtered);
  }

  // =====================================
  // FILTER BUTTONS
  // =====================================

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      filterBlogs();
    });
  });

  // =====================================
  // SEARCH
  // =====================================

  if (searchInput) {
    searchInput.addEventListener("input", filterBlogs);
  }

  // =====================================
  // READ ARTICLE — single delegated listener
  // =====================================

  document.addEventListener("click", (e) => {
    const button = e.target.closest(".read-btn");
    if (!button) return;

    const id   = Number(button.dataset.id);
    const blog = blogData.find(item => item.id === id);
    if (!blog) return;

    openModal(blog);
  });

  // =====================================
  // MODAL CLOSE EVENTS
  // =====================================

  if (modalClose)   modalClose.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // =====================================
  // MOBILE MENU
  // =====================================

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // =====================================
  // INIT
  // =====================================

  renderBlogs(blogData);

}); // end DOMContentLoaded