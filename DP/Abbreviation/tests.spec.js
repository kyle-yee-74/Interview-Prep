const { abbreviation } = require('./solution')

test('abbreviation #1', () => {
  expect(abbreviation('ababbaAbAB', 'AABABB')).toEqual(false)
})

test('abbreviation #2', () => {
  expect(abbreviation('aAbAb', 'ABAB')).toEqual(true)
})

test('abbreviation #3', () => {
  expect(abbreviation('baaBa', 'BAAA')).toEqual(false)
})

test('abbreviation #4', () => {
  expect(abbreviation('abAAb', 'AAA')).toEqual(true)
})

test('abbreviation #5', () => {
  expect(abbreviation('babaABbbAb', 'ABAA')).toEqual(false)
})

test('abbreviation #6', () => {
  expect(abbreviation('AaABCD', 'ABCD')).toEqual(false)
})

test('abbreviation #7', () => {
  expect(abbreviation('Yyxu', 'Y')).toEqual(true)
})
