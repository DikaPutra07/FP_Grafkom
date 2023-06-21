/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ], // remove unused styles in production
    theme: {
      extend: {
        fontFamily: {
          roboto : ['Roboto Slab'],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
