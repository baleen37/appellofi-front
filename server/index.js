const path = require('path');
const { logger } = require('./logger');
const express = require('express');

const app = express();

const port = process.env.PORT || '3000';
const host = process.env.HORT || 'localhost';

const isDev = process.env.NODE_ENV !== 'production';

require('./middlewares/front-end-middlewares')(app, {
  outputPath: `${process.cwd()}/dist`,
});

app.get('*', (req, res) => res.sendFile(path.resolve(`${process.cwd()}/app`, 'index.html')));

app.listen(port, host, (err) => {
  logger.log(`express start ${host}:${port}`);
  if (err != null) {
    logger.error(err);
  }
});
