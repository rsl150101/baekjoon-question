const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

if(A === B){
    if(B === C){
        console.log(10000 + A*1000)
    }else{
        console.log(1000 + A*100)
    }
}else{
    if(B === C){
        console.log(1000 + B*100)
    }else if(A===C){
        console.log(1000 + A*100)
    }else{
        const arr = [A,B,C]
        arr.sort((a,b) => b-a)
        console.log(arr[0]*100)
    }
}