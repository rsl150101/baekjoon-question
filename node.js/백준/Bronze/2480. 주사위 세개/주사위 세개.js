const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ').map((v)=> Number(v));

const uniqueNumArr = new Set(input)

if(uniqueNumArr.size === 1){
    console.log(10000 + input[0] * 1000)
}else if(uniqueNumArr.size === 2){
    input.sort((a, b) => a-b)
    console.log(1000 + input[1] * 100)
}else{
    console.log(Math.max(...input) * 100)
}