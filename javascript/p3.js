const os = require('os');

console.log('os total mem ', os.totalmem());
console.log('os freemem ', os.freemem());
console.log(os.cpus().length);
console.log(os.cpus());