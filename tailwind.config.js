/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#05070a',
        carbon: '#0e1117',
        slateglass: '#11161d',
        pearl: '#f5f1ea',
        champagne: '#d6b98c',
        amberglow: '#f4b860',
        azure: '#93d4ff',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(148, 197, 255, 0.18)',
        luxe: '0 30px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-fade':
          'linear-gradient(180deg, rgba(5,7,10,0.18) 0%, rgba(5,7,10,0.68) 62%, rgba(5,7,10,1) 100%)',
        'panel-dark':
          'radial-gradient(circle at top left, rgba(214,185,140,0.16), transparent 36%), linear-gradient(180deg, rgba(17,22,29,0.95), rgba(5,7,10,0.98))',
      },
    },
  },
  plugins: [],
};
