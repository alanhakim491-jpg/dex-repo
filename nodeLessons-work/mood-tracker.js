const http = require('http');

let mood = '';
const contentType = 'text/html; charset=utf-8'
const contentType2 = 'text/plain; charset=utf-8'

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        console.log(`Current Mood: ${mood}`)
        response.writeHead(200, { 'Content-Type': contentType })
        response.end(mood? `<h1>Current Mood: ${mood}</h1>` : `<h1>You MUST tell me what you feel</h1>`)
    } else if (request.method === 'PATCH') {
        let newMood = ''
        request.on('data', (chunk) => {
            newMood += chunk;
        })
        request.on('end', () => {
            console.log('Current Mood:', mood);
            mood += newMood;
            console.log('Edited Mood:', mood);
            response.writeHead(200, { 'Content-Type': contentType2 });
            response.end('Mood successfully edited')
        })
    } else if (request.method === 'POST') {
        mood = '';
        request.on('data', (chunk) => {
            mood += chunk;
        });
        request.on('end', () => {
            console.log('New Mood:', mood);
            response.writeHead(200, { 'Content-Type': contentType2 });
            response.end('New Mood Added')
        });
    } else if (request.method === 'DELETE') {
        if (!mood) {
            console.log('Nothings here to delete 🤔');
            response.writeHead(200, { 'Content-Type': contentType2 })
            response.end('Nothings Here 🤷‍♂️')
        } else {
            console.log('Your Status:', mood);
            console.log('Are you sure you want to delete?')
            mood = '';
            console.log('Everything is succesffully deleted!')
            response.writeHead(200, { 'Content-Type': contentType2 });
            response.end('Everything is successfully deleted!')
        }
    } else { 
        response.writeHead(404, { 'Content-Type': contentType } )
        response.end(`<h1>Go Back to Terminal</h1>`)
    }
})

server.listen(3000, () => {
    console.log('Mood Server running at http://localhost:3000');
})