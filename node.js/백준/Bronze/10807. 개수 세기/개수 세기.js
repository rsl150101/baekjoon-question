const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);

const [line, foundNum] = input
const lineArr = line.split(' ')
console.log(lineArr.filter((i)=> i === foundNum).length)

