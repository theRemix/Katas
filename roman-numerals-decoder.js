const { deepEqual } = require('assert');

const ROMAN_NUMERALS = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
}

const solution = roman => {

  // iterate from right to left
  // if any numerals are lesser than the previous (right of it)
  //   minus it
  return roman
    .split('')
    .reverse('')
    .map(digit => ROMAN_NUMERALS[digit])
    .reduce(([ prev, acc ], value) =>
      value < prev ?
        [value, acc - value ] : // I is  less than V, IV -> 4
        [value, acc + value ]   // I not less than V, VI -> 6
    , [0,0])[1]
}

deepEqual(solution('XXI'), 21)
deepEqual(solution('I'), 1)
deepEqual(solution('IV'), 4)
deepEqual(solution('MMVIII'), 2008)
deepEqual(solution('MDCLXVI'), 1666)

console.log('OK')

