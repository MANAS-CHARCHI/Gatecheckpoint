/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      scale: {
        '102': '1.02',
        '98': '0.98',
        '112':'1.12'
      },
    },
  },
  plugins: [],
}