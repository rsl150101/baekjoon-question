const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const timeArr = input[0].split(' ');
const A = parseInt(timeArr[0]);
const B = parseInt(timeArr[1]);
const C = parseInt(input[1]);

if(B+C >=60){
    const overMin = Math.trunc((B+C)/60)
    const hour = (A + overMin) >= 24 ? A + overMin - 24 : A + overMin 
    console.log(`${hour} ${B+C-(overMin * 60)}`)
}else{
    console.log(`${A} ${B+C}`)
}