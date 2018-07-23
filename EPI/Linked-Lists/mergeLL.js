/*
  Write a program that takes two lists, assumed to be sorted, and returns their merge.
  The only field your program can change in a node is its next field.
*/

// Time: O(n + m) | Space: O(1) | n = length of list1 | m = length of list2
const mergeLL = (list1, list2) => {
  let currentHead1 = list1
  let currentHead2 = list2
  let dummyNode = new Node(0)
  let currentNode = dummyNode
  while (currentHead1 !== null && currentHead2 !== null) {
    if (currentHead1.value <= currentHead2.value) {
      currentNode.next = currentHead1
      currentHead1 = currentHead1.next
    } else {
      currentNode.next = currentHead2
      currentHead2 = currentHead2.next
    }
    currentNode = currentNode.next
  }

  while (currentHead1 !== null) {
    currentNode.next = currentHead1
    currentHead1 = currentHead1.next
    currentNode = currentNode.next
  }

  while (currentHead2 !== null) {
    currentNode.next = currentHead2
    currentHead2 = currentHead2.next
    currentNode = currentNode.next
  }
  return dummyNode.next
}

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

module.exports = {mergeLL}
