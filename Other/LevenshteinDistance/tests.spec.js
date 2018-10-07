const { levenshteinDistance } = require('./solution')

test('levenshteinDistance #1', () => {
  expect(levenshteinDistance('', '')).toEqual(0);
});

test('levenshteinDistance #2', () => {
  expect(levenshteinDistance('abcd', '1234')).toEqual(4);
});

test('levenshteinDistance #3', () => {
  expect(levenshteinDistance('', 'dragon')).toEqual(6);
});

test('levenshteinDistance #4', () => {
  expect(levenshteinDistance('levenshtein', 'kevinshtin')).toEqual(3);
});


