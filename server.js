const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send a response
  res.end('Hello, World!');
});

// Start the server on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});