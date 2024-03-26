const http = require('node:http');
const HOST = 'localhost';
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.end("Hello, Galvanize!");
  console.log(`Server running at ${HOST}:${PORT}`);
});
server.listen(PORT, HOST, () => { });