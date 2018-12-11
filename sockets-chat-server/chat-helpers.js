const request = require('request');

module.exports = {
  persistMessages: (body) => {
    return new Promise((resolve, reject) => {
      request.post(
        {
          url:'http://localhost:5000/item/messages/persist',
          json: body
        },
        (err, response, body) => {
          if(err) return reject(err);          
          resolve(response.body);
        }
      );
    })
  },
  generateTime: () => {
    let time = new Date().toLocaleTimeString();
    let suffix = time.slice(9);
    time = time.slice(0, 5);
    return `${time} ${suffix}`;
  }
}