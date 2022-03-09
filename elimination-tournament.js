const { deepEqual } = require('assert');


!!!!!!!!!! i don't think this will work, do it over


const fight = scores => {
  // actually fight when there is just 1v1
  if(scores.length === 2) return Math.max(...scores)

  // // handle odd participant count
  // if(scores.length % 2 > 0) return [scores, scores[scores.length], new Array(scores.length-1 / 2)
  //   .fill(null)
  //   .map((_,i) => fight([scores[i],scores[i+1]]))]

  // just the winners
  return [scores, new Array(scores.length / 2)
    .fill(null)
    .map((_,i) => fight([scores[i],scores[i+1]]))]
}

const tourney = scores =>
  fight(scores)


const input1 = [9, 5, 4, 7, 6, 3, 8, 2];
const output1 = [
  [9, 5, 4, 7, 6, 3, 8, 2],
  [9, 7, 6, 8],
  [9, 8],
  [9]
];
const userOutput1 = tourney(input1);
deepEqual(userOutput1, output1);

// const input2 = [9, 5, 4, 7, 6, 3, 8];
// const output2 = [
//   [9, 5, 4, 7, 6, 3, 8],
//   [8, 9, 7, 6],
//   [9, 7],
//   [9]
// ];

// const userOutput2 = tourney(input2);
// deepEqual(userOutput2, output2);

console.log('OK')

