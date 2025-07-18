const fs = require('fs');

// console.log('reading file');
// const readtxt = fs.readFileSync('./daat/hi.txt', 'utf-8');
// console.log(readtxt);
// console.log('file read complete');

// const str = `${readtxt} is written on ${new Date().toString()}`;
// fs.writeFileSync('./daat/hello.txt', str, 'utf-8');
// console.log('file written complete
// 
// 
// ');



// fs.readFile('./daat/hi.txt', 'utf-8')
//     .then(data => {
//         console.log('File read complete');
//         console.log(data);
//         const str = `${data} is written on ${new Date().toString()}`;
//         return fs.writeFile('./daat/hello.txt', str, 'utf-8');
//     })
//     .then(() => {
//         console.log('File written complete');
//     })
//     .catch(err => {
//         console.error('Error:', err);
//     });

const http = require('http');


const server = http.createServer((req, res) => {
    res.end('Hello World from Node.js server!');
});

server.listen(9090, '192.168.51.104', () => {
    console.log('Server is running at http://');
});

