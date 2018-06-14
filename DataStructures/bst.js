// Space: O(n)
class BinarySearchTree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
  // Insert: O(log(n)) / {O(n) - worst case}
  insert (input) {
    if (input <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(input)
      } else {
        this.left.insert(input)
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(input)
      } else {
        this.right.insert(input)
      }
    }
    return this
  }
  // Search: O(log(n)) / {O(n) - worst case}
  search (input) {
    if (input === this.value) return true

    if (input < this.value) {
      if (!this.left) {
        return false
      } else {
        return this.left.search(input)
      }
    } else {
      if (!this.right) {
        return false
      } else {
        return this.right.search(input)
      }
    }
  }
  // Remove: O(log(n)) - average case / O(n) - worst case time
  remove (input, parent = null) {
    // is the input less than the current node's value
    if (input < this.value) {
      if (this.left !== null) {
        this.left.remove(input, this)
      } else { // the node has no left child
        return `Could not remove ${input}`
      }
    } else if (input > this.value) {
      if (this.right !== null) {
        this.right.remove(input, this)
      } else { // the node has no right child
        return `Could not remove ${input}`
      }
    } else { // if we've found a matching node
      // node has 2 children
      if (this.right !== null && this.left !== null) {
        // find the next minimum value
        this.value = this.right.getMinValue()
        // remove that value from its original spot
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right !== null) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          this.value = null
        }
      } else if (parent.left === this) { // update the node with its left or right child
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }
    return this
  }

  getMinValue () {
    let currentNode = this
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}

module.exports = {BinarySearchTree}
