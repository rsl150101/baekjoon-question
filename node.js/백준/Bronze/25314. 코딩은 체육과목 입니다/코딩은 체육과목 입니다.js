const fs = require('fs');

const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const longCount = input / 4;

console.log("long ".repeat(longCount) + "int");