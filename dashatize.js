const { deepEqual } = require('assert');


const dashatize = num => {
  num = Math.abs(num)

  if(isNaN(num) || num < 10) return num.toString()

  const tail = num.toString()

  // to string, prepend - to negative numbers
  let out = tail
    .replace(/([13579])/g, '-$1-')
    .replace(/--/g, '-')

  // trim
  out = out.startsWith('-') ? out.substr(1) : out
  out = out.endsWith('-') ? out.substr(0, out.length-1) : out

  return out
}


deepEqual(dashatize(7493), "7-4-9-3", "Should return 7-4-9-3");
deepEqual(dashatize(274), "2-7-4", "Should return 2-7-j");
deepEqual(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
deepEqual(dashatize(86320), "86-3-20", "Should return 86-3-20");
deepEqual(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
deepEqual(dashatize(NaN), "NaN", "Should return NaN");
deepEqual(dashatize(0), "0", "Should return 0");
deepEqual(dashatize(-1), "1", "Should return 1");
deepEqual(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

console.log('OK')

