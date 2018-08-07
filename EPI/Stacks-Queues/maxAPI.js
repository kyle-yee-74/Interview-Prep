/*
  Design a stack that includes a max operation, in addition to push and pop. The max
  method should return the maximum value stored in the stack.
*/

class MaxAPIStack {
  constructor () {
    this.stack = []
  }

  push (value) {
    const data = [value, value]
    const length = this.stack.length
    if (!length) this.stack.push(data)
    else {
      data[1] = Math.max(data[1], this.stack[length - 1][1])
      this.stack.push(data)
    }
  }

  // pop would remain the same
  pop () {
    if (!this.stack.length) throw new Error()
    return this.stack.pop()
  }

  max () {
    if (!this.stack.length) return null
    console.log(this.stack[this.stack.length - 1])
    return this.stack[this.stack.length - 1][1]
  }
}

module.exports = {MaxAPIStack}
