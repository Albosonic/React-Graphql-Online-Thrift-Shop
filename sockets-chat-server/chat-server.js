const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const colors = require('colors');

const helpers = require('./chat-helpers');

const port = 8000;

module.exports = () => {
  io.on('connection', (client) => {
    client.on('sendMsg', (sentMsgObj) => {
      let time = helpers.generateTime();      
      sentMsgObj.messageData.time = time;       
      helpers.persistMessages(sentMsgObj); // do a .then here and then emnit with the val from db.
      // client.emit('recieveMsg', { msg: sentMsgObj.message, date: `${time}` });
    });
  });

  server.listen(port, () => {
    const msg = `=== chat sokets awake === ${port}`
    console.log(msg.dim)
  });
}
