const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const groupArr = [];
const result = [];

let cursor = 0;
let groupNum = 1;

while (input[cursor] !== "0") {
  let group = [];
  const peopleCount = parseInt(input[cursor]);
  const nastyArr = [];

  group.push(`Group ${groupNum}`);
  groupNum += 1;

  const papers = input.slice(cursor, cursor + peopleCount + 1).splice(1);

  papers.forEach((paper, i) => {
    const [paperOner, ...rest] = paper.split(" ");
    rest.forEach((w, j) => {
      if (w === "N") {
        nastyArr.push(
          `${papers[(i - (j + 1) + peopleCount) % peopleCount].split(" ")[0]} was nasty about ${paperOner}`,
        );
      }
    });
  });

  if (nastyArr.length !== 0) {
    group = group.concat(nastyArr);
  } else {
    group.push("Nobody was nasty");
  }
  cursor += peopleCount + 1;
  result.push(group.join("\n"));
}

console.log(result.join("\n\n"));