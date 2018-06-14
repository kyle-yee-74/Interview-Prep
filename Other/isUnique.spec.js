const {allUniqueChars1, allUniqueChars2, allUniqueChars3} = require('./isUnique')

test('should check if a given string has all unique characters', () => {
  expect(allUniqueChars1('blitzcrank')).toEqual(true)
  expect(allUniqueChars1('camille')).toEqual(false)
  expect(allUniqueChars2('blitzcrank')).toEqual(true)
  expect(allUniqueChars2('camille')).toEqual(false)
  expect(allUniqueChars3('blitzcrank')).toEqual(true)
  expect(allUniqueChars3('camille')).toEqual(false)
})
