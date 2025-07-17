/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extreme : '1500'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      screens: {

        '3xl': '1920px',
        '4xl': '2000px',
      },
       fontSize: {
        '6xl': '4rem',    
        '7xl': '5rem',     
        '8xl': '6rem',     
        '9xl': '8rem',     
        '10xl': '10rem',   
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}