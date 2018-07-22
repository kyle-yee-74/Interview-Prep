const {baseConversion} = require('./baseConversion')

describe(`Write a program that performs base conversion. The input is a string, an integer b1, and
  another integer b2. The string represents be an integer in base b1. The output should
  be the string representing the integer in base b2. Assume 2 <= b1,b2 <= 16.`, function () {
  it('converts a number base (b1) to base (b2)', function () {
    expect(baseConversion('1111', 2, 16)).toBe('F')
    expect(baseConversion('F', 16, 2)).toBe('1111')
    expect(baseConversion('-152', 6, 12)).toBe('-58')
    expect(baseConversion('-1B', 12, 13)).toBe('-1A')
  })
})
