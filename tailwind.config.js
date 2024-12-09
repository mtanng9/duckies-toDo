/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html", 
     "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    colors: {
      'eggYellow': '#ffc054',
      'brightYellow': 'ffde59',
      'mutedPink': 'fac1c1',
      'paleRed': 'ff8461', 
      'grey':'e6e6e6'
    },
    extend: {},
  },
  plugins: [],
}

