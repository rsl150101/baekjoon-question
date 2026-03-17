const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n')[1].split('').map(Number);

const result = input.reduce((acc, cur)=> acc+cur,0);

console.log(result)