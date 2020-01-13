/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 6000;
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/verify', require('./routes/verify'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


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
