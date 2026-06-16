const fs = require('fs');

fs.writeFile('sample.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File created successfully');
});
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
fs.appendFile('sample.txt', '\nWelcome to FS Module', (err) => {
    if (err) throw err;
    console.log("Data appended sucessfully");
});