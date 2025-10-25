const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('📚🕒📌🖥🦉🤝🏻🫷🏿🤯📚📅📌');
});

server.listen(3000, () => {
    console.log('Server succesfully created at http://localhost:3000/')
});