const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  id: String,
  storeName: String,
  stars: Number,
  storeItems: [
    {
      id: String,
      description: String,
      size: String,
      img: String,
      messages: [
        {
          id: String,
          message: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model('User', StoreSchema);