/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'bebas-neue': ['Bebas Neue', 'sans-serif'],
      'public-sans': ['Public Sans', 'sans-serif'],
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': {
        'min': '1280px',
        'max': '1439px'
      },

      '2xl': {
        'min': '1440px',
        'max': '1500px'
      },

      'laptop2': {
        'raw': '(width: 1280px) and (height: 800px)'
      },
    }
  },
  plugins: [],
}
