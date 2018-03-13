import types from '../constants/ActionTypes';
import soundcloud from '../api/soundcloud';
import { playSong } from './PlayerActions';
import { shuffle } from '../utils/common';

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
  dispatch(playSong(playlist, 0));
};
