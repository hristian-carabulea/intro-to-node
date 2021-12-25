// Node.js v16.13.1
// Copy file 1 to file 2, example 3

const fs = require("fs");
const file1 = "file1.txt", file2 = "file2.txt";

fs.copyFile(file1, file2, fs.constants.COPYFILE_EXCL, (err) => {
   if (err) throw err;
   console.log("successfully copied" +  file1 + " to " + file2);
});
