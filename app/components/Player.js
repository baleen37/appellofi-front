import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ tracks }) => {
  console.log('tracks', tracks[0].id);
  return (<h1>{tracks[0].id}</h1>);
};

Player.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default Player;
