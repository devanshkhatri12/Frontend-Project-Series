/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "480px",
      md: "740px",
      lg: "1080px",
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        SecondaryColor: '#FFCC00',
        ParagraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      keyframes: {
        moveY: {
          "50%": {transform: 'translateY(-1rem)'}
        },
        moveX: {
          "50%": {transform: 'translateX(-1rem)'}
        }
      },
      animation: {
        'movingY': 'moveY 2s linear infinite',
        'movingX': 'moveX 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}










