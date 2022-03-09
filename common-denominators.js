const { equal } = require('assert');

// 2, 3, 4 => 12
const getLcd = nums => {
  if(!nums.length) return 1
  // throw new RangeError(`nums must be an array with at least one element, got '${nums}'`)

  const sortedNums = [ ...nums ].sort((a,b) => b - a)

  let lcd = 1
  loopNums: for(let num of nums){
    if(num === lcd) continue loopNums
    if(num % lcd === 0) {
      lcd = num
      continue
    } else {
      let initGreater = greater = Math.max(lcd, num)
      let initLesser = lesser = Math.min(lcd, num)

      while(true){
        if(greater === lesser){
          lcd = greater
          continue loopNums
        } else if (greater < lesser) {
          [greater, initGreater, lesser, initLesser] = [lesser, initLesser, greater, initGreater]
        } else {
          lesser += initLesser
        }
      }
    }
  }

  return lcd

}

const convertFrac = list => {
  const lcd = getLcd(list.map(([n1, n2]) => n2))

  return list
    .map(([n1, n2]) => n1*(lcd/n2))
    .map(n1 => `(${n1},${lcd})`)
    .join('')
}

var lst = [ [1, 2], [1, 3], [1, 4] ]
equal(convertFrac(lst), "(6,12)(4,12)(3,12)")
convertFrac(lst)

console.log('OK')

