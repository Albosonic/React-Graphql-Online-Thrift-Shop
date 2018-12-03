const mongoose = require('mongoose').set('debug', true);

const StoreSchema = new mongoose.Schema({ // the issue is here.
  storeId: String,  
  storeName: String,
  items: [Object]
});

module.exports = mongoose.model('Store', StoreSchema);