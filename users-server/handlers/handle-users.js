const Items = require('../../models/store-item');
const User = require('../../models/user-info');
const Store = require('../../models/store');

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
  },
  loginUser: (req, res) => {
    User.findOne(
      {'email': req.body.email},
      ['email','password','firstName', 'id'],
      (err, resp) => {
        if(resp === null) return res.status(404).send('user not found');
        
        // console.log('from mongo==>', resp)
        module.exports.fetchUserStoreAndItems(resp.id)
        .then(resp => {
          console.log('promise.all array O P\'s===>', resp);
        })
      }
    )
  },
  fetchUserStoreAndItems: (userId) => {
    return Promise.all(
      [
        module.exports.fetchUserStore(userId),
        module.exports.fetchUserItems(userId)
      ]
    )
  },
  fetchUserStore: (userId) => {
    return new Promise((resolve, reject) => {
      Store.findOne(
        {'storeId': userId},
        ['sizes','storeName', 'stars'],
        (err, resp) => {
          if(resp === null) {
            reject('user not found');
          } else {
            resolve(resp);
          }
        }
      )
    })
  },
  fetchUserItems: (userId) => {
    return new Promise((resolve, reject) => {
      Items.find(
        {'storeId': userId},
        ['storeId', 'itemType', 'itemSubType', 'imgFileData', 'itemDescription', 'price'],
        (err, resp) => {
          if(resp === null) {
            reject('no items found');
          } else {
            resolve(resp);
          }
        }
      )
    })
  }
}