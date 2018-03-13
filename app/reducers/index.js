import { combineReducers } from 'redux';
import player from './player';
import entities from './entities';

const reducers = combineReducers({
  entities,
  player,
});

export default reducers;

