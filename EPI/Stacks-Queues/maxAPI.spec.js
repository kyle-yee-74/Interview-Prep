const {MaxAPIStack} = require('./maxAPI')

describe(`Design a stack that includes a max operation, in addition to push and pop. The max
  method should return the maximum value stored in the stack.`, function () {
  let test1 = new MaxAPIStack()

  beforeEach(function () {
    test1.push(9)
    test1.push(7)
    test1.push(14)
  })

  it('can return the max number in a stack', function () {
    expect(test1.max()).toEqual(14)
    test1.pop()
    expect(test1.max()).toEqual(9)
    test1.pop()
    expect(test1.max()).toEqual(9)
  })
})
