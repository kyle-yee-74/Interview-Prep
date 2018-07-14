const {reorderEvenEntries} = require('./reorderEven')

describe(`Your input is an array of integers, and you have to reorder 
          its entries so that the even entries appear first. However,
          you are required to solve it without allocating additional
          storage.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = []
    test2 = [1]
    test3 = [1, 2, 3, 4]
    test4 = [-5, 92, 74, 1, 3, 18, 60]
  })

  it('sorts into even entries, then odd', function () {
    expect(reorderEvenEntries(test1)).toEqual([])
    expect(reorderEvenEntries(test2)).toEqual([1])
    expect(reorderEvenEntries(test3)).toEqual([4, 2, 3, 1])
    expect(reorderEvenEntries(test4)).toEqual([60, 92, 74, 18, 3, 1, -5])
  })
})
