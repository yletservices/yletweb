/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F2EB",
        paper: "#FFFCF8",
        cream: "#EFE6DA",
        sand: "#E3D5C3",
        espresso: { DEFAULT: "#1C1512", 2: "#2A201B", footer: "#141110" },
        body: "#51463F",
        muted: "#8A7B70",
        line: "#E8DDD0",
        gold: { DEFAULT: "#B07F35", light: "#D7B26E" },
        violet: { DEFAULT: "#6D3FC0", light: "#8B5CF6", deep: "#3E1D73" },
        lav: { DEFAULT: "#F2ECFC", 2: "#E3D6F8" },
      },
      fontFamily: {
        sans: ["Poppins", "Avenir Next", "Segoe UI", "system-ui", "sans-serif"],
        script: ["Allura", "Snell Roundhand", "Segoe Script", "cursive"],
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(120deg,#8A5A1E 0%,#C99A4F 45%,#E3C489 60%,#A87230 100%)",
        "violet-grad": "linear-gradient(120deg,#3E1D73 0%,#6D3FC0 55%,#9A6BE8 100%)",
        "espresso-grad": "linear-gradient(120deg,#1C1512,#3A2A22)",
      },
      maxWidth: { site: "1320px" },
      transitionTimingFunction: { brand: "cubic-bezier(.22,.7,.2,1)" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        rise: { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "none" } },
        pop: { from: { opacity: "0", transform: "translateY(20px) scale(.98)" }, to: { opacity: "1", transform: "none" } },
        fill: { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        rise: "rise .9s cubic-bezier(.22,.7,.2,1) both",
        pop: "pop .45s cubic-bezier(.22,.7,.2,1)",
      },
    },
  },
  plugins: [],
};
