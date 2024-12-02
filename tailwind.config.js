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
    },
    colors: {
      transparent: 'transparent',
      black: "#000000",
      white: "#FFFFFF",
      background: "#21242c",
      text: "#FAFAFF",
      overlay1: "#59577F",
      overlay2: "#D2BCF3",
      overlay3: "#273469"
    }
  },
  plugins: [],
}

