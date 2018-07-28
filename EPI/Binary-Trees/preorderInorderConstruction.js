/*
  Given an inorder traversal sequence and a preorder traversal sequence of a binary
  tree write a program to reconstruct the tree. Assume each node has a unique key.
*/

// Time: O(n) | Space: O(n + d) | n = size of hashtable | d = depth of the call stack
const binaryTreeFromPreorderInorder = (preorder, inorder) => {
  const nodeToInorderIdx = {}
  for (let i = 0; i < inorder.length; ++i) {
    nodeToInorderIdx[inorder[i]] = i
  }
  return binaryTreeFromPreorderInorderHelper(preorder, 0, preorder.length, 0, inorder.length, nodeToInorderIdx)
}

const binaryTreeFromPreorderInorderHelper = (preorder, preorderStart, preorderEnd, inorderStart, inorderEnd, nodeToInorderIdx) => {
  if (preorderStart >= preorderEnd || inorderStart >= inorderEnd) return null

  const rootInorderIdx = nodeToInorderIdx[preorder[preorderStart]]
  const leftSubtreeIndicies = rootInorderIdx - inorderStart

  return new BinaryTreeNode(
    preorder[preorderStart],
    binaryTreeFromPreorderInorderHelper(
      preorder,
      preorderStart + 1,
      preorderStart + 1 + leftSubtreeIndicies,
      inorderStart,
      rootInorderIdx,
      nodeToInorderIdx),
    binaryTreeFromPreorderInorderHelper(
      preorder,
      preorderStart + 1 + leftSubtreeIndicies,
      preorderEnd,
      rootInorderIdx + 1,
      inorderEnd,
      nodeToInorderIdx)
  )
}

class BinaryTreeNode {
  constructor (value, left, right) {
    this.value = value
    this.left = left !== undefined ? left : null
    this.right = right !== undefined ? right : null
  }
}

module.exports = {binaryTreeFromPreorderInorder}
