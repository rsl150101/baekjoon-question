const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('-');

const puzzles = input[1].trim().slice(0, -1).trim().split("\n");
const words = input[0];

const result = [];

function ableWord(word, puzzle) {
  let isCollected = 0;
  let wordCopy = word;

  for (let i = 0; i < puzzle.length; i++) {
    if (wordCopy.includes(puzzle[i])) {
      isCollected += 1;
      wordCopy = wordCopy.replace(puzzle[i], "");
    }
  }

  return isCollected >= word.length && word;
}

puzzles.forEach((puzzle) => {
  const ableWords = words.split("\n").filter((w) => ableWord(w, puzzle));
  const centerWords = ableWords.map((w) => new Set(w.split("")));
  const countAlphabet = {};
  const stringArr = [];

  puzzle.split("").forEach((w) => {
    countAlphabet[w] = 0;
  });

  centerWords.forEach((w) => {
    w.forEach((a) => {
      countAlphabet[a] += 1;
    });
  });

  const min = Math.min(...Object.values(countAlphabet));
  const max = Math.max(...Object.values(countAlphabet));

  const minAlphabet = [];
  const maxAlphabet = [];

  for (const [key, value] of Object.entries(countAlphabet)) {
    if (value === min) {
      minAlphabet.push(key);
    } else if (value === max) {
      maxAlphabet.push(key);
    }
  }

  if (minAlphabet.length !== 0) {
    stringArr.push(minAlphabet.sort().join(""));
    stringArr.push(min);
  } else {
    stringArr.push(maxAlphabet.sort().join(""));
    stringArr.push(max);
  }

  if (maxAlphabet.length !== 0) {
    stringArr.push(maxAlphabet.sort().join(""));
    stringArr.push(max);
  } else {
    stringArr.push(minAlphabet.sort().join(""));
    stringArr.push(min);
  }

  result.push(stringArr.join(" "));
});

console.log(result.join("\n"));