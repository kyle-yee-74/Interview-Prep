const {cyclicallySorted} = require('./cyclicallySorted')

describe(`An array is said to be cyclically sorted if it is possible to cyclically shift its entries so
  that it becomes sorted. Design an O(log n) algorithm for finding the position of the
  smallest element in a cyclically sorted array. Assume all elements are distinct.`, function () {
  it('finds the smallest element in a cyclically sorted array', function () {
    expect(cyclicallySorted([1])).toEqual(1)
    expect(cyclicallySorted([1, 2, 3, 4, 5, 6])).toEqual(1)
    expect(cyclicallySorted([3, 4, 5, 6, 1, 2])).toEqual(1)
    expect(cyclicallySorted([2, 3, 4, 5, 1])).toEqual(1)
  })
})
