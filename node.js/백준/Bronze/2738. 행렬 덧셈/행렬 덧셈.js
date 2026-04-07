const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const [rowLength, colLength] = input[0].split(" ").map(Number);

const firstMatrix = input.splice(1, rowLength);
const secondMatrix = input.splice(1, rowLength);
let result = "";

for (let i = 0; i < rowLength; i++) {
  const firstMatrixRow = firstMatrix[i].split(" ").map(Number);
  const secondMatrixRow = secondMatrix[i].split(" ").map(Number);

  result += firstMatrixRow.map((v, i) => v + secondMatrixRow[i]).join(" ") + "\n";
}

console.log(result.trim());