const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map((i)=> Number(i)%42);

const inputSet = new Set(input);

console.log(inputSet.size);



