const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-08' });
    response.write('Welcome to Noodle Doodle');
    response.write('================');
    response.write('AFTER HOURS MENU');
    response.write('================');
 
    response.write('RAMEN')
    response.write('                                                              ');
    response.write('1. Tonkotsu Pork Ramen');
    response.write('                                                         ');
    response.write('2. Yuzu Yellow')

    response.write('EXTRA TOPPINGS');
    response.write('                                                              ');
    response.write('1. Soft Boiled Egg');
    response.write('                                                              ');
    response.write('1a. Soy Marinated Egg');
    response.write('                                                              ');
    response.write('2. Fried Shallots, Super Crispy');
    response.write('                                                              ');
    response.write('3. idk');
    response.write('                                                         ');

    response.end('Enjoy!');
});

server.listen(3000, () => {
    console.log('Ramen Shop Built!');
});