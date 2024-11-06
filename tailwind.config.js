/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Nunito"],
      },
      fontWeight: {
        extralight: "200",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      background: "#30343F",
      text: "#FAFAFF",
      overlay1: "#1E2749",
      overlay2: "#273469",
      overlay3: "#273469"
    }
  },
  plugins: [],
}

