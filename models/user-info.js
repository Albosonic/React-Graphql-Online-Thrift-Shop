const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  data:{
    firstname: String,
    lastname: String,
    email: String,
    password: String,    
  }
});

module.exports = mongoose.model('User', UserSchema);