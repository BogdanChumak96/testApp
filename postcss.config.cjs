import tailwindcss from 'tailwindcss'

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
};
