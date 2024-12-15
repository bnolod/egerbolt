/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--accent-primary": "#FFD000",
          "--accent-secondary": "#F3DE70",

          "--background-primary": "#E6EBE0",
          "--background-secondary": "#c6cbc0",

          "--text-primary": "#000000",
          "--text-secondary": "#555555"
        },
        ".dark": {
          "--accent-primary": "#FFD000",
          "--accent-secondary": "#F3DE70",

          "--background-primary": "#222222",
          "--background-secondary": "#555555",

          "--text-primary": "#ffffff",
          "--text-secondary": "#aaaaaa"
        },
      });
    },
  ],
};
