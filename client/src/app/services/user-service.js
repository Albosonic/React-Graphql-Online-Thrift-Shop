import uuidv4 from 'uuid/v4';
import axios from 'axios';
import store from '../../redux/store';
import { updateUserInfo, updateStoreData } from '../../redux/actions';

export const createNewUser = user => {
  var userObj = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    email: user.email,
    password: user.password
  }
  var storeObj = {
    storeId: userObj.id,
    sizes: null,
    storeName: null,
    stars: null,    
  }

  return new Promise((resolve, reject) => {
    axios.post('/users/new', userObj).then(resp => {
      //eventually refactor to use resp to update the redux store.
      if(resp.data.statusCode === 200) {
        console.log('wtf')
        store.dispatch(updateUserInfo(userObj));
        store.dispatch(updateStoreData(storeObj));
        resolve({ registration: true, data: resp.data, user: userObj });
      } else {
        reject({ registration: false, data: resp.data });
      }
    });
  })
}