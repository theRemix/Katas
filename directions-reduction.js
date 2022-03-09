const { deepEqual } = require('assert');

const N = "NORTH",
  E = "EAST",
  S = "SOUTH",
  W = "WEST"

// *mutates dirs:Array*
// removes 'dir' if it's top of 'dirs' stack
// returns true if found, false if does not exist
const removeOpposite = (dirs, dir) => {
  if (dirs[dirs.length-1] === dir) {
    dirs.splice(-1);
    return true
  }
  return false
}

const dirReduc = arr => {
  return arr.reduce((dirs, dir) => {
    switch(dir) {
      case N:
        if(!removeOpposite(dirs, S)){
          dirs.push(dir)
        }
        break
      case S:
        if(!removeOpposite(dirs, N)){
          dirs.push(dir)
        }
        break
      case E:
        if(!removeOpposite(dirs, W)){
          dirs.push(dir)
        }
        break
      case W:
        if(!removeOpposite(dirs, E)){
          dirs.push(dir)
        }
        break
    }
    return dirs
  }, [])
}

deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
deepEqual(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
deepEqual(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

console.log('OK')

