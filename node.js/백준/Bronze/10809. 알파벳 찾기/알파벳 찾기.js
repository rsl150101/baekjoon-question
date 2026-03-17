const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();

const alphabet = Array.from({length:26}, (_v,i)=> String.fromCharCode(i+97));

console.log(alphabet.map((v)=> input.indexOf(v)).join(' '));
