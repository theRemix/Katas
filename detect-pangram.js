const { equal } = require('assert');

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const isPangram = string => {
  string = string.toLowerCase()
  return alphabet.split('').every(letter => string.indexOf(letter) >= 0)
}


var string = "The quick brown fox jumps over the lazy dog."
equal(isPangram(string), true)

var string = "This is not a pangram."
equal(isPangram(string), false)

console.log('OK')

