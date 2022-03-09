const { deepEqual } = require('assert');

var crypto = require('crypto')
const passHash = str => crypto.createHash('md5').update(str).digest("hex")


var tests = [
  ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
  ['abc123', 'e99a18c428cb38d5f260853678922e03']
]

for (var i = 0; i < tests.length; i++) {
  deepEqual(passHash(tests[i][0]), tests[i][1])
}

console.log('OK')

