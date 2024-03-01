/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#000',
        main: {
          light: '#37E617',
          default: '#27D507',
          dark: '#17B307',
        },
        gray: '#CCCCCC'
      }
    },
  },
  plugins: [],
}

