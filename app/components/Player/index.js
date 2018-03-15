import React from 'react';
import Audio from '../Audio/index';

export class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<span />);
  }
}

Player.propTypes = {
};

export default Audio(Player);
