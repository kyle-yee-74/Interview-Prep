const flipEnclosedRegions = (A) => {
  const visited = [];
  const enclosedRegions = [];
  for (let i = 0; i < A.length; ++i) {
    visited.push((new Array(A[0].length)).fill(false));
  }
  for (let j = 0; j < A.length; ++j) {
    for (let k = 0; k < A[0].length; ++k) {
      if (A[j][k] === 'W' && !visited[j][k]) {
        const temp = traverseSquare(A, j, k, visited, []);
        temp.forEach(val => enclosedRegions.push(val));
      }
    }
  }
  for (let l = 0; l < enclosedRegions.length; ++l) {
    const square = enclosedRegions[l];
    const row = square[0];
    const col = square[1];
    A[row][col] = 'B';
  }
  return A;
};

const traverseSquare = (A, x, y, visited, enclosedRegion) => {
  const queue = [[x, y]];
  let reachedBoundary = false;
  while (queue.length) {
    const currentSquare = queue.shift();
    const row = currentSquare[0];
    const col = currentSquare[1];
    if (row === 0 || col === 0 || row === A.length - 1 || col === A[0].length - 1) {
      reachedBoundary = true;
    }
    enclosedRegion.push([row, col]);
    visited[row][col] = true;
    const unvisitedNeighbors = findNeighbors(A, row, col, visited);
    for (const neighbor of unvisitedNeighbors) {
      queue.push(neighbor);
    }
  }
  if (reachedBoundary) {
    return [];
  }
  return enclosedRegion;
};

const findNeighbors = (A, x, y, visited) => {
  const output = [];
  if (A[x - 1] !== undefined && A[x - 1][y] === 'W' && !visited[x - 1][y]) output.push([x - 1, y]);
  if (A[x + 1] !== undefined && A[x + 1][y] === 'W' && !visited[x + 1][y]) output.push([x + 1, y]);
  if (A[x][y - 1] !== undefined && A[x][y - 1] === 'W' && !visited[x][y - 1]) output.push([x, y - 1]);
  if (A[x][y + 1] !== undefined && A[x][y + 1] === 'W' && !visited[x][y + 1]) output.push([x, y + 1]);
  return output;
};

module.exports = { flipEnclosedRegions }
