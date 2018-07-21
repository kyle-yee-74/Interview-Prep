const {interconvert} = require('./interconvert')

describe(`A string is a sequence of characters. A string may encode an integer, e.g., "123"
  encodes 123. In this problem, you are to implement methods that take a string
  representing an integer and return the corresponding integer, and vice versa. Your
  code should handle negative integers.`, function () {
  let test1, test2, test3, test4, test5

  beforeEach(function () {
    test1 = 1
    test2 = 42
    test3 = -314
    test4 = '7654321'
    test5 = '-7018'
  })

  it('converts string to number and number to string', function () {
    expect(interconvert(test1)).toBe('1')
    expect(interconvert(test2)).toBe('42')
    expect(interconvert(test3)).toBe('-314')
    expect(interconvert(test4)).toBe(7654321)
    expect(interconvert(test5)).toBe(-7018)
  })
})
