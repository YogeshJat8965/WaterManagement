
// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected to Server 1');

//   // for (let i = 0; i < 10; i++) {
//   //   ws.send(`Server 1 received: ${i}`);
//   // }


//   ws.on('message', (message) => {
//     console.log(`Received message from client: ${message}`);
//     const houses = Array.from({ length: 20 }, (_, i) => `W${i + 1}`);
//     let previousData = houses.map(house => ({
//       house, 
//       flowRate: 0,
//       consumption: 0,
//       timestamp: new Date().toISOString()
//     }));
    
//     function generateFlowRate() {
//       return Math.random() < 0.95 ? (Math.random() * 0.5 + 0.5).toFixed(2) : (Math.random() * 3).toFixed(2);
//     }
    
//     function generateMainArray() {
//       const mainArray = previousData.map(data => {
//         const flowRate = parseFloat(generateFlowRate());
//         const consumption = data.consumption + flowRate * 5; // Assuming 5 seconds interval
//         const timestamp = new Date().toISOString();
    
//         return {
//           house: data.house,
//           flowRate,
//           consumption: parseFloat(consumption.toFixed(2)),
//           timestamp
//         };
//       });
    
//       previousData = mainArray;
//       return mainArray;
//     }
    
//     // Example usage
    
//     setInterval(function(){
//         console.log(generateMainArray());
//         ws.send(JSON.stringify(generateMainArray()));
//     },1000)
    
    
//   });
// });

// app.get('/', (req, res) => {
//   res.send('Hello from Server 1');
// });

// server.listen(3001, () => {
//   console.log('Server 1 listening on port 3001');
// });
// //  
  
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDataset() {
  const months = ["January", "February", "March", "April", "May", "June"];
  return months.map(month => ({
    month,
    desktop: getRandomInt(50, 300),
    mobile: getRandomInt(50, 300)
  }));
}

wss.on('connection', (ws) => {
  console.log('Client connected to Server 1');

  ws.on('message', (message) => {
    console.log(`Received message from client: ${message}`);
    
    // Send random dataset at regular intervals
    const intervalId = setInterval(() => {
      const randomData = generateRandomDataset();
      ws.send(JSON.stringify(randomData));
    }, 1000);

    // Handle client disconnection
    ws.on('close', () => {
      clearInterval(intervalId);
      console.log('Client disconnected from Server 1');
    });
  });
});

app.get('/', (req, res) => {
  res.send('Hello from Server 1');
});

server.listen(3001, () => {
  console.log('Server 1 listening on port 3001');
});