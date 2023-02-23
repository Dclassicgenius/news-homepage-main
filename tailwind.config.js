/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        ff: ['"Inter"', "sans-serif"],
      },

      colors: {
        primary: {
          900: "hsl(35, 77%, 62%)",
          800: "hsl(5, 85%, 63%)",
        },

        neutral: {
          100: "hsl(36, 100%, 99%)",
          500: "hsl(233, 8%, 79%)",
          700: "hsl(236, 13%, 42%)",
          900: "hsl(240, 100%, 5%)",
        },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },

  plugins: [],
};
