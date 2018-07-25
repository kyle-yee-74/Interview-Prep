/*
  Given a binary tree, return an array consisting of the keys at the same level. Keys
  should appear in the order of the corresponding nodes' depths, breaking ties from left
  to right.
*/

// Time: O(n) | Space: O(m) | n = number of nodes | m = maximum number of nodes at a given depth
const increasingDepth = (head) => {
  const queue1 = []
  const queue2 = []
  let array = []
  let output = []
  queue1.push(head)

  while (queue1.length) {
    let currentNode = queue1.pop()
    if (currentNode.left) queue2.push(currentNode.left)
    if (currentNode.right) queue2.push(currentNode.right)
    array.push(currentNode.value)
    if (!queue1.length) {
      while (queue2.length) {
        queue1.push(queue2.pop())
      }
      output.push(array)
      array = []
    }
  }
  return output
}

module.exports = {increasingDepth}
