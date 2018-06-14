const {Stack} = require('./stack')

describe('A stack using a linked list', function () {
  let stack

  beforeEach(function () {
    stack = new Stack()
  })

  it('has methods', function () {
    expect(typeof stack.push).toBe('function')
    expect(typeof stack.pop).toBe('function')
    expect(typeof stack.peek).toBe('function')
    expect(typeof stack.size).toBe('function')
  })

  it('can push and pop with the proper peek at the top', function () {
    stack.push('first')
    stack.push('second')
    stack.push('third')
    expect(stack.size()).toBe(3)
    expect(stack.pop()).toBe('third')
    expect(stack.peek()).toBe('second')
    expect(stack.size()).toBe(2)
  })
})
