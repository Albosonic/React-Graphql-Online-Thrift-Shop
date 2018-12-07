const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const colors = require('colors');
const port = 8000;
module.exports = () => {
  io.on('connection', (client) => {
    client.on('sendMsg', (sentMsg) => {      
      client.emit('recieveMsg', { msg: sentMsg, date: new Date() });
    });
  });

  app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
  });

  server.listen(port, () => {
    const msg = `=== chat sokets awake === ${port}`
    console.log(msg.dim)
  });
}