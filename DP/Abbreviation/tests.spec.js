const { func } = require('./solution')

test('func(args)', () => {
  expect(func('ababbaAbAB', 'AABABB')).toEqual(false)
})

test('func(args)', () => {
  expect(func('aAbAb', 'ABAB')).toEqual(true)
})

test('func(args)', () => {
  expect(func('baaBa', 'BAAA')).toEqual(false)
})

test('func(args)', () => {
  expect(func('abAAb', 'AAA')).toEqual(true)
})

test('func(args)', () => {
  expect(func('AaABCD', 'ABCD')).toEqual(false)
})
