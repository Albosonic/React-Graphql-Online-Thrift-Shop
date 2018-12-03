const mongoose = require('mongoose').set('debug', true);

const StoreSchema = new mongoose.Schema({
  storeId: String,
  sizes: String,
  storeName: String,
  stars: String,
});

module.exports = mongoose.model('Store', StoreSchema);