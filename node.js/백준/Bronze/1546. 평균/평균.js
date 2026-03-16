const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const subjectCount = parseInt(input[0]);
const subjectScoreArr = input[1].split(' ').map(Number);
const maxScore = Math.max(...subjectScoreArr);

const riggedAverage = subjectScoreArr.reduce((acc, cur) => {
    return acc + cur/maxScore*100
}, 0)/subjectCount;

console.log(riggedAverage)