const { deepEqual } = require('assert');

// (streetLength * 2) + 1
/*
const overTheRoad = (address, streetLength) => {
    const sumOfAnyNeighborPair = (streetLength * 2) + 1
    const neighborsAddress = sumOfAnyNeighborPair - address
    return neighborsAddress
} */

const overTheRoad = (address, streetLength) => ((streetLength * 2) + 1) - address

deepEqual(overTheRoad(1, 3), 6);
deepEqual(overTheRoad(3, 3), 4);
deepEqual(overTheRoad(2, 3), 5);
deepEqual(overTheRoad(3, 5), 8);
deepEqual(overTheRoad(7, 11), 16);
deepEqual(overTheRoad(23633656673, 310027696726), 596421736780);

console.log('OK')

