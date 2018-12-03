const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');

const handleStores = require('../handlers/stores-server/handle-stores-back-end');
const handleItems = require('../handlers/stores-server/handle-items');

const storesBackEnd = express();

const storesBEPort = process.env.PORT || '5000';

storesBackEnd.use(bodyParser.urlencoded({ extended: false })) 
storesBackEnd.use(bodyParser.json())

module.exports = () => {
  storesBackEnd.get('/', (req, res) => {
    res.send('hello world')
  });

  storesBackEnd.post('/update/stores', handleStores.insertStore);
  storesBackEnd.post('/new/item', handleItems.insertNewItem);

  storesBackEnd.listen(storesBEPort, () => {
    console.log('stores back end running...'.underline.cyan);
  });
}