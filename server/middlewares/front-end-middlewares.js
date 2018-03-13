/* eslint-disable global-require */
module.exports = (app, options) => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.config');
    const addDevMiddlewares = require('./dev-middlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
