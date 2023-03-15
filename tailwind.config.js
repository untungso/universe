/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      slate: {
        1: "#fbfcfd",
        2: "#f8f9fa",
        3: "#f1f3f5",
        4: "#eceef0",
        5: "#e6e8eb",
        6: "#dfe3e6",
        7: "#d7dbdf",
        8: "#c1c8cd",
        9: "#889096",
        10: "#7e868c",
        11: "#687076",
        12: "#11181c",
      },
      blue: {
        DEFAULT: "#1947E6",
        800: "#8094FF",
        100: "#E9E7FC",
      },
      pink: {
        DEFAULT: "#FF89BB",
        800: "#FFC7DE",
        100: "#FFF3F8",
      },
      yellow: {
        DEFAULT: "#FFBD12",
        800: "#FFD465",
        100: "#FFF4CC",
      },
      green: {
        DEFAULT: "#00C6AE",
        800: "#61E4C5",
        100: "#D6FCF7",
      },
      red: {
        DEFAULT: "#F95A2C",
        800: "#FF9692",
        100: "#FFE8E8",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
