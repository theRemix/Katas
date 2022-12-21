const { deepEqual } = require('assert');

const XO = str => (str.match(/o/ig) || []).length == (str.match(/x/ig) || []).length

deepEqual(XO('xo'),true);
deepEqual(XO("xxOo"),true);
deepEqual(XO("xxxm"),false);
deepEqual(XO("Oo"),false);
deepEqual(XO("ooom"),false);

console.log('OK')

