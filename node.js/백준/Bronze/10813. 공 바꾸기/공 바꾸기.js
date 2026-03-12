const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const basketQty = input[0].split(' ').map(Number)[0];
const pushBallMethod = input.slice(1);

const basketArr = Array.from({length: basketQty}, (_v,i)=> i+1);

pushBallMethod.forEach((m)=> {
    const [i, j] = m.split(' ').map(Number);
    [basketArr[i-1], basketArr[j-1]] = [basketArr[j-1], basketArr[i-1]];
})

console.log(basketArr.join(' '))