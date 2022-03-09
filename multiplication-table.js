const { deepEqual } = require('assert');

const multiplicationTable = size =>
  new Array(size)
    .fill(null)
    .map((_,n) => new Array(size)
      .fill(null)
      .map((_,m) => (n+1) * (m+1))
    )

deepEqual(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);

console.log('OK')

