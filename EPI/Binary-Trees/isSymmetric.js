/*
  A binary tree is symmetric if you can draw a vertical line through the root and then
  the left subtree is the mirror image of the right subtree.
  Write a program that checks whether a binary tree is symmetric.
*/

// Time: O(n) | Space: O(d) | n = nodes | d = depth of tree
const isSymmetric = (root) => {
  return checkLeftRight(root.left, root.right)
}

const checkLeftRight = (left, right) => {
  if (!left && !right) return true

  if (left.value === right.value &&
    checkLeftRight(left.left, right.right) &&
    checkLeftRight(left.right, right.left)) {
    return true
  } else return false
}

module.exports = {isSymmetric}
