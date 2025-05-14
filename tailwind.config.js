/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f8',
          100: '#fcefef',
          200: '#f8d9d9',
          300: '#f2b8b8',
          400: '#e88e8e',
          500: '#d85f5f',
          600: '#8B2635', // primary burgundy
          700: '#7a1f2e',
          800: '#661b27',
          900: '#571a24',
          950: '#2d0d12',
        },
        secondary: {
          50: '#fbf9f2',
          100: '#f6f0e0',
          200: '#ede2c3',
          300: '#e2ce9c',
          400: '#d4b571',
          500: '#C4A484', // warm beige
          600: '#a88860',
          700: '#8c6c4d',
          800: '#735842',
          900: '#614a3a',
          950: '#332520',
        },
        cream: '#F5E6D3',
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