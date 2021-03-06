import PropTypes from 'prop-types';
import React from 'react';
import SC from '../../api/soundcloud';
import * as PlayerActions from '../../actions/PlayerActions';

const propTypes = {
  track: PropTypes.shape({}),
  dispatch: PropTypes.func.isRequired,
};

export const audio = (InnerComponent) => {
  class AudioComponent extends React.Component {
    constructor(props) {
      super(props);

      this.handlePlay = this.handlePlay.bind(this);
      this.handlePause = this.handlePause.bind(this);
      this.handleFinish = this.handleFinish.bind(this);
      this.handleAudioError = this.handleAudioError.bind(this);
      this.handleNoStreams = this.handleNoStreams.bind(this);
      this.handleNoProtocol = this.handleNoProtocol.bind(this);
      this.handleNoConnection = this.handleNoConnection.bind(this);
    }

    async componentDidMount() {
      this.play();
    }

    componentDidUpdate(prevProps) {
      const {track} = this.props;
      if (track.id !== prevProps.track.id) {
        this.play();
      }
    }

    async play() {
      const {track} = this.props;

      if (!track) {
        return;
      }

      const player = await SC.stream(track.id);
      player.on('play', this.handlePlay);
      player.on('pause', this.handlePause);
      player.on('finish', this.handleFinish);
      player.on('audio_error', this.handleAudioError);
      player.on('no_streams', this.handleNoStreams);
      player.on('no_protocol', this.handleNoProtocol);
      player.on('no_connection', this.handleNoConnection);
      player.play();
    }

    handlePlay() {
      const {dispatch} = this.props;
      dispatch(PlayerActions.onPlay());
    }

    handlePause() {
      const {dispatch} = this.props;
      dispatch(PlayerActions.onPause());
    }

    handleFinish() {
      const {dispatch} = this.props;
      dispatch(PlayerActions.onPlayNextSong());
    }

    handleAudioError() {
      this.play();
    }

    handleNoStreams() {
      this.play();
    }

    handleNoProtocol() {
      this.play();
    }

    handleNoConnection() {
      this.play();
    }

    render() {
      return (
        <div>
          <InnerComponent/>
        </div>
      );
    }
  }

  AudioComponent.defaultProps = {
    track: null,
  };
  AudioComponent.propTypes = propTypes;

  return AudioComponent;
};

export default audio;
