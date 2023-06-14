/** @type {import('tailwindcss').Config} */
import img from './src/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'remedioBG': "url('./src/drugscareremedio.jpeg')",
      }
    },
  },
  plugins: [],
}