/*
  Write a program that takes as input a BST and a value, and returns the first key
  that would appear in an inorder traversal which is greater than the input value.
*/

// Time: O(log(n)) | Space: O(d) | n = nodes | d = depth of tree
const firstGreater = (head, target, nextHighest = Infinity) => {
  if (head.value - target > 0 && head.value - target < nextHighest) nextHighest = head.value
  if (head.left && target < head.value) return firstGreater(head.left, target, nextHighest)
  if (head.right && target >= head.value) return firstGreater(head.right, target, nextHighest)
  return nextHighest === Infinity ? 'There is no next highest' : nextHighest
}

module.exports = {firstGreater}
