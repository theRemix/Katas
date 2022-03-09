const { deepEqual } = require('assert');

const cipher = new Map(Object.entries({
  'A': '11',
  'B': '12',
  'C': '13',
  'D': '14',
  'E': '15',
  'F': '21',
  'G': '22',
  'H': '23',
  'I': '24',
  'J': '24',
  'K': '25',
  'L': '31',
  'M': '32',
  'N': '33',
  'O': '34',
  'P': '35',
  'Q': '41',
  'R': '42',
  'S': '43',
  'T': '44',
  'U': '45',
  'V': '51',
  'W': '52',
  'X': '53',
  'Y': '54',
  'Z': '55',
  ' ': ' ',
}))

const polybius = text => text
  .split('')
  .map(cipher.get.bind(cipher))
  .join('')

deepEqual(polybius('CODEWARS'), '1334141552114243');
deepEqual(polybius('POLYBIUS SQUARE CIPHER'), '3534315412244543 434145114215 132435231542');

console.log('OK')

