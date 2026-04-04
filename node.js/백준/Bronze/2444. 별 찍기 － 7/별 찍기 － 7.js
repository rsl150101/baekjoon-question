const fs = require('fs');

const input = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 1; i < input * 2; i++) {
  if (input >= i) {
    result += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
  } else {
    result += " ".repeat(i - input) + "*".repeat((input * 2 - i) * 2 - 1) + "\n";
  }
}

console.log(result.trimEnd());
