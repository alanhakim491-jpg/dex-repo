const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'})
    console.log('App name: ');
    console.log('Create: ');
    console.log('Read: ');
    console.log('Update: ');
    console.log('Delete: ');
    response.end('');
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000')
})