class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.linklistSize = 0
  }

  insert (value) {
    if (!this.tail) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      let newNode = new Node(value)
      currentNode.next = newNode
      newNode.previous = currentNode
      this.tail = newNode
    }
    ++this.linklistSize
  }

  addToHead (value) {
    if (!this.head) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      const previousHead = this.head
      this.head = new Node(value)
      this.head.next = previousHead
      previousHead.previous = this.head
    }
    ++this.linklistSize
  }

  addToTail (value) {
    if (!this.tail) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      let previousTail = this.tail
      this.tail = new Node(value)
      this.tail.previous = previousTail
      previousTail.next = this.tail
    }
    ++this.linklistSize
  }

  removeHead () {
    const removedHead = this.head

    if (!removedHead) return null

    if (removedHead.next) {
      this.head = removedHead.next
      this.head.previous = null
    } else {
      this.head = null
      this.tail = null
    }
    --this.linklistSize
    return removedHead.value
  }

  removeTail () {
    const removedTail = this.tail

    if (!removedTail) return null

    if (removedTail.previous) {
      this.tail = removedTail.previous
      this.tail.next = null
    } else {
      this.head = null
      this.tail = null
    }
    --this.linklistSize
    return removedTail.value
  }

  delete (value) {
    let currentNode = this.head
    if (currentNode.value === value && this.head === this.tail) {
      this.head = null
      this.tail = null
    } else if (currentNode.value === value) {
      this.head = this.head.next
      this.head.previous = null
    } else {
      while (currentNode.value !== value) {
        currentNode = currentNode.next
      }

      if (currentNode === this.tail) {
        let previousNode = this.tail.previous
        previousNode.next = null
        this.tail = previousNode
      } else if (currentNode) {
        let previousNode = currentNode.previous
        currentNode.next.previous = previousNode
        previousNode.next = currentNode.next
      } else {
        throw new TypeError(`Could not delete: ${value} from the linked list`)
      }
    }
    --this.linklistSize
  }

  search (input) {
    let currentNode = this.head
    let comparator = input
    if (typeof input !== 'function') {
      const comparatorString = input
      comparator = function (value) {
        return comparatorString === value
      }
    }

    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value
      currentNode = currentNode.next
    }

    return null
  }

  size () {
    return this.linklistSize
  }
}

// Space: O(n)
// Prepend (add to head): O(1)
// Append (add to tail): O(1)
// Lookup: O(n)
// Insert: O(n)
// Delete: O(n)
// Iterating through a linked list is usually a bit slower than iterating
// through an array since an array's items are located right next to each other in computer memory,
// but linked list nodes can be scattered all over.

class SinglelyLinkedList {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

function reverseLinkedList (linkedlist) {
  let previousNode = null
  let currentNode = linkedlist
  if (linkedlist.hasOwnProperty('previous')) {
    while (currentNode !== null) {
      let newNode = currentNode.next
      currentNode.next = previousNode
      currentNode.previous = newNode
      previousNode = currentNode
      currentNode = newNode
    }
    return previousNode
  } else {
    while (currentNode.next !== null) {
      let newNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = newNode
    }
    return currentNode
  }
}

module.exports = {LinkedList, Node, reverseLinkedList, SinglelyLinkedList}
