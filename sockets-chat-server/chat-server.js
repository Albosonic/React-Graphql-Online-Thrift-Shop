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
    client.on(
      'sendMsg',
      (sentMsgObj) => {
        sentMsgObj.messageData.time = helpers.generateTime();
        helpers.persistMessages(sentMsgObj).then(messageData => {
          client.emit('recieveMsg', messageData);
        },
        err => client.emit('recieveMsg', 'ERROR: 500 :' + err))
      }
    );
  });

  server.listen(port, () => {
    console.log(`=== chat sokets awake === ${port}`)
  });
}
