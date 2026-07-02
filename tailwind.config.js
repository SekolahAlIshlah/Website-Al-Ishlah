/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./_site/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D683E',
          light: '#148752',
          dark: '#084b2c',
        },
        cream: '#FFFDF8',
        navy: {
          DEFAULT: '#1A1A3A',
          light: '#2A2A4E',
        },
        yellow: {
          DEFAULT: '#FFD166',
          light: '#FFE29A',
        },
        pink: {
          DEFAULT: '#FF6B9D',
          light: '#FF94B8',
        },
        blue: {
          DEFAULT: '#4A90E2',
          light: '#76ADF2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
