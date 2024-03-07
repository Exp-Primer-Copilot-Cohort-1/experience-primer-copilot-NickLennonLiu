// Create web server
// Create a web server that listens to incoming requests and serves a static HTML file.
// The server should listen to port 8080.
// The server should respond with the content of the file index.html for all requests.
// If the file is not found, the server should respond with a 404 status code.

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(8080);