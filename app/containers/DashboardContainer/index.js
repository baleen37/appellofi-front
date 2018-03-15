import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlayerContainer from '../PlayerContainer/index';
import Dashboard from '../../components/Dashboard/index';
import { getCurrentTrack } from '../../selectors/PlayerSelectors';

export const DashboardContainer = props => <Dashboard {...props} />;

PlayerContainer.propTypes = {
  track: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  track: getCurrentTrack(state),
});

export default connect(mapStateToProps)(DashboardContainer);
