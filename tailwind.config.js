module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      "spin-slow": "spin 7s linear infinite",
    },

    extend: {
      fontFamily: {
        Helvetica: "Helvetica Neue",
        cursive: ["Dancing Script", "cursive"],
      },
      //
      // boxShadow: {
      //   '3xl': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
      // },
    },
  },
  plugins: [],
};
