const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const request = require('request');
const bodyParser = require('body-parser');

const runUsersBackEnd = require('./users-server/users-back-end');
const runStoresBackEnd = require('./stores-server/stores-back-end');
const runChatSockets = require('./sockets-chat-server/chat-server');
const userHandlers = require('./handlers/app-server/user-handlers');
const storesHandlers = require('./handlers/app-server/store-handlers');
const itemHandlers = require('./handlers/app-server/item-handlers');
const paymentHandlers = require('./handlers/app-server/payments-handlers');
// const chatHandlers = require('./handlers/app-server/chat-handlers');
const chatHandlers = require('./sockets-chat-server/chat-helpers');

const colors = require('colors');
const app = express();
const port = process.env.PORT || '3000';

mongoose.connect('mongodb://localhost:27017/again9', { useNewUrlParser: true, useCreateIndex: true, });

app.use(express.static('client'));
app.set('client', path.join(__dirname, 'client'));

app.use(bodyParser.urlencoded({ 
  limit: '5mb',
  parameterLimit: 100000,
  extended: false,
}));

app.use(bodyParser.json({
  limit: '5mb'
}));

app.post('/users/new', userHandlers.postNewUser);
app.post('/users/login', userHandlers.loginUser);
app.post('/item/new', itemHandlers.insertItem);
app.post('/item/edit', itemHandlers.editItem);
app.post('/stores/update/name', storesHandlers.updateStoreName);
app.post('/stripe/payment', paymentHandlers.handlePayment);

app.get('/stores/feed', storesHandlers.fetchAllStores);
// app.get('/chatter/item/all', chatHandlers.fetchAllItemMessages);
app.get('/chatter/item/all', chatHandlers.fetchItemMessages);

// all in app routes defuault to react router...
app.get('/*', (req, res) => res.sendFile(__dirname + '/client/index.html'));

app.listen(port, function() {
  console.log('react app running...'.underline.cyan);
});

runUsersBackEnd();
runStoresBackEnd();
runChatSockets();