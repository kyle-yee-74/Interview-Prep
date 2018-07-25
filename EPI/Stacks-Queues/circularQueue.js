/*
  Implement a queue API using an array for storing elements. Your API should include
  a constructor function, which takes as argument the initial capacity of the queue,
  enqueue and dequeue functions, and a function which returns the number of elements
  stored.
*/

class CircularQueue {
  constructor (capacity) {
    this.queue = []
    this.capacity = capacity
    this.head = 0
    this.tail = 0
  }
  // Time: O(1)
  enqueue (value) {
    if (this.currentlyStored() < this.capacity) {
      this.queue.push(value)
      ++this.tail
    } else {
      return 'The circular queue is at max capacity'
    }
  }
  // Time: O(1)
  dequeue () {
    if (this.currentlyStored() === 0) return 'Cannot dequeue from an empty circular queue'
    let currentValue = this.queue[this.head]
    ++this.head
    return currentValue
  }

  currentlyStored () {
    return this.tail - this.head
  }
}

module.exports = {CircularQueue}
