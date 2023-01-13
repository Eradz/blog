/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue :'#2B2E3c',
        black: '#101119',
        plus_red: '#FB676B',
        icon_blue: "#1A48C4",
        terms: '#737E9D', 
      }
    },
  },
  plugins: [],
}
