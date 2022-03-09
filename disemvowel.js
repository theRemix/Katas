const { deepEqual } = require('assert');

const disemvowel = str =>
  str
    .split('')
    .filter(letter => !'aeiou'.includes(letter.toLowerCase()))
    .join('')

deepEqual(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")

console.log('OK')

