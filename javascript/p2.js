const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
    }
    else if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>HTML...</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error: Page Not Found');
    }

});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});