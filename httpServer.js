const http = require('http');
const url = require('url');

const users = [
    { name: "John" },
    { name: "Alice" }
];

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    // Home route
    if (parsedUrl.pathname === '/') {
        res.end('Welcome');
    }

    // Users API
    else if (parsedUrl.pathname === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }

    // Greet with query param
    else if (parsedUrl.pathname === '/greet') {
        const name = parsedUrl.query.name || 'Guest';
        res.end(`Hello ${name}`);
    }

    // 404 route
    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

// Run server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});