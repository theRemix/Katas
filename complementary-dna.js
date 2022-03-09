const { deepEqual } = require('assert');

const DNAStrand = dna => dna
  .split('')
  .map(l => ({
    'A':'T',
    'T':'A',
    'G':'C',
    'C':'G',
  })[l])
  .join('')


deepEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
deepEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
deepEqual(DNAStrand("GTAT"),"CATA","String GTAT is") 

console.log('OK')

