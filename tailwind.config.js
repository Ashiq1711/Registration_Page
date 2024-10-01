/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right-bottom': '10px 10px 15px rgba(0, 0, 0, 0.3)', // Custom shadow
      },
    },
  },
  plugins: [],
}