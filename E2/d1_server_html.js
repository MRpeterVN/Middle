const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <h1>Hello World</h1>
    <p>This is a HTML response</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
