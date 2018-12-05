import axios from 'axios';

import store from '../../redux/store';

export const fetchFeed = ()=> {
  return new Promise((resolve, reject) => {
    axios.get('/stores/feed', { 
      params: {range: 50}
    })
    .then(resp => {
      resolve(resp);
    }, err => reject(err));
  })
}