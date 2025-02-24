const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/home":
      res.statusCode = 200;
      res.end("<h1>This is Home page</h1>");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("<h1>This is About page</h1>");
      break;

    default:
      res.statusCode = 404;
      res.end("<h1>404 Not Found</h1>");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
