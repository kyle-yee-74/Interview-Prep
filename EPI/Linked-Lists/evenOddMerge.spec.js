const {evenOddMerge} = require('./evenOddMerge')

describe(`Consider a singly linked list whose nodesare numbered starting at 0. Define the evenodd
  merge of the list to be the list consisting of the even-numbered nodes followed
  by the odd-numbered nodes. Write a program that computes the even-odd merge.`, function () {
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

    result1 = new Node(3)
    result1.next = new Node(4)
    result1.next.next = new Node(2)

    test2 = new Node(1)
    test2.next = new Node(2)
    test2.next.next = new Node(3)
    test2.next.next.next = new Node(4)
    test2.next.next.next.next = new Node(5)
    test2.next.next.next.next.next = new Node(6)

    result2 = new Node(2)
    result2.next = new Node(4)
    result2.next.next = new Node(6)
    result2.next.next.next = new Node(1)
    result2.next.next.next.next = new Node(3)
    result2.next.next.next.next.next = new Node(5)
  })

  it('sets nodes in order of even-numbered nodes followed by odd-numbered nodes', function () {
    expect(evenOddMerge(test1)).toEqual(result1)
    expect(evenOddMerge(test2)).toEqual(result2)
  })
})
