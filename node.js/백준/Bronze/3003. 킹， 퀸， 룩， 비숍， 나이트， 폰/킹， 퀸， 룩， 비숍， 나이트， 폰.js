const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const piece = [1, 1, 2, 2, 2, 8];

const result = piece.map((v, i) => v - input[i]);

console.log(result.join(" "));