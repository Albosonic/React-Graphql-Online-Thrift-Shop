const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');

const usersBackEnd = express();

const handleUsers = require('./handlers/handle-users-back-end');
const usersBEPort = process.env.PORT || '4000';

usersBackEnd.use(bodyParser.urlencoded({ extended: false })) 
usersBackEnd.use(bodyParser.json())

module.exports = () => {
  usersBackEnd.get('/', (req, res) => {
    res.send('hello world')
  });

  usersBackEnd.post('/new/user', handleUsers.insertUser);

  usersBackEnd.listen(usersBEPort, () => {
    console.log('users back end running...'.underline.cyan);
  });
}