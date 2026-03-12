const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').slice(1)[0].split(' ').map(Number);

console.log(`${Math.min(...input)} ${Math.max(...input)}`)