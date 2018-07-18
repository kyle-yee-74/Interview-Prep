const {lcaWithParentPointer} = require('./LCAparent')

describe(`Given two nodes in a binary tree, design an algorithm that computes their LCA.
  Assume that each node has a parent pointer.`, function () {
  let test1, node1, node2, node3, node4, node5, node6
  class Node {
    constructor (value) {
      this.value = value
      this.left = null
      this.right = null
      this.parent = null
    }
  }

  beforeEach(function () {
    node1 = test1 = new Node(1)
    node2 = test1.right = new Node(2)
    node2.parent = node1
    node3 = test1.left = new Node(3)
    node3.parent = test1
    node6 = test1.left.right = new Node(6)
    node6.parent = test1.left
    node5 = test1.left.left = new Node(5)
    node5.parent = test1.left
    node4 = test1.left.left.left = new Node(4)
    node4.parent = test1.left.left
  })

  it('checks for the lowest common ancestor between 2 nodes', function () {
    expect(lcaWithParentPointer(node2, node4)).toEqual(node1)
    expect(lcaWithParentPointer(node6, node6)).toEqual(node3)
    expect(lcaWithParentPointer(node5, node4)).toEqual(node3)
  })
})
