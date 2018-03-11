import types from './ActionTypes';
import soundcloud from '../api/soundcloud';

const receiveTracks = tracks => ({
  type: types.RECEIVE_TRACKS,
  tracks,
});

export const fetchTracks = userId => (dispatch) => {
  soundcloud.fetchFavoritesTracks(userId).then((tracks) => {
    dispatch(receiveTracks(tracks));
  });
};
