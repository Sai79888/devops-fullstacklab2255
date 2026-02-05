const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);

  if (req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>Node.js HTML Response</h1>
          <p>This is served from Node.js</p>
        </body>
      </html>
    `);
  }

  else if (req.url === "/json") {
    const data = { name: "Node Server", status: "Running" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }

  else if (req.url === "/file") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("menubar.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
        return;
      }
      res.end(data);
    });
  }

  else if (req.url.startsWith("/add")) {
    const q = parsedUrl.query;
    const sum = Number(q.a) + Number(q.b);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Sum is ${sum}`);
  }

  else if (req.url === "/form" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form method="POST" action="/form">
        Name: <input name="name"><br>
        Email: <input name="email"><br>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  else if (req.url === "/form" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      res.end("Form submitted: " + body);
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
