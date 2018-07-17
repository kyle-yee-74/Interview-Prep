const {dutchNationalFlag} = require('./dutchNationalFlag')

describe(`Write a program that takes an array A and an index i into A, and rearranges the
  elements such that all elements less than A[i] (the "pivot") appear first, followed by
  elements equal to the pivot, followed by elements greater than the pivot.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [[], 0]
    test2 = [[1], 1]
    test3 = [[1, 4, 2, 1, 2], 2]
    test4 = [[1, 0, 4, 1, 3, 4, 2], 2]
  })

  it('rearranges elements into a dutch national flag', function () {
    expect(dutchNationalFlag(test1[0], test1[1])).toEqual('Invalid input for i')
    expect(dutchNationalFlag(test2[0], test2[1])).toEqual('Invalid input for i')
    expect(dutchNationalFlag(test3[0], test3[1])).toEqual([1, 1, 2, 2, 4])
    expect(dutchNationalFlag(test4[0], test4[1])).toEqual([1, 0, 1, 3, 2, 4, 4])
  })
})
