const { deepEqual } = require('assert');

/*
 * @param matches: Array
 *        return number if it's a multiple
 *        of any number in this array
 *
 *        example: [3,5] will return 3, 5, 6, 9...
 */
function* getMultiplesOf(...matches) {
  let i = 1
  while(true){
    if(matches.find(n => i % n == 0)){
      yield i
    }
    i++
  }
}

const solution = limit => {
  const multiples = getMultiplesOf(3,5)

  let sum = 0, i = multiples.next().value

  while(i < limit){
    sum += i
    i = multiples.next().value
  }

  return sum
}



deepEqual(solution(10),23)
console.log('OK')

