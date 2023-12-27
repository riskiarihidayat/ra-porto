/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': `'Rubik', sans-serif`,
        'syne': `'Syne', sans-serif`,
        'open': `'Open Sans', sans-serif`,
      },
      colors: {
        'gray': {
          100: '#F9FAFB',
          200: '#F4F4F6',
          300: '#E5E6EB',
          400: '#D3D5DA',
          500: '#9EA3AE',
          600: '#6C727F',
          700: '#4D5461',
          800: '#394150',
          900: '#212936',
          950: '#0B0A0F',
        },
        'primary': '#FF9143',
        'secondary-1': '#1A1A1A',
        'secondary-2': '#262A2C',
        'secondary-3': '#696969',
        'light-gray': '#949494',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}