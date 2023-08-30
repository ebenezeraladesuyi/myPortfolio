/** @type {import('tailwindcss').Config} */
// import peop from "./src/assets/Jpegs/opti1.jpg"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        people : 'url("./src/assets/Jpegs/opti3.jpg")'
      },
      colors:{
        gColor : '#7562E0',
        gHover : '#120845'
      },
      fontFamily:{
        gFont : ['"Josefin Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
}