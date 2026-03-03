const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const timeArr = input[0].split(' ');
const A = parseInt(timeArr[0]);
const B = parseInt(timeArr[1]);
const C = parseInt(input[1]);

const totalMin = A *60 + B + C;
const hour = Math.trunc(totalMin/60)%24
const min = totalMin%60

console.log(`${hour} ${min}`)