const Server = require('http').Server;
const url = require('url');

let server = new Server();

server.on('request', (req, res) => {
  let urlPath = url.parse(req.url);

  switch(urlPath.pathname) {
    case "/ping":
      ping(req, res);
      break;
    case "/tasks":
      tasks(req, res);
      break;
    case "/":
      index(req, res);
      break;
    default:
      index(req,res);
      break;
  }
})

function index(req, res) {
  res.write('Hello World');
  res.end();
}

function ping(req, res) {
  res.write('pong');
  res.end();
}

function tasks(req, res) {
  let taskList = ['Buy Milk', 'Do Laundry'];
  res.write(taskList.join(", "));
  res.end();
}

server.listen(3000, () => {
  console.log('listening on 3000');
});
