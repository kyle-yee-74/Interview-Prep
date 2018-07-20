const {firstOccurrenceK} = require('./firstOccurrenceK')

describe(`Write a method that takes a sorted array and a key and returns the index of the
  first occurrence of that key in the array.`, function () {
  it('returns the first occurence of that key in the array', function () {
    expect(firstOccurrenceK([-1], -1)).toEqual(0)
    expect(firstOccurrenceK([1, 2, 3, 4, 5, 6], -1)).toEqual(null)
    expect(firstOccurrenceK([-1, 0, 0, 1, 2, 3], 0)).toEqual(1)
    expect(firstOccurrenceK([-1, 0, 0, 0, 0, 4, 4, 4], 4)).toEqual(5)
  })
})
