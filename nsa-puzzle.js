const { deepEqual } = require('assert');

const NSApuzzle = (cipherText, key) => {

  var c = cipherText.match(/.{2}/g).map(a => parseInt(a))
  var k = key.match(/.{2}/g).map(a => parseInt(a))
  console.log('in', c,k)
  console.log( 'out',
    c.map((a,i) => a - k[i % k.length])
  )

  // var c = cipherText.split('')
  // var k = key.split('')
  // console.log(c,k)
  // console.log( // 8, 5, 12
  //   c[0] + k[0],
  //   c[1] + k[1],
  //   c[2] + k[2],
  //   c[3] + k[3],
  //   c[4] + k[4],
  // )
  return 'hi'
}

//           hellohello
var test1 = "1907291019"; // hello
var test12 = "05182736393218191016"; // hello
var key1 =  "1102170804"; //random key

//           helloworldhelloworld
var test2 = "05182736393218191016"; // helloworld
var key2 =  "07131524241903010812";

// NSApuzzle(test1,key1)
// NSApuzzle(test12,key1)
// NSApuzzle(test1,key2)
// NSApuzzle(test2,key2)


var a = [
  -2,  5, 12, 12, 15,
  13, 15, 18,  2,  4
]
var c1 = [
   5, 18, 27, 36, 39,
  32, 18, 19, 10, 16
]
var k1 = [
   7, 13, 15, 24, 24,
  19,  3,  1,  8, 12
]
var h1 = [
  104, 101, 108, 108,
  111, 119, 111, 114,
  108, 100
]

console.log('ciphertext, helloworld digits', c1)
console.log('key digits', k1)
console.log('calc',
  h1
  .map((c,i) => c - k1[i])
  // .map(c => String.fromCharCode(c))
)

// console.log(
// "helloworld"
//   .split('')
//   // .map((c,i) => a[i])
//   // .map(c => String.prototype.charCodeAt(this)) // 91,91,91,...
//   .map(c => c.charCodeAt(0))
//   // .map((c,i) => console.log(c, a[i]) || c)
//   // .map((c,i) => console.log(c) || c)
//   // .map(c => String.fromCharCode(c))
// )

// deepEqual(NSApuzzle(test1,key1), "hello");
// deepEqual(NSApuzzle(test2,key2), "helloworld");

console.log('OK')

