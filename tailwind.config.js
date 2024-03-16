/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      purple: "#7855FF",
      myPurpleHover: "#6742E6",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // LIGHT BLUE COLOURS
        myVeryLightBlue: "#88CCEE",
        myLightBlue: "#51a2da",
        myDarkBlue: "#4e7ca5",
        myFooterBlue: "#C2CEE5",

        // GRAY-ISH COLOURS
        myVeryLightBlue2: "#CEDAEF",
        myInputGray: "#E9ECF2",
        myWhite: "#EAE8E8",
        white: "#FFFFFF",
        myDarkGray: "#2D2D2D",
        myDefaultGrey: "#50545B",

        // RED/PINK/YELLOW/ORANGE
        myPinkReddish: "#CC6677",
        myOrange: "#D55E00",
        myYellow: "#E69F00",

        // GREEN COLOURS
        myDarkGreen: "#117733",
        myLightGreen: "#44AA99",

        myDarkPurple: "#2f1a45",
        customOrange: {
          100: "#FFEDD5", // Light orange
          500: "#F97316", // Base orange
          700: "#C2410C", // Dark orange
        },
      },
    },
  },
  plugins: [],
}

