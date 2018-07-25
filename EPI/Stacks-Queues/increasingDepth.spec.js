const {increasingDepth} = require('./increasingDepth')

describe(`Given a binary tree, return an array consisting of the keys at the same level. Keys
  should appear in the order of the corresponding nodes' depths, breaking ties from left
  to right.`, function () {
  let test1, test2
  class Node {
    constructor (value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }

  beforeEach(function () {
    test1 = new Node(4)
    test1.left = new Node(3)
    test1.right = new Node(2)

    test2 = new Node(10)
    test2.left = new Node(20)
    test2.right = new Node(30)
    test2.right.right = new Node(40)
    test2.right.right.right = new Node(50)
  })

  it('returns an array consisting of the keys at the same depth', function () {
    expect(increasingDepth(test1)).toEqual([[4], [3, 2]])
    expect(increasingDepth(test2)).toEqual([[10], [20, 30], [40], [50]])
  })
})
