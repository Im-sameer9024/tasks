/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:["Poppins","sans-serif"],
        text:["Jost", "sans-serif"]
      },
      colors:{
        "darkBlue":"#00247D",
        "slate":"#FAF9F9"
      },
      backgroundImage: {
        'header': "url('./src/assets/header-img.jpg')",
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-1px)' },
          '40%, 80%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.3s linear infinite',
      },
    },
  },
  plugins: [],
}