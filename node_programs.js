const http = require('node:http');
const { URL } = require('url');

const server = http.createServer((req, res) => {

  const myUrl = new URL(req.url, "http://localhost:3000");

  if (myUrl.pathname === "/calc") {

    const a = Number(myUrl.searchParams.get("a"));
    const b = Number(myUrl.searchParams.get("b"));
    const op = myUrl.searchParams.get("op");   // operation from user

    let result;

    if (op === "add") {
      result = "Addition: " + (a + b);
    }
    else if (op === "sub") {
      result = "Subtraction: " + (a - b);
    }
    else if (op === "mul") {
      result = "Multiplication: " + (a * b);
    }
    else if (op === "div") {
      result = "Division: " + (a / b);
    }
    else {
      result = "Invalid operation! Use add, sub, mul, or div.";
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(result);

  } else {
    res.end("Use: /calc?a=10&b=5&op=add");
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
