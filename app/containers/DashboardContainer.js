import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerContainer from './PlayerContainer';
import Dashboard from '../components/Dashboard';
import { getCurrentTrack } from '../selectors/PlayerSelectors';

const DashboardContainer = props => <Dashboard {...props} />;

PlayerContainer.propTypes = {
  track: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  track: getCurrentTrack(state),
});

export default connect(mapStateToProps)(DashboardContainer);
