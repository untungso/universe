/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      slate: {
        1: "#fcfcfc",
        2: "#f8f8f8",
        3: "#f3f3f3",
        4: "#ededed",
        5: "#e8e8e8",
        6: "#e2e2e2",
        7: "#dbdbdb",
        8: "#c7c7c7",
        9: "#8f8f8f",
        10: "#858585",
        11: "#6f6f6f",
        12: "#171717",
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
