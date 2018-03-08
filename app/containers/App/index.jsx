import React from 'react';
import { PlayerView } from '../../components/PlayerView/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const playerUrl = 'https://giphy.com/gifs/80s-1980s-anime-V5qXaUBISlbTa';
    this.state = {
      playerUrl,
    };
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <PlayerView
          url={this.state.playerUrl}
        />
      </div>
    );
  }
}

