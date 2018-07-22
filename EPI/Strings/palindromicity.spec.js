const {palindromicity} = require('./palindromicity')

describe(`Implement a function which takes as input a string s and returns true if s is a
  palindromic string.`, function () {
  it('checks if the string is a palindrome', function () {
    expect(palindromicity('AmanaplanacanalPanama')).toEqual(true)
    expect(palindromicity('AblewasIereIsawElba')).toEqual(true)
    expect(palindromicity('RayaRay')).toEqual(false)
    expect(palindromicity('racecar')).toEqual(true)
  })
})
