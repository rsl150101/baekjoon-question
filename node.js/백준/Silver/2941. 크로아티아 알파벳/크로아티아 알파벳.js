const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

croatiaAlphabet.forEach((v) => {
  while (input.includes(v)) {
    input = input.replace(v, "+");
    count += 1;
  }
});

input = input.replaceAll("+", "");

count += input.split("").length;

console.log(count);