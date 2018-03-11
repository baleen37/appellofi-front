import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import reducers from './reducers';
import { fetchTracks } from './actions';


const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
store.dispatch(fetchTracks('appellofi'));

const MOUNT_NODE = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , MOUNT_NODE,
);
