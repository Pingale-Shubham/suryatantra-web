
/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "919730429324";

/* ================= LOAD NAVBAR & FOOTER ================= */
document.addEventListener("DOMContentLoaded", () => {
  // Check for initial hash, default to pcb-drill
  const initialHash = window.location.hash.replace("#", "");
  renderCategory(initialHash || "pcb-drill");
});

/* ================= PRODUCT DATA ================= */
const PRODUCTS = {

  /* ================= PCB DRILL ================= */
  "pcb-drill": {
    title: "PCB drill tools",
    desc: "Carbide drills for FR4, aluminium, and multilayer boards.",
    items: [
      {
        name: "FR4 Drills",
        image: "./assets/Images/pcb-drill/fr4-drill.png",
        parameters: {
          "Diameter Range": "0.1 – 6.5 mm",
          "Material": "Tungsten Carbide",
          "Application": "FR4 / Multilayer PCB",
          "Coating": "Non-Coated",
          // "Tolerance": "±0.02 mm"
        },
        features: [
          "High precision hole accuracy",
          "Excellent hole wall finish",
          "Low breakage rate",
          "Long tool life"
        ]
      },
      {
        name: "Aluminium Coated Drills",
        image: "./assets/Images/pcb-drill/aluminium-coated.png",
        parameters: {
          "Diameter Range": "1.0 – 6.5 mm",
          "Material": "Carbide",
          "Coating": "Aluminium Coated",
          "Application": "Metal & PCB",
          // "Max RPM": "80,000"
        },
        features: [
          "Reduced heat generation",
          "Higher feed rates",
          "Improved wear resistance"
        ]
      },
      {
        name: "Aluminium Non Coated Drills",
        image: "./assets/Images/pcb-drill/aluminium-non-coated.png",
        parameters: {
          // "Diameter Range": "0.50 – 3.20 mm",
          "Material": "Carbide",
          "Coating": "Non-Coated",
          "Application": "Aluminium PCB",
          // "Tolerance": "±0.03 mm"
        },
        features: [
          "Sharp cutting edges",
          "Smooth aluminium drilling",
          "Stable performance"
        ]
      },
      {
        name: "Slot Drills",
        image: "./assets/Images/pcb-drill/slot-drill.png",
        parameters: {
          "Cutting Diameter": "0.5 – 3.0 mm",
          "Material": "Solid Carbide",
          "Application": "PCB slotting",
          // "Shank": "3.175 mm"
        },
        features: [
          "Clean slot edges",
          "Minimal burr formation",
          "High routing accuracy"
        ]
      }
    ]
  },

  /* ================= PCB ROUTING ================= */
  "pcb-routing": {
    title: "PCB routing tools",
    desc: "Cutters for a clean edge and stable board dimensions.",
    items: [
      {
        name: "FR4 Coated Router",
        image: "./assets/Images/pcb-routing/fr4-coated.png",
        parameters: {
          "Diameter": "0.8 – 3.0 mm",
          "Coating": "TiAlN",
          "Application": "FR4 PCB routing",
          // "Max RPM": "60,000"
        },
        features: [
          "Smooth board edges",
          "High-speed cutting",
          "Extended tool life"
        ]
      },
      {
        name: "FR4 Diamond Coated Router",
        image: "./assets/Images/pcb-routing/fr4-dcoated.png",
        parameters: {
          "Diameter": "0.8 – 3.0 mm",
          "Coating": "diamond",
          "Application": "diamond coated bit",
          // "Max RPM": "60,000"
        },
        features: [
          "Smooth board edges",
          "High-speed cutting",
          "Extended tool life"
        ]
      },
      {
        name: "FR4 Non Coated Router",
        image: "./assets/Images/pcb-routing/fr4-non-coated.png",
        parameters: {
          "Diameter": "1.0 – 2.5 mm",
          "Coating": "Non-Coated",
          "Application": "Standard PCB routing",
          "Feed Rate": "Medium"
        },
        features: [
          "Cost-effective solution",
          "Clean routing finish",
          "Stable performance"
        ]
      },
      {
        name: "Diamond Coated Router",
        image: "./assets/Images/pcb-routing/d-coated.png",
        parameters: {
          "Diameter": "0.8 – 3.0 mm",
          "Coating": "Diamond",
          "Application": "diamond",
          // "Max RPM": "60,000"
        },
        features: [
          "Smooth board edges",
          "High-speed cutting",
          "Extended tool life"
        ]
      },
      {
        name: "Aluminium Coated Router",
        image: "./assets/Images/pcb-routing/aluminium-coated.png",
        parameters: {
          "Diameter": "1.0 – 2.4 mm",
          "Coating": "Aluminium Coated",
          "Application": "Metal core PCB",
          // "Max RPM": "50,000"
        },
        features: [
          "Reduced heat build-up",
          "Improved cutting life",
          "High precision routing"
        ]
      },
      {
        name: "Aluminium Non Coated Router",
        image: "./assets/Images/pcb-routing/aluminium-non-coated.png",
        parameters: {
          "Diameter": "1.0 – 2.4 mm",
          "Coating": "Non-Coated",
          "Application": "Aluminium PCB",
          // "Tolerance": "±0.05 mm"
        },
        features: [
          "Sharp cutting geometry",
          "Smooth aluminium finish",
          "Consistent routing depth"
        ]
      }
    ]
  },

  /* ================= SPINDLES ================= */
"spindle": {
  title: "Spindles and spares",
  desc: "High-speed spindles, collets, bearings, and replacement parts.",
  items: [

    {
      name: "39773",
      image: "./assets/Images/spindle/39773.png",
      parameters: {
        "Component Type": "Spindle Bearing",
        "Material": "High-grade alloy steel",
        "Application": "High-speed PCB spindles",
        "Precision Class": "ABEC-7"
      },
      features: [
        "High rotational accuracy",
        "Low friction design",
        "Extended operational life",
        "Stable performance at high RPM"
      ]
    },

    {
      name: "ST1001",
      image: "./assets/Images/spindle/st1001.png",
      parameters: {
        "Spindle Speed": "60,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air Cooled",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Low vibration operation",
        "High precision bearings",
        "Industrial duty cycle",
        "Long service life"
      ]
    },

    {
      name: "CR2000 / 820",
      image: "./assets/Images/spindle/cr2000-820.png",
      parameters: {
        "Spindle Speed": "80,000 RPM",
        "Cooling Type": "Air Cooled",
        "Application": "PCB drilling & routing",
        "Mount Type": "Standard"
      },
      features: [
        "High torque output",
        "Stable long-duration performance",
        "Reduced thermal expansion"
      ]
    },

    {
      name: "263504",
      image: "./assets/Images/spindle/263504.png",
      parameters: {
        "Component Type": "Spindle Shaft",
        "Material": "Hardened steel",
        "Application": "High-speed spindle assembly",
        "Finish": "Precision ground"
      },
      features: [
        "Excellent concentricity",
        "High wear resistance",
        "Long operational life"
      ]
    },

    {
      name: "ST1011",
      image: "./assets/Images/spindle/st1011.png",
      parameters: {
        "Spindle Speed": "60,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Smooth and quiet operation",
        "High reliability",
        "Consistent performance"
      ]
    },

    {
      name: "ST1021",
      image: "./assets/Images/spindle/st1021.png",
      parameters: {
        "Spindle Speed": "60,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Precision-balanced rotor",
        "Low maintenance",
        "Long service interval"
      ]
    },

    {
      name: "063503",
      image: "./assets/Images/spindle/063503.png",
      parameters: {
        "Component Type": "Spindle Collet",
        "Material": "Spring steel",
        "Size": "3.175 mm",
        "Application": "Tool holding"
      },
      features: [
        "High gripping force",
        "Excellent concentricity",
        "Quick tool change"
      ]
    },

    {
      name: "1769",
      image: "./assets/Images/spindle/1769.png",
      parameters: {
        "Component Type": "Spindle Nut",
        "Material": "Hardened alloy steel",
        "Thread Type": "Standard",
        "Application": "Collet locking"
      },
      features: [
        "Secure tool holding",
        "High mechanical strength",
        "Durable construction"
      ]
    },

    {
      name: "1722",
      image: "./assets/Images/spindle/1722.png",
      parameters: {
        "Component Type": "Spindle Housing",
        "Material": "Aluminium alloy",
        "Application": "Spindle enclosure",
        "Finish": "Anodized"
      },
      features: [
        "Lightweight construction",
        "Efficient heat dissipation",
        "Corrosion resistant"
      ]
    },

    {
      name: "H916",
      image: "./assets/Images/spindle/h916.png",
      parameters: {
        "Component Type": "Spindle Belt",
        "Material": "Reinforced rubber",
        "Application": "Power transmission",
        "Compatibility": "High-speed spindles"
      },
      features: [
        "Low slippage",
        "High tensile strength",
        "Long operational life"
      ]
    },

    {
      name: "17593",
      image: "./assets/Images/spindle/17593.png",
      parameters: {
        "Component Type": "Spindle Seal",
        "Material": "Oil-resistant rubber",
        "Application": "Dust & coolant protection",
        "Temperature Range": "High"
      },
      features: [
        "Effective contamination protection",
        "Heat resistant",
        "Extended spindle life"
      ]
    },

    {
      name: "40374",
      image: "./assets/Images/spindle/40374.png",
      parameters: {
        "Component Type": "Spindle Spacer",
        "Material": "Precision machined steel",
        "Application": "Bearing spacing",
        "Tolerance": "High precision"
      },
      features: [
        "Accurate bearing alignment",
        "High dimensional stability",
        "Durable performance"
      ]
    },

    {
      name: "ST1031",
      image: "./assets/Images/spindle/st1031.png",
      parameters: {
        "Spindle Speed": "70,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air Cooled",
        "Collet Size": "3.175 mm"
      },
      features: [
        "High speed capability",
        "Smooth vibration-free operation",
        "Industrial reliability"
      ]
    },

    {
      name: "230505",
      image: "./assets/Images/spindle/230505.png",
      parameters: {
        "Component Type": "Spindle Pulley",
        "Material": "Hardened steel",
        "Application": "Power transmission",
        "Balance": "Precision balanced"
      },
      features: [
        "Stable rotation",
        "High load capacity",
        "Low wear rate"
      ]
    },

    {
      name: "17508",
      image: "./assets/Images/spindle/17508.png",
      parameters: {
        "Component Type": "Spindle Bearing",
        "Material": "Ceramic hybrid",
        "Precision Class": "ABEC-9",
        "Application": "Ultra high-speed spindles"
      },
      features: [
        "Extremely low friction",
        "High temperature resistance",
        "Extended service life"
      ]
    },

    {
      name: "ST1041",
      image: "./assets/Images/spindle/st1041.png",
      parameters: {
        "Spindle Speed": "80,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "High precision performance",
        "Excellent thermal stability",
        "Low noise operation"
      ]
    },

    {
      name: "ST1051",
      image: "./assets/Images/spindle/st1051.png",
      parameters: {
        "Spindle Speed": "80,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "High-speed consistency",
        "Industrial grade build",
        "Minimal maintenance"
      ]
    },

    {
      name: "ST1061",
      image: "./assets/Images/spindle/st1061.png",
      parameters: {
        "Spindle Speed": "100,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Ultra high-speed operation",
        "Precision engineered",
        "Maximum productivity"
      ]
    },

    {
      name: "Front Air Bearing",
      image: "./assets/Images/spindle/FRONT AIR BEARING.png",
      parameters: {
        "Spindle Speed": "100,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Ultra high-speed operation",
        "Precision engineered",
        "Maximum productivity"
      ]
    },
    
    {
      name: "ROTOR SHAFT",
      image: "./assets/Images/spindle/ROTOR SHAFT.png",
      parameters: {
        "Spindle Speed": "100,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Ultra high-speed operation",
        "Precision engineered",
        "Maximum productivity"
      ]
    },
    
    {
      name: "THRUST AIR BEARING",
      image: "./assets/Images/spindle/THRUST AIR BEARING.png",
      parameters: {
        "Spindle Speed": "100,000 RPM",
        "Voltage": "220V",
        "Cooling Type": "Air",
        "Collet Size": "3.175 mm"
      },
      features: [
        "Ultra high-speed operation",
        "Precision engineered",
        "Maximum productivity"
      ]
    },

    {
      name: "Collet Remover",
      image: "./assets/Images/spindle/collet-remover.png",
      parameters: {
        "Tool Type": "Maintenance Tool",
        "Material": "Hardened steel",
        "Application": "Safe collet removal",
        "Compatibility": "All PCB spindles"
      },
      features: [
        "Prevents spindle damage",
        "Easy and safe operation",
        "Long service life"
      ]
    }

  ]
},

  /* ================= V-CUT ================= */
"vcut": {
  title: "V-cut blades",
  desc: "Scoring blades for repeatable PCB depaneling.",
  items: [

    {
      name: "Ø 82×35×60T×30° ×2.0",
      image: "./assets/Images/vcut/82x35-60t.png",
      parameters: {
        "Outer Diameter": "82 mm",
        "Inner Diameter": "35 mm",
        "Teeth Count": "60T",
        "Cut Angle": "30°",
        "Thickness": "2.0 mm",
        "Material": "Tungsten Carbide Steel"
      },
      features: [
        "Clean and burr-free PCB depaneling",
        "High tooth precision",
        "Stable cutting performance",
        "Long service life"
      ]
    },

    {
      name: "Ø 82×35×20T×30° ×2.0",
      image: "./assets/Images/vcut/82x35-20t.png",
      parameters: {
        "Outer Diameter": "82 mm",
        "Inner Diameter": "35 mm",
        "Teeth Count": "20T",
        "Cut Angle": "30°",
        "Thickness": "2.0 mm",
        "Material": "High-speed steel (HSS)"
      },
      features: [
        "Reduced cutting resistance",
        "Smooth V-groove formation",
        "Suitable for thinner PCBs"
      ]
    },

    {
      name: "Ø 51×48T×30° ×2.4H COATED",
      image: "./assets/Images/vcut/51X25X48TX30D COATED.png",
      parameters: {
        "Outer Diameter": "51 mm",
        "Teeth Count": "48T",
        "Cut Angle": "30°",
        "Thickness": "2.4H",
        "Material": "Tungsten Carbide Steel"
      },
      features: [
        "Compact blade design",
        "High precision V-cutting",
        "Low vibration during operation"
      ]
    },

    {
      name: "Ø 120×48T×30° ×2.4H",
      image: "./assets/Images/vcut/120x48.png",
      parameters: {
        "Outer Diameter": "120 mm",
        "Teeth Count": "48T",
        "Cut Angle": "30°",
        "Thickness": "2.4H",
        "Material": "Tungsten Carbide Steel"
      },
      features: [
        "Large diameter for heavy-duty depaneling",
        "Consistent cut depth",
        "Industrial-grade durability"
      ]
    },

    {
      name: "Ø 51×30×18T×30° ×2.4",
      image: "./assets/Images/vcut/51x30.png",
      parameters: {
        "Outer Diameter": "51 mm",
        "Inner Diameter": "30 mm",
        "Teeth Count": "18T",
        "Cut Angle": "30°",
        "Thickness": "2.4 mm",
        "Material": "Alloy steel"
      },
      features: [
        "Sharp cutting edges",
        "Smooth V-groove finish",
        "Suitable for fine PCB work"
      ]
    },

    {
      name: "Ø 100×40×30T×30° ×2.0",
      image: "./assets/Images/vcut/100x40.png",
      parameters: {
        "Outer Diameter": "100 mm",
        "Inner Diameter": "40 mm",
        "Teeth Count": "30T",
        "Cut Angle": "30°",
        "Thickness": "2.0 mm",
        "Material": "High-speed steel (HSS)"
      },
      features: [
        "Balanced cutting performance",
        "Reduced PCB stress",
        "High wear resistance"
      ]
    },

    {
      name: "Ø 103×6T",
      image: "./assets/Images/vcut/103x6t.png",
      parameters: {
        "Outer Diameter": "103 mm",
        "Teeth Count": "6T",
        "Cut Type": "Rough V-cut",
        "Material": "Alloy steel"
      },
      features: [
        "Aggressive material removal",
        "Suitable for thick boards",
        "High mechanical strength"
      ]
    },

    {
      name: "Ø 83×6.5/5.0×25.4×6Z",
      image: "./assets/Images/vcut/83x6-5.png",
      parameters: {
        "Outer Diameter": "83 mm",
        "Blade Width": "6.5 / 5.0 mm",
        "Bore Size": "25.4 mm",
        "Teeth Count": "6Z",
        "Material": "Carbide tipped"
      },
      features: [
        "Dual width cutting capability",
        "High cutting accuracy",
        "Long-lasting sharpness"
      ]
    }

  ]
},

"more": {
  title: "Line consumables",
  desc: "Carlson pins, drill rings, brushes, and burr removers.",
  items: [

    {
      name: "Routing Brush",
      image: "./assets/Images/more/routing-brush.png",
      parameters: {
        "Material": "Nylon / Anti-static fiber",
        "Application": "PCB dust & debris removal",
        "Brush Width": "Standard",
        "Usage Type": "Manual"
      },
      features: [
        "Efficient dust cleaning during routing",
        "Anti-static bristles",
        "Durable and long-lasting",
        "Safe for PCB surfaces"
      ]
    },

    {
      name: "Locating Pins",
      image: "./assets/Images/more/locating-pins.png",
      parameters: {
        "Material": "Hardened Steel",
        "Diameter": "1.0 / 6.0 mm",
        "Application": "PCB alignment & positioning",
        "Tolerance": "High precision"
      },
      features: [
        "Accurate PCB positioning",
        "Wear-resistant construction",
        "Ensures repeatable alignment",
        "Suitable for multilayer PCBs"
      ]
    },

    {
      name: "Carlson Pins",
      image: "./assets/Images/more/carlson-pins.png",
      parameters: {
        "Material": "Alloy Steel",
        "Application": "PCB fixing & alignment",
        "Surface Finish": "Polished",
        "Compatibility": "Standard PCB machines"
      },
      features: [
        "High dimensional accuracy",
        "Strong holding strength",
        "Long service life",
        "Easy installation"
      ]
    },

    {
      name: "SILKSCREEN CARLSON PIN BRASS",
      image: "./assets/Images/more/SILKSCREEN PIN.png",
      parameters: {
        "Material": "BRASS",
        "Application": "PCB fixing & alignment",
        "Surface Finish": "Polished",
        "Compatibility": "Standard PCB machines"
      },
      features: [
        "High dimensional accuracy",
        "Strong holding strength",
        "Long service life",
        "Easy installation"
      ]
    },
    
    {
      name: "Drill Rings",
      image: "./assets/Images/more/drill-rings.png",
      parameters: {
        "Material": "Stainless Steel",
        "Inner Diameter": "As per requirement",
        "Application": "Drill depth control",
        "Finish": "Corrosion resistant"
      },
      features: [
        "Consistent drilling depth",
        "Easy to install on drill bits",
        "Improves drilling accuracy",
        "Reusable design"
      ]
    },

    {
      name: "Ring Setting Machine",
      image: "./assets/Images/more/ring-setting-machine.png",
      parameters: {
        "Operation Type": "Manual / Semi-automatic",
        "Application": "Drill ring fixing",
        "Construction": "Heavy-duty steel body",
        "Usage": "Production line"
      },
      features: [
        "Quick and accurate ring installation",
        "Reduces operator effort",
        "Improves productivity",
        "Industrial-grade durability"
      ]
    },

    {
      name: "DLR",
      image: "./assets/Images/more/DLR-Y-TEK-2.png",
      parameters: {
        "Full Form": "Drill Length Regulator",
        "Application": "Drilling depth control",
        "Adjustment": "Micrometer adjustable",
        "Mounting": "Standard PCB drill machines"
      },
      features: [
        "Precise drill depth control",
        "Reduces tool breakage",
        "Improves hole consistency",
        "Easy calibration"
      ]
    },

    {
      name: "Burr Remover",
      image: "./assets/Images/more/burr-remover.png",
      parameters: {
        "Material": "Hardened Steel Blade",
        "Application": "PCB edge burr removal",
        "Operation": "Manual",
        "Handle": "Ergonomic grip"
      },
      features: [
        "Smooth PCB edges",
        "Prevents copper damage",
        "Comfortable handling",
        "Long blade life"
      ]
    }

  ]
}

};
 
