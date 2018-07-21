const {reverseDigits} = require('./reverseDigits')

describe(`Write a program which takes an integer and returns the integer corresponding to the
  digits of the input written in reverse order. For example, the reverse of 42 is 24, and
  the reverse of -314 is -413.`, function () {
  let test1, test2, test3, test4, test5

  beforeEach(function () {
    test1 = 1
    test2 = 42
    test3 = -314
    test4 = '7654321'
    test5 = '-7018'
  })

  it('reverses the digits of the input', function () {
    expect(reverseDigits(test1)).toEqual(1)
    expect(reverseDigits(test2)).toEqual(24)
    expect(reverseDigits(test3)).toEqual(-413)
    expect(reverseDigits(test4)).toEqual(1234567)
    expect(reverseDigits(test5)).toEqual(-8107)
  })
})
