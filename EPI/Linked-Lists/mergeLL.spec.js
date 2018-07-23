const {mergeLL} = require('./mergeLL')

describe(`Write a program that takes two lists, assumed to be sorted, and returns their merge.
  The only field your program can change in a node is its next field.`, function () {
  let test1, test2, test3, result1, result2, result3
  class Node {
    constructor (value) {
      this.value = value
      this.next = null
    }
  }

  beforeEach(function () {
    test1 = new Node(5)
    test1.next = new Node(10)

    test2 = new Node(3)

    test3 = new Node(3)
    test3.next = new Node(3)

    test4 = new Node(5)

    result1 = new Node(3)
    result1.next = new Node(5)
    result1.next.next = new Node(10)

    result2 = new Node(3)
    result2.next = new Node(3)
    result2.next.next = new Node(3)

    result3 = new Node(3)
    result3.next = new Node(3)
    result3.next.next = new Node(5)
    result3.next.next.next = new Node(10)
  })

  it('merges sorted linked lists', function () {
    expect(mergeLL(test1, test2)).toEqual(result1)
  })

  it('merges sorted linked lists with the same values', function () {
    expect(mergeLL(test2, test3)).toEqual(result2)
  })

  it('merges sorted linked lists', function () {
    expect(mergeLL(test1, test3)).toEqual(result3)
  })
})
