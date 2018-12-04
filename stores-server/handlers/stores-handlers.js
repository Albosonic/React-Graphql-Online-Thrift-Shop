const Store = require('../../models/store');
const request = require('request');

module.exports = {
  updateStoreName: (req, res) => {    
    let body = req.body;
    Store.findOneAndUpdate(
      { 'storeId': body.storeId },
      { 'storeName': body.storeName },
      { new: true },
      (err, doc) => {
        if(err) return err;        
        res.status(200).send(doc);
      }
    )
    
    
  }
}