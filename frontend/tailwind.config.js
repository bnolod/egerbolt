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
          "--accent-primary": "#d19c1d",
          "--accent-secondary": "#ffcb69",

          "--background-primary": "#f0e5e1",
          "--background-secondary": "#e6d5ce",

          "--text-primary": "#000000",
          "--text-secondary": "#555555"
        },
        ".dark": {
          "--accent-primary": "#d19c1d",
          "--accent-secondary": "#ffcb69",

          "--background-primary": "#16141c",
          "--background-secondary": "#26242c",

          "--text-primary": "#ffffff",
          "--text-secondary": "#cccccc"
        },
      });
    },
  ],
};
