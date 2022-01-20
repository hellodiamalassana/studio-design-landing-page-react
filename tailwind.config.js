module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
