const {overlappingLists} = require('./overlappingLists')

describe(`Write a program that takes two cycle-free singly linked lists, and determines if there
  exists a node that is common to both lists.`, function () {
  let test1, test2, test3
  class Node {
    constructor (value) {
      this.value = value
      this.next = null
    }
  }

  beforeEach(function () {
    test1 = new Node(4)
    test1.next = new Node(3)
    test1.next.next = new Node(2)
    test1.next.next.next = new Node(1)

    test2 = new Node(10)
    test2.next = test1.next.next
    test2.next.next = test1.next.next.next

    test3 = new Node(1)
    test3.next = new Node(2)
    test3.next.next = new Node(3)
    test3.next.next.next = new Node(4)
    test3.next.next.next.next = new Node(5)
  })

  it('determines if there is an overlapping node', function () {
    expect(overlappingLists(test1, test2)).toEqual(test1.next.next)
  })

  it('determines there is not an overlapping node', function () {
    expect(overlappingLists(test1, test3)).toEqual(null)
  })
})
