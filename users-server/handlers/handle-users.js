const Items = require('../../models/store-item');
const User = require('../../models/user-info');
const Store = require('../../models/store');

module.exports = {
  insertUser: (req, res) => {
    const store = new Store({ // create store with matching ID to user ID.
      storeId: req.body.id,
      sizes: '',
      storeName: '',
      stars: '',
    });
    var user = new User(req.body);
    User.findOne({'email': user.email}, 'firstName', (err, resp) => {
      if(err) return console.log(err);
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
      (err, userFromDB) => {
        if(err) return console.log(err);
        if(userFromDB === null) return res.status(404).send('user not found');
        module.exports.fetchUserStoreAndItems(userFromDB.id)
        .then(storeAndItems => {
          storeAndItems.push(userFromDB);
          res.status(200).send(storeAndItems);
        })
      }
    )
  },
  fetchUserStoreAndItems: (userId) => {
    return Promise.all(
      [
        module.exports.fetchUserStore(userId).catch(err=>console.log(err)),
        module.exports.fetchUserItems(userId).catch(err=>console.log(err))
      ]
    )
  },
  fetchUserStore: (userId) => {
    return new Promise((resolve, reject) => {
      Store.findOne(
        {'storeId': userId},
        ['storeId','sizes','storeName', 'stars'],
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