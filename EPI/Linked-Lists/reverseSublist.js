/*
  Write a program which takes a singly linked list L and two integers s and f as
  arguments, and reverses the order of the nodes from the sth node to fth node,
  inclusive. The numbering begins at 1, i.e., the head node is the first node. Do not
  allocate additional nodes.
*/

// Time: O(f) | Space: O(1) | f = node f
const reverseSublist = (L, s, f) => {
  if (s > f) return 'Invalid input for s/f'
  let dummyNode = new Node(0)
  dummyNode.next = L
  let sublistHead = dummyNode
  for (let i = 1; i < s; ++i) {
    sublistHead = sublistHead.next
  }
  let sublistIter = sublistHead.next
  while (sublistIter.next && s++ < f) {
    let temp = sublistIter.next
    sublistIter.next = temp.next
    temp.next = sublistHead.next
    sublistHead.next = temp
  }
  if (s < f) return 'Invalid input for s/f'
  return dummyNode.next
}

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

module.exports = {reverseSublist}
