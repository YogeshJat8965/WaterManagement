
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


const connectDB = async()=>{
  try{
      const connectioInstance =await mongoose.connect(`mongodb+srv://yuvraj7000raju:999yuvraj7000@insighteye.a43czcr.mongodb.net/my-database`)
      console.log("mongodb connected")
  }
  catch(error){
console.log("mongodb connection error",error);
  }
}
connectDB();








let server2WebSocket;


server2WebSocket = new WebSocket('ws://localhost:3001');
server2WebSocket.on('open', () => {
    console.log('Connected to Server 1 from Server 2');
    server2WebSocket.send('Hello from Server 2');
  });

  server2WebSocket.on('message', (message) => {
    const messageStr = message.toString('utf8');
    console.log(`Message from Server 1: ${messageStr}`);})




function connectToServer1() {
//   server2WebSocket = new WebSocket('ws://localhost:3001');

  server2WebSocket.on('open', () => {
    console.log('Connected to Server 1 from Server 2');
    server2WebSocket.send('Hello from Server 2');
  });

  server2WebSocket.on('message', (message) => {
    const messageStr = message.toString('utf8');
    console.log(`Message from Server 1: ${messageStr}`);
    // Broadcast the message to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageStr);
      }
    });
  });

  server2WebSocket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  server2WebSocket.on('close', (code, reason) => {
    console.log(`Disconnected from Server 1. Code: ${code}, Reason: ${reason}`);
    if (code === 1006) {
      console.log('Attempting to reconnect to Server 1...');
      setTimeout(connectToServer1, 5000); // Reconnect after 5 seconds
    }
  });
}

// Initial connection to Server 1
connectToServer1();

// Define a route for the HTTP server
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// WebSocket server setup
wss.on('connection', ws => {
  console.log('Client connected');
  ws.on('message', message => {
    console.log(`Received from client: ${message}`);
  });
  ws.send('Hello from Server 2');
});

wss.on('error', (error) => {
  console.error('WebSocket server error:', error);
});







// Start the HTTP server
server.listen(3002, () => {
  console.log('Server 2 listening on port 3002');
});