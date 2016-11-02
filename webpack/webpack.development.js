var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';

config.entry.unshift(
  'eventsource-polyfill',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
);
config.output.hot = true;
config.plugins.unshift(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
