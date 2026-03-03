const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const totalPrice = parseInt(input[0]);
const totalGoods = parseInt(input[1]);

const calculatePrice = Array.from({ length: totalGoods }, (_v, i) => i + 2)
  .map((i) => {
    const [price, count] = input[i].split(" ");
    return parseInt(price) * parseInt(count);
  })
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalPrice === calculatePrice ? "Yes" : "No")