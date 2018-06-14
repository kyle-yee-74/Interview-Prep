const {BinarySearchTree} = require('./bst')

describe('A binary search bst', function () {
  let bst, test1
  const valuesToInsert = [15, 75, 5, 17, 21, 1, 14, 15, 16, 55, 67]

  beforeEach(function () {
    bst = new BinarySearchTree(50)
    test1 = new BinarySearchTree(10)
  })

  it('has methods', function () {
    expect(typeof bst.insert).toBe('function')
    expect(typeof bst.search).toBe('function')
    expect(typeof bst.remove).toBe('function')
  })

  it('make nodes on the correct branches', function () {
    bst.insert(25)
    bst.insert(75)
    expect(bst.left.value).toBe(25)
    expect(bst.right.value).toBe(75)
  })

  it('sorts values when adding', function () {
    expect(bst.value).toBe(50)
    bst.insert(15)
    expect(bst.left.value).toBe(15)
    bst.insert(75)
    expect(bst.right.value).toBe(75)
    bst.insert(5)
    expect(bst.left.left.value).toBe(5)
    bst.insert(17)
    bst.insert(21)
    bst.insert(1)
    bst.insert(14)
    bst.insert(15)
    bst.insert(16)
    bst.insert(55)
    bst.insert(67)
    expect(bst.left.right.right.value).toBe(21)
    expect(bst.left.left.right.right.value).toBe(15)
    expect(bst.right.left.right.value).toBe(67)
  })

  it('returns true if `search` is passed a value in the tree', function () {
    valuesToInsert.forEach(function (value) {
      bst.insert(value)
    })
    valuesToInsert.forEach(function (value) {
      expect(bst.search(value)).toBe(true)
    })
  })

  it('returns false if `search` is passed a value not in the tree', function () {
    valuesToInsert.forEach(function (value) {
      bst.insert(value)
    })
    let testValues = [6, 23, 37, 51]
    testValues.forEach(function (value) {
      expect(bst.search(value)).toBe(false)
    })
  })

  it('successfully removes and updates the tree', function () {
    test1.insert(5).insert(15).insert(22).insert(17).insert(34)
      .insert(7).insert(2).insert(5).insert(1).insert(35).insert(27)
      .insert(16).insert(30).remove(22).remove(17)

    expect(test1.right.right.value).toBe(27)
    expect(test1.right.right.left.value).toBe(16)
  })

  it('when removing the head, it changes its node value to null', function () {
    bst.remove(50)
    expect(bst.value).toBe(null)
  })
})
