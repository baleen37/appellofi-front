import { combineReducers } from 'redux';
import ActionTypes from '../actions/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_TRACKS:
      return {
        ...state,
        ...action.tracks.reduce((obj, track) => {
          obj[track.id] = track;
          return obj;
        }, {}),
      };
  }
  return state;
};

export const getTracks = (state) => {
  return state.byId;
};

export const getTrack = (state, id) => {
  return state.byId[id];
};

export default combineReducers({
  byId,
});
