const { deepEqual } = require('assert');

/*
 * split arr into 2 ascending arrays
 * the longer one has less removals
 */
const increasingSequence = arr => {




}

/*


[100,1,2,3,100,4,5] => [1,2,3,4,5]
[100,1,2,3,4,100,5] => [1,2,3,4,100]


----


[100,1,2,3,100,4,5]


expected result: [1,2,3,4,5]


-----

b:[]
a:[1,100,2,3,4,100,5]
     *

b:[100]
a:[1,2,3,4,100,5]
     * * * *



expected result: [1,2,3,4,100]



----

b:[]
a:[1,100,2,3,100,4,5]
     *

b:[100]
a:[1,2,3,100,4,5]
     * * *

b:[100]
a:[1,2,3,100,4,5]
     * * * discard

b:[100]
a:[1,2,3,4,5]
         * *


expected result: [1,2,3,4,5]
*/

deepEqual(increasingSequence([1,100,2,3,100,4,5]) , [1,2,3,4,5])

deepEqual(increasingSequence([1,100,2,3,4,100,5]) , [1,2,3,4,100])

deepEqual(increasingSequence([100,1,2,3,100,4,5]) , [1,2,3,4,5])

deepEqual(increasingSequence([1, 1, 1, 2]) , [1, 2])
deepEqual(increasingSequence([186,186,150,200,160,130,197,220]) , [150,160,197,220])
deepEqual(increasingSequence([1,2,3,4,5]) , [1,2,3,4,5])
deepEqual(increasingSequence([5,4,3,2,1]) , [5])
deepEqual(increasingSequence([452,603,925,825,689,656,538,586,293,440,622,52,842,925,287,221,351,954,89,220,943,438,607,431,118,644,66,629,776,249] ) ,
        [452, 538, 586, 622, 842, 925, 954])

console.log('OK')
