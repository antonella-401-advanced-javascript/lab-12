const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const toAllCaps = require('./str-capitalize');

socket.on('file-read', data => {
  const str = data.data;
  socket.emit('file-write', toAllCaps(str));
});