/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "night-blue": "#020617",
        "nav-color": "#bbbbbb",
        "light-purple": "#6B21A8",
        smoke: "#E4E7EB",
        lightgray: "#E2G7PC",
        "deep-blue": "#0A192F",
        "light-slate": "#CCD6F6",
        "vibrant-purple": "#8B5CF6",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
