/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        royalblue: "#367cff",
        lightskyblue: "#a9c7ff",
        darkslateblue: "#4d2c5e",
        floralwhite: "#fdf8ee",
        tomato: "#ff725e",
        gray: "#8c8b8b",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        lgi: "19px",
        "2xl": "21px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      "3xl": "22px",
      "15xl": "34px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
