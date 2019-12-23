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

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log(data)
        client.send(data);
      }
    });
  });
});


// wss.on('connection', function connection(ws) {
//   count++;
//   ws.on("msg", { count });
//   ws.on("disconnect", function() {
//     count--;
//     ws.on("message", { count });
//   });
// })
