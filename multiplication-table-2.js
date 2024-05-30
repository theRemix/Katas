const { deepEqual } = require('assert');

function* rowGenerator(size, initialMultiplier = 1) {
  let multiplier = initialMultiplier

  while (true) {
    let row = []
    for (let i of Array(size).keys()) {
      row[i] = (i + 1) * multiplier
    }

    yield row
    multiplier++
  }
}

const multiplicationTable = size => {
  const table = []
  const rowG = rowGenerator(size)

  for (let i = 0; i < size; i++) {
    table[i] = rowG.next().value
  }

  return table
}


deepEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

console.log('OK')

