const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client'));

app.set('client', path.join(__dirname, 'client'));

const port = process.env.PORT || '3000';

app.listen(port, function() {
  console.log('It\'s Alive!!');
});
