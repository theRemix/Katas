const { deepEqual } = require('assert');

const descendingOrder = n => parseInt(
    n.toString()
        .split('')
        .sort((a, b) => b - a)
        .join(''))

// chatgpt
// function descendingOrder(num) {
//     // convert to array of digits
//     const arr = (num + '').split('')

//     // sort in descending order
//     arr.sort((a, b) => b - a);

//     // join and convert to number
//     return Number(arr.join(''));
// }

deepEqual(descendingOrder(0), 0)
deepEqual(descendingOrder(1), 1)
deepEqual(descendingOrder(111), 111)
deepEqual(descendingOrder(15), 51)
deepEqual(descendingOrder(1021), 2110)
deepEqual(descendingOrder(123456789), 987654321)


console.log('OK')
