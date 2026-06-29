import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070f",
        panel: "#0b1020",
        cyanline: "#20e7ff",
        violetline: "#9b5cff",
        electric: "#4667ff",
      },
      fontFamily: {
        display: ["Arial Black", "Arial", "Helvetica", "sans-serif"],
        body: ["Inter", "Segoe UI", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 42px rgba(32, 231, 255, 0.22)",
        violet: "0 0 42px rgba(155, 92, 255, 0.2)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(32,231,255,0.13), transparent 28rem)",
      },
    },
  },
  plugins: [],
};

export default config;
