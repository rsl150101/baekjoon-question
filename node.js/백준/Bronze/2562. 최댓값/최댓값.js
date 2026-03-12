const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const maxNum = Math.max(...input)

console.log(`${maxNum}\n${input.indexOf(maxNum)+1}`)

