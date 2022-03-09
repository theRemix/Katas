const { deepEqual } = require('assert');

const arrayToNum = arr => {
  if(!arr.length) return 0

  let sign = 1
  if(parseFloat(arr[0]) < 0) sign = -1

  return parseFloat(
    arr.map(Math.abs).join('')
  ) * sign
}
const numToArray = num => {
  if(!num) return []

  const [head, ...tail] = num.toString().split('')
  if(head === '-'){
    return [-tail[0], ...tail.slice(1)].map(parseFloat)
  } else {
    return [head, ...tail].map(parseFloat)
  }

}
const addArrays = (array1, array2) =>
  numToArray(
    arrayToNum(array1) + arrayToNum(array2)
  )

// deepEqual(addArrays([6,7], [6,7]), [ 1, 3, 4 ])
// deepEqual(addArrays([ -6, 7 ], [ 1, 0 ]), [ -5, 7 ])
deepEqual(addArrays([], []), [])

console.log('OK')

