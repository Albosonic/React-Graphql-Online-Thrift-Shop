import axios from 'axios';

import store from '../../redux/store';
import { addOneItem, updateAllItems, forceRender } from '../../redux/actions';

export const saveNewItem = item => {
  axios.post('/item/new', item)
  .then(resp => {
    store.dispatch(addOneItem(resp.data));
  })
}

export const persistItemEdit = item => {
  axios.post('/item/edit', item)
  .then(resp => {
    let items = store.getState().items;
    let newItemsList = items.map(item => {
      if(item._id === resp.data._id) {
        item = resp.data;
        return item
      }
      return item;
    })
    store.dispatch(updateAllItems(newItemsList));
  })
}