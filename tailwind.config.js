/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/daisyui/dist/**/*.js', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
}
