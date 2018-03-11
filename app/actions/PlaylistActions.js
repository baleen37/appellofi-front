import ActionTypes from '../constants/ActionTypes';

export const setPlaylist = playlist => ({
  type: ActionTypes.ADD_PLAYLIST,
  playlist,
});
