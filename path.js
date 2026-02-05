const path = require('path');

const fullPath = path.join(__dirname, "sample.txt");

console.log("File path:", fullPath);
console.log("File name:", path.basename(fullPath));
