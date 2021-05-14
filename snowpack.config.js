/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-postcss'],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2021',
  },
  devOptions: {
    port: 3000,
  },
};
