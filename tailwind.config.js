/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arun_orange: '#f48915',
        dark_Gray: ' #464D53',
        lightgray: '#D9D9D9',
        arun_gray: '#9c9c9c',
        orange: '#f48915',
        darkGrey: '#464D53',
        caloryCard: '#656565',
        planCard: 'linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)',
        appColor:  '#3c3f45',
      }
    },
  },
  plugins: [],
}