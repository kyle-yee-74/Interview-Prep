const {replaceRemove} = require('./replaceRemove')

describe(`Write a program which takes as input an array of characters, and removes each 'b' and
  replaces each 'a' by two 'd's. Specifically, along with the array, you are provided an
  integer-valued size. Size denotes the number of entries of the array that the operation
  is to be applied to. You do not have to worry preserving about subsequent entries. For
  example, if the array is [a,b,a,c,null] and the size is 4, then you can return [d,d,d,d,c].
  You can assume there is enough space in the array to hold the final result.`, function () {
  it(`replaces 'a' with 2 d's and removes all b's `, function () {
    expect(replaceRemove(['a', null], 1)).toEqual(2)
    expect(replaceRemove(['a', 'b', 'a', 'c', null], 4)).toEqual(5)
    expect(replaceRemove(['a', 'c', 'd', 'b', 'b', 'c', 'a'], 7)).toEqual(7)
    expect(replaceRemove(['b', 'b', 'b'], 3)).toEqual(0)
  })
})
