const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').splice(1);

let count = 0;
input.forEach((v) => {
  let prevAlphabet = v[0];
  for (let i = 0; i < v.length; i++) {
    if (prevAlphabet !== v[i + 1]) {
      if (v.lastIndexOf(prevAlphabet) > i) {
        break;
      } else {
        prevAlphabet = v[i + 1];
      }
    }

    if (i === v.length - 1) {
      count += 1;
    }
  }
});

console.log(count);