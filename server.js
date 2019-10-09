const io = require('socket.io')(3000);

io.on('connection', socket => {
  socket.on('file-read', data => {
    console.log(data);
    socket.broadcast.emit('file-read', data);
  });
  socket.on('file-write', data => {
    console.log(data);
  });
  // socket.on('file-saved');
  socket.on('file-error', err => {
    console.log(err);
  });
});