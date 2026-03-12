const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const basketQty = input[0].split(' ').map(Number)[0];
const pushBallMethod = input.slice(1);

const basketArr = Array(basketQty).fill(0)
pushBallMethod.forEach((m)=> {
    const [start, end, value] = m.split(' ').map(Number);
    basketArr.fill(value, start-1, end)
})

console.log(basketArr.join(' '))