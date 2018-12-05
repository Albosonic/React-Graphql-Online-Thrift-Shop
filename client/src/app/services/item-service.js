import axios from 'axios';
import { updateStoreItems } from '../../redux/actions';
import store from '../../redux/store';

export const saveNewItem = item => {
  axios.post('/item/new', item)
  .then(resp => {
    console.log(resp)
    store.dispatch(updateStoreItems(resp.data));
    console.log('state :==>', store.getState().items)
  })
}