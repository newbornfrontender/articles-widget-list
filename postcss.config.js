module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 1,
      autoprefixer: env === 'development' ? false : {},
    },
  },
});
