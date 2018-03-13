import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import { fetchTracks } from './actions/TrackActions';
import configureStore from './store/configureStore';
import styles from './styles/common.scss';


const store = configureStore({});
store.dispatch(fetchTracks('appellofi'));

const MOUNT_NODE = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App styles={styles} />
  </Provider>
  , MOUNT_NODE,
);
