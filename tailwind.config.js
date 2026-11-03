/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0866F5', // Electric Blue from reference
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#071D49', // Deep Navy from reference
          950: '#040f26',
        },
        navy: {
          DEFAULT: '#071D49',
          dark: '#051433',
          light: '#0c275e',
        },
        electric: '#0866F5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 10px 35px rgba(8, 102, 245, 0.07)',
        'glass-hover': '0 16px 45px rgba(8, 102, 245, 0.14)',
        'card-lift': '0 20px 45px -10px rgba(7, 29, 73, 0.08)',
        'blue-glow': '0 0 35px rgba(8, 102, 245, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
