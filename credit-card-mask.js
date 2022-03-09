const { equal } = require('assert');

// return masked string
const maskify = cc =>
  cc.length <= 4 ?
  cc : Array.from(cc).map((c,i,a) =>
    i < a.length-4 ? '#' : c
  ).join('')

equal(maskify('4556364607935616'), '############5616');
equal(maskify('1'), '1');
equal(maskify('11111'), '#1111');

console.log('OK')

