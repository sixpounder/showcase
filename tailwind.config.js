module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', 'sans-serif'],
        'mono': ['VT323', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
