const request = require('request');

module.exports = {
  updateStores: (req, res) => {
    console.log('req.body.items ==>', req.body)
    // serialize items obj for db.
    req.body.items = req.body.items[0];
    new Promise((resolve, reject) => { // proxies request to stores micro service.
      request.post({url:'http://localhost:5000/update/stores', form: req.body},(err,httpResponse,body) => {
        if(err) {
          reject(err);
        } else {
          if(httpResponse === null) {
            resolve(httpResponse);
          } else {
            // deserialize items obj for db. when store exists.
            console.log('say what!??', httpResponse.body)
            // httpResponse.body = JSON.parse(httpResponse.body);
            // httpResponse.body.items = JSON.parse(httpResponse.body.items);
            resolve(httpResponse);
          }
        }
      });
    }).then(resp => {
      res.status(200).send(resp);
    })
  }
}