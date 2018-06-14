const {LinkedList} = require('./linkedList')

class Queue {
  constructor () {
    this.queue = new LinkedList()
  }

  enqueue (input) {
    this.queue.addToTail(input)
  }

  dequeue () {
    return this.queue.removeHead()
  }

  peek () {
    return !this.queue.head ? null : this.queue.head.value
  }

  size () {
    return this.queue.size()
  }
}

// Space: O(n)
// Enqueue: O(1)
// Dequeue: O(1)
// Peek: O(1)

module.exports = {Queue}
