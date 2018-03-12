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

export const onPlayNextSongs = () => ({
  type: ActionTypes.PLAYER_NEXT_SONGS,
});

export const onPlayPrevSongs = () => ({
  type: ActionTypes.PLAYER_PREV_SONGS,
});
