import ActionTypes from '../constants/ActionTypes';


const initialState = {
  playlist: [],
  playIndex: null,
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_SONG:
      return {
        ...state,
        playlist: action.playlist,
        playIndex: action.playIndex,
      };
    default:
      return state;
  }
};
export default player;
