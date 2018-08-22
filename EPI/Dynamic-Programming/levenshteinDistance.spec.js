const {levenshteinDistance} = require('./levenshteinDistance')

describe(`Write a program that takes two strings and computes the minimum number of edits
needed to transform the first string into the second string.`, function () {

  it('can compute the minimum edits between 2 strings', function () {
    expect(levenshteinDistance('Saturday', 'Sundays')).toEqual(4)
    expect(levenshteinDistance('Camille', 'Camille')).toEqual(0)
    expect(levenshteinDistance('', 'Lucina')).toEqual(6)
  })
})
