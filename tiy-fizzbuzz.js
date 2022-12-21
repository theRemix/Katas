const { equal } = require('assert')

const UPPER_VOWELS = ['A', 'E', 'I', 'O', 'U']
const LOWER_VOWELS = UPPER_VOWELS.map(letter => letter.toLowerCase())

// If a letter is a upper case consonants, replace that character with "Iron".
const isUpper = letter => letter.toUpperCase() === letter

// If a letter is a upper case vowel, replace that character with "Iron Yard".
const isUpperVowel = letter => UPPER_VOWELS.includes(letter)

// If a letter is a lower case vowel, replace that character with "Yard".
const isLowerVowel = letter => LOWER_VOWELS.includes(letter)


const tiyFizzBuzz = sentence => 
  sentence
    .split('')
    .map(letter => {
      switch (true) {
        case !letter.match(/[a-zA-Z]/): return letter // non alpha
        case isUpperVowel(letter): return "Iron Yard"
        case isUpper(letter): return "Iron"
        case isLowerVowel(letter): return "Yard"
        default: return letter
      }
    })
    .join('')

equal(tiyFizzBuzz(" "), " ");
equal(tiyFizzBuzz("H"), "Iron");
equal(tiyFizzBuzz("b"), "b");
equal(tiyFizzBuzz("A"), "Iron Yard");
equal(tiyFizzBuzz("a"), "Yard");
equal(tiyFizzBuzz("Hello WORLD!"), "IronYardllYard IronIron YardIronIronIron!");


console.log('OK')

