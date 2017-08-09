const Server = require('http').Server;

let server = new Server();

server.on('request', (req, res) => {
  res.write('Hello World!');
  res.end();
})

server.listen(3000, () => {
  console.log('listening on 3000');
});
