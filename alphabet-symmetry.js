const { deepEqual } = require('assert');

const lowerA = 'a'.charCodeAt(0)

const solve = arr => arr.map(alpha =>
  alpha
    .toLowerCase()
    .split('')
    .filter((letter,idx) => letter.charCodeAt(0) - lowerA == idx)
    .length
)

deepEqual(solve(["abode","ABc","xyzD"]),[4,3,1]);
deepEqual(solve(["abide","ABc","xyz"]),[4,3,0]);
deepEqual(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
deepEqual(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);

console.log('OK')

