/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
      'light': '#ECECEC',
      'depth-dark': '#454545',
      'depth-light': '#A7A7A7',
      'accent': '#DE1D1D',
      'dark': '#0E0E0E',
    },
     letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {},
  },
  plugins: [],
}

