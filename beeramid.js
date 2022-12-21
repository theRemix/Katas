const { deepEqual } = require('assert');

//  +4 +9  +16 +25   : size
// 1, 5, 14, 30, 55  : totalNumCansToCreateBeeramid
function* beeramidLevelGenerator() {
  let size = 1
  let totalNumCansToCreateBeeramid = 1

  while(size++){
    totalNumCansToCreateBeeramid += Math.pow(size, 2)
    yield totalNumCansToCreateBeeramid
  }
}


const beeramid = (bonus, price) => {
  if (bonus <= 0 || price > bonus) return 0

  const beersICanBuy = parseInt(bonus / price)
  const beeramidLevels = beeramidLevelGenerator()

  let completeLevels = 1
  let cansNeededForCompleteLevel = beeramidLevels.next().value
  while(cansNeededForCompleteLevel <= beersICanBuy) {
    completeLevels++
    cansNeededForCompleteLevel = beeramidLevels.next().value
  }

  return completeLevels
}

deepEqual(beeramid(9, 2), 1);
deepEqual(beeramid(10, 2), 2);
deepEqual(beeramid(11, 2), 2);
deepEqual(beeramid(21, 1.5), 3);
deepEqual(beeramid(454, 5), 5);
deepEqual(beeramid(455, 5), 6);
deepEqual(beeramid(4, 4), 1);
deepEqual(beeramid(3, 4), 0);
deepEqual(beeramid(0, 4), 0);
deepEqual(beeramid(-1, 4), 0);

console.log('OK')

