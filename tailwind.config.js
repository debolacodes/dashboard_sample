// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1A3B", // Deep blue
        secondary: "#EEB257", // Violet
        accent: "#7059A4", // Amber
        muted: "#9CA3AF", // Gray
        background: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["Poppins", ...fontFamily.sans],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class", // or 'media' or false
};
