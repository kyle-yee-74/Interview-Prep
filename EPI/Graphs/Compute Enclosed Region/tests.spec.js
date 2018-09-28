const { flipEnclosedRegions } = require('./solution');

const A = [
  ['B', 'B', 'B', 'B'],
  ['W', 'B', 'W', 'B'],
  ['B', 'W', 'W', 'B'],
  ['B', 'B', 'B', 'B']
];

const B = [
  ['B', 'B', 'B', 'B'],
  ['W', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B'],
  ['B', 'B', 'B', 'B']
];

test('flipEnclosedRegions #1', () => {
  expect(flipEnclosedRegions(A)).toEqual(B);
});
