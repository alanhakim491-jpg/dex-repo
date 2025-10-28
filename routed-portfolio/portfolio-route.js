const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (request.url === '/' || request.url === '/home') {
        filePath = './pages/home.html'
    } else if (request.url === '/about') {
        filePath = './pages/about.html'
    } else if (request.url === '/my-work') {
        filePath = './pages/my-work.html'
    } else if (request.url === '/life') {
        filePath = './pages/life.html'
    } else if (request.url === '/contact') {
        filePath = './pages/contact.html'
    } else if (
        request.url === '/routed-portfolio_script.js' ||
        request.url === '/routed-portfolio_styles.css' ||
        request.url.startsWith('/pics') ||
        request.url.startsWith('/certificates-CVs/')
    ) {
        filePath = '.' + request.url;
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
        response.end(`<h1>This page currently doesnt exist</h1>`);
        return;
    }

    const ext = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.JPG': 'image/jpeg',
        '.pdf': 'application/pdf'
    } [ext] || 'text/plain'

    fs.readFile(filePath, (err, content) => {
        if (err) {
            response.writeHead(404);
            response.end('404 not found');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content);
        }
    })
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
});