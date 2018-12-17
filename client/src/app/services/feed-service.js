import axios from 'axios';

import store from '../../redux/store';
import { updateAllStores } from '../../redux/actions';


export const fetchFeed = ()=> {
  axios.get('/stores/feed', {
    params: {range: 50}
  })
  .then(resp => {
    store.dispatch(updateAllStores(resp.data))
  }, err => reject(err));
}