const http = require('http');
const fs = require('fs');
const url = require('url');
const emitter = require('./events');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Routes
    if (parsedUrl.pathname === '/') {
        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else if (parsedUrl.pathname === '/style.css') {
        fs.readFile('./style.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }

    else if (parsedUrl.pathname === '/register') {
        emitter.emit('userRegistered', 'Paul');
        res.end('User Registered Event Triggered');
    }

    else if (parsedUrl.pathname === '/order') {
        emitter.emit('orderPlaced', 'Burger');
        res.end('Order Event Triggered');
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});