const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
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
