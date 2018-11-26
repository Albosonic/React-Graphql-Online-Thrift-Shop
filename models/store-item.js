const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    type: String,
    subType: String,
    price: Object,
    id: 'id'
});

module.exports = mongoose.model('User', UserSchema);