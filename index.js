const express = require('express');
const path = require('path');
const mongoose = require('mongoose').set('debug', true);;
const request = require('request');
const bodyParser = require('body-parser');

const runUsersBackEnd = require('./users-server/users-back-end');
const runStoresBackEnd = require('./stores-server/stores-back-end');
const userHandlers = require('./handlers/app-server/user-handlers');
const storesHandlers = require('./handlers/app-server/stores-handlers');
const itemHandlers = require('./handlers/app-server/item-handlers');

const colors = require('colors');

const app = express();
const port = process.env.PORT || '3000';

mongoose.connect('mongodb://localhost:27017/clothes', { useNewUrlParser: true, useCreateIndex: true, });

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
app.post('/stores', storesHandlers.updateStores);

// all in app routes defuault to react router...
app.get('/*', (req, res) => res.sendFile(__dirname + '/client/index.html'));

app.listen(port, function() {
  console.log('react app running...'.underline.cyan);
});

runUsersBackEnd();
runStoresBackEnd();