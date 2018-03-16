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
  const tracks = [];

  // eslint-disable-next-line no-constant-condition
  let page = 1;
  const limit = 200;
  while (true) {
    const response = await soundcloud.fetchTracksOfUser(userId, { limit: 200, offset: (page - 1) * limit });
    page += 1;
    if (response == null || response.length < 1) {
      break;
    }
    // limited request count
    if (page > 4) {
      break;
    }
    tracks.push(response);
  }

  dispatch(fetchTracksSuccess(tracks));

  const playlist = shuffle(tracks.map(track => track.id));
  dispatch(playSong(playlist, 0));
};
