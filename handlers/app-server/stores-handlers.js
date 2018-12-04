const request = require('request');

module.exports = {
  updateStores: (req, res) => {
    console.log('req.body.items ==>', req.body)
    req.body.items = req.body.items[0];
    new Promise((resolve, reject) => {
      request.post({url:'http://localhost:5000/update/stores', form: req.body},(err,httpResponse,body) => {
        if(err) {
          reject(err);
        } else {
          if(httpResponse === null) {
            resolve(httpResponse);
          } else {
            resolve(httpResponse);
          }
        }
      });
    }).then(resp => {
      res.status(200).send(resp);
    })
  }
}