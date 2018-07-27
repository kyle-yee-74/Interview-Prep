/*
  A binary tree is said to be height-balanced if for each node in the tree, the difference
  in the height of its left and right subtrees is at most one. A perfect binary tree is
  height-balanced, as is a complete binary tree. A height-balanced binary tree does not
  have to be perfect or complete.
*/

// Time: O(n) | Space: O(h) | n = nodes | h = height of tree
const heightBalanced = (head) => {
  let isBalanced = [true]
  depth(head, isBalanced)
  return isBalanced[0]
}

const depth = (head, isBalanced) => {
  if (head === null) return 0

  let left = depth(head.left, isBalanced) + 1
  let right = depth(head.right, isBalanced) + 1

  if (left < right - 1 || right < left - 1) isBalanced[0] = false

  return Math.max(left, right)
}

module.exports = {heightBalanced}
