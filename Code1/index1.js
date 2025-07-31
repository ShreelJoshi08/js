const fs = require('fs');
const http = require('http');
const url = require('url');
// const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

// Read templates
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// Read data
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Define route table
const routes = {
  '/': (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  },

  '/overview': (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  },

  '/product': (req, res, query) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    if (product) {
      const output = replaceTemplate(tempProduct, product);
      res.end(output);
    } else {
      res.writeHead(404, { 'Content-type': 'text/html' });
      res.end('<h1>Product not found!</h1>');
    }
  },

  '/api': (req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  },

  '/contact': (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(`
      <html>
        <head><title>Contact</title>
         <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial; padding: 20px;">
          <h1>📱 Contact Us</h1>
          <p>Email: support@charusat.ac.in</p>
          <p>Phone: +91-12345-67890</p>
        </body>
      </html>
    `);
  },

  '/about': (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(`
      <html>
        <head><title>About</title>
         <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial; padding: 20px;">
          <h1>🏬 About Our Store</h1>
          <p>We are a fresh produce and electronics store offering high-quality goods at affordable prices.</p>
        </body>
      </html>
    `);
  }
};

// Create server
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // Check if route exists
  if (routes[pathname]) {
    // Pass query only if needed
    if (pathname === '/product') {
      routes[pathname](req, res, query);
    } else {
      routes[pathname](req, res);
    }
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>404 - Page not found</h1>');
  }
});

// Listen on port 9000
server.listen(9000, '127.0.0.1', () => {
  console.log('✅ Server is running at http://127.0.0.1:9000');
});
