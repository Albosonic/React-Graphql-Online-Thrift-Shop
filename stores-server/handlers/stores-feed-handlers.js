const Item = require('../../models/store-item');
const Store = require('../../models/store');

module.exports = {
  fetchAllStores: (req, res) => {
    const range = req.query.range;
    Store.find({}, (err, docs) => {
        console.log(docs);
    })
  }
}