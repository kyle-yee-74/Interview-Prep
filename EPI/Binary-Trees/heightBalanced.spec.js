const {heightBalanced} = require('./heightBalanced')

describe(`A binary tree is said to be height-balanced if for each node in the tree, the difference
  in the height of its left and right subtrees is at most one. A perfect binary tree is
  height-balanced, as is a complete binary tree. A height-balanced binary tree does not
  have to be perfect or complete.`, function () {
  let test1, test2, test3

  class Node {
    constructor (val) {
      this.value = val
      this.left = null
      this.right = null
    }
  }

  beforeEach(function () {
    test1 = new Node(1)
    test1.left = new Node(2)
    test1.right = new Node(3)
    test1.right.right = new Node(4)
    test1.right.right.right = new Node(5)

    test2 = new Node(1)
    test2.left = new Node(2)
    test2.right = new Node(3)

    test3 = new Node(1)
    test3.left = new Node(2)
    test3.right = new Node(3)
    test3.left.right = new Node(4)

  })

  it('it checks to see if the tree is height-balanced', function () {
    expect(heightBalanced(test1)).toEqual(false)
    expect(heightBalanced(test2)).toEqual(true)
    expect(heightBalanced(test3)).toEqual(true)
  })
})
