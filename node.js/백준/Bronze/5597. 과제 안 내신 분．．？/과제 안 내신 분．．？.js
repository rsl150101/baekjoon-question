const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const inputSet = new Set(input);
const notSubmit = Array.from({ length: 30 }, (_v, i) => i + 1).filter((n) => !inputSet.has(n));

console.log(notSubmit.join('\n'));

