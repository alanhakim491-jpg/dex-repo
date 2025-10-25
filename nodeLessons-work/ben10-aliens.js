const http = require('http')

const server = http.createServer((request, response) => {
    let statusCode = 200;
    let contentType = 'text/html; charset=utf-8';
    let contentType2 = 'text/plain; charset=utf-8';
    let content = '';
    let content2 = '';
    const alienCalls = ['FOURRR ARMSSS!!', 'HUMUNGOUSARRRR!!', 'GHOSTFREAK!', 'CLOCKVURK!', 'ECHO ECHO!', 'ALIEN X!']
    
    if (request.url === '/four-arms') {
        content = '<h1>Alien 1</h1><img src="https://ben10hero.com/wp-content/uploads/2016/07/four_arms_os_render.png" alt="Four Arms"><p>One of Ben tennyssons most used alien back when he was still figuring things out</p>'
        content2 = 'When brawn meats immaturity'
        console.log(alienCalls[0])
    } else if (request.url === '/humungousaur') {
        content = '<h1>Alien 2</h1><img src="https://ben10hero.com/wp-content/uploads/2016/10/humungousaur_uaf_render.png" alt="Humungousaur"><p>Bens replacement for the heavy hitter alien once his omnitrix evolved</p>'
        content2 = 'Brawns got a bit more mature'
        console.log(alienCalls[1])
    } else if (request.url === '/ghostfreak') {
        content = '<h1>Alien 3</h1><img src="https://ben10hero.com/wp-content/uploads/2016/07/ghostfreak_os.png" alt="Ghostfreak"><p>Bens creepiest alien by far. At some point he even managed to gain self-awareness and escape the ominitrix, haunting Ben for a large portion of the show. Yeesh!</p>'
        content2 = 'Creep factor 1000'
        console.log(alienCalls[2])
    } else if (request.url === '/clockwork') {
        content = '<h1>Alien 4</h1><img src="https://ben10hero.com/wp-content/uploads/2017/03/clockwork_ua.png" alt="Cockwork"><p>He was introduced into the show during Ultimate Alien, and is honestly one of Bens MOST powerful aliens. With the ability to manipulate time, who can stop him, honestly?</p>'
        content2 = 'Time is of the essence'
        console.log(alienCalls[3])
    } else if (request.url === '/echo-echo') {
        content = '<h1>Alien 5</h1><img src="https://ben10hero.com/wp-content/uploads/2016/10/echo_echo_in_omniverse-1.png" alt="Echo Echo"><p>One of my personal favorite aliens Ben has. The ability to control sound and ultrasonic sounds is a feat of immense power. Not to mention his ultimate form is INSANE</p>'
        content2 = 'one, two, three, four... ok I lost track'
        console.log(alienCalls[4])
    } else if (request.url === '/alien-x') {
        content = '<h1>Final Alien</h1><img src="https://ben10hero.com/wp-content/uploads/2016/12/alien_x-_ben_10_omniverse.png" alt="Alien X"><p>Bens MOST powerful alien, no debate. Pure omnipotence at its peak level. He can literally do absolutely anything. Bro he literally created a full blown universe in its ENTIRETY after it was COMPLETELY destroyed 😭!! If only his inner voices would agree more often 😅</p>'
        content2 = 'One Eternity Lategh'
        console.log(alienCalls[5]) 
    } else {
        statusCode = 404;
        content = '<h1>404 Not Found</h1><h3>Unfortunately this page does not exist</h3>'
    }

    response.writeHead(statusCode, { 'Content-Type': contentType })
    response.write(content2)
    response.end(content)
})

server.listen(3000, () => {
    console.log('You can now check out this page at http://localhost:3000')
})