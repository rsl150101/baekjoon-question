const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const basketQty = parseInt(input[0].split(' ')[0]);
const mixMethod = input.splice(1);
const basketNumArr = Array.from({length:basketQty}, (_v, i) => i + 1 );

mixMethod.forEach((m)=> {
    const [i, j] = m.split(' ').map(Number);
    const temp = basketNumArr.splice(i - 1, j - i + 1);
    temp.reverse();
    basketNumArr.splice(i - 1, 0, ...temp)
});

console.log(basketNumArr.join(' '));