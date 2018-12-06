const request = require('request');
const bodyParser = require('body-parser');

module.exports = {
  insertItem: (req, res) => {
    let body = req.body;
    request.post(
      {
        url:'http://localhost:5000/item/new',
        json: {
          storeId: body.storeId,
          itemType: body.itemType,
          itemSubType: body.itemSubType,
          imgFileData: body.imgFileData,
          itemDescription: body.itemDescription,
          price: body.price
        }
      },
      (err, httpResponse, body) => {
        if(err) return err;
        res.status(200).send(body);
      }
    );
  },
  editItem: (req, res) => {
    let body = req.body
    request.post(
      {
        url:'http://localhost:5000/item/edit',
        json: {
          _id: body._id,
          storeId: body.storeId,
          itemType: body.itemType,
          itemSubType: body.itemSubType,
          imgFileData: body.imgFileData,
          itemDescription: body.itemDescription,
          price: body.price
        }
      },
      (err, httpResponse, body) => {
        if(err) return err;
        res.status(200).send(body);
      }
    );
  }
}