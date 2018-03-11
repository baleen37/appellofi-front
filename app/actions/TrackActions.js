import types from '../constants/ActionTypes';
import soundcloud from '../api/soundcloud';
import { setPlaylist } from './PlaylistActions';
import { shuffle } from '../utils/util';

const fetchTracksSuccess = tracks => ({
  type: types.RECEIVE_TRACKS,
  entities: {
    tracks: tracks.reduce((obj, track) => {
      obj[track.id] = track;
      return obj;
    }, {}),
  },
});

export const fetchTracks = userId => async (dispatch) => {
  const tracks = await soundcloud.fetchTracksOfUser(userId);
  dispatch(fetchTracksSuccess(tracks));

  const playlist = shuffle(tracks.map(track => track.id));
  dispatch(setPlaylist(playlist));
};
