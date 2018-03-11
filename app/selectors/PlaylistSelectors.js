import { getTrackById } from './EntitySelectors';

export const getPlaylist = state =>
  state.playlist.playlist
    .map(id => getTrackById(state, id));
