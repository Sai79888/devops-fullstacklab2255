const fs = require('fs');

// create file
fs.writeFileSync("sample.txt", "Learning Node.js FS module");
console.log("File created");

// read file
const data = fs.readFileSync("sample.txt", "utf-8");
console.log("File content:", data);
