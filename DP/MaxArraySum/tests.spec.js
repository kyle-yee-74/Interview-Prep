const {maxSubsetSum} = require('./solution')

test('maxSubsetSum #1', () => {
  expect(maxSubsetSum([])).toEqual(undefined)
})

test('maxSubsetSum #2', () => {
  expect(maxSubsetSum([1])).toEqual(1)
})

test('maxSubsetSum #3', () => {
  expect(maxSubsetSum([1, 0])).toEqual(1)
})

test('maxSubsetSum #4', () => {
  expect(maxSubsetSum([3, 7, 4, 6, 5])).toEqual(13)
})

test('maxSubsetSum #5', () => {
  expect(maxSubsetSum([2, 1, 5, 8, 4])).toEqual(11)
})

test('maxSubsetSum #6', () => {
  expect(maxSubsetSum([3, 5, -7, 8, 10])).toEqual(15)
})

test('maxSubsetSum #7', () => {
  expect(maxSubsetSum([-3, -7, -4, -6, -5])).toEqual(-3)
})
