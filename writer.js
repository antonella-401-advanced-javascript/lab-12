const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const fileWrite = require('./read-file');

socket.on('file-write', () => {
  socket.emit('file-saved');
});