const http = require('http');

const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

    if (request.url === '/') {
        content = '<h1>Welcome Home</h1><p>Let me show you around my beautiful home</P>'
    } else if (request.url === '/living-room') {
        content = '<h1>Living Room</h1><p>Its beautiful dont you think, ive put a lot of effort into the design of the entire plan of this house</p>'
    } else if (request.url === '/kitchen') {
        content = '<h1>Kitchen</h1><p>Many of you may not know this, but i do have quite the passion for cooking! and ive arranged this kitchen, closed plan obviously, to my utmost liking</p>'
    } else if (request.url === '/master-bedroom') {
        content = '<h1>My Room</h1><p>This, this here is for me and the wife. Massively designed master bedroom, equipped with a MASSIVE bathroom, as you can obviously see for yourselves!</p>'
    } else if (request.url === '/guest-bathroom') {
        content = '<h1>Bathroom</h1><p>And here is where you guys do your business. Dont worry, ive made sure to design it for utmost comfrot and hospitality for my guest!</p>'
    } else if (request.url === '/office') {
        content = '<h1>The Office</h1><p>Here is where all the REAL business goes down. the place Ive made sure to design to fit my needs for pure peace and queit to focus on my work</p>'
    } else if (request.url === '/dining-room') {
        content = '<h1>Dining Room</h1><p>Weve made our way finally, to the dining room. Ladies and gentlemen I hope you enjoyed the tour of my house. But now, lets eat, shall we?</p>'
    } else {
        statusCode = 404;
        content = '<h1>404 Not Found</h1><p>The page you are looking for does not exist</p>'
    }

    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(content);
});

server.listen(3000, function() {
    console.log('Dream House successfully built and designed! at http://localhost:3000');
});