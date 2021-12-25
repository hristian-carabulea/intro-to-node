// Node.js v16.13.1
// Delete file1, example 1

const { unlink } = require('fs');

unlink('file1.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted file1.txt');
});
