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
        rose: {
          light: '#FFB6C1',
          default: '#FF69B4',
          dark: '#C71585',
        }
      }
    },
  },
  plugins: [],
}

