/*
  Queue insertion and deletion follows first-in, first-out semantics; stack insertion and
  deletion is last-in, first-out.
  How would you implement a queue given a library implementing stacks?
*/

class Queue {
  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue (value) {
    this.stack1.push(value)
  }

  dequeue () {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop()
    } else if (!this.stack1.length) {
      throw new Error('Cannot pop from empty queue')
    } else {
      return this.stack2.pop()
    }
  }
}

module.exports = {Queue}
