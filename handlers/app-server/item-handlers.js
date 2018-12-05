const request = require('request');
const bodyParser = require('body-parser');

module.exports = {
  insertItem: (req, res) => {    
    let body = req.body;
    console.log('linke', body.imgFileData)
    request.post(
      {
        url:'http://localhost:5000/new/item',
        json: {
          storeId: body.storeId,
          itemType: body.itemType,
          itemSubType: body.itemSubType,
          imgFileData: body.imgFileData,
          itemDescription: body.itemDescription,
          price: body.price
        }
      },
      (err,httpResponse,body) => {
      if(err) return err
      res.status(200).send(body);
    });    
  }
}