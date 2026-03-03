const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const totalPrice = parseInt(input[0]);
const goodsList = input.slice(2);

const calculatePrice = goodsList.reduce((acc, line)=>{
    if(!line) return acc;
    const [price, qty] = line.split(" ").map(Number);
    return acc + (price * qty);
},0);

console.log(totalPrice === calculatePrice ? "Yes" : "No");