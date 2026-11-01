/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        surface: {
          light: '#ffffff',
          'light-subtle': '#f8fafc',
          dark: '#0c0a09',
          'dark-subtle': '#1c1917',
          'dark-card': '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'interactive': 'color, background-color, border-color, box-shadow, transform, opacity',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
