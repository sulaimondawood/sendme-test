/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1440px": "1440px",
      },
      fontFamily: {
        aeonikRegular: ["AeonikRegular", "sans-serif"],
        aeonikMedium: ["AeonikMedium", "sans-serif"],
        aeonikLight: ["AeonikProLight", "sans-serif"],
        aeonikBold: ["AeonikProBold", "sans-serif"],
      },
      colors: {
        "prm-purple": "#5E565A",
        "prm-red": "#FF934F",
        "prm-yellow": "#F7FF58",
        "prm-gray": "#A9CBB7",
        "prm-l-brown": "#EFECCA",
        "prm-black": "#00070C",
      },

      backgroundImage: {
        navRadialGradient:
          "radial-gradient(100% 100% at 0% 0%, #FFF8EF 0%, rgba(255, 248, 239, 0) 100%)",
        servicesGradient:
          "linear-gradient(180deg, #F8F3F0 0%, #FFFAF3 48.97%, #FFFEFC 100%)",
        cardBg: "url('/man-swift.png')",
        // cardBg: "url('./src/assets/images/man-swift.png')",
      },
    },
  },
  plugins: [],
};
