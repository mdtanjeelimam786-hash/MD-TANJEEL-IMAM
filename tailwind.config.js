/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { bluebrand: '#0866F5', navy: '#071D49' }, fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Poppins', 'sans-serif'] } } },
  plugins: []
}