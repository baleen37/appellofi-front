import { getTrackById } from './EntitySelectors';

export const getPlaylist = state =>
  state.player.playlist
    .map(id => getTrackById(state, id));

export const getCurrentTrack = (state) => {
  const trackId = state.player.playlist[state.player.playIndex];
  const track = getTrackById(state, trackId);
  return track || null;
};
