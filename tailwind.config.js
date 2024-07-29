/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#F22E52',
        'primary-teal': '#47BEBA',
        'secondary-dark-blue': '#160647',
        'secondary-midnight': '#322853',
        'gray-dark': '#6C6C6C',
        'gray-medium': '#818181',
        'gray-light': '#7A8994',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      biryani: ['Biryani', 'sans-serif'],
    },
  },
  plugins: [],
}

