const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = ''

input.forEach((v) => {
  const [A, B] = v.split(" ").map(Number);
  result += (A + B) + '\n';
});

console.log(result)