const { deepEqual } = require('assert');

// const mCode = {
//   '.-':     'A',
//   '-...':   'B',
//   '-.-.':   'C',
//   '-..':    'D',
//   '.':      'E',
//   '..-.':   'F',
//   '--.':    'G',
//   '....':   'H',
//   '..':     'I',
//   '.---':   'J',
//   '-.-':    'K',
//   '.-..':   'L',
//   '--':     'M',
//   '-.':     'N',
//   '---':    'O',
//   '.--.':   'P',
//   '--.-':   'Q',
//   '.-.':    'R',
//   '...':    'S',
//   '-':      'T',
//   '..-':    'U',
//   '...-':   'V',
//   '.--':    'W',
//   '-..-':   'X',
//   '-.--':   'Y',
//   '--..':   'Z',
//   '.----':  '1',
//   '..---':  '2',
//   '...--':  '3',
//   '....-':  '4',
//   '.....':  '5',
//   '-....':  '6',
//   '--...':  '7',
//   '---..':  '8',
//   '----.':  '9',
//   '-----':  '0',
//   'SPACE':  ' ',
//   // SPECIAL WORDS
//   '...---...':  'SOS',
// }

const decodeMorse = morseCode =>
  console.log(morseCode) ||
  morseCode
    .trim()
    .replace(/   /g, ' SPACE ')
    .split(' ')
    .map(letter => MORSE_CODE[letter])
    .join('')

deepEqual(decodeMorse('...---...'), 'SOS')
deepEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')

console.log('OK')

