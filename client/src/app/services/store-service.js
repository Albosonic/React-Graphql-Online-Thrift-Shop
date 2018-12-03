import axios from 'axios';
import store from '../../redux/store';

export const udpateMyStore = storeObj => {  
  console.log(storeObj)
  return new Promise((resolve, reject) => {
    axios.post('/stores', storeObj).then(resp => {
      if(resp.data.statusCode === 200) {
        resolve({ saved: true, data: resp.data });
      } else {
        reject({ saved: false, data: resp.data });
      }
    });
  })
}