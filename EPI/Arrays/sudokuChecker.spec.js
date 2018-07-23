const {sudokuChecker} = require('./sudokuChecker')

describe(`Check whether a 9 X 9 2D array representing a partially completed Sudoku is valid.
  Specifically, check that no row, column, or 3 X 3 2D subarray contains duplicates. A
  0-value in the 2D array indicates that entry is blank; every other entry is in [1,9].`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [
      [1, 2, 3, 4],
      [4, 3, 2, 1],
      [2, 4, 1, 3],
      [3, 1, 4, 2]
    ]
    test2 = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ]
    test3 = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 4, 0],
      [1, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 9, 0, 6, 0, 0, 0, 3],
      [0, 2, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 3, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 4, 0, 2, 0, 6, 0, 7, 9]
    ]
    test4 = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 4, 0],
      [1, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 9, 0, 6, 0, 0, 0, 3],
      [0, 2, 0, 8, 6, 3, 0, 0, 1],
      [7, 0, 3, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 4, 0, 2, 0, 6, 0, 7, 9]
    ]
  })

  it('checks for valid sudoku matrix', function () {
    expect(sudokuChecker(test1)).toEqual(true)
    expect(sudokuChecker(test2)).toEqual(true)
    expect(sudokuChecker(test3)).toEqual(true)
    expect(sudokuChecker(test4)).toEqual(false)
  })
})
