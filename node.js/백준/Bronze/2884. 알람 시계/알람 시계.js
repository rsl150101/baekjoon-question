const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);
const earlyM = M -45

if(earlyM >= 0){
    console.log(`${H} ${earlyM}`)
}else{
    if(H !== 0){
        console.log(`${H-1} ${60+earlyM}`)
    }else{
        console.log(`23 ${60+earlyM}`)
    }
}