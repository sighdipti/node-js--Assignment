const path = require('path');

const filePath = '/user/local/bin/file.txt';

console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

const newFilePath = path.join(__dirname, 'newDir', 'newFile.txt');
console.log('New File Path:', newFilePath);