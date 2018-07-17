const {firstGreater} = require('./firstGreater')
const {BinarySearchTree} = require('../../DataStructures/bst')

describe(`Write a program that takes as input a BST and a value, and returns the first key
  that would appear in an inorder traversal which is greater than the input value.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = new BinarySearchTree(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(13).insert(14)
    test2 = new BinarySearchTree(6).insert(8).insert(7).insert(9).insert(4).insert(5).insert(3)
    test3 = new BinarySearchTree(3)
    test4 = new BinarySearchTree(10).insert(5).insert(15).insert(6).insert(17)
  })

  it('checks for valid BSTs', function () {
    expect(firstGreater(test1, 12)).toEqual(13)
    expect(firstGreater(test2, 7)).toEqual(8)
    expect(firstGreater(test3, 3)).toEqual('There is no next highest')
    expect(firstGreater(test4, 16)).toEqual(17)
  })
})
