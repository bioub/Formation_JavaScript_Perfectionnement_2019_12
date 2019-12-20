const http = require('http');

const todos = [{
  id: 1,
  title: 'ABC',
  completed: false
}, {
  id: 2,
  title: 'DEF',
  completed: true
}];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/todos') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(todos));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify({err: 'Not Found'}));
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server started');
});
