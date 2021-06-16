const http = require('http');
const hostname = '127.0.0.1';
const port = 8081;


const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!');
  }, 100);
});

server.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`)
})
