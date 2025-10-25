const fs = require('fs');
const path = require('path');
const os = require ('os');

const affirmations = [
    'This is gonna be your year',
    'You are gonna get to where you want',
    'You will achieve all that it is youve wanted',
    'Your future is in your hands!'
]

const desktopPath = path.join(os.homedir(), 'OneDrive', 'Desktop', 'Code', 'nodeLessons-work');

function saveRandomAffirmationToDesktop() {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

    const newFilePath = path.join(desktopPath, 'daily-affirmations.txt');

    fs.writeFile(newFilePath, randomAffirmation, (err) => {
        if (err) {
            console.error('Error writing the affirmation to the file:', err);
        } else {
          console.log('Read affirmation saved to:', newFilePath);
        }
    });
}

saveRandomAffirmationToDesktop();