const { deepEqual } = require('assert');

const WEIGHT = 0,
  INDEX = 1,
  VALUE = 2

const getWeight = (s, idx) => ({
  value: Number(s),
  weight: s.split('').map(Number).reduce((acc, n) => acc + n),
  idx,
})

const byWeight = (a, b) => a.weight === b.weight ?
  a.idx - b.idx : a.weight - b.weight

const closestPairs = ({ closestPair, curr }, { value, weight, idx }) => {

  // init the pairs
  if (closestPair.length === 0) return {
    closestPair: [[weight, idx, value]],
    curr: [weight, idx, value],
  }
  if (closestPair.length === 1) return {
    closestPair: [closestPair[0], [weight, idx, value]],
    curr: [weight, idx, value],
  }

  const prevWeightDiff = Math.abs(closestPair[0][WEIGHT] - closestPair[1][WEIGHT])
  const currWeightDiff = Math.abs(curr[WEIGHT] - weight)

  if (currWeightDiff < prevWeightDiff) {
    return {
      closestPair: [curr, [weight, idx, value]],
      curr: [weight, idx, value],
    }
  }

  return {
    closestPair,
    curr: [weight, idx, value],
  }
}

const closest = (strng) => {
  if (!strng.length) return []

  return strng.split(' ')
    .map(getWeight)
    .sort(byWeight)
    .reduce(closestPairs, { closestPair: [], curr: [] })
    .closestPair
}

deepEqual(closest(""), [])
deepEqual(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"), [[13, 9, 85], [14, 3, 176]]);
deepEqual(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54"), [[8, 5, 134], [8, 7, 62]]);
deepEqual(closest("241259 154 155206 194 180502 147 300751 200 406683 37 57"), [[10, 1, 154], [10, 9, 37]]);
deepEqual(closest("89998 187 126159 175 338292 89 39962 145 394230 167 1"), [[13, 3, 175], [14, 9, 167]]);
deepEqual(closest("462835 148 467467 128 183193 139 220167 116 263183 41 52"), [[13, 1, 148], [13, 5, 139]]);
deepEqual(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38"), [[11, 5, 119], [11, 9, 128]]);
deepEqual(closest("28706 196 419018 130 49183 124 421208 174 404307 60 24"), [[6, 9, 60], [6, 10, 24]]);
deepEqual(closest("189437 110 263080 175 55764 13 257647 53 486111 27 66"), [[8, 7, 53], [9, 9, 27]]);
deepEqual(closest("79257 160 44641 146 386224 147 313622 117 259947 155 58"), [[11, 3, 146], [11, 9, 155]]);
deepEqual(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59"), [[15, 0, 315411], [15, 3, 87]]);

console.log('OK')

