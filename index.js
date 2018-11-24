const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const request = require('request');
const bodyParser = require('body-parser');

const runUsersBackEnd = require('./users-back-end');
const appHandlers = require('./handlers/app-server/user-handlers');

const colors = require('colors');

const app = express();
const port = process.env.PORT || '3000';

mongoose.connect('mongodb://localhost:27017/clothes', { useNewUrlParser: true });

app.use(express.static('client'));
app.set('client', path.join(__dirname, 'client'));

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.post('/users', appHandlers.postNewUser);
// all in app routes defuault to react router...
app.get('/*', (req, res) => res.sendFile(__dirname + '/client/index.html'));

app.listen(port, function() {
  console.log('react app running...'.underline.cyan);
});

runUsersBackEnd();