import React from 'react';
import PropTypes from 'prop-types';
import audio from './audio';

class Player extends React.Component {
  constructor(props) {
    super(props);
    console.log('player', props);
  }

  render() {
    return (<h1 />);
  }
}

Player.propTypes = {
};

export default audio(Player);
