const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
];

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  }, options.output),
  plugins: plugins.concat(options.plugins),
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  devtool: options.devtool,
});

