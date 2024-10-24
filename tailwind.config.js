/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        'shelfHeight' : '250px',
        'productgap' : '50px',
        'shelfWidth' : '1.5rem',
      },
      boxShadow: {
        '3xl': '0 2rem 40px 0 black;',
      },
      colors : {
        'primaryYellow' : '#f9e207',
        'primaryBlue' : '#046cbb'
      }
    },
  },
  options: {},
  plugins: [],
}