const { deepEqual } = require('assert');

const solve = arr => Array.from(
  new Set(arr)
).reduce((acc, num) => acc + num)

deepEqual(solve([1,-1,2,-2,3]),3);
deepEqual(solve([-3,1,2,3,-1,-4,-2]),-4);
deepEqual(solve([1,-1,2,-2,3,3]),3);
deepEqual(solve([-110,110,-38,-38,-62,62,-38,-38,-38]),-38);
deepEqual(solve([ -9,-105,-9,-9,-9,-9,105]),-9);

console.log('OK')

