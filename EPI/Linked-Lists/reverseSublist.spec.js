const {reverseSublist} = require('./reverseSublist')

describe(`Write a program that takes two lists, assumed to be sorted, and returns their merge.
  The only field your program can change in a node is its next field.`, function () {
  let test1, test2, result1, result2
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

    result1 = new Node(1)
    result1.next = new Node(2)
    result1.next.next = new Node(3)
    result1.next.next.next = new Node(4)

    result2 = new Node(10)
    result2.next = new Node(12)
    result2.next.next = new Node(11)
    result2.next.next.next = new Node(13)
  })

  it('does not reverse a linked list if inputs are invalid', function () {
    expect(reverseSublist(test1, 3, 2)).toEqual('Invalid input for s/f')
    expect(reverseSublist(test1, 1, 5)).toEqual('Invalid input for s/f')
  })

  it('reverses a sublist of the linked list', function () {
    expect(reverseSublist(test1, 1, 4)).toEqual(result1)
    expect(reverseSublist(test2, 2, 3)).toEqual(result2)
  })
})
