/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'sans-serif'],
        'Jost': ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

