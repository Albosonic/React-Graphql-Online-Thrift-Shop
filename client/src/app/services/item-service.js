import axios from 'axios';
import { updateStoreItems } from '../../redux/actions';
import store from '../../redux/store';

export const saveNewItem = item => {
  axios.post('/item/new', item)
  .then(resp => {
    store.dispatch(updateStoreItems(resp.data));
  })
}

export const persistItemEdit = item => {
  axios.post('/item/edit', item)
  .then(resp => {
    store.dispatch(updateStoreItems(resp.data));
  })
}