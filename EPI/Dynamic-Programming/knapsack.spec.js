const {knapsack} = require('./knapsack')

describe(`Write a program for the knapsack problem that selects a subset of items that has
maximum value and satisfies the weight constraint. All items have integer weights
and values. Return the value of the subset and indicies of each item picked.`, function () {

  it('can compute the maximum value based on weight constraint', function () {
    expect(knapsack([[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]], 0)).toEqual([0, []])
    expect(knapsack([[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]], 100)).toEqual([101, [[2, 1], [30, 30], [69, 69]]])
    expect(knapsack([[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]], 100)).toEqual([100, [[70, 70], [30, 30]]])
    expect(knapsack([[1, 2], [4, 3], [5, 6], [7, 7]], 10)).toEqual([11, [[4, 3], [7, 7]]])
  })
})
