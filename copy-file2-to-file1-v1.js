// Node.js v16.13.1
// Copy file 2 to file 1, example 1

const fs = require('fs');

fs.copyFile('file2.txt', 'file1.txt', (err) => {
   if (err) throw err;
   console.log('successfully copied file2.txt to file1.txt');
});
