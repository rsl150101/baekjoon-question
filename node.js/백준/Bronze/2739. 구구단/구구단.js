const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();

const N = parseInt(input);

Array.from({ length:9}, (_v, i) => i + 1).forEach((i) => console.log(`${N} * ${i} = ${N * i}`))