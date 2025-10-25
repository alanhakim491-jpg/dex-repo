
const fs = require('fs');

fs.unlink('seventh-grade.txt', (err) => {
  if (err) {
    console.error('Error deleting file', err);
  } else {
    console.log('item successfully deleted');
  }
} );

