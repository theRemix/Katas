const { deepEqual } = require('assert');

const maxMultiple = (divisor, bound) =>
  bound - (bound % divisor)

/*
2
     7
2 4 6
    x

7 % 2 = 1
7 - 1

50 % 10 = 0
50 - 0

200 % 37 = 15
200 - 15

*/

deepEqual(maxMultiple(2,7),6);
deepEqual(maxMultiple(3,10),9);
deepEqual(maxMultiple(7,17),14);
deepEqual(maxMultiple(10,50),50);
deepEqual(maxMultiple(37,200),185);
deepEqual(maxMultiple(7,100),98);

console.log('OK')

