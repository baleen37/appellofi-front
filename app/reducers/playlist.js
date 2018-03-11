import ActionTypes from '../constants/ActionTypes';

const initialState = {
  playlist: [],
};

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
};
export default playlist;
