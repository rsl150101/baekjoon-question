const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const num = input[0].split("").reverse();
const base = Number(input[1]);

let result = 0;

for (let i = 0; i < num.length; i++) {
  let char = num[i];
  let value;
    
  if(char >= 'A' && char <= 'Z'){
    value = char.charCodeAt(0) - 55
  }else{
      value = Number(char)
  }
  result += value * Math.pow(base, i);
}

console.log(result);