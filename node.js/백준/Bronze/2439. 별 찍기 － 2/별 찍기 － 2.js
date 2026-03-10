const fs = require('fs');

const input = parseInt(fs.readFileSync('/dev/stdin').toString());
let result = ''

Array.from({length:input}, (_v,i)=> i+1).forEach((v)=>{
    result += ' '.repeat(input-v) + '*'.repeat(v)+ '\n'
})

console.log(result)