/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        xs: ["13px", "1.6"],
        sm: ["15px", "1.6"],
        base: ["17px", "1.6"],
        lg: ["20px", "1.5"],
        xl: ["24px", "1.4"],
        "2xl": ["30px", "1.3"],
        "3xl": ["36px", "1.2"],
        "4xl": ["48px", "1.1"],
        "5xl": ["64px", "1.0"],
      },
      colors: {
        navy: { DEFAULT: "#f4f6fb", 90: "rgba(255,255,255,0.92)", 97: "rgba(255,255,255,0.98)" },
        mid: "#fff7ed",
        deep: "#eef2f7",
        card: "#ffffff",
        surface: "#f8fafc",
        orange: "#f97316",
        amber: "#fbbf24",
        brand: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          gold: "#fbbf24",
        },
      },
      backgroundImage: {
        hero: "linear-gradient(180deg,#ffffff 0%,#fff7ed 55%,#f4f6fb 100%)",
        "hero-gradient": "linear-gradient(180deg,#ffffff 0%,#fff7ed 55%,#f4f6fb 100%)",
        "section-dark": "linear-gradient(180deg,#ffffff 0%,#f4f6fb 100%)",
        "section-gradient": "linear-gradient(180deg,#ffffff 0%,#f4f6fb 100%)",
        "brand-gradient": "linear-gradient(135deg,#f97316 0%,#fbbf24 100%)",
        "orange-gold": "linear-gradient(135deg,#f97316,#fbbf24)",
        "grid-lines": "linear-gradient(rgba(249,115,22,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.05) 1px,transparent 1px)",
        dots: "radial-gradient(rgba(249,115,22,.07) 1px,transparent 1px)",
        "pcb-radial": "radial-gradient(rgba(190,140,40,1) 1px,transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
        "dots-28": "28px 28px",
        "pcb-28": "28px 28px",
      },
      boxShadow: {
        brand: "0 8px 32px rgba(249,115,22,0.35)",
        "brand-lg": "0 16px 48px rgba(249,115,22,0.50)",
        card: "0 16px 40px rgba(15,23,42,0.08)",
        "orange-glow": "0 8px 30px rgba(249,115,22,0.35)",
        "orange-lg": "0 14px 40px rgba(249,115,22,0.5)",
        "card-lift": "0 18px 40px rgba(15,23,42,0.08)",
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ring-pulse": {
          "0%,100%": { opacity: "0.20" },
          "50%": { opacity: "0.55" },
        },
        "pulse-ring": {
          "0%,100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "slide-up": "slide-up .65s ease both",
        "ring-pulse": "ring-pulse 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 4s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
