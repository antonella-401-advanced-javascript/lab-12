const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const { writeFile } = require('./read-file');

socket.on('file-write', data => {
  return writeFile(data.path, data.data)
    .then(() => {
      socket.emit('file-saved');
    })
    .catch(err => socket.emit('file-error', err));
});