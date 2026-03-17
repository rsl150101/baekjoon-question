const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ').filter((word)=> word !== "").length;

console.log(input)