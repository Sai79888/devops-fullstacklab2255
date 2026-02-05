const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  // Serve your main HTML page
  if (req.url === "/" || req.url === "/file") {
    fs.readFile("menubar.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("HTML file not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // Serve the image (THIS IS THE IMPORTANT PART)
  else if (req.url === "/logo.png") {
    fs.readFile("logo.png", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Logo not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    });
  }

  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
