const fs = require('fs');
const replaceTemplate = require('../modules/replaceTemplate');

// Read templates
const tempOverview = fs.readFileSync(`${__dirname}/../templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/../templates/template-card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/../data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

module.exports = (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);
}