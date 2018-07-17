/*
  Write a program which takes an array of n integers, where A[i] denotes the maximum
  you can advance from index i, and returns whether it is possible to advance to the
  last index starting from the beginning of the array.
*/

// Time: O(w*h) | Space: O(w+h) | w = width | h = height
const searchMaze = (matrix, start, end) => {
  const currentPath = [start]
  while (currentPath.length) {
    let tile = currentPath.pop()
    let row = tile[0]
    let col = tile[1]
    if (row === end[0] && col === end[1]) return true
    if (matrix[row][col] === 'black' || matrix[row][col] === 'visited') continue
    matrix[row][col] = 'visited'
    const unvisitedPaths = getUnvisitedPaths(matrix, row, col)
    for (const path of unvisitedPaths) {
      currentPath.push(path)
    }
  }
  return false
}

const getUnvisitedPaths = (matrix, row, col) => {
  let unvisitedPaths = []
  if (row > 0 && (matrix[row - 1][col] !== 'black' || matrix[row - 1][col] !== 'visited')) unvisitedPaths.push([row - 1, col])
  if (row < matrix.length - 1 && (matrix[row + 1][col] !== 'black' || matrix[row + 1][col] !== 'visited')) unvisitedPaths.push([row + 1, col])
  if (col > 0 && (matrix[row][col - 1] !== 'black' || matrix[row][col - 1] !== 'visited')) unvisitedPaths.push([row, col - 1])
  if (col < matrix[0].length - 1 && (matrix[row][col + 1] !== 'black' || matrix[row][col + 1] !== 'visited')) unvisitedPaths.push([row, col + 1])
  return unvisitedPaths
}

module.exports = {searchMaze}
