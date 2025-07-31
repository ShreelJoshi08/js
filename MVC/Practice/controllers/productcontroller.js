const fs = require('fs');
const querystring = require('querystring');
const replaceTemplate = require('../modules/replaceTemplate');

const tempProduct = fs.readFileSync(`${__dirname}/../templates/template-product.html`, 'utf-8');
const dataPath = `${__dirname}/../data/data.json`;

module.exports = (req, res) => {
  const dataObj = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  if (req.method === 'GET') {
    const product = dataObj[req.query.id];
    if (product) {
      const output = replaceTemplate(tempProduct, product);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(output);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Product not found</h1>');
    }
  }

  else if (req.method === 'POST') {
  const parsed = querystring.parse(req.body);
  console.log('Parsed Form:', parsed);  // <-- Debug line

  const newProduct = {
    id: dataObj.length,
    productName: parsed.productName || parsed.name || 'Untitled',
    image: parsed.image || '',
    brand: parsed.brand || '',
    specs: parsed.specs || '',
    stock: parsed.stock || '',
    price: parsed.price || '',
    warranty: parsed.warranty === 'true',
    description: parsed.description || ''
  };

  // Prevent duplicates (optional safety)
  if (!newProduct.productName) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Product Name is required.');
  }

  // Only add once!

  dataObj.push(newProduct);


  fs.writeFileSync(dataPath, JSON.stringify(dataObj, null, 2), 'utf-8');

  res.writeHead(302, { Location: '/overview' });
  res.end();
}
};
