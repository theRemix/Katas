const { deepEqual } = require('assert');

const ROMAN_NUMERALS = {
  [1000]: 'M',
  [500]: 'D',
  [100]: 'C',
  [50]: 'L',
  [10]: 'X',
  [5]: 'V',
  [1]: 'I',
}

const solution = arabic => {

  // if there would be 4 repetitions
  //   decrement the previous letter by one step
  let roman = ""
  const mapper = Object.entries(ROMAN_NUMERALS)
  // while( arabic > 0 ){

    mapper
      .forEach(([value, symbol], i, arr) => {
        if(arabic >= arr[i+1] - value) {
          roman += symbol
          arabic -= value
        }
      })

  // }

}

deepEqual(solution(1), 'I', '1 should, "I"')
// deepEqual(solution(2), 'II', '2 should, "II"')
// deepEqual(solution(3), 'III', '3 should, "III"')
// deepEqual(solution(4), 'IV', '4 should, "IV"')
// deepEqual(solution(5), 'V', '5 should, "V"')
// deepEqual(solution(9), 'IX', '9 should, "IX"')
// deepEqual(solution(10), 'X', '10 should, "X"')
// deepEqual(solution(11), 'XI')
// deepEqual(solution(19), 'XIX')
// deepEqual(solution(22), 'XXII')
// deepEqual(solution(15), 'XV')
// deepEqual(solution(1000), 'M', '1000 should, "M"')
// deepEqual(solution(1001), 'MI', '1001 should, "MI"')
// deepEqual(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
// deepEqual(solution(2007), 'MMVII', '2007 should, "MMVII"')
// deepEqual(solution(2008), 'MMVIII', '2008 should, "MMVIII"')

console.log('OK')

