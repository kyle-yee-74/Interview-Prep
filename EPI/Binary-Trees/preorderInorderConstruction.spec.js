const {binaryTreeFromPreorderInorder} = require('./preorderInorderConstruction')

describe(`Given an inorder traversal sequence and a preorder traversal sequence of a binary
  tree write a program to reconstruct the tree. Assume each node has a unique key.`, function () {
  let test1, test2, test3

  class BinaryTreeNode {
    constructor (value, left, right) {
      this.value = value
      this.left = left !== undefined ? left : null
      this.right = right !== undefined ? right : null
    }
  }

  beforeEach(function () {
    test1 = new BinaryTreeNode(1)
    test1.left = new BinaryTreeNode(2)
    test1.right = new BinaryTreeNode(3)
    test1.right.right = new BinaryTreeNode(4)
    test1.right.right.right = new BinaryTreeNode(5)

    test2 = new BinaryTreeNode(1)
    test2.left = new BinaryTreeNode(2)
    test2.right = new BinaryTreeNode(3)

    test3 = new BinaryTreeNode('H')
    test3.left = new BinaryTreeNode('B')
    test3.right = new BinaryTreeNode('C')
    test3.left.left = new BinaryTreeNode('F')
    test3.left.right = new BinaryTreeNode('E')
    test3.left.right.left = new BinaryTreeNode('A')
    test3.right.right = new BinaryTreeNode('D')
    test3.right.right.right = new BinaryTreeNode('G')
    test3.right.right.right.left = new BinaryTreeNode('I')
  })

  it('creates a binary tree from inorder and preorder sequences', function () {
    expect(binaryTreeFromPreorderInorder([1, 2, 3, 4, 5], [2, 1, 3, 4, 5])).toEqual(test1)
    expect(binaryTreeFromPreorderInorder([1, 2, 3], [2, 1, 3])).toEqual(test2)
    expect(binaryTreeFromPreorderInorder(
      ['H', 'B', 'F', 'E', 'A', 'C', 'D', 'G', 'I'],
      ['F', 'B', 'A', 'E', 'H', 'C', 'D', 'I', 'G']
    )).toEqual(test3)
  })
})
