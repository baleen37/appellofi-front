import ActionTypes from '../constants/ActionTypes';

export const playSong = (playlist, playIndex) => ({
  type: ActionTypes.PLAY_SONG,
  playlist,
  playIndex,
});

