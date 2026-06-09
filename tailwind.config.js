/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f8f9ff',
        surface: '#ffffff',
        mist: '#eff4ff',
        panel: '#e5eeff',
        primary: '#006c49',
        emerald: '#10b981',
        ink: '#0b1c30',
        slate: '#545f73',
        line: '#d8e3fb',
        warning: '#f97316',
        danger: '#ba1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 35px rgba(11, 28, 48, 0.08)',
        glow: '0 18px 60px rgba(0, 108, 73, 0.18)',
      },
    },
  },
  plugins: [],
};
