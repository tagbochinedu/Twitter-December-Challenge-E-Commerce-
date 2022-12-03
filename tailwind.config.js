/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stix: "STIX Two Text",
        satoshi: "Satoshi, sans-serif",
        clash: "Clash Display",
        belle: 'Bellefair',
        pop: 'Poppins',
        bask: 'Baskervville'
      },
      lineHeight: {
        lht: "1.6",
      },
      colors: {
        lbl: "#292929",
        lgr: "#333333",
      },
    },
  },
  plugins: [],
};