/*
  Write a program that counts how many ways you can go from the top-left to the
  bottom-right in a 2D array. All moves must either go right or down.
*/

// Time: O(n*m) | Space: O(n*m) | n = row | m = col
const traverse2DArray = (row, col) => {
  
  const cache = []
  for (let i = 0; i < row; ++i) {
    let row = []
    for (let j = 0; j < col; ++j) {
      row.push(1)
    }
    cache.push(row)
  }

  for (let i = 1; i < row; ++i) {
    let currentRow = cache[i]
    for (let j = 1; j < col; ++j) {
      currentRow[j] = cache[i - 1][j] + cache[i][j - 1]
    }
  }

  return cache[row - 1][col - 1]
}

module.exports = {traverse2DArray}
