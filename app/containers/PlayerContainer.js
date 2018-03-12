import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentTrack } from '../selectors/PlayerSelectors';
import { playSong } from '../actions/PlayerActions';
import Player from '../components/Player';


const PlayerContainer = (props) => {
  const { track } = props;
  return track ? <Player {...props} /> : null;
};

PlayerContainer.defaultProps = {
  track: null,
};

PlayerContainer.propTypes = {
  player: PropTypes.shape({}).isRequired,
  track: PropTypes.shape({}),
};

const mapStateToProps = (state) => {
  const { player } = state;
  return {
    player,
    track: getCurrentTrack(state),
  };
};
export default connect(
  mapStateToProps,
  {
    playSong,
  },
)(PlayerContainer);

