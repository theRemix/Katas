const { deepEqual } = require('assert');

function* genFizzBuzz(max, start=1) {
  let index = start

  while (index <= max) {

    switch(true){
      case index % 15 === 0:
        yield 'FizzBuzz'
        break
      case index % 5 === 0:
        yield 'Buzz'
        break
      case index % 3 === 0:
        yield 'Fizz'
        break
      default:
        yield index
    }
    index++
  }
}


const fizzbuzz = n => {
  return [...genFizzBuzz(n)]
}

 var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
deepEqual(fizzbuzz(10), expected, 'Fails with 10 numbers!');

console.log('OK')

