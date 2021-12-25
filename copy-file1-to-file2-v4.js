// Node.js v16.13.1
// Copy file 1 to file 2, example 4

const { constants}  = require('fs');
const { copyFile } = require('fs');

const file1 = 'file1.txt', file2 = 'file2.txt';

copyFile(file1, file2, constants.COPYFILE_EXCL, (err) => {
   if (err) throw err;
   console.log('successfully copied' +  file1 + ' to ' + file2);
});
