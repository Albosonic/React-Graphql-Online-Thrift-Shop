const User = require('../models/user-info');
module.exports = {
  insertUser: (req, res) => {
    console.log(req.body);
    // check first if user exists fo that we are not duplicating user.
    // if user exists send an error informing the client that user exists.
    var user = new User(req.body);
    User.findOne({'email': user.email}, 'firstName', (err, resp) => {      
      if(resp === null) {
        user.save(err => {
          if(err) {
            console.log(err);
          }          
          res.status(200).send('data saved');
        })
      } else {
        res.status(409).send('user exists');
      }
    })
  }
}