/* ================= RENDER CATEGORY ================= */
const container = document.getElementById("category-container");

function cardSummary(item) {
  const params = item.parameters || {};
  return params["Component Type"]
    || params["Application"]
    || params["Tool Type"]
    || params["Full Form"]
    || (item.features && item.features[0])
    || "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function quoteText(name) {
  return `Hello, I would like a quote for ${name}.`;
}

function whatsappQuoteUrl(name) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quoteText(name))}`;
}

function contactQuoteUrl(name) {
  return `./contact.html?product=${encodeURIComponent(name)}`;
}

function renderCategory(key) {
  if (!container) return;
  if (!PRODUCTS[key]) {
    key = "pcb-drill";
    const nextHash = "#pcb-drill";
    if (location.hash && location.hash !== nextHash) {
      history.replaceState(null, "", location.pathname + location.search + nextHash);
    }
  }
  const cat = PRODUCTS[key];

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-cat="${key}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  container.classList.remove("rendered");

  const count = cat.items.length;
  container.innerHTML = `
    <div class="mb-3 flex items-baseline justify-between gap-4">
      <p class="cat-desc">${escapeHtml(cat.desc)}</p>
      <p id="productCount" class="shrink-0 text-sm text-slate-500">${count} ${count === 1 ? "item" : "items"}</p>
    </div>
    <div class="product-scroller">
      <button type="button" class="product-nav" id="productPrev" aria-label="Previous products"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
      <div class="product-row" id="productRow">
      ${cat.items.map(item => {
        const summary = cardSummary(item);
        return `
        <article class="product-card-wrap">
          <div class="product-card-img">
            <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
          </div>
          <div class="product-card-body">
            <h3${summary ? "" : ' class="product-card-title-grow"'}>${escapeHtml(item.name)}</h3>
            ${summary ? `<p class="product-card-summary">${escapeHtml(summary)}</p>` : ""}
            <button type="button" onclick='openModal(${JSON.stringify(item).replace(/'/g, "&#39;")}, "${cat.title.replace(/"/g, "")}")'>View details</button>
            <div class="product-card-quotes">
              <a href="${contactQuoteUrl(item.name)}">Request a quote</a>
              <a href="${whatsappQuoteUrl(item.name)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </article>
      `;
      }).join("")}
      </div>
      <button type="button" class="product-nav" id="productNext" aria-label="Next products"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
    </div>
  `;

  requestAnimationFrame(() => {
    container.classList.add("rendered");
    bindProductScroller();
  });
}

let onProductResize = null;

function bindProductScroller() {
  const row = document.getElementById("productRow");
  const prev = document.getElementById("productPrev");
  const next = document.getElementById("productNext");
  const countEl = document.getElementById("productCount");
  const scroller = row && row.parentElement;
  if (!row || !prev || !next) return;

  if (onProductResize) window.removeEventListener("resize", onProductResize);
  const items = Array.prototype.slice.call(row.children);

  function pageSize() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function startIndex() {
    let start = 0;
    items.forEach(function (item, index) {
      if (item.offsetLeft <= row.scrollLeft + 8) start = index;
    });
    return start;
  }

  function update() {
    const size = pageSize();
    const max = row.scrollWidth - row.clientWidth;
    const start = startIndex();
    const end = Math.min(items.length, start + size);
    const canScroll = items.length > size;
    if (scroller) scroller.classList.toggle("has-nav", canScroll);
    prev.hidden = next.hidden = !canScroll;
    if (countEl) {
      countEl.textContent = canScroll
        // ? (start + 1) + "–" + end + " of " + items.length
        ? items.length + " items"
        : items.length + (items.length === 1 ? " item" : " items");
    }
    prev.disabled = row.scrollLeft <= 2;
    next.disabled = row.scrollLeft >= max - 2;
  }

  function go(direction) {
    const size = pageSize();
    const target = Math.max(0, Math.min(items.length - 1, startIndex() + direction * size));
    row.scrollTo({ left: items[target].offsetLeft, behavior: "smooth" });
  }

  prev.onclick = function () { go(-1); };
  next.onclick = function () { go(1); };
  row.onscroll = update;
  onProductResize = update;
  window.addEventListener("resize", onProductResize);
  update();
}

/* ================= CATEGORY NAV ================= */
document.querySelectorAll(".cat-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    const key = btn.dataset.cat;
    if (!key || !PRODUCTS[key]) return;
    if (window.location.hash === `#${key}`) {
      renderCategory(key);
      return;
    }
    window.location.hash = key;
  })
);
/* ================= HASH CHANGE SUPPORT ================= */
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash) renderCategory(hash);
});
/* ================= MODAL ================= */
function openModal(product, category) {
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-image").alt = product.name;
  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-category").innerText = category;

  document.getElementById("modal-features").innerHTML =
    product.features.map(f => `
      <li class="flex gap-2">
        <i class="fas fa-check-circle text-green-600 mt-1"></i>${f}
      </li>`).join("");

  document.getElementById("modal-params").innerHTML =
    Object.entries(product.parameters).map(([k,v]) =>
      `<tr><td class="border p-2 font-medium">${k}</td><td class="border p-2">${v}</td></tr>`
    ).join("");

  document.getElementById("whatsapp-btn").href =
    whatsappQuoteUrl(`${product.name} (${category})`);
  const quoteLink = document.getElementById("modal-quote-link");
  if (quoteLink) quoteLink.href = contactQuoteUrl(product.name);

  const modal = document.getElementById("product-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
