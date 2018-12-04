const request = require('request');

module.exports = {
  updateStoreName: (req, res) => {    
    request.post(
      {
        url:'http://localhost:5000/stores/update/name',
        form: req.body
      },
      (err, response, body) => {
        if(err) return err;        
        res.status(200).send(body);
      }
    );
  }
}