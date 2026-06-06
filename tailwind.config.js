/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#cc1f1f',
          redDark: '#a81919',
          ink: '#1a1a1a',
          soft: '#f7f7f7',
          night: '#111111',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
        display: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 1px 0 rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
