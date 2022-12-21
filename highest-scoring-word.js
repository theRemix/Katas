const { deepEqual } = require('assert');

const baseVal = "a".charCodeAt(0) - 1
const letterScore = letter => letter.charCodeAt(0) - baseVal
const wordScore = word => word
  .split('')
  .map(letterScore)
  .reduce((total, score) => total+score, 0)

const high = words =>
  words
    .split(' ')
    .map(word => [word, wordScore(word)])
    .reduce(([highestWord, highestScore], [word, score]) =>
      score > highestScore ?
      [word, score] :
      [highestWord, highestScore]
    )[0]

deepEqual(high('man i need a taxi up to ubud'), 'taxi');
deepEqual(high('what time are we climbing up the volcano'), 'volcano');
deepEqual(high('take me to semynak'), 'semynak');
deepEqual(high('aa b'), 'aa');
deepEqual(high('b aa'), 'b');
deepEqual(high('bb d'), 'bb');
deepEqual(high('d bb'), 'd');
deepEqual(high('aaa b'), 'aaa');

console.log('OK')

