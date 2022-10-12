/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /** My computer doesn't have the character Lato */
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        'xs': '350px',
        '3xl': '1920px'
      },
      colors: {
        black: '#2D2D2D',
        primary: {
          100: '#9E9E9E',
          300: '#6B6B6B',
          500: '#4A4A4A',
          700: '#2D2D2D',
          900: '#000000'
        },
        secondary: {
          100: '#F9F9F9',
          300: '#F2F2F2',
          500: '#E7E7E7',
          700: '#CCCCCC',
          900: '#AEAEAE'
        }
      },
    },
    plugins: [],
  }
}