/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F4FF',
        secundary: '#7664E4',
        extra: '#D0D0D4',
      }
    },
  },
  plugins: [],
}