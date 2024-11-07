/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: "#3E933E",
        "primary-acccent": "#1B3D1B",
        title: "#212121",
        gray: {
          800: "#424242",
          700: "#616161",
          600: "#757575",
        },
      }
    },
  },
  plugins: [],
}
