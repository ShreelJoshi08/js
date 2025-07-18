
const fs = require('fs');


const data = fs.readFileSync('example.txt', 'utf8');
console.log("Sync Read:", data);

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("Async Read:", data);
});

// not for exam
// Synchronous operations block the execution of code 
// until the current operation finishes. 
// The program waits for the task to complete before moving to the next line.

// Asynchronous operations do not block the execution. 
// The program can continue running other code while waiting for the task to finish. 
// When the task completes, a callback or promise handles the result.
