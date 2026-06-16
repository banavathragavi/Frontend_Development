const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is plain text...");
    } else if (req.url === '/about') {
        const readstream = fs.createReadStream("about.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        readstream.pipe(res);
    } else if (req.url === '/json') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ "name": "cvr", "Place": "Hyderabad" }));
        res.end();
    }
    else if(req.url==='/html'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write('<h5>welcome thank you...</h5>');
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Error 404: Page Not Found");
        res.end();
    }
});
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});