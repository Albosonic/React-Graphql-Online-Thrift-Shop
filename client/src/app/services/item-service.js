import axios from 'axios';
import { updateStoreItems } from '../../redux/actions';
import store from '../../redux/store';

export const saveNewItem = item => {
  axios.post('/item/new', item)
  .then(resp => {
    // store.dispatch(updateStoreItems(JSON.parse(resp.data.body)))
    console.log('new Item', JSON.parse(resp.data.body));
    //save to redux store.
  })
}