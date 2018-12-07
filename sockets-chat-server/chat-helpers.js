const Item = require('../models/store-item');
const request = require('request');

module.exports = {
  persistMessages: (body) => {    
    request.post(
      {
        url:'http://localhost:5000/item/messages/persist',
        json: body
      },
      (err, httpResponse, body) => {
        if(err) return err; // consider using a promis to mapp error handling back to chatr server.        
      }
    );
  },
  generateTime: () => {
    let time = new Date().toLocaleTimeString();
    let suffix = time.slice(9);
    time = time.slice(0, 5);
    return time;
  }
}