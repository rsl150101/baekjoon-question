const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testArr = input.slice(1)
let result = ''

testArr.forEach((v) => {
  if(!v) return;
  const [A, B] = v.split(" ").map(Number);
  result += (A + B) + '\n';
});

console.log(result.trimEnd())