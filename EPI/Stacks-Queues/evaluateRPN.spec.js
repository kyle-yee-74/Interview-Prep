const {evaluateRPN} = require('./evaluateRPN')

describe(`Write a program that takes an arithmetical expression in Reverse Polish Notatioin (RPN)
  and returns the number that the expression evaluates to.`, function () {
  let test1, test2, test3

  beforeEach(function () {
    test1 = '-7,3,-'
    test2 = ''
    test3 = '3,4,+,2,x,1,+'
  })

  it('can evaluate RPN', function () {
    expect(evaluateRPN(test1)).toEqual(-10)
    expect(evaluateRPN(test2)).toEqual(null)
    expect(evaluateRPN(test3)).toEqual(15)
  })
})
