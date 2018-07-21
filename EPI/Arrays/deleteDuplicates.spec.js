const {deleteDuplicates} = require('./deleteDuplicates')

describe(`Write a program which takes as input a sorted array and updates it so that all
  duplicates have been removed and the remaining elements have been shifted left to fill the
  emptied indices. Return the number of valid elements.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [1]
    test2 = [1, 1, 1]
    test3 = [1, 2, 3, 4]
    test4 = [-5, 1, 4, 4, 7, 8, 8]
  })

  it('returns the numbe of valid elements', function () {
    expect(deleteDuplicates(test1)).toEqual(1)
    expect(deleteDuplicates(test2)).toEqual(1)
    expect(deleteDuplicates(test3)).toEqual(4)
    expect(deleteDuplicates(test4)).toEqual(5)
  })
})
