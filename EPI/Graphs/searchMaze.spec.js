const {searchMaze} = require('./searchMaze')

describe(`Write a program which takes an array of n integers, where A[i] denotes the maximum
  you can advance from index i, and returns whether it is possible to advance to the
  last index starting from the beginning of the array.`, function () {
  let test1, test2, test3, test4

  beforeEach(function () {
    test1 = [['white']]
    test2 = [
      ['white', 'black', 'white'],
      ['white', 'black', 'white'],
      ['white', 'white', 'white']
    ]
    test3 = [
      ['white', 'black', 'white'],
      ['white', 'black', 'white'],
      ['white', 'black', 'white']
    ]
    test4 = [
      ['black', 'black', 'black', 'black', 'white', 'white'],
      ['white', 'black', 'white', 'black', 'white', 'black'],
      ['white', 'black', 'white', 'white', 'white', 'black'],
      ['white', 'white', 'white', 'black', 'white', 'black'],
      ['white', 'black', 'white', 'white', 'white', 'black']
    ]
  })

  it('sorts into even entries, then odd', function () {
    expect(searchMaze(test1, [0, 0], [0, 0])).toEqual(true)
    expect(searchMaze(test2, [0, 0], [0, 2])).toEqual(true)
    expect(searchMaze(test3, [0, 0], [0, 2])).toEqual(false)
    expect(searchMaze(test4, [4, 0], [0, 5])).toEqual(true)
  })
})
