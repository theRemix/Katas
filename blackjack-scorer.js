const { deepEqual } = require('assert');

const scores = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 10,
  "Q": 10,
  "K": 10,
  "A": 11, // or 1
}

const scoreHand = cards => {
  let score = cards
    .map(c => scores[c])
    .reduce((acc, c) => acc + c)

  while (score > 21 && cards.includes("A")) {
    score -= 10
    cards.splice(cards.indexOf("A"), 1)
  }

  return score
}

deepEqual(scoreHand(["2", "3"]), 5);
deepEqual(scoreHand(["7", "7", "8"]), 22);
deepEqual(scoreHand(["4", "7", "8"]), 19);
deepEqual(scoreHand(["K", "J", "Q"]), 30);
deepEqual(scoreHand(["A", "3"]), 14);
deepEqual(scoreHand(["A", "A"]), 12);
deepEqual(scoreHand(["A", "2", "A", "9", "9"]), 22);

console.log('OK')

