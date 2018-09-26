const { calcEquation } = require('./solution')

const test1 = [
  [ ['a', 'b'], ['b', 'c'] ],
  [2.0, 3.0],
  [ ['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x'] ]
];

const test2 = [
  [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h']],
  [4.5, 2.3, 8.9, 0.44],
  [['a', 'c'], ['d', 'f'], ['h', 'e'], ['b', 'e'], ['d', 'h'], ['g', 'f'], ['c', 'g']]
];

test('calcEquation #1', () => {
  expect(calcEquation(test1[0], test1[1], test1[2])).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
});

test('calcEquation #2', () => {
  expect(calcEquation(test2[0], test2[1], test2[2])).toEqual([-1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0]);
});
