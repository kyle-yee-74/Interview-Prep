const { kadanesAlgorithm } = require('./solution')

test('kadanesAlgorithm #1', () => {
  expect(kadanesAlgorithm([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4])).toEqual(19);
});
