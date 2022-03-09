const { deepEqual } = require('assert');

const matrixAddition = (a,b) => {
  for(let i in a){
    for(let j in a[i]){
      a[i][j] += b[i][j]
    }
  }
  return a
}

deepEqual(matrixAddition(
  [ [1, 2],
    [1, 2] ],
//    +
  [ [2, 3],
    [2, 3] ] ),
//    =
  [ [3, 5],
    [3, 5] ] );

deepEqual(matrixAddition(
  [ [1] ],
//   +
  [ [2] ] ),
//   =
  [ [3] ] );

deepEqual(matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] ),
//      =
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ] );

console.log('OK')

