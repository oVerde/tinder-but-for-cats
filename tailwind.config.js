/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
  content: [
    './*.{js,jsx,ts,tsx}',
    './screens/*.{js,jsx,ts,tsx}',
    './hooks/*.{js,jsx,ts,tsx}',
    './assets/*.{svg.js,jsx,ts,tsx}' ],
  theme: {
    extend: {},
  },
  plugins: [],
};
