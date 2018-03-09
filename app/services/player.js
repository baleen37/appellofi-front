import SC from 'soundcloud';
import Authentication from '../constatns/authentication';

SC.initialize({
  client_id: Authentication,
});


export default {
  stream: trackId => SC.stream(`/tracks/${trackId}`),
};

