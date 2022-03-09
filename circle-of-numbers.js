const { deepEqual } = require('assert');

const circleOfNumbers = (n, firstNumber) =>
  ((n / 2) + firstNumber) % n

distance from beginning and ends, no

   3                    3
------v              v------
0, 1, 2, 3, 4, 5, 6, 7, 8, 9

n / 2 = 5 + firstNumber(2) = 7 % n = 7

n / 2 = 5 + firstNumber(7) = 12 % n = 2

 1       0
---v     v
0, 1, 2, 3

n / 2 = 2 + firstNumber(1) = 3 % n = 3


0        4
v -------v
0, 1, 2, 3, 4, 5

n / 2 === 3 ? 0 // no
n / 2 = 3 + firstNumber(3) = 6 % n = 0




deepEqual(circleOfNumbers(10,2) , 7)
deepEqual(circleOfNumbers(10,7) , 2)
deepEqual(circleOfNumbers(4,1) , 3)
deepEqual(circleOfNumbers(6,3) , 0)

console.log('OK')

