import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import backgroundImage from '../../images/bg.gif';

export const TrackViewer = (props) => {
  const { track } = props;
  if (!track) {
    return (<div />);
  }
  return (<div className={styles.trackViewer}>
    <p>{track.user.username} - {track.title}</p>
    <img src={backgroundImage} />
  </div>);
};

TrackViewer.propTypes = {
  track: PropTypes.shape({}).isRequired,
};

export default TrackViewer;

