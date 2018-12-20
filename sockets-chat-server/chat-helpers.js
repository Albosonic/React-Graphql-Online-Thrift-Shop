const request = require('request');
const Message = require('../models/message-model');

module.exports = {
  persistMessages: (body) => {    
    return new Promise((resolve, reject) => {
      const message = new Message(body.messageData);
      message.save((err, doc) => {
        if(err) console.log(err);        
        resolve(doc);
      })  
    })
  },
  generateTime: () => {
    let time = new Date().toLocaleTimeString();
    let suffix = time.slice(9);
    time = time.slice(0, 5);
    return `${time} ${suffix}`;
  },
  fetchItemMessages: (req, res) => {
    console.log('req.body =====>', req.query);
  }
}