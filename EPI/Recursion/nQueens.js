/*
  A nonattacking placement of queens is one in which no
  two queens are in the same row, column, or diagonal.

  Write a program which counts all distinct nonattacking
  placements of n queens on an n x n chessboard, where n is
  an input to the program.
   */

// Time: O(n!), Space: O(n^2)
const nQueens = (n) => {
  const result = [0]
  const matrix = []
  if (n > 3) {
    for (let i = 0; i < n; ++i) {
      let rows = []
      matrix.push(rows)
      for (let j = 0; j < n; ++j) {
        matrix[i].push(0)
      }
    }
    nQueensHelper(n, 0, matrix, result)
  }
  return result[0]
}

const nQueensHelper = (n, row, matrix, result) => {
  if (row === n) {
    ++result[0]
  } else {
    for (let i = 0; i < n; ++i) {
      if (isValid(i, row, matrix)) {
        matrix[row][i] = 1
        nQueensHelper(n, row + 1, matrix, result)
        matrix[row][i] = 0
      }
    }
  }
}

const isValid = (col, row, matrix) => {
  return checkRow(col, row, matrix) && checkCol(col, row, matrix) && checkDiag(col, row, matrix)
}

const checkRow = (col, row, matrix) => {
  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[row][i]) return false
  }
  return true
}

const checkCol = (col, row, matrix) => {
  for (let i = 0; i < matrix.length; ++i) {
    if (matrix[i][col]) return false
  }
  return true
}

const checkDiag = (col, row, matrix) => {
  let startCol = col
  let startRow = row

  // check the diagonal from top-left to bottom-right
  while (startCol > 0 && startRow > 0) {
    --startCol
    --startRow
  }

  while (startCol < matrix.length && startRow < matrix.length) {
    if (matrix[startRow][startCol]) return false
    ++startCol
    ++startRow
  }

  startCol = col
  startRow = row
  // check the diagonal from top-right to bottom-left
  while (startCol < matrix.length && startRow > 0) {
    ++startCol
    --startRow
  }

  while (startCol > 0 && startRow < matrix.length) {
    if (matrix[startRow][startCol]) return false
    --startCol
    ++startRow
  }

  return true
}

module.exports = {nQueens}
