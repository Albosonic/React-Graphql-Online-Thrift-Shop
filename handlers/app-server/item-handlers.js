const request = require('request');

module.exports = {
  insertItem: (req, res) => {
    console.log('req.body.items ==>', req.body);
    new Promise((resolve, reject) => {
      request.post({url:'http://localhost:5000/new/item', form: req.body},(err,httpResponse,body) => {
        if(err) {
          reject(err);
        } else {
          console.log('say what!??', httpResponse.body);
          resolve(httpResponse);
        }
      });
    })
    .then(resp => {
      res.status(200).send(resp);
    })
  }
}