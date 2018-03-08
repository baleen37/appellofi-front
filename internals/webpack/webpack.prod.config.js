const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = webpackBaseConfig({
  entry: [
    path.join(process.cwd(), './app/app.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins,
});
