const attackedByRooks = (grid) => {
  const attackedByRooksGrid = [];
  for (let i = 0; i < grid.length; ++i) {
    attackedByRooksGrid.push((new Array(grid[0].length)).fill(1));
  }

  for (let j = 0; j < grid.length; ++j) {
    for (let k = 0; k < grid[0].length; ++k) {
      if (grid[j][k] === 0) {
        rookAttacks(j, k, attackedByRooksGrid);
      }
    }
  }
  return attackedByRooksGrid;
};

const rookAttacks = (row, col, output) => {
  for (let i = 0; i < output.length; ++i) {
    output[i][col] = 0;
  }

  for (let j = 0; j < output[0].length; ++j) {
    output[row][j] = 0;
  }
};

module.exports = { attackedByRooks };
