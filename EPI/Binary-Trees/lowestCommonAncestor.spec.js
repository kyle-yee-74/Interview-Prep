const {lowestCommonAncestor} = require('./lowestCommonAncestor')

describe(`Design an algorithm for computing the LCA of two nodes in a
  binary tree in which nodes do not have a parent field.`, function () {
  let test1
  class Node {
    constructor (value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }

  beforeEach(function () {
    test1 = new Node(1)
    test1.right = new Node(2)
    test1.left = new Node(3)
    test1.left.right = new Node(6)
    test1.left.left = new Node(5)
    test1.left.left.left = new Node(4)
  })

  it('checks for the lowest common ancestor between 2 nodes', function () {
    expect(lowestCommonAncestor(test1, new Node(2), new Node(4))).toEqual(1)
    expect(lowestCommonAncestor(test1, new Node(3), new Node(6))).toEqual(3)
    expect(lowestCommonAncestor(test1, new Node(6), new Node(6))).toEqual(6)
    expect(lowestCommonAncestor(test1, new Node(2), new Node(7))).toEqual(null)
  })
})
