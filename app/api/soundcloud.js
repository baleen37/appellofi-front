import SC from 'soundcloud';
import Authentication from '../constants/authentication';

SC.initialize({
  client_id: Authentication.SOUND_CLOUD_CLIENT_ID,
  redirect_uri: 'http://example.com/callback',
});


export default {
  stream: trackId => SC.stream(`/tracks/${trackId}`),
  fetchTracksOfUser: userId => SC.get(`/users/${userId}/favorites`),
};

