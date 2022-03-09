const { deepEqual } = require('assert');

const everyOther = (transformFn, interval = 0) => (a, i) =>
  i%2 == interval ? a : transformFn.call(a)

const capitalize = s => {
  const letters = s.split('')

  return [
    letters.map(everyOther(String.prototype.toUpperCase, 1)).join(''),
    letters.map(everyOther(String.prototype.toUpperCase   )).join(''),
  ]
}


deepEqual(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
deepEqual(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
deepEqual(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
deepEqual(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
console.log('OK')

