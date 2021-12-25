// Node.js v16.13.1
// Copy file 2 to file 1, example 3

const fs = require("fs");
const file1 = "file1.txt", file2 = "file2.txt";

fs.copyFile(file2, file1, fs.constants.COPYFILE_EXCL, (err) => {
   if (err) throw err;
   console.log("successfully copied" +  file2 + " to " + file1);
});
