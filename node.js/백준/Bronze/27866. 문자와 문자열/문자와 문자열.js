const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const [word, index] = input;

console.log(word.at(parseInt(index)-1));