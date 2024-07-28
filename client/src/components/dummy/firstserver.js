import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const port = 5175;

let data = [];

// Sample addresses
const addresses = [
  "123 Main St, Indore",
  "456 Oak St, Indore",
  "789 Pine St, Indore",
  "101 Maple St, Indore",
  "202 Elm St, Indore",
];

// Use CORS middleware
app.use(cors());

// Function to generate data
function generateData() {
  const sensorId = Math.floor(Math.random() * 1000) + 1000;
  const timestamp = new Date().toISOString();
  const waterFlowRate = Math.random() * 2; // Simulate water flow rate between 0 and 2 liters per minute
  const status =
    (waterFlowRate > 1.5 || waterFlowRate < 0.3) && Math.random() > 0.97
      ? "leak_detected"
      : "normal";

  // Randomly assign an address from the list
  const address = addresses[sensorId % addresses.length];

  const newData = {
    sensor_id: sensorId,
    timestamp,
    water_flow_rate: waterFlowRate,
    status,
    address,
  };
  data.push(newData);

  if (data.length > 100) {
    data.shift(); // Keep only the last 100 records
  }

  console.log(newData); // Print the generated data for debugging
}

// Generate new data every 3 seconds
setInterval(generateData, 3000);

// Serve static files from the "public" directory
app.use(express.static(path.join("public", "public")));

// Endpoint to get the data
app.get("/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
