/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#F7F7F7',
        secondary: '#282828',
        btnBlue: '#0147FF',
      },
      fontFamily: {
        robotoFlex: ['Roboto Flex', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
    screens: {
      xs: '400px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
