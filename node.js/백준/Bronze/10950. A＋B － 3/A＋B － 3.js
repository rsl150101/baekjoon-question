const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const repeatCount = parseInt(input[0]);

Array.from({ length: repeatCount }, (_v, i) => i + 1).forEach((i) => {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
});