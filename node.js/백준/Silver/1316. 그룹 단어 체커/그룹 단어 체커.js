const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').splice(1);

let count = 0;
input.forEach((v) => {
  let prevChar = "";
  let isGroupWord = true;
  const know = new Set();

  for (let i = 0; i < v.length; i++) {
    if (prevChar !== v[i]) {
      if (know.has(v[i])) {
        isGroupWord = false;
        break;
      }
      know.add(v[i]);
    }
    prevChar = v[i];
  }

  if (isGroupWord) count += 1;
});

console.log(count);