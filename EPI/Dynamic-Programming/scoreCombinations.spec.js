const {scoreCombinations} = require('./scoreCombinations')

describe(`Write a program that takes a final score and scores for individual plays, and returns
  the number of combinations of plays that result in the final score.`, function () {

  it('can output the number of combinations of plays', function () {
    expect(scoreCombinations(4, [1, 3, 7])).toEqual(2)
    expect(scoreCombinations(0, [1, 3, 7])).toEqual(1)
    expect(scoreCombinations(12, [1, 3, 3, 5, 7])).toEqual(26)
    expect(scoreCombinations(9, [2])).toEqual(0)
  })
})
