const { deepEqual } = require('assert');

const burner = (c, h, o) => {
  // Hydrogen reacts with Oxygen   = H2O
  const water = (() => {
    let H = parseInt(h / 2)
    let O = o
    return Math.min(H, O)
  })()

  h = h - (water * 2)
  o = o - water

  // Carbon   reacts with Oxygen   = CO2
  const co2 = (() => {
    let O = parseInt(o / 2)
    let C = c
    return Math.min(O, C)
  })()

  o = o - (co2 * 2)
  c = c - co2

  // Carbon   reacts with Hydrogen = CH4
  const methane = (() => {
    let H = parseInt(h / 4)
    let C = c
    return Math.min(H, C)
  })()

  return [water, co2, methane];
}

deepEqual(burner(45, 11, 100), [5, 45, 0]);
deepEqual(burner(354, 1023230, 0), [0, 0, 354]);
deepEqual(burner(939, 3, 694), [1, 346, 0]);
deepEqual(burner(215, 41, 82100), [20, 215, 0]);
deepEqual(burner(113, 0, 52), [0, 26, 0]);

console.log('OK')

