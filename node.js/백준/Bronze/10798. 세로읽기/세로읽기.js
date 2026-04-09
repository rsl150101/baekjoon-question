const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const maxLength = Math.max(...input.map((l) => l.split("").length));
let result = "";

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    const line = input[j].split("");
    if (line[i]) {
      result += line[i];
    }
  }
}

console.log(result);