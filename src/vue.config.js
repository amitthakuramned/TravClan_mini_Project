module.exports = {
  configureWebpack: {
    plugins: [new MyAwesomeWebpackPlugin()],
  },
};
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {},
      },
    },
  },
};
