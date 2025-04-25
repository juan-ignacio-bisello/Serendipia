const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      'Fuchsia': '#e843c3',
      'Lime': '#9be13c',
      'Gray': '#bfbfbf',
      'White': '#f5f5f5',
      'Pinck': '#fda4e3',
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}

