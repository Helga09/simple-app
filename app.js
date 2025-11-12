const http = require('http');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    res.end('<h1>Node.js UI!</h1>');
});

server.listen(PORT, HOST, () => {
    console.log(`Сервер працює на: http://${HOST}:${PORT}/`);
    console.log('Готовий до розгортання з Nixpacks!');
});
