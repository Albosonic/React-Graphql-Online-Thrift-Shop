import axios from 'axios';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

import store from '../../redux/store';
import { addOneItem, updateAllItems, toggleStoreItemActionMode } from '../../redux/actions';
import { fetchFeed } from '../services/feed-service';

export const saveNewItem = item => {  
  axios.post('/item/new', item)
  .then(resp => {    
    store.dispatch(addOneItem(resp.data));
    store.dispatch(toggleStoreItemActionMode({ storeItemActionMode: false, title: '' }));
    // fetchFeed();
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
    store.dispatch(toggleStoreItemActionMode({ storeItemActionMode: false, title: '' }));
    
  })
}

export const sendToChatter = (outGoingMsg) => {
  console.log(outGoingMsg)
  socket.emit('sendMsg', outGoingMsg);
}

export const subscribeToChatter = () => {
  return new Promise((resolve, reject) => {
    socket.on('recieveMsg', incoming => resolve(incoming));
  })
}