const {countingSort} = require('./countingSort')

describe('Counting Sort', function () {
  it('sorts the arrays', function () {
    expect(countingSort([1])).toEqual([1])
    expect(countingSort([3, 4, 2, 1, 2])).toEqual([1, 2, 2, 3, 4])
    expect(countingSort([5, 8, 3, 4, 4, 1, 10])).toEqual([1, 3, 4, 4, 5, 8, 10])
  })
})
