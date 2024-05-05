/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FCDC2A',
        'custom-beige': '#FFF8DC',
      },
    },
  },
  plugins: [],
}
