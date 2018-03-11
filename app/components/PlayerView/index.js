import React from 'react';
import PropTypes from 'prop-types';

const PlayerView = ({ url }) => (
  <img src={url} />
);

PlayerView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PlayerView;
