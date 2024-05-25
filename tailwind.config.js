/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black :"#121212",
        red:"#FF204E",
        foot:"#00224D",
        green:"#03C988",
        pink:"#F73D93",


      },
    },
  },
  plugins: [require('daisyui'),],
}

