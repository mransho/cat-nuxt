/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  screens: {
    md: "768px",
  },

  theme: {
    extend: {
      colors: {
        primaryXX: "#9c27b0",
        secondaryXX: {
          100: "red",
          200: "#5907e9",
        },
        backTextColor: "rgba(133,98,147,.51)",
        log: "rgba(0,0,0,.18)",
      },
      fontFamily: {
        bodyFont: ["Doto"],
      },
      backgroundImage: {
        backgroundImage: "url('/backgroundImage.jpg')",
      },
      backdropBlur: {
        xs: "2px",
        log: "3px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      fontFamily: {
        fontLOGO: ["Doto"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "9px rgba(133,98,147,.51)",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "2px rgba(133,98,147,.51)",
        },
      });
    }),
  ],
};
