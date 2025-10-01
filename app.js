const http = require('http');
const { handleGetRequest } = require('./requestHandler');

// Create server instance
const server = http.createServer((req, res) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});