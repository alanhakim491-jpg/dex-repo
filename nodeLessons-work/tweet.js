const http = require('http');

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let tweet = '';
        const today = new Date();

        request.on('data', (chunk) => {
            tweet += chunk;
        });

        request.on('end', () => {
            console.log('New tweet:', tweet, today);

            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
            response.end('Tweet received')
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8'})
        response.end('Go back to terminal')
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});