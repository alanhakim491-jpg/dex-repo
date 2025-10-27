const http = require('http');

const contentType = 'text/plain; charset=utf-9'
let status = 'Whatever it is today, this shit just aint my day yo';

const server = http.createServer((request, response) => {
    if (request.method === 'DELETE') {
        if (!status) {
            console.log('No status exists to delete');
            response.writeHead(200, { 'Content-Type': contentType });
            response.end('No status');
        } else {
            console.log('Your Status:', status);
            console.log('Are you sure you want to delete?')
            status = null;
            console.log('Status Deleted!')
            response.writeHead(200, { 'Content-Type': contentType });
            response.end('Status Deleted!');
        }
    } else {
        response.writeHead(404, { 'Content-Type': contentType });
        response.end('Go back tO Terminal');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});