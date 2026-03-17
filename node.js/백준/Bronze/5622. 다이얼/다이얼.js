const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('');

let sec = 0;

input.forEach((w)=> {
    const codeNum = w.charCodeAt(0);
    
    if(codeNum < 68) sec += 3;
    else if(codeNum < 71) sec += 4;
    else if(codeNum < 74) sec += 5;
    else if(codeNum < 77) sec += 6;
    else if(codeNum < 80) sec += 7;
    else if(codeNum < 84) sec += 8;
    else if(codeNum < 87) sec += 9;
    else sec += 10;
})

console.log(sec);
