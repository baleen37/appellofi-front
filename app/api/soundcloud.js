import SC from 'soundcloud';
import Authentication from '../constants/authentication';

SC.initialize({
  client_id: Authentication.SOUND_CLOUD_CLIENT_ID,
  redirect_uri: 'http://example.com/callback',
});


export default {
  stream: trackId => SC.stream(`/tracks/${trackId}`),
  fetchTracksOfUser: (userId, options = { offset: 0, limit: 200 }) => SC.get(`/users/${userId}/favorites?offset=${options.offset}&limit=${options.limit}`),
};

