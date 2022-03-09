const { deepEqual } = require('assert');

const OP = {
  MULTIPLY: 'MULTIPLY'
}

class Calculator {

  constructor() {
    this.acc = 0
  }

  add = (x, y) => x + y
  sub = (x, y) => x - y
  div = (x, y) => x / y
  mul = (x, y) => x * y

  calculate = (x, y, op) => {
    switch(op) {
      case OP.MULTIPLY:
        return this.mul(x, y)
    }
    return x
  }


  DO THIS AGAIN, ADD OPS TO STACK

  evaluate(str) {
    // split in order, MUL, DIV, ADD, SUB
    let [mult, ...mults] = str.split(/\s\*\s/)
    // if (!mults.length) return this.evaluate(mult) // no multiplication

    for (let m of mults)
      this.acc = this.calculate(
        this.evaluate(mult),
        this.evaluate(m),
        OP.MULTIPLY)

    let [div, ...divs] = str.split(/\s\/\s/)
    // if (!divs.length) return this.evaluate(div) // no division

    let [add, ...adds] = str.split(/\s\+\s/)
    // if (!adds.length) return this.evaluate(add) // no addition

    let [sub, ...subs] = str.split(/\s\-\s/)
    // if (!subs.length) return parseInt(sub) // no operators


    // if (!right) this.acc = parseInt(left) // no multiplication


    // acc = parseInt(left)

    // left * right[0] * right[1]...

    // return this.evaluate(left)

    // return this.calculate()


    return this.acc
  }

}

var calculate = new Calculator()
console.log(calculate.evaluate('2 * 3'));
// deepEqual(calculate.evaluate('127'), 127);
// deepEqual(calculate.evaluate('2 + 3'), 5);
// deepEqual(calculate.evaluate('2 - 3 - 4'), -5);
// deepEqual(calculate.evaluate('10 * 5 / 2'), 25);

console.log('OK')

