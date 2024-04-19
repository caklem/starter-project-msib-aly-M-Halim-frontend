module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 100: "#f5f5f5" },
        blue_gray: { 800: "#255a46", "100_01": "#d9d9d9" },
        black: { 900: "#000000" },
        lime: { 900: "#97623a" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
