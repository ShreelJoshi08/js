const fs = require('fs');

// Read templates
const data = fs.readFileSync(`${__dirname}/../data/data.json`, 'utf-8');
//const dataObj = JSON.parse(data);

module.exports = (req, res) => {
          res.writeHead(200, { 'Content-type': 'application/json' });
          res.end(data);
}