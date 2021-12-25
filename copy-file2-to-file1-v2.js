// Node.js v16.13.1
// Copy file 1 to file 2, example 2

const { copyFile } = require('fs');

copyFile('file2.txt', 'file1.txt', (err) => {
   if (err) throw err;
   console.log('successfully copied file2.txt to file1.txt');
});
