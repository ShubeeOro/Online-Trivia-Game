const { randomInt } = require('crypto');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Convert this to not be a message server

io.on('connection', (socket) => {
    socket.on('chat message', (msg, username) => {
        io.emit('chat message', `${msg} by ${username}`);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    socket.broadcast.emit('hi');
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});