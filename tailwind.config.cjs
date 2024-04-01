/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,jsx}", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    colors: {
      "transparent": "#00000000",
      "gray-400": "#CDD5E0",
      "gray-700": "#4D5562",
      "gray-800": "rgb(36 39 56)",
      "gray-900": "rgb(23 29 42)",
      "white": "#F9FAFB",
      "black": "#040711",
      "blue-400": "#7CA9F3",
      "blue-600": "#3662E3",
      "blue-900": "#040612",
    },
    fontFamily: {
      "DM": ["sans-serif", "DM Sans"],
    },
    extend: {},
  },
  plugins: [],
}
