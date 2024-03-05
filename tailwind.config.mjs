/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
});
