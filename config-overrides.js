const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins = [
    ...config.plugins,
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allAssets',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        if (/\.jpe?g$/.test(entry)) return 'image';
        return 'script';
      }
    }),
  ];
  console.log(config);
  return config;
}
