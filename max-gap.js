const { deepEqual } = require('assert');

const maxGap = numbers => {

  numbers.sort((a,b)=> a-b)

  let max = -Infinity
  let prev = numbers[0]

  for(let num of numbers.slice(1)){
    let gap = Math.abs(num - prev)
    max = gap > max ? gap : max
    prev = num
  }

  return max
}

deepEqual(maxGap([13,10,2,9,5]),4);
deepEqual(maxGap([13,3,5]),8);
deepEqual(maxGap([24,299,131,14,26,25]),168);
deepEqual(maxGap([-3,-27,-4,-2]),23);
deepEqual(maxGap([-7,-42,-809,-14,-12]),767);
deepEqual(maxGap([12,-5,-7,0,290]),278);
deepEqual(maxGap([-54,37,0,64,-15,640,0]),576);
deepEqual(maxGap([130,30,50]),80);
deepEqual(maxGap([1,1,1]),0);
deepEqual(maxGap([-1,-1,-1]),0);

console.log('OK')

