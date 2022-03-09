const { deepEqual } = require('assert');

const vaporcode = str => str
  .toUpperCase()
  .split('')
  .filter(l => l !== ' ')
  .join('  ')

deepEqual(vaporcode("Let's go to the movies"),"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
deepEqual(vaporcode("Why isn't my code working?"),"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");

console.log('OK')

