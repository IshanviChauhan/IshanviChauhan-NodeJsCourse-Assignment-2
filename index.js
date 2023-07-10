const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body
  res.write('Hello, world!');
  
  // End the response
  res.end();
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
