const { deepEqual } = require('assert');

const productArray = numbers => {

  const product = numbers.reduce((product, n) => product * n)

  return numbers.map(n => product / n)

}

deepEqual(productArray([12,20]), [20,12]);
deepEqual(productArray([3,27,4,2]), [216,24,162,324]);
deepEqual(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
deepEqual(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);

console.log('OK')

