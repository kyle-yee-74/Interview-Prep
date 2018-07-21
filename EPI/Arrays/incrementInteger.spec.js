const {incrementInteger} = require('./incrementInteger')

describe(`Write a program which takes as input an array of digits encoding a decimal number
  D and updates the array to represent the number D + 1. For example, if the input
  is [1,2,9] then you should update the array to [1,3,0]. Your algorithm should work
  even if it is implemented in a language that has finite-precision arithmetic.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [1]
    test2 = [9]
    test3 = [1, 2, 9]
    test4 = [9, 9, 9, 9]
  })

  it('updates the number to represent the number D + 1', function () {
    expect(incrementInteger(test1)).toEqual([2])
    expect(incrementInteger(test2)).toEqual([1, 0])
    expect(incrementInteger(test3)).toEqual([1, 3, 0])
    expect(incrementInteger(test4)).toEqual([1, 0, 0, 0, 0])
  })
})
