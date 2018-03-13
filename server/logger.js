const logger = {
  log: (message) => {
    console.log(message);
  },
  error: (err) => {
    console.error(err);
  },
};

module.exports = {
  logger,
};

