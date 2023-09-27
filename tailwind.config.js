/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mine: ["Space Mono", "monospace"],
      },
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        strongCyanOpacity: "hsla(172, 67%, 45%, .5)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
      },
      minHeight: {
        "100svh": "100svh",
      },
      gridTemplateRows: {
        3: "repeat(3, auto)",
      },
    },
  },
  plugins: [],
};
