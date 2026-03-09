const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input[0]);
let result = '';

for (let i = 1; i <= T; i++) {
    if (!input[i]) continue;
    
    const [A, B] = input[i].split(' ').map(Number);
    result += (A + B) + '\n';
}

process.stdout.write(result);