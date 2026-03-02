const fs = require('fs');

const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const leapYear = input%400 === 0 ? 1 : input%4 !== 0 ? 0 : input%100 === 0 ? 0 :1;

console.log(leapYear)