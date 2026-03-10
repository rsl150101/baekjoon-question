const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testArr = input.slice(1)
let result = ''

testArr.forEach((v, i) => {
  if(!v) return;
  const [A, B] = v.split(" ").map(Number);
  result += `Case #${i+1}: ${A} + ${B} = ${A + B}\n`;
});

console.log(result)