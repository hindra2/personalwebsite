/** @type {import('tailwindcss').Config} */

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
      colors: {
        background: "#15171c",
        base1: "#20232b",
        text: "#FAFAFF",
        overlay1: "#59577F",
        overlay2: "#D2BCF3",
        overlay3: "#273469"
      }
    },
  },
  plugins: [],
}
