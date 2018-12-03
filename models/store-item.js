const mongoose = require('mongoose');

const StoreItemSchema = new mongoose.Schema({
    storeId: String,
    itemType: String,
    itemSubType: String,
    imgFileData: String,
    itemDescription: String,
    price: String
});

module.exports = mongoose.model('Storeitem', StoreItemSchema);