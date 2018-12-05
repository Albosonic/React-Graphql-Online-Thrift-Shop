const Item = require('../../models/store-item');

module.exports = {
  insertNewItem: (req, res) => {
    let item = new Item(req.body);
    item.save((err, doc) => {
      if(err) return console.log(err);
      res.status(200).send(doc);
    })
  }
}