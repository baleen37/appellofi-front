import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPlaylist } from '../selectors/PlaylistSelectors';
import Player from '../components/Player';


const PlayerContainer = (props) => {
  const { tracks } = props;
  return tracks ? <Player {...props} /> : null;
};

PlayerContainer.propTypes = {
  tracks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  tracks: getPlaylist(state),
});
export default connect(mapStateToProps)(PlayerContainer);

