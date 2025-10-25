const http = require('http');

const server = http.createServer((request, response) => {

    let visitors = 10;

    if (request.method === 'GET') {
        visitors++;
        console.log(`visitor count: ${visitors}`)
    }
})

server.listen(3000, () => {
    console.log('Visitor Counter ready to view at http://localhost:3000')
})