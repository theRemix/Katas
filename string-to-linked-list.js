const { deepEqual } = require('assert');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const SEP = ' -> '

const parse = string => {
  if(string === 'null') return null

  const nodeVals = string
    .split(SEP)
    .map(num => parseFloat(num))

  const head = new Node(nodeVals[0])
  let node = head

  for (let i = 1; i < nodeVals.length-1; ++i) {
    node.next = new Node(nodeVals[i])
    node = node.next
  }

  return head
}

deepEqual(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
deepEqual(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
deepEqual(parse("null"), null);

console.log('OK')

