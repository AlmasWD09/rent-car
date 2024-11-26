/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#2572d3', 
        'secondery':'#f87171',
        'primaryGray' : '#fef2f2', 
        'iconEdditColor':'green',
        'iconDelettColor':'red',
      },
      fontFamily: {
        'BebasNeue': "'Bebas Neue', 'sans-serif'",
        'Poppins': "'Poppins', 'sans-serif'",
      },
      backgroundImage: {
        'hero-bg': "url('/Public/banner.jpg')",
        'erro': "url('/Public/error.jpg')",
      }
    },
  },
  plugins: [],
}