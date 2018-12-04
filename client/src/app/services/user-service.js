import uuidv4 from 'uuid/v4';
import axios from 'axios';
import store from '../../redux/store';
import { updateUserInfo, updateStoreData, updateStoreItems } from '../../redux/actions';

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
    axios.post('/users/new', userObj)
    .then(resp => {      
      if(resp.data.statusCode === 200) {        
        store.dispatch(updateUserInfo(userObj));
        store.dispatch(updateStoreData(storeObj));
        resolve({ registration: true, data: resp.data, user: userObj });
      } else {
        reject({ registration: false, data: resp.data });
      }
    });
  })
}

export const loginUser = userEmail => {
  return new Promise((resolve, reject) => {
    axios.post('users/login', {email: userEmail})
    .then(resp => {
      let data = resp.data;
      if(resp.status === 200) {
        store.dispatch(updateStoreData(data[0]));
        store.dispatch(updateStoreItems(data[1]));
        store.dispatch(updateUserInfo(data[2]));      
        resolve({ login: true, data: resp.data });
      } else {
        reject({ login: false, data: resp.data });
      }
    })
  })
}