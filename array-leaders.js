const { deepEqual } = require('assert');

const findLeader = (leaders, [head, ...tail]) => {

  if (tail.length === 0) { // leader if last number is > 0
     return (head > 0) ? [...leaders, head] : leaders
  }

  // iterate through numbers until we find a leader
  if (head > tail.reduce((acc,n) => acc+n))
    return findLeader([...leaders, head], tail)
  else
    return findLeader(leaders, tail)
}

const arrayLeaders = numbers =>
  // final return is [ ...leaders ]
  findLeader([], numbers)

deepEqual(arrayLeaders([1,2,3,4,0]), [4])
deepEqual(arrayLeaders([16,17,4,3,5,2]), [17,5,2])
deepEqual(arrayLeaders([-1,-29,-26,-2]), [-1])
deepEqual(arrayLeaders([-36,-12,-27]),  [-36,-12])
deepEqual(arrayLeaders([5,-2,2]), [5,2])
deepEqual(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2])

console.log('OK')

