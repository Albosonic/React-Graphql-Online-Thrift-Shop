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
  },
  fetchAllStores: (req, res) => {
    // console.log('params', req.query);
    let q = req.query;
    const options = {
      url: `http://localhost:5000/stores/feed?range=${q.range}`,
      method: 'GET',
      headers: {'Accept': 'application/json'}      
    }
    request(
      options,
      (err, response, body) => {
        if(err) return err;
        res.status(200).send(body);
      }
    );
  }
}