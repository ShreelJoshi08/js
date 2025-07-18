// httpServer.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from HTTP server!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// To run this server, save the code in a file named httpServer.js and execute it using Node.js: