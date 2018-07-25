const {CircularQueue} = require('./circularQueue')

describe(`Implement a queue API using an array for storing elements. Your API should include
  a constructor function, which takes as argument the initial capacity of the queue,
  enqueue and dequeue functions, and a function which returns the number of elements
  stored.`, function () {
  let test1

  beforeEach(function () {
    test1 = new CircularQueue(3)
  })

  it('can enqueue and dequeue', function () {
    test1.enqueue(3)
    test1.enqueue(2)
    test1.enqueue(1)
    expect(test1.dequeue()).toEqual(3)
    expect(test1.dequeue()).toEqual(2)
    expect(test1.dequeue()).toEqual(1)
  })

  it('can return the number of elements stored', function () {
    test1.enqueue(12)
    test1.enqueue(11)
    expect(test1.currentlyStored()).toEqual(2)
  })

  it('will not push to circular queue if at max capacity', function () {
    test1.enqueue(12)
    test1.enqueue(11)
    test1.enqueue(10)
    expect(test1.enqueue(9)).toEqual('The circular queue is at max capacity')
  })

  it('handles underflow (notify when dequeuing from an empty queue)', function () {
    expect(test1.dequeue()).toEqual('Cannot dequeue from an empty circular queue')
  })
})
