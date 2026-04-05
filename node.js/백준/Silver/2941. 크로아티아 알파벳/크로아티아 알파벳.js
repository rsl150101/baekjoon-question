const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of croatiaAlphabet) {
  input = input.replaceAll(alphabet, "*");
}

console.log(input.length);