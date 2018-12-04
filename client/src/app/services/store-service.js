import axios from 'axios';
import store from '../../redux/store';
import { updateStoreName } from '../../redux/actions';

export const persistStoreName = nameAndId => {  
  console.log('==whoo', nameAndId)
  return new Promise((resolve, reject) => {
    axios.post('/stores/update/name', nameAndId)
    .then(resp => {      
      if(resp.status === 200) {
        store.dispatch(updateStoreName(resp.data.storeName));
        resolve({ saved: true, data: resp.data });
      } else {
        reject({ saved: false, data: resp.data });
      }
    });
  })
}