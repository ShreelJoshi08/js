const http = require('http');
const url = require('url');
const router = require('./routes/routes');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  req.pathname = parsedUrl.pathname;
  req.query = parsedUrl.query;

  // Only collect body for POST requests
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      req.body = body;
      router.handle(req, res);  // ✅ Handle after body is ready
    });
  } else {
    router.handle(req, res);    // ✅ Safe to call directly for GET
  }
});

server.listen(9000, '127.0.0.1', () => {
  console.log('✅ Server is running on http://127.0.0.1:9000');
});
