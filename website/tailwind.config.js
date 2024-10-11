/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alegreya: ['"Alegreya"', 'Alegreya'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}