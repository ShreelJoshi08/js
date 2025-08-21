const os=require('os');
const fs=require('fs');
const path=require('path');

console.log('OS Type:', os.hostname());
console.log('OS Platform:', os.cpus().length);
console.log('OS Architecture:', os.arch());

