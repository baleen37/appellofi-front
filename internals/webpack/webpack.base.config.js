const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin()
];

module.exports = (options) => ({
    entry: options.entry,
    output: Object.assign({
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/'
    }, options.output),
    plugins: plugins.concat(options.plugins),
});
