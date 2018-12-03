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
  }
}