const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const compareNum = parseInt(input[0].split(' ')[1]);
const lineArr = input[1].split(" ").map(Number);

console.log(lineArr.filter((i)=> i < compareNum).join(' '))