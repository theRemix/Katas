const { deepEqual } = require('assert');

const bounds = (min, max) => num => Math.min(max, Math.max(min, num))

function rgb(r, g, b) {
  return [...arguments]
    .map(bounds(0, 255))
    .map(dec => dec.toString(16).padStart(2, '0'))
    .map(hex => hex.toUpperCase())
    .join('')
}

deepEqual(rgb(0, 0, 0), '000000')
deepEqual(rgb(0, 0, -20), '000000')
deepEqual(rgb(300,255,255), 'FFFFFF')
deepEqual(rgb(173,255,47), 'ADFF2F')

console.log('OK')

