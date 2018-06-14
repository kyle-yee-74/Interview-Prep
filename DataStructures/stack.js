const {LinkedList} = require('./linkedList')

class Stack {
  constructor () {
    this.stack = new LinkedList()
  }

  push (input) {
    this.stack.addToHead(input)
  }

  pop () {
    return this.stack.removeHead()
  }

  peek () {
    return !this.stack.head ? null : this.stack.head.value
  }

  size () {
    return this.stack.size()
  }
}

// Space: O(n)
// Enqueue: O(1)
// Dequeue: O(1)
// Peek: O(1)

module.exports = {Stack}
