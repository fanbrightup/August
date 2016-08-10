var net = require('net');
var server = net.createServer((socket) => {
  socket.on('connection',function(socket){
    socket.send("hello");
  });
  socket.on('close',function(socket){
    console.log("colse");
  })
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab a random port.
  server.listen(4000);
// server.listen(() => {
//   address = server.address();
//   console.log('opened server on %j', address);
// });
