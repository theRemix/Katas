const { deepEqual } = require('assert');


// helper filter fn
const edgesFromVertex = vertex => ([start, _end, _weight]) => start === vertex

// returns total weight to node(N-1)
// S is start node
// setFoundEnd is closure fn
const walkPath = (N, edgeList, S, currentWeight, setFoundEnd) => {

  let paths = edgeList.filter(edgesFromVertex(S))

  if (paths.length === 0) // End of the Road
    return currentWeight

  paths = paths
    .map(([_start, end, weight]) => {
      if (end === N-1)
        setFoundEnd(true)

      return walkPath(N, edgeList, end, weight, currentWeight, setFoundEnd)
    })

  return Math.min(...paths) + currentWeight
}

// do not mutate edgeList
const shortest = (N, edgeList) => {

  let foundEnd = false

  // split possible paths to walk down
  // only walk on paths from current node: 0
  let paths = edgeList.filter((edgesFromVertex(0)))

  paths = paths.map(([_start, end, weight]) => walkPath(N, edgeList, end, weight, (found) => foundEnd = found ))

  return foundEnd ? Math.min(...paths) : -1
}

/*

N:3
edges[[0, 1, 7], [1, 2, 5], [0, 2, 12]]

     -7->  (1)
   /        |
 (0)        | 5
   \        v
    -12->  (2)

  0-1-2 = 12
  0-2 = 12
*/

"Path exists"
deepEqual(shortest(4, [[0, 1, 1], [0, 2, 5], [0, 3, 5], [1, 3, 3], [2, 3, 1]]), 4);
deepEqual(shortest(3, [[0, 1, 7], [1, 2, 5], [0, 2, 12]]), 12);

"Path does not exist"
deepEqual(shortest(5, [[0, 2, 1], [1, 2, 1], [0, 3, 1], [1, 4, 1]]), -1);

console.log('OK')

