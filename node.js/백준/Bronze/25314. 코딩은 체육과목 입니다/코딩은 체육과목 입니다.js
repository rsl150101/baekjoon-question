const fs = require('fs');

const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const longCount = input/4

console.log(Array.from({length: longCount}, ()=> "long").join(" ") + " int")

