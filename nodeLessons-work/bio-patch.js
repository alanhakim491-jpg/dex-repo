const http = require('http');

let bio = 'My name is Nate Higgers, and i Hate Ni--';
let contentType ='text/plain; charset=utf-8'

const server = http.createServer((request, response) => {
    if (request.method === 'PATCH') {
        let patchBio = '';

        request.on('data', (chunk) => {
            patchBio += chunk;
        });

        request.on('end', () => {
            console.log('Original Bio:', bio);
            bio += patchBio;
            console.log('Edited Bio:', bio);

            response.writeHead(200, { 'Content-Type': contentType });
            response.end('Bio was succesffully edited!')
        })
    } else {
        response.writeHead(404, { 'Content-Type': contentType });
        response.end('Go back to terminal!');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});