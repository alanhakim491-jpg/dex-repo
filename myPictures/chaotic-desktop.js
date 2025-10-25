const path = require('path');
const fullPath = path.join('C:', 'Users', 'Alan M', 'OneDrive', 'Desktop', 'Code', 'myPictures', 'chaotic-desktop.js')

const files = ['IMG_7705.jpg', 'resto_menu.jpg', 'weather-pic.png', 'cat-app_pic.png', 'CV_pic.png']
const imageExtensions = ['.jpg', '.png', '.gif', '.JPG', '.PNG', '.GIF']

const firstImage = files.find(file => imageExtensions.includes(path.extname(file)));

if (firstImage) {
    console.log('First image file found:', path.join(fullPath, firstImage))
} else {
    console.log('No image files found!',)
}

