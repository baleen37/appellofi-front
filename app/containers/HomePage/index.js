import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PlayerView from '../../components/PlayerView';
import { getTracks } from '../../reducers/tracks';


const HomePage = ({ tracks }) => {
  return (<PlayerView url="" />);
};

HomePage.propTypes = {
  tracks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  tracks: getTracks(state.tracks),
});
export default connect(mapStateToProps)(HomePage);

