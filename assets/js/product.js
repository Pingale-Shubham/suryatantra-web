
/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "919730429324";

/* ================= LOAD NAVBAR & FOOTER ================= */
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/navbar.html")
    .then(r => r.text())
    .then(h => document.getElementById("navbar-placeholder").innerHTML = h);

  fetch("./components/footer.html")
    .then(r => r.text())
    .then(h => document.getElementById("footer-placeholder").innerHTML = h);

  renderCategory("pcb-drill");
});

/* ================= PRODUCT DATA ================= */
const PRODUCTS = {

  /* ================= PCB DRILL ================= */
  "pcb-drill": {
    title: "PCB Drill Tool",
    desc: "Industrial-grade PCB drilling solutions",
    items: [
      {
        name: "FR4 Drill",
        image: "./assets/images/pcb-drill/fr4-drill.png",
        parameters: {
          "Diameter Range": "0.20 – 3.20 mm",
          "Material": "Tungsten Carbide",
          "Application": "FR4 / Multilayer PCB",
          "Coating": "Non-Coated",
          "Tolerance": "±0.02 mm"
        },
        features: [
          "High precision hole accuracy",
          "Excellent hole wall finish",
          "Low breakage rate",
          "Long tool life"
        ]
      },
      {
        name: "Aluminium Coated Drill",
        image: "./assets/images/pcb-drill/aluminium-coated.png",
        parameters: {
          "Diameter Range": "0.30 – 3.20 mm",
          "Material": "Carbide",
          "Coating": "Aluminium Coated",
          "Application": "Metal & PCB",
          "Max RPM": "80,000"
        },
        features: [
          "Reduced heat generation",
          "Higher feed rates",
          "Improved wear resistance"
        ]
      },
      {
        name: "Aluminium Non Coated Drill",
        image: "./assets/images/pcb-drill/aluminium-non-coated.png",
        parameters: {
          "Diameter Range": "0.50 – 3.20 mm",
          "Material": "Carbide",
          "Coating": "Non-Coated",
          "Application": "Aluminium PCB",
          "Tolerance": "±0.03 mm"
        },
        features: [
          "Sharp cutting edges",
          "Smooth aluminium drilling",
          "Stable performance"
        ]
      },
      {
        name: "Slot Drill",
        image: "./assets/images/pcb-drill/slot-drill.png",
        parameters: {
          "Cutting Diameter": "0.8 – 2.5 mm",
          "Material": "Solid Carbide",
          "Application": "PCB slotting",
          "Shank": "3.175 mm"
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
    title: "PCB Routing Tool",
    desc: "Precision routing tools for PCB profiling",
    items: [
      {
        name: "FR4 Coated Router",
        image: "./assets/images/pcb-routing/fr4-coated.png",
        parameters: {
          "Diameter": "1.0 – 2.5 mm",
          "Coating": "TiAlN",
          "Application": "FR4 PCB routing",
          "Max RPM": "60,000"
        },
        features: [
          "Smooth board edges",
          "High-speed cutting",
          "Extended tool life"
        ]
      },
      {
        name: "FR4 Non Coated Router",
        image: "./assets/images/pcb-routing/fr4-non-coated.png",
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
        name: "Aluminium Coated Router",
        image: "./assets/images/pcb-routing/aluminium-coated.png",
        parameters: {
          "Diameter": "1.2 – 3.0 mm",
          "Coating": "Aluminium Coated",
          "Application": "Metal core PCB",
          "Max RPM": "50,000"
        },
        features: [
          "Reduced heat build-up",
          "Improved cutting life",
          "High precision routing"
        ]
      },
      {
        name: "Aluminium Non Coated Router",
        image: "./assets/images/pcb-routing/aluminium-non-coated.png",
        parameters: {
          "Diameter": "1.2 – 3.0 mm",
          "Coating": "Non-Coated",
          "Application": "Aluminium PCB",
          "Tolerance": "±0.05 mm"
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
  title: "Spindles & Spares",
  desc: "High-performance spindles and precision spare parts for PCB machinery",
  items: [

    {
      name: "39773",
      image: "./assets/images/spindle/39773.png",
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
      image: "./assets/images/spindle/st1001.png",
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
      image: "./assets/images/spindle/cr2000-820.png",
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
      image: "./assets/images/spindle/263504.png",
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
      image: "./assets/images/spindle/st1011.png",
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
      image: "./assets/images/spindle/st1021.png",
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
      image: "./assets/images/spindle/063503.png",
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
      image: "./assets/images/spindle/1769.png",
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
      image: "./assets/images/spindle/1722.png",
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
      image: "./assets/images/spindle/h916.png",
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
      image: "./assets/images/spindle/17593.png",
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
      image: "./assets/images/spindle/40374.png",
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
      image: "./assets/images/spindle/st1031.png",
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
      image: "./assets/images/spindle/230505.png",
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
      image: "./assets/images/spindle/17508.png",
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
      image: "./assets/images/spindle/st1041.png",
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
      image: "./assets/images/spindle/st1051.png",
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
      image: "./assets/images/spindle/st1061.png",
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
      image: "./assets/images/spindle/collet-remover.png",
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
  title: "V-Cut Blades",
  desc: "Precision blades for PCB depaneling",
  items: [

    {
      name: "Ø 82×35×60T×30° ×2.0",
      image: "./assets/images/vcut/82x35-60t.png",
      parameters: {
        "Outer Diameter": "82 mm",
        "Inner Diameter": "35 mm",
        "Teeth Count": "60T",
        "Cut Angle": "30°",
        "Thickness": "2.0 mm",
        "Material": "High-speed steel (HSS)"
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
      image: "./assets/images/vcut/82x35-20t.png",
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
      name: "Ø 51×48T×30° ×2.4H",
      image: "./assets/images/vcut/51x48.png",
      parameters: {
        "Outer Diameter": "51 mm",
        "Teeth Count": "48T",
        "Cut Angle": "30°",
        "Thickness": "2.4H",
        "Material": "Carbide steel"
      },
      features: [
        "Compact blade design",
        "High precision V-cutting",
        "Low vibration during operation"
      ]
    },

    {
      name: "Ø 120×48T×30° ×2.4H",
      image: "./assets/images/vcut/120x48.png",
      parameters: {
        "Outer Diameter": "120 mm",
        "Teeth Count": "48T",
        "Cut Angle": "30°",
        "Thickness": "2.4H",
        "Material": "Carbide steel"
      },
      features: [
        "Large diameter for heavy-duty depaneling",
        "Consistent cut depth",
        "Industrial-grade durability"
      ]
    },

    {
      name: "Ø 51×30×18T×30° ×2.4",
      image: "./assets/images/vcut/51x30.png",
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
      image: "./assets/images/vcut/100x40.png",
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
      image: "./assets/images/vcut/103x6t.png",
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
      image: "./assets/images/vcut/83x6-5.png",
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
  title: "More Tools",
  desc: "Additional PCB manufacturing accessories and utilities",
  items: [

    {
      name: "Routing Brush",
      image: "./assets/images/more/routing-brush.png",
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
      image: "./assets/images/more/locating-pins.png",
      parameters: {
        "Material": "Hardened Steel",
        "Diameter": "3.0 / 3.175 mm",
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
      name: "Calson Pins",
      image: "./assets/images/more/calson-pins.png",
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
      name: "Drill Rings",
      image: "./assets/images/more/drill-rings.png",
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
      image: "./assets/images/more/ring-setting-machine.png",
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
      image: "./assets/images/more/dlr.png",
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
      image: "./assets/images/more/burr-remover.png",
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

function renderCategory(key) {
  const cat = PRODUCTS[key];
  if (!cat) return;

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`[data-cat="${key}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  container.innerHTML = `
    <h2 class="text-3xl font-bold mb-2">${cat.title}</h2>
    <p class="text-gray-600 mb-8">${cat.desc}</p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      ${cat.items.map(item => `
        <div class="bg-white rounded-xl shadow border flex flex-col">
          <div class="h-60 flex items-center justify-center p-4">
            <img src="${item.image}" class="h-full object-contain">
          </div>
          <div class="p-5 text-center flex flex-col flex-grow">
            <h3 class="font-bold mb-4">${item.name}</h3>
            <button onclick='openModal(${JSON.stringify(item)}, "${cat.title}")'
              class="mt-auto bg-blue-600 text-white py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ================= CATEGORY NAV ================= */
document.querySelectorAll(".cat-btn").forEach(btn =>
  btn.addEventListener("click", () => renderCategory(btn.dataset.cat))
);

/* ================= MODAL ================= */
function openModal(product, category) {
  document.getElementById("modal-image").src = product.image;
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
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hello, I am interested in ${product.name} (${category}).`
    )}`;

  const modal = document.getElementById("product-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

document.getElementById("product-modal").addEventListener("click", e => {
  if (e.target.id === "product-modal") closeModal();
});
