const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();

const reverseInput = input.split('').reverse().join('');

if(input === reverseInput){
    console.log(1);
}else{
    console.log(0);
}