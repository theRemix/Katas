const { deepEqual } = require('assert');

/*
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
*/

const mirror = data => {
  // sort it
  const sortedInput = [...data].sort((a,b) => a - b)

  // clone and reverse it
  const reverseSorted = [...sortedInput].reverse().slice(1)

  return [...sortedInput, ...reverseSorted]
}

fixed_tests = [
  {input: [], expected: []},
  {input: [1], expected: [1]},
  {input: [2, 1], expected: [1, 2, 1]},
  {input: [2, 3, 1], expected: [1, 2, 3, 2, 1]},
  {input: [-8, 42, 18, 0, -16], expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16]},
]


for (const testCase of fixed_tests) {
  const { input, expected } = testCase;
  deepEqual(mirror(input), expected);
};
