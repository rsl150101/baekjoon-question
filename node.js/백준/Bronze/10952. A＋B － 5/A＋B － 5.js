const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testArr = input.slice(0,-1)
let result = ''

testArr.forEach((v) => {
  const [A, B] = v.split(" ").map(Number);
  if(A+B===0) return;
  result += (A + B) + '\n';
});

console.log(result)