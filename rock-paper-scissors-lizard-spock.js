const { deepEqual } = require('assert');


/*
Scissors > Paper
Scissors > Lizard
Paper > Rock
Paper > Spock
Rock > Lizard
Rock > Scissors
Lizard > Spock
Lizard > Paper
Spock > Scissors
Spock > Rock
*/

const SC = "scissors",
  P = "paper",
  R = "rock",
  L = "lizard",
  SP = "spock",
  DRAW = "Draw!",
  P1 = "Player 1 Won!",
  P2 = "Player 2 Won!"

const OUTCOMES = new Set([
  SC + P,
  SC + L,
  P + R,
  P + SP,
  R + L,
  R + SC,
  L + SP,
  L + P,
  SP + SC,
  SP + R,
])

const rpsls = (pl1, pl2) => {
  if (pl1 === pl2) return DRAW
  return OUTCOMES.has(pl1 + pl2) ? P1 : P2
}


deepEqual(rpsls('rock', 'lizard'), 'Player 1 Won!');
deepEqual(rpsls('paper', 'rock'), 'Player 1 Won!');
deepEqual(rpsls('scissors', 'lizard'), 'Player 1 Won!');
deepEqual(rpsls('lizard', 'paper'), 'Player 1 Won!');
deepEqual(rpsls('spock', 'rock'), 'Player 1 Won!');
deepEqual(rpsls('lizard', 'scissors'), 'Player 2 Won!');
deepEqual(rpsls('spock', 'lizard'), 'Player 2 Won!');
deepEqual(rpsls('paper', 'lizard'), 'Player 2 Won!');
deepEqual(rpsls('scissors', 'spock'), 'Player 2 Won!');
deepEqual(rpsls('rock', 'spock'), 'Player 2 Won!');
deepEqual(rpsls('rock', 'rock'), 'Draw!');
deepEqual(rpsls('spock', 'spock'), 'Draw!');

console.log('OK')

