
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected to Server 1');

  // for (let i = 0; i < 10; i++) {
  //   ws.send(`Server 1 received: ${i}`);
  // }

  ws.on('message', (message) => {
    console.log(`Received message from client: ${message}`);
    var i = 0;
    setInterval(function () {ws.send(`Server 1 received:${i}`);
    i++}, 5000);
  });
});

app.get('/', (req, res) => {
  res.send('Hello from Server 1');
});

server.listen(3001, () => {
  console.log('Server 1 listening on port 3001');
});
