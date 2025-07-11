/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kalam: ['kalam', 'cursive'],
      },
      rotate: {
        '5': '5deg',
        '-8': '-8deg',
        '10': '10deg',
      },
    },
  },
  plugins: [],
}