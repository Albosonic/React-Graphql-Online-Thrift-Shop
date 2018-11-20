const User = require('../models/user-info');

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