const { deepEqual } = require('assert');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const SEP = ' -> '

const stringify = list => {
  const out = []

  let node = list // head

  while(node !== null){
    out.push(node.data)
    node = node.next
  }

  out.push('null') // tail

  return out.join(SEP)
}

deepEqual(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
deepEqual(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
deepEqual(stringify(null), "null");

console.log('OK')
