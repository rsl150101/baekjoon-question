const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().toLowerCase().split("").sort();

const inputSet = new Set(input);
let count = 0;
let alphabet = null;

inputSet.forEach((a) => {
  const firstIndex = input.indexOf(a);
  const lastIndex = input.lastIndexOf(a);
  const diffIndex = lastIndex - firstIndex;

  if (diffIndex > count) {
    count = diffIndex;
    alphabet = a;
  } else if (diffIndex === count) {
    if (alphabet) {
      alphabet = "?";
    } else {
      alphabet = a;
    }
  }
});

console.log(alphabet.toUpperCase());