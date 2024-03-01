/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arapawa: '#274C5B',
        padua: '#7EB693',
        yellow: '#EFD372',
        disco: '#D4D4D4',
        doctor: '#F9F8F8',
        sugar: '#EFF6F1',
        city: '#525C60'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'yellowtail': ['Yellowtail', 'cursive']
      }
    },
  },
  plugins: [],
}

