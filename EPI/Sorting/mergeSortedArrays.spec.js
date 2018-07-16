const {mergeSortedArrays} = require('./mergeSortedArrays')

describe(`Write a program which takes as input two sorted arrays of integers, and updates the
  first to the combined entries of the two arrays in sorted order. Assume the first array
  has enough empty entries at its end to hold the result.`, function () {
  it('merges the two arrays into the first array', function () {
    expect(mergeSortedArrays([], [])).toEqual([])
    expect(mergeSortedArrays([1], [])).toEqual([1])
    expect(mergeSortedArrays([], [1])).toEqual([1])
    expect(mergeSortedArrays([1], [0])).toEqual([0, 1])
    expect(mergeSortedArrays([0], [1])).toEqual([0, 1])
    expect(mergeSortedArrays([1, 2], [1])).toEqual([1, 1, 2])
    expect(mergeSortedArrays([5, 13, 17], [3, 7, 11, 19])).toEqual([3, 5, 7, 11, 13, 17, 19])
  })
})
