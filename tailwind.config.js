module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fira Sans', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace']
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
