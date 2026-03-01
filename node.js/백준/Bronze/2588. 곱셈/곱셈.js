const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = parseInt(input[0]);
const B = String(input[1]);

const digitProducts = B.split("").reverse().map((v)=> A*parseInt(v));

digitProducts.forEach((v)=> console.log(v));
console.log(A*parseInt(B));
