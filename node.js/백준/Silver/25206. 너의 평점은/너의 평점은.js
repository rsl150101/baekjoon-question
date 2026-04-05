const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split("\n").filter((s) => s.split(" ")[2] !== "P");

const score = [
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
];

const gradesScoreMap = new Map(score);

const gradesScore = input.map((s) => gradesScoreMap.get(s.split(" ")[2]) * Number(s.split(" ")[1]));
const totalGradesScore = gradesScore.reduce((acc, cur) => acc + cur, 0);
const totalCredit = input
  .map((s) => s.split(" ")[1])
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalGradesScore / totalCredit);