const { deepEqual } = require('assert');

const maxSequence = arr => {
  // used for testing the next highest sum in sequence
  let end_max = 0

  // return value
  let cur_max = 0

  for (const num of arr) {

    // increment end_max by new num
    end_max = end_max + num

    // set cur_max to the new sum:end_max, if end_max is greater
    cur_max = cur_max < end_max ? end_max : cur_max

    // if end_max is negative (< 0) reset it to 0
    if (end_max < 0)
      end_max = 0

  }

  return cur_max
}

deepEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
deepEqual(maxSequence([]), 0);

console.log('OK')

