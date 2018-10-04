const { longestIncreasingSubsequence1, longestIncreasingSubsequence2 } = require('./solution')

const input = [5,7,-24,12,10,2,3,12,5,6,35];
const output = [-24,2,3,5,6,35];
const match = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    if ( arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

test('longestIncreasingSubsequence1 | O(n^2) Time | #1', () => {
  let result = longestIncreasingSubsequence1(input);
  expect(match(result, output)).toEqual(true)
});

test('longestIncreasingSubsequence2 | O(n*log(n)) Time | #1', () => {
  let result = longestIncreasingSubsequence2(input);
  expect(match(result, output)).toEqual(true)
});
