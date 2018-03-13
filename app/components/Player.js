import React from 'react';
import audio from './audio';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<span />);
  }
}

Player.propTypes = {
};

export default audio(Player);
