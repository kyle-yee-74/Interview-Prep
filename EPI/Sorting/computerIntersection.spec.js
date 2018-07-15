const {computeIntersection} = require('./computeIntersection')

describe(`Write a program which takes as input two sorted arrays, and 
  returns a new array containing elements that are present in both of 
  the input arrays. The input arrays may have duplicate entries, but
  the returned array should be free of duplicates. For example, the
  input is [2,3,3,5,5,6,7,7,8,12] and [5,5,6,8,8,9,10,10], your
  output should be [5,6,8].`, function () {
  it('returns elements present in both input arrays (duplicate free)', function () {
    expect(computeIntersection([], [1])).toEqual([])
    expect(computeIntersection([1], [-1, 0, 1, 1, 1])).toEqual([1])
    expect(computeIntersection([2, 3, 3, 5, 5, 6, 7, 7, 8, 12], [5, 5, 6, 8, 8, 9, 10, 10])).toEqual([5, 6, 8])
  })
})
