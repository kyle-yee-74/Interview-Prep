const { trap } = require('./solution')

test('trap #1', () => {
  expect(trap([0,8,0,0,5,0,0,10,0,0,1,1,0,3])).toEqual(48)
});

test('trap #2', () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6)
});
