const os = require('os');

console.log("Platform:", os.platform());
console.log("Hostname:", os.hostname());
console.log("Total RAM (GB):", Math.round(os.totalmem() / (1024*1024*1024)));
console.log("Free RAM (GB):", Math.round(os.freemem() / (1024*1024*1024)));
