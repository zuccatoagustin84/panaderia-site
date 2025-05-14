/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f6f3',
          100: '#f1ebe3',
          200: '#e3d5c8',
          300: '#d2b9a3',
          400: '#bc9878',
          500: '#a97f5d',
          600: '#8B4513', // primary brown
          700: '#7b4d3b',
          800: '#663f33',
          900: '#57352d',
          950: '#301c18',
        },
        secondary: {
          50: '#fdfbe8',
          100: '#fbf8d2',
          200: '#f7efa6',
          300: '#f2e270',
          400: '#ebd344',
          500: '#DAA520', // accent gold
          600: '#bb8412',
          700: '#9c6312',
          800: '#7e4d15',
          900: '#694017',
          950: '#3b2109',
        },
        cream: '#FFF8E1',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
      },
    },
  },
  plugins: [],
};