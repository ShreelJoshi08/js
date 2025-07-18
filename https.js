// httpsServer.js
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from secure HTTPS server!");
});

server.listen(4949, () => {
  console.log('Secure server is running on https://localhost:4949');
});
