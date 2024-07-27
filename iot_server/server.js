
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
    const houses = Array.from({ length: 20 }, (_, i) => `W${i + 1}`);
    let previousData = houses.map(house => ({
      house, 
      flowRate: 0,
      consumption: 0,
      timestamp: new Date().toISOString()
    }));
    
    function generateFlowRate() {
      return Math.random() < 0.95 ? (Math.random() * 0.5 + 0.5).toFixed(2) : (Math.random() * 3).toFixed(2);
    }
    
    function generateMainArray() {
      const mainArray = previousData.map(data => {
        const flowRate = parseFloat(generateFlowRate());
        const consumption = data.consumption + flowRate * 5; // Assuming 5 seconds interval
        const timestamp = new Date().toISOString();
    
        return {
          house: data.house,
          flowRate,
          consumption: parseFloat(consumption.toFixed(2)),
          timestamp
        };
      });
    
      previousData = mainArray;
      return mainArray;
    }
    
    // Example usage
    
    setInterval(function(){
        console.log(generateMainArray());
        ws.send(JSON.stringify(generateMainArray()));
    },1000)
    
    
  });
});

app.get('/', (req, res) => {
  res.send('Hello from Server 1');
});

server.listen(3001, () => {
  console.log('Server 1 listening on port 3001');
});
//  

  
