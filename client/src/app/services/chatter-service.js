import openSocket from 'socket.io-client';
import axios from 'axios';
const socket = openSocket('http://localhost:8000');

export const fetchChatter = (itemId) => {  
  return axios.get(`/chatter/item/all?id=${itemId}`)
}

export const sendToChatter = (outGoingMsg) => {
  socket.emit('sendMsg', outGoingMsg);
}

export const subscribeToChatter = () => {
  return new Promise((resolve, reject) => {
    socket.on('recieveMsg', incoming => resolve(incoming));
  })
}