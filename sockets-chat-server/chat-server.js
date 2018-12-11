const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

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
      helpers.persistMessages(sentMsgObj)
      .then(storeItem => {
        client.emit('recieveMsg', storeItem);
      }, err => client.emit('recieveMsg', 'ERROR: 500'))
    });
  });

  server.listen(port, () => {
    const msg = `=== chat sokets awake === ${port}`
    console.log(msg.dim)
  });
}
