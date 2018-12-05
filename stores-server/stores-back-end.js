const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');

const handleStores = require('./handlers/stores-handlers');
const handleItems = require('./handlers/handle-items');
const handleFeed = require('./handlers/stores-feed-handlers');

const storesBackEnd = express();

const storesBEPort = process.env.PORT || '5000';

storesBackEnd.use(bodyParser.urlencoded({ 
  limit: '5mb',
  parameterLimit: 100000,
  extended: false,
}));

storesBackEnd.use(bodyParser.json({
  limit: '5mb'
}));

module.exports = () => {
  storesBackEnd.get('/', (req, res) => {
    res.send('hello world')
  });

  storesBackEnd.post('/stores/update/name', handleStores.updateStoreName);
  storesBackEnd.post('/new/item', handleItems.insertNewItem);
  
  storesBackEnd.get('/stores/feed', handleFeed.fetchAllStores);

  storesBackEnd.listen(storesBEPort, () => {
    console.log('stores back end running...'.underline.cyan);
  });
}