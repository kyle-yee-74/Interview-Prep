const {advancingThroughArray} = require('./advancingThroughArray')

describe(`Write a program which takes an array of n integers, where A[i] denotes the maximum
  you can advance from index i, and returns whether it is possible to advance to the
  last index starting from the beginning of the array.`, function () {
  let test1, test2, test3, test4, test5

  beforeEach(function () {
    test1 = [0]
    test2 = [1, 1, 1, 1, 1, 0, 0]
    test3 = [3, 3, 1, 0, 2, 0, 1]
    test4 = [3, 2, 0, 0, 2, 0, 1]
    test5 = [10, 0, 0, 0, 0, 0, 0]
  })

  it('sorts into even entries, then odd', function () {
    expect(advancingThroughArray(test1)).toEqual(true)
    expect(advancingThroughArray(test2)).toEqual(false)
    expect(advancingThroughArray(test3)).toEqual(true)
    expect(advancingThroughArray(test4)).toEqual(false)
    expect(advancingThroughArray(test5)).toEqual(true)
  })
})
