const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n').splice(1);

const result = [];

input.forEach((v)=>{
    const [count, word] = v.split(' ');
    const wordArr = word.split('').map((w)=> w.repeat(parseInt(count)));
    result.push(wordArr.join(''));
})

console.log(result.join('\n'))