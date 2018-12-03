const Store = require('../../models/store');
module.exports = {

  insertStore: (req, res) => {
    console.log('===>', req.body)
    var store = new Store(req.body);
    Store.findOne({ 'storeId': store.storeId }, ['storeId','storeName', 'items'], (err, resp) => {
      if(resp === null) { // store does not exist.
        store.save(err => {
          if(err) {
            console.log(err);
          }
          res.status(200).send(resp);
        })
      } else { // store exists updatae store.
        // how do I update the store?
        // Store.findOneAndUpdate({ 'storeId': resp.body.storeId }, resp, (err, doc) => {
        //   if (err) return res.send(500, { error: err });
        //   return res.send(doc);
        // })
        res.status(200).send(resp);
      }
    })
  }
  
}