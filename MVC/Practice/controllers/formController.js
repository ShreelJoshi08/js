const fs = require('fs');
const formHtml = fs.readFileSync(`${__dirname}/../templates/add-product.html`, 'utf-8');

module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(formHtml);
};
