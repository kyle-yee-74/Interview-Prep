const {cyclicity} = require('./cyclicity')

describe(`Write a program that takes the head of a singly linked list and returns null if there
  does not exist a cycle, and the node at the start of the cycle, if a cycle is present. (You
  do not know the length of the list in advance.)`, function () {
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
    test2.next = new Node(11)
    test2.next.next = new Node(12)
    test2.next.next.next = new Node(13)
    test2.next.next.next.next = test2.next

    test3 = new Node(1)
    test3.next = new Node(2)
    test3.next.next = new Node(3)
    test3.next.next.next = new Node(4)
    test3.next.next.next.next = new Node(5)
    test3.next.next.next.next = test3.next.next
  })

  it('determines if a cycle does not exist', function () {
    expect(cyclicity(test1)).toEqual(null)
  })

  it('determines the node at the start of the cycle, if present', function () {
    expect(cyclicity(test2).value).toEqual(11)
    expect(cyclicity(test3).value).toEqual(3)
  })
})
