// Node.js v16.13.1
// Delete file1, example 2

const fs = require('fs');

fs.unlink('file1.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted file1.txt');
});
