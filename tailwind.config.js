/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#250905',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}

