const paintMatrixRecursive = (matrix, entryX, entryY) => {
  console.log(matrix);
  console.log(matrix[entryX]);
  paintSquare(matrix, entryX, entryY, matrix[entryX][entryY]);
  return matrix;
};

const paintSquare = (matrix, x, y, color) => {
  const currentColor = matrix[x][y];
  matrix[x][y] = !currentColor;
  if (matrix[x - 1] !== undefined && matrix[x - 1][y] === color) {
    paintSquare(matrix, x - 1, y, color);
  }
  if (matrix[x + 1] !== undefined && matrix[x + 1][y] === color) {
    paintSquare(matrix, x + 1, y, color);
  }
  if (matrix[x][y - 1] !== undefined && matrix[x][y - 1] === color) {
    paintSquare(matrix, x, y - 1, color);
  }
  if (matrix[x][y + 1] !== undefined && matrix[x][y + 1] === color) {
    paintSquare(matrix, x, y + 1, color);
  }
};

const paintMatrixIterative = (matrix, entryX, entryY) => {
  const currentColor = matrix[entryX][entryY];
  const queue = [[entryX, entryY]];
  while (queue.length) {
    const currentSquare = queue.shift();
    const x = currentSquare[0];
    const y = currentSquare[1];
    matrix[x][y] = !matrix[x][y];
    const neighbors = findNeighbors(matrix, x, y, currentColor);
    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
  return matrix;
};

const findNeighbors = (matrix, x, y, color) => {
  const similarNeighbors = [];
  if (matrix[x - 1] !== undefined && matrix[x - 1][y] === color) similarNeighbors.push([x - 1, y]);
  if (matrix[x + 1] !== undefined && matrix[x + 1][y] === color) similarNeighbors.push([x + 1, y]);
  if (matrix[x][y - 1] !== undefined && matrix[x][y - 1] === color) similarNeighbors.push([x, y - 1]);
  if (matrix[x][y + 1] !== undefined && matrix[x][y + 1] === color) similarNeighbors.push([x, y + 1]);
  return similarNeighbors;
};

module.exports = { paintMatrixRecursive, paintMatrixIterative }
