const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      response.writeHead(404);
      response.end(`404 Not Found`);
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  }
  console.log(`Server is listening on http://localhost:${port}`);
});
