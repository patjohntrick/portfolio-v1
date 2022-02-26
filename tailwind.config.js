module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      pro: ["Source Sans Pro", "sans-serif"],
    },
    screens: {
      xs: "425px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        toptobot: "toptobot .5s",
        bottotop: "bottotop .5s",
      },
      keyframes: {
        toptobot: {
          "0%": { transform: "translateY(-70%)" },
          "100%": { transform: "translateY(0) " },
        },
        bottotop: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-70%)" },
        },
      },
    },
  },
  plugins: [],
};
