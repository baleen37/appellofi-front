const path = require('path');
const webpack = require('webpack');

module.exports = (app, options) => {
    let isProduction = process.env.NODE_ENV === 'production';

    if (isProduction) {
    } else {
        const webpackConfig = require('../../internals/webpack/webpack.dev.config');
        const addDevMiddlewares = require('./dev-middlewares');
        addDevMiddlewares(app, webpackConfig);
    }

    return app
};
