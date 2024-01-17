/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smallest: "320px",
        lg_pro: "800px"
      }
    },
  },
  plugins: [],
}

