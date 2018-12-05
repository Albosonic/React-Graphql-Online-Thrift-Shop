import axios from 'axios';

import store from '../../redux/store';

export const fetchFeed = ()=> {
  axios.get('/stores/feed', { 
    params: {range: 50}
  })
  .then(resp => {
    console.log('resp', resp);
  })
}