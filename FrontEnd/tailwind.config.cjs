/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:'class',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}