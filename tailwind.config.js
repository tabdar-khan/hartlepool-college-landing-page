/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fef7f2',
          100: '#feeee5',
          200: '#fdd9cc',
          300: '#fbbfa8',
          400: '#f79d73',
          500: '#f97316',
          600: '#ea6610',
          700: '#c2530f',
          800: '#9a4313',
          900: '#7c3813',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};