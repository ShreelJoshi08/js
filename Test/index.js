const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./moduls/fuctions');

// Read the overview template
const overviewTemplate = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

// Read product data
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const products = JSON.parse(data);

// Generate product cards HTML
function generateProductCards(products) {
  return products.map(product => `
    <div class="product-card">
      <h2>${product.productName}</h2>
      <p>${product.description}</p>
      <span>Price: ${product.price || ''}</span>
    </div>
  `).join('');
}

const cardTemplate = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const cardsHtml = products.map(prod => replaceTemplate(cardTemplate, prod)).join('');
const output = overviewTemplate.replace('{%PRODUCT_CARDS%}', cardsHtml);

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(output);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(9000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:9000');
});