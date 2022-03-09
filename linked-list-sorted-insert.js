const { deepEqual } = require('assert');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const sortedInsert = (head, data) => {
  if(head === null) return new Node(data)

  let node = head

  if(data < head.data){
    return new Node(data, head)
  }

  while(node.next !== null && node.next.data < data){
    node = node.next
  }

  // insert new node
  const newNode = new Node(data, node.next)
  node.next = newNode

  return head
}


const buildOneTwoThree = () => new Node(1, new Node(2, new Node(3)))


deepEqual(sortedInsert(null, 23).data, 23, "should be able to insert a node on an empty/null list.");
deepEqual(sortedInsert(null, 23).next, null, "value at index 1 should be null.");
deepEqual(sortedInsert(buildOneTwoThree(), 0.5).data, 0.5, "should be able to insert new node at head of list.");
deepEqual(sortedInsert(buildOneTwoThree(), 0.5).next.data, 1, "value for node at index 1 should be 1.");
deepEqual(sortedInsert(buildOneTwoThree(), 0.5).next.next.data, 2, "value for node at index 2 should be 2.");
deepEqual(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
deepEqual(sortedInsert(buildOneTwoThree(), 0.5).next.next.next.next, null, "value at index 4 should be null.");
deepEqual(sortedInsert(buildOneTwoThree(), 1.5).data, 1, "value for node at index 0 should be 1.");
deepEqual(sortedInsert(buildOneTwoThree(), 1.5).next.data, 1.5, "value for node at index 1 should be 1.5");
deepEqual(sortedInsert(buildOneTwoThree(), 1.5).next.next.data, 2, "value for node at index 2 should be 2.");
deepEqual(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
deepEqual(sortedInsert(buildOneTwoThree(), 1.5).next.next.next.next, null, "value at index 4 should be null.");
deepEqual(sortedInsert(buildOneTwoThree(), 2.5).data, 1, "head should remain unchanged after inserting new node at index 2");
deepEqual(sortedInsert(buildOneTwoThree(), 2.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
deepEqual(sortedInsert(buildOneTwoThree(), 2.5).next.next.data, 2.5, "value for node at index 2 should be 2.5.");
deepEqual(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.data, 3, "value for node at index 3 should be 3.");
deepEqual(sortedInsert(buildOneTwoThree(), 2.5).next.next.next.next, null, "value at index 4 should be null.");
deepEqual(sortedInsert(buildOneTwoThree(), 3.5).data, 1, "head should remain unchanged after inserting new node at tail");
deepEqual(sortedInsert(buildOneTwoThree(), 3.5).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
deepEqual(sortedInsert(buildOneTwoThree(), 3.5).next.next.data, 3, "value for node at index 2 should be 3.");
deepEqual(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.data, 3.5, "value for node at index 3 should be 3.5.");
deepEqual(sortedInsert(buildOneTwoThree(), 3.5).next.next.next.next, null, "value at index 4 should be null.");

console.log('OK')
