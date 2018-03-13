import ActionTypes from '../constants/ActionTypes';


const initialState = {
  playlist: [],
  playIndex: 0,
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PLAY_SONG:
      return {
        ...state,
        playlist: action.playlist,
        playIndex: action.playIndex,
      };
    case ActionTypes.PLAY_NEXT_SONG: {
      let index = state.playIndex + 1;
      if (index > state.playlist.size) {
        index = 0;
      }
      return {
        ...state,
        playIndex: index,
      };
    }
    default:
      return state;
  }
};
export default player;
