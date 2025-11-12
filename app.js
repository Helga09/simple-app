const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Веб-сервер на Node.js!</h1>');
});

server.listen(PORT, () => {
    console.log(`Сервер працює на: http://localhost:${PORT}/`);
});
