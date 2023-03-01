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
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
