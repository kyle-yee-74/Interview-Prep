const {Queue} = require('./queue')

describe('A queue using a linked list', function () {
  let queue

  beforeEach(function () {
    queue = new Queue()
  })

  it('has methods', function () {
    expect(typeof queue.enqueue).toBe('function')
    expect(typeof queue.dequeue).toBe('function')
    expect(typeof queue.peek).toBe('function')
    expect(typeof queue.size).toBe('function')
  })

  it('can enqueue and dequeue with the proper peek at the top', function () {
    queue.enqueue('first')
    queue.enqueue('second')
    queue.enqueue('third')
    expect(queue.size()).toBe(3)
    expect(queue.dequeue()).toBe('first')
    expect(queue.peek()).toBe('second')
    expect(queue.size()).toBe(2)
  })
})
