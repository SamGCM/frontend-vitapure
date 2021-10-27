module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary: 'var(--colors-primary)',
      white: 'var(--colors-white)',
      garyLight: 'var(--colors-grayLight)',
      black: 'var(--colors-black)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}