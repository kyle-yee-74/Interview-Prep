const {bstTest} = require('./bstTest')
const {BinarySearchTree} = require('../../DataStructures/bst')

describe(`Write a program that takes as input a binary tree and
  checks if the tree satisfies the BST property.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = new BinarySearchTree(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(13).insert(14)
    test2 = new BinarySearchTree(6).insert(8).insert(7).insert(9).insert(4).insert(5).insert(3)
    test3 = new BinarySearchTree(3)
    test4 = new BinarySearchTree(10).insert(5).insert(15).insert(6)
    test4.left.left = new BinarySearchTree(22)
  })

  it('checks for valid BSTs', function () {
    expect(bstTest(test1)).toEqual(true)
    expect(bstTest(test2)).toEqual(true)
    expect(bstTest(test3)).toEqual(true)
    expect(bstTest(test4)).toEqual(false)
  })
})
