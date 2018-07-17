const {dutchNationalFlag} = require('./dutchNationalFlag')

describe(`Your input is an array of integers, and you have to reorder 
          its entries so that the even entries appear first. However,
          you are required to solve it without allocating additional
          storage.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [[], 0]
    test2 = [[1], 1]
    test3 = [[1, 4, 2, 1, 2], 2]
    test4 = [[1, 0, 4, 1, 3, 4, 2], 2]
  })

  it('sorts into even entries, then odd', function () {
    expect(dutchNationalFlag(test1[0], test1[1])).toEqual('Invalid input for i')
    expect(dutchNationalFlag(test2[0], test2[1])).toEqual('Invalid input for i')
    expect(dutchNationalFlag(test3[0], test3[1])).toEqual([1, 1, 2, 2, 4])
    expect(dutchNationalFlag(test4[0], test4[1])).toEqual([1, 0, 1, 3, 2, 4, 4])
  })
})
