const mongoose = require('mongoose');

const Message = new mongoose.Schema({  
  storeId: String,
  itemId: String,
  message: String,
  time: String  
});

module.exports = mongoose.model('Message', Message);