/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        miniAmazon: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}