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
          900: "hsl(var(--clr-primary-900))",
          800: "hsl(var(--clr-primary-800))",
        },

        neutral: {
          100: "hsl(var(--clr-neutral-100))",
          500: "hsl(var(--clr-neutral-500))",
          700: "hsl(var(--clr-neutral-700))",
          900: "hsl(var(--clr-neutral-900))",
        },
      },

      backgroundImage: {
        "device-md": "url('/build/img/image-web-3-mobile.jpg')",
        "device-sm": "url('/build/img/image-web-3-desktop.jpg')",
      },
    },
  },

  plugins: [],
};
