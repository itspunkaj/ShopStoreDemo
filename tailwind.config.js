/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        'shelfHeight' : '300px',
        'productgap' : '50px',
        'shelfWidth' : '2rem',
        '1/4' : '25%'
      },
      boxShadow: {
        '3xl': '0 2rem 40px 0 black;',
      }
    },
  },
  options: {
    safelist: [
      /^col-span-/ // Ensure Tailwind doesn't purge `col-span-*` classes
    ],
  },
  plugins: [],
}