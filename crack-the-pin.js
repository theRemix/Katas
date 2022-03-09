const { deepEqual } = require('assert');

const { createHash } = require('crypto')
const md5 = str => createHash('md5').update(str).digest("hex")

// brute force numbers 00000 --> 99999
function* Md5Cracker(hash) {
  let pinAttempt = 00000;
  let crackAttempt = md5(pinAttempt.toString().padStart(5,'0'))

  while (crackAttempt !== hash && pinAttempt < 100000) {
    pinAttempt++;
    crackAttempt = md5(pinAttempt.toString().padStart(5,'0'))
  }

  yield pinAttempt.toString().padStart(5,'0');
}

const crack = hash => {
  const md5Cracker = Md5Cracker(hash)
  return md5Cracker.next().value
}

deepEqual(crack("827ccb0eea8a706c4c34a16891f84e7b"), "12345");
deepEqual(crack("86aa400b65433b608a9db30070ec60cd"), "00078");


console.log('OK')

