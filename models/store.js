const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId: String,
  sizes: String,
  storeName: String,
  stars: String,
});

module.exports = mongoose.model('Store', StoreSchema);