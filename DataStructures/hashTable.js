const {LinkedList} = require('./linkedList')

class HashNode {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
}

// Space: O(n)
class Hashtable {
  constructor (size) {
    this.hashtable = new Array(size)
    this.buckets = size
  }
  // Set: Average - O(1) / Worst - O(n)
  set (key, value) {
    if (typeof key !== 'string') throw new TypeError('Keys must be strings')
    const hash = this.hashFunc(key)
    this.hashtable[hash] = this.hashtable[hash] || new LinkedList()
    this.hashtable[hash].addToHead(new HashNode(key, value))
  }
  // Search/Get: Average - O(1) / Worst - O(n)
  get (key) {
    const hash = this.hashFunc(key)
    return this.hashtable[hash].search(node => node.key === key).value
  }

  hasKey (key) {
    const hash = this.hashFunc(key)
    return Boolean(this.hashtable[hash].search(node => node.key === key))
  }

  hashFunc (str) {
    let sum = 0
    for (let i = 0; i < str.length; ++i) {
      sum += str.charCodeAt(i)
    }
    return sum % this.buckets
  }
}

module.exports = {Hashtable}
