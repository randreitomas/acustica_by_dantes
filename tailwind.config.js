/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mustard: { DEFAULT: '#C69A3D', light: '#D9B25F' },
        terracotta: { DEFAULT: '#B5602E', dark: '#9A4F26' },
        maroon: { DEFAULT: '#6E1F1F', dark: '#4E1414' },
        espresso: { DEFAULT: '#2E2118', soft: '#3A2A1E' },
        cream: { DEFAULT: '#F5EEDD', dark: '#EDE1C9' },
        olive: '#6B6B3A',
        rust: '#A6432C',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        soft: '0 2px 6px rgba(46, 33, 24, 0.08)',
        card: '0 4px 12px rgba(46, 33, 24, 0.12)',
        lift: '0 8px 20px rgba(46, 33, 24, 0.18)',
      },
    },
  },
  plugins: [],
}
