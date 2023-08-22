/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        "25px": "25px",
        "240px": "240px",
      },
      space: {
        "50px": "50px",
      },
      fontFamily: {
        arabic: ["font-arabic"],
      },
      fontSize: {
        "56px": "56px",
      },
      lineHeight: {
        "71px": "71px",
      },
    },
  },
  plugins: [],
};
