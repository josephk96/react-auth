/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = process.env.PORT || 6000;
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

app.get('/', (req, res) => res.json({ msg: 'React Auth API' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/verify', require('./routes/verify'));


app.listen(port, () => console.log(`Server is connected to port : ${port} !`));

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        console.log(data);
        client.send(data);
      }
    });
  });
});
