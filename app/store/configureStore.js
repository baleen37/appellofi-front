import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducers, initialState);
}
