const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Configx} */

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#07593D',
        lemonGreen: '#88be41',
        secondaryColor: '#fff',
        sidebarGreen: '#244b3f',
        limeGreen: '#6A8E3A',
        orange: '#976625',
        skyGreen: '#35c499',
        brightGray: '#EEEEEE',
        flashWhite: '#F1F1F1',
        silver: '#cccccc',
        wildSand: '#F6F6F6',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'monospace'],
    },
    screens: {
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
  },
  plugins: [],
});
