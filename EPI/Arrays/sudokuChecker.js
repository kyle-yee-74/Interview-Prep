/*
  Check whether a 9 X 9 2D array representing a partially completed Sudoku is valid.
  Specifically, check that no row, column, or 3 X 3 2D subarray contains duplicates. A
  0-value in the 2D array indicates that entry is blank; every other entry is in [1,9].
*/

// Time: O(n^2) | Space: O(1) | n = length of row * col
const sudokuChecker = (matrix) => {
  return checkRow(matrix) && checkCol(matrix) && checkGrid(matrix)
}

const checkRow = (matrix) => {
  for (let i = 0; i < matrix.length; ++i) {
    if (hasDuplicate(matrix, i, i + 1, 0, matrix.length)) return false
  }
  return true
}

const checkCol = (matrix) => {
  for (let i = 0; i < matrix.length; ++i) {
    if (hasDuplicate(matrix, 0, matrix.length, i, i + 1)) return false
  }
  return true
}

const checkGrid = (matrix) => {
  let regionSize = Math.sqrt(matrix.length)
  for (let i = 0; i < regionSize; ++i) {
    for (let j = 0; j < regionSize; ++j) {
      if (hasDuplicate(matrix, regionSize * i, regionSize * (i + 1),
        regionSize * j, regionSize * (j + 1))) return false
    }
  }
  return true
}

const hasDuplicate = (matrix, row, rowMax, col, colMax) => {
  let array = new Array(matrix.length)
  for (let i = row; i < rowMax; ++i) {
    for (let j = col; j < colMax; ++j) {
      if (matrix[i][j] === 0) continue
      if (array[matrix[i][j] - 1] !== undefined) return true
      array[matrix[i][j] - 1] = matrix[i][j]
    }
  }
  return false
}

module.exports = {sudokuChecker}
