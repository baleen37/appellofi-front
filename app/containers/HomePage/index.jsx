import React, { Fragment } from 'react';
import PlayerView from '../../components/PlayerView';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const playerUrl = 'https://giphy.com/gifs/80s-1980s-anime-V5qXaUBISlbTa';
    this.state = {
      playerUrl,
    };
  }

  render() {
    return (
      <Fragment>
        <PlayerView url={this.state.playerUrl} />
      </Fragment>
    );
  }
}
