module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "neg-spin-slow": "spin 15s linear infinite reverse",
      },
      fontFamily: {
        sans: '"Open Sans"',
        poppins: "Poppins",
        volkhov: "Volkhov",
        averta: "Averta",
      },
      colors: {
        primary: "#2639ED",
        grey: "#757575",
      },
    },
  },
  plugins: [],
};
