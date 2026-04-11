const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const num = input[0].split("").reverse();
const base = Number(input[1]);

const numCode = [];
let result = 0;

for (let i = 0; i < 10; i++) {
  numCode.push(String(i));
}

for (let i = 65; i < 91; i++) {
  numCode.push(String.fromCharCode(i));
}

for (let i = 0; i < num.length; i++) {
  result += numCode.indexOf(num[i]) * Math.pow(base, i);
}

console.log(result);