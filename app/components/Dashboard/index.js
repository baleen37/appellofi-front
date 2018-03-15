import React from 'react';
import PropTypes from 'prop-types';
import TrackViewer from '../TrackViewer/index';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <TrackViewer track={this.props.track} />
      </div>
    );
  }
}

Dashboard.defaultProps = {
  track: null,
};

Dashboard.propTypes = {
  track: PropTypes.shape({}),
};

export default Dashboard;
