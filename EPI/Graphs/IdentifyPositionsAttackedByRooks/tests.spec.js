const { attackedByRooks } = require('./solution')

const grid = [
  [1,0,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,0,1,1],
  [1,1,1,0,1,1,1,1],
  [1,1,1,1,1,0,1,1],
  [0,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
];

const ans = [ 
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 1] 
];

const isMatch = (grid1, grid2) => {
  for (let i = 0; i < grid1.length; ++i) {
    for (let j = 0; j < grid1[0].length; ++j) {
      if (grid1[i][j] !== grid2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

test('attackedByRooks #1', () => {
  const result = attackedByRooks(grid);
  expect(isMatch(result, ans)).toEqual(true);
});
