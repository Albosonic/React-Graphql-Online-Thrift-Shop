const Item = require('../../models/store-item');
const Store = require('../../models/store');

module.exports = {
  fetchAllStores: (req, res) => {
    const range = req.query.range; // TODO: fetch in chunks based on range.
    Store.find({}, (err, stores) => {
      var promises = stores.map(store => {
        return new Promise((resolve, reject) => {
          Item.find(
            {'storeId': store.storeId},
            (err, items) => {
              if(err) return reject(err);
              var allItems = {};
              items.forEach(item => {
                allItems[item._id] = item;
              })
              resolve({ userStore: store,  storeItems: allItems });
            }
          )
        })
      })
      Promise.all(promises).then(stores => {
        var allStores = {};
        stores.forEach(store => {
          allStores[store.userStore.storeId] = store;
        })
        res.status(200).send(allStores);
      })
    })
  }
}