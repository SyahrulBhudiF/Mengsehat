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
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': {
        'min': '1280px',
        'max': '1439px'
      },
      // => @media (min-width: 1280px) { ... }

      '2xl': {
        'min': '1440px',
        'max': '1500px'
      },
      // => @media (min-width: 1440px) { ... }

      'laptop2': {'raw': '(width: 1280px) and (height: 800px)'},
    }
  },
  plugins: [],
}
