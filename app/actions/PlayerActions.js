import ActionTypes from '../constants/ActionTypes';

export const playSong = (playlist, playIndex) => ({
  type: ActionTypes.PLAY_SONG,
  playlist,
  playIndex,
});

export const onPlay = () => ({
  type: ActionTypes.PLAYER_PLAY,
});

export const onPause = () => ({
  type: ActionTypes.PLAYER_PAUSE,
});

export const onPlayNextSong = () => ({
  type: ActionTypes.PLAY_NEXT_SONG,
});

export const playNextSong = () => async (dispatch) => {
  dispatch(onPlayNextSong());
};
