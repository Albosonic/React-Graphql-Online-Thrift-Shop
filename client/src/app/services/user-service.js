import uuidv4 from 'uuid/v4';
import axios from 'axios';
import store from '../../redux/store';
import { updateUserInfo } from '../../redux/actions';

export const createNewUser = user => {    
  let userObj = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    email: user.email,
    password: user.password
  }
  return new Promise((resolve, reject) => {
    axios.post('/users', userObj).then(resp => {    
      if(resp.data.statusCode === 200) {
        store.dispatch(updateUserInfo(userObj));
        resolve({ registration: true, data: resp.data });
      } else {      
        reject({ registration: false, data: resp.data });
      }
    });
  })
}