const User = require('../../models/user-info');
const Store = require('../../models/store')

module.exports = {
  insertUser: (req, res) => {
    console.log('body=>', req.body);
    const store = new Store({
      storeId: req.body.id,
      sizes: 'fake size',
      storeName: 'fake name',
      stars: 'fake stars',
    })
    // check first if user exists fo that we are not duplicating user.
    // if user exists send an error informing the client that user exists.
    var user = new User(req.body);
    User.findOne({'email': user.email}, 'firstName', (err, resp) => {
      if(resp === null) {
        user.save(err => {
          if(err) {
            console.log(err);
          }
          store.save(err => {
            if(err) {
              console.log(err);
            } 
            res.status(200).send('data saved');
          })
        })
      } else { 
        res.status(409).send('user exists');
      }
    })
  }
}