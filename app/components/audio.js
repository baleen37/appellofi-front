import PropTypes from 'prop-types';
import React from 'react';
import SC from '../api/soundcloud';

const propTypes = {
  track: PropTypes.shape({}),
};

const audio = (InnerComponent) => {
  class AudioComponent extends React.Component {
    componentDidMount() {
      console.log('componentDidMount');
      const {track} = this.props;

      if (track) {
        SC.stream(track.id)
          .then((player) => {
            player.play().then((result) => {
              console.log(result);
            }, (error) => {
              console.log(error);
            });
          });
      }
    }

    render() {
      return (
        <div>
          <div>
            <h2>audio</h2>
            <p>{this.props.track.user.username} - {this.props.track.title}</p>
          </div>
          <InnerComponent/>
        </div>
      );
    }
  }

  AudioComponent.propTypes = propTypes;

  return AudioComponent;
};

export default audio;
