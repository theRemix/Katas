const { deepEqual } = require('assert');

class Node {
  constructor(value, children) {
    this.value = value
    typeof children === "undefined" ? this.children = [] : this.children = children
  }
}

let t1 = new Node(1)
let t2 = new Node(2)
let t3 = new Node(3)
let t4 = new Node(4)
let t5 = new Node(5)
let t6 = new Node(6)
let t7 = new Node(7)

t1.children.push(t2)
t1.children.push(t3)
t1.children.push(t4)
t3.children.push(t5)
t3.children.push(t6)
t3.children.push(t7)

let t = [t2, t5, t6, t7, t1, t3, t4]

// root is a node that no other node has as a child
const findRoot = nodes => {

  const queue = new Set([...nodes])

  for (let node of nodes) {
    for (let child of node.children) {
      queue.delete(child)
    }
  }

  return queue.values().next().value;
}

console.log(findRoot(t))

console.log('OK')

