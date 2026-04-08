const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

let maxNum = 0;
let row = 1;
let col = 1;

for (let i = 0; i < input.length; i++) {
  const curRow = input[i].split(" ");
  for (let j = 0; j < curRow.length; j++) {
    if (maxNum < Number(curRow[j])) {
      maxNum = Number(curRow[j]);
      row = i + 1;
      col = j + 1;
    }
  }
}

console.log(`${maxNum}\n${row} ${col}`)