const {isSymmetric} = require('./isSymmetric')

describe(`A binary tree is symmetric if you can draw a vertical line through the root and then
  the left subtree is the mirror image of the right subtree.
  Write a program that checks whether a binary tree is symmetric.`, function () {
  let test1, test2, test3, test4, test5
  class Node {
    constructor (val) {
      this.value = val
      this.left = null
      this.right = null
    }
  }

  beforeEach(function () {
    test1 = new Node(5)

    test2 = new Node(5)
    test2.left = new Node(4)
    test2.left.left = new Node(3)
    test2.right = new Node(4)
    test2.right.right = new Node(3)

    test3 = new Node(5)
    test3.left = new Node(4)
    test3.left.left = new Node(3)
    test3.right = new Node(4)
    test3.right.right = new Node(2)

    test4 = new Node(5)
    test4.left = new Node(4)
    test4.left.left = new Node(3)
    test4.right = new Node(4)
    test4.right.left = new Node(3)

    test5 = new Node(5)
    test5.left = new Node(4)
    test5.left.left = new Node(3)
    test5.right = new Node(4)
    test5.right.right = new Node(3)
    test5.right.right.left = new Node(2)
  })

  it('can check for symmetry', function () {
    expect(isSymmetric(test1)).toEqual(true)
    expect(isSymmetric(test2)).toEqual(true)
    expect(isSymmetric(test3)).toEqual(false)
    expect(isSymmetric(test3)).toEqual(false)
  })
})
