const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString();

const n = parseInt(input);

const sum = Array.from({length: n}, (_v,i)=> i+1).reduce((acc, cur)=> acc + cur,0);

console.log(sum)