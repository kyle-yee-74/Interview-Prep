/*
  Write a program that takes as input a binary tree and
  checks if the tree satisfies the BST property.
*/

// Time: O(n) | Space: O(d) | n = nodes | d = depth of tree
const bstTest = (head, lowerBound = -Infinity, upperBound = Infinity) => {
  if (head === null) return true

  if (head.value > upperBound || head.value <= lowerBound) return false
  const checkLeftBranch = bstTest(head.left, lowerBound, head.value)
  return checkLeftBranch && bstTest(head.right, head.value, upperBound)
}

module.exports = {bstTest}
