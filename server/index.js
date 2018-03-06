const {logger} = require('./logger');
const express = require('express');

const app = express();

const port = process.env.PORT || '3000';
const host = process.env.HORT || 'localhost';

const isDev = process.env.NODE_ENV !== 'production';

app.listen(port, host, (err) => {
    logger.log(`express start ${host}:${port}`);
    if (err != null) {
        logger.error(err)
    }
});
