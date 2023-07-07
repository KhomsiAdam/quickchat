/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#F7FCFF',
          100: '#E3F6FE',
          200: '#BBE9FD',
          300: '#93DCFC',
          400: '#6CCFFB',
          500: '#44C2FA',
          600: '#0DB0F9',
          700: '#058CC8',
          800: '#046692',
          900: '#02405B',
          950: '#022D40',
        },
        'secondary': {
          50: '#F5EBFE',
          100: '#EBD7FD',
          200: '#D7B0FB',
          300: '#C38AF9',
          400: '#B063F7',
          500: '#9C3CF5',
          600: '#810CED',
          700: '#6409B7',
          800: '#470782',
          900: '#2A044D',
          950: '#1B0332',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class'
}
