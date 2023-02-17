/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sofia Sans Semi Condensed"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
