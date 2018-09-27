const { paintMatrixRecursive, paintMatrixIterative } = require('./solution');

const checkMatch = (matrix1, matrix2) => {
  for (let i = 0; i < matrix1.length; ++i) {
    for (let j = 0; j < matrix1[0].length; ++j) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }
  return true;
};

describe(`Implement a routine that takes an 'n X m' Boolean array A 
  together with an entry (x, y) and flips the color of the region 
  associated with (x, y).`, function () {
  let test1, test2, test3, test4, test5

  beforeEach(function () {
    test1 = [
      [false, true, false, true, true, true, false, false, false, false],
      [true, true, false, true, true, false, true, true, false, false],
      [false, false, false, true, true, false, false, true, false, false],
      [true, false, true, false, false, false, false, true, false, true],
      [false, true, false, true, true, true, true, false, true, true],
      [false, true, false, true, true, false, true, false, false, false],
      [true, true, true, true, false, true, false, true, true, false],
      [false, true, false, true, false, true, false, true, true, true],
      [false, true, false, false, true, true, true, false, false, false],
      [true, true, true, true, true, true, true, false, false, true]
    ];
    test2 = [
      [false, true, false, true, true, true, false, false, false, false],
      [true, true, false, true, true, false, true, true, false, false],
      [false, false, false, true, true, false, false, true, false, false],
      [true, false, true, false, false, false, false, true, false, true],
      [false, false, false, false, false, false, false, false, true, true],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, true, true, false],
      [false, false, false, false, false, false, false, true, true, true],
      [false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, true]
    ];
    test3 = [
      [false, true, true, true, true, true, false, false, false, false],
      [true, true, true, true, true, true, true, true, false, false],
      [true, true, true, true, true, true, true, true, false, false],
      [true, true, true, true, true, true, true, true, false, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true]
    ];
    test4 = [
      [false, true, false, true, true],
      [false, true, false, true, true],
      [true, true, false, true, true],
      [false, true, false, true, true],
      [false, true, false, true, true]
    ];
    test5 = [
      [false, true, false, false, false],
      [false, true, false, false, false],
      [true, true, false, false, false],
      [false, true, false, false, false],
      [false, true, false, false, false]
    ];
  });

  it('paintMatrixRecursive #1', function () {
    const result = paintMatrixRecursive(test1, 5, 4);
    expect(checkMatch(result, test2)).toEqual(true);
  });

  it('paintMatrixRecursive #2', function () {
    const result = paintMatrixRecursive(test2, 3, 6);
    expect(checkMatch(result, test3)).toEqual(true);
  });

  it('paintMatrixIterative #1', function () {
    const result = paintMatrixIterative(test4, 4, 4);
    expect(checkMatch(result, test5)).toEqual(true);
  });

});
