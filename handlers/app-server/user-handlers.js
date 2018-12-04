const request = require('request');

module.exports = {
  postNewUser: (req, res) => {
    new Promise((resolve, reject) => {
      request.post({url:'http://localhost:4000/new/user', form: req.body},(err,httpResponse,body) => {
        if(err) {
          reject(err);
        } else {
          resolve(httpResponse)
        }
      });
    }).then(resp => {
      res.status(200).send(resp);
    })
  },
  loginUser: (req, res) => {
    request.post({
      url: 'http://localhost:4000/users/login',
      form: req.body
    },
    (err, response, body)=> {
      if(err) return console.log(err);
      res.status(200).send(body);
    })
  },
  removeMongoIdsItems: (items) => {
    let results = [];
    items.forEach(item => {
      let storeItem = {
        storeId: item.storeId,
        itemType: item.itemType,
        itemSubType: item.itemSubType,
        itemDescription: item.itemDescription,
        imgFileData: item.imgFileData,
        price: item.price
      }
      results.push(storeItem);
    })
    return results;
  }
}