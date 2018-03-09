import React from 'react';

export default class PlayerView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: props.url };
  }

  render() {
    return (
      <img src={this.state.url} />
    );
  }
}
