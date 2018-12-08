const Item = require('../../models/store-item');

module.exports = {
  insertNewItem: (req, res) => {
    let item = new Item(req.body);
    item.save((err, doc) => {
      if(err) return console.log(err);
      res.status(200).send(doc);
    })
  },
  editItem: (req, res) => {
    let body = req.body;
    let _id = body._id;
    let options = { new: true };
    let update = {
      itemType: body.itemType,
      itemSubType: body.itemSubType,
      imgFileData: body.imgFileData,
      itemDescription: body.itemDescription,
      price: body.price
    }
    Item.findByIdAndUpdate(_id, update, options, (err, updatedItem) => {      
      if(err) return console.log(err);
      res.status(200).send(updatedItem);
    });
  },
  persistMessages: (req, res) => {
    let body = req.body;
    let _id = body.messageData.itemId;
    let options = { new: true };
    let update = {$push: { messages:  body.messageData }}    
    Item.findByIdAndUpdate(_id, update, options, (err, updatedItem) => {      
      if(err) return console.log(err);      
      res.status(200).send(updatedItem)
    });
  }
}