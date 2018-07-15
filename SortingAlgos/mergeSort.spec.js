const {mergeSort} = require('./mergeSort')

describe('Merge Sort', function () {
  it('sorts the arrays', function () {
    expect(mergeSort([1])).toEqual([1])
    expect(mergeSort([3, 4, 2, 1, 0])).toEqual([0, 1, 2, 3, 4])
    expect(mergeSort([-8, 20, -1029, 3, 44, 707, 1])).toEqual([-1029, -8, 1, 3, 20, 44, 707])
  })
})
