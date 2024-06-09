/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black :"#121212",
        blue:"#0052FF",
        red:"#FF204E",
        foot:"#00224D",
        green:"#03C988",
        pink:"#F73D93",
        darkblue:"#00008B",


      },
      fontFamily:{
        robot :[ "Roboto", 'sans-serif'],
        mont :[ "Montserrat", 'sans-serif'],
      }
    },
  },
  plugins: [require('daisyui'),flowbite.plugin()],
}

