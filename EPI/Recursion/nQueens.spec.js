const {nQueens} = require('./nQueens')

describe(`A nonattacking placement of queens is one in which no
  two queens are in the same row, column, or diagonal.

  Write a program which returns all distinct nonattacking
  placements of n queens on an n x n chessboard, where n is
  an input to the program.`, function () {

  it('counts all distinct nonattacking placements of n queens', function () {
    expect(nQueens(3)).toEqual(0)
    expect(nQueens(4)).toEqual(2)
    expect(nQueens(5)).toEqual(10)
    expect(nQueens(6)).toEqual(4)
  })
})
