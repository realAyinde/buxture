module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '639px'},
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'black': '#000000',
        'color1': '#184a2c',
        'color2': '#3ebfdf',
        'color3': '#76b536',
      },
    },
  },
  plugins: [],
}
