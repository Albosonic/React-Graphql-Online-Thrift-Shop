const User = require('../models/user-info');
// const bodyParser = require('body-parser');
const colors = require('colors');

module.exports = {
  insertUser: (req, res) => {
    console.log(req.body)
    let user = new User(req.body);
    user.save(err=> {
      if(err) {
        console.log(err);
      }
      //saved
        res.status(200).send('data saved');
    })
  }
}