const { equal } = require('assert');

const potatoes = (p0, w0, p1) => {
  // const waterKg0 = w0 * (p0 / 100)
  // const dryMatterKg = w0 - waterKg0

  // waterKg1 = w1 * p1
  //
  // dryMatterKg0 = w1 - waterKg1
  // dryMatterKg0 = w1 - (w1 * p1)
  // dryMatterKg0 = w1*1  - (w1 * p1)
  // dryMatterKg0 = w1 * (1 - p1)
  // dryMatterKg0 / (1 - p1) = w1

  // (1 - p0/100) * w0 / (1 - p1/100)  <-- substitute and multiply by 100/100

  return parseInt((100 - p0) * w0 / (100 - p1))
}

equal(potatoes(99, 100, 98), 50);
equal(potatoes(82, 127, 80), 114);
equal(potatoes(93, 129, 91), 100);

console.log('OK')

