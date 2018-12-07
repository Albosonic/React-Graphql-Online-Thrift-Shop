import axios from 'axios';

import store from '../../redux/store';
import { updateStoreFeed } from '../../redux/actions';

export const fetchFeed = ()=> {
  return new Promise((resolve, reject) => {
    axios.get('/stores/feed', { 
      params: {range: 50}
    })
    .then(resp => { //TODO: finish this reducer update
      // console.log('===', resp.data)
      resolve(resp);
      // store.dispatch(updateStoreFeed())
    }, err => reject(err));
  })
}