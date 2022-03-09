const { deepEqual } = require('assert');

// Inaccurate, my failed math version
/*

const sharedBits = (a , b) =>
  a > 1 && b > 1 &&
  (a & b) % 2 !== 0

*/

// this works
const sharedBits = (a , b) =>
  (a & b)
    .toString(2)
    .split('')
    .filter(b => b === '1')
    .length >= 2

const TESTS = [
  [1, 2, false],
  [16, 8, false],
  [1, 1, false],
  [2, 3, false],
  [7, 10, false],
  [43, 77, true],
  [7, 15, true],
  [23, 7, true],
];

TESTS.forEach(([a, b, c]) =>
   deepEqual(sharedBits(a, b), c, `sharedBits(${a}, ${b}) should be equal ${c}`)
)
console.log('OK')

