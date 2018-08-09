const {Queue} = require('./queueStack')

describe(`Queue insertion and deletion follows first-in, first-out semantics; stack insertion and
  deletion is last-in, first-out.
  How would you implement a queue given a library implementing stacks?`, function () {
  let test1

  beforeEach(function () {
    test1 = new Queue()
  })

  it('can enqueue and dequeue', function () {
    test1.enqueue(10)
    test1.enqueue(5)
    expect(test1.dequeue()).toEqual(10)
    test1.enqueue(17)
    expect(test1.dequeue()).toEqual(5)
    expect(test1.dequeue()).toEqual(17)
  })
})
