import { combineReducers } from 'redux';
import playlist from './playlist';
import entities from './entities';

const reducers = combineReducers({
  entities,
  playlist,
});

export default reducers;

