const {traverse2DArray} = require('./traverse2DArray')

describe(`Write a program that counts how many ways you can go from the top-left to the
bottom-right in a 2D array. All moves must either go right or down.`, function () {

  it('can compute the minimum edits between 2 strings', function () {
    expect(traverse2DArray(5, 5)).toEqual(70)
    expect(traverse2DArray(2, 2)).toEqual(2)
    expect(traverse2DArray(3, 7)).toEqual(28)
  })
})
