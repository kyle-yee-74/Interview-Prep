const {LinkedList, Node, reverseLinkedList, SinglelyLinkedList} = require('./linkedList')

describe('A linked list', function () {
  let linkedList

  beforeEach(function () {
    linkedList = new LinkedList()
  })

  it('has methods', function () {
    expect(typeof linkedList.insert).toBe('function')
    expect(typeof linkedList.delete).toBe('function')
    expect(typeof linkedList.addToHead).toBe('function')
    expect(typeof linkedList.addToTail).toBe('function')
    expect(typeof linkedList.removeTail).toBe('function')
    expect(typeof linkedList.removeHead).toBe('function')
    expect(typeof linkedList.search).toBe('function')
    expect(typeof linkedList.size).toBe('function')
  })

  it('starts with head and tail falsy', function () {
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
    expect(linkedList.removeHead()).toBeFalsy()
  })

  it('has a Node class defined to represent a node', function () {
    expect(typeof Node).toBe('function')
    expect(isNative(Node)).toBe(false)
    function isNative (fn) {
      return (/\{\s*\[native code]\s*\}/).test('' + fn)
    }
  })

  it('Node class should take a value argument and define next and previous to be null by default', function () {
    const node = new Node('test')
    expect(node.value).toBe('test')
    expect(node.next).toBe(null)
    expect(node.previous).toBe(null)
  })

  it('linkedlist should use Node class to add nodes', function () {
    linkedList.addToTail('first')
    expect(linkedList.tail instanceof Node).toBe(true)
  })

  it('if a single node is added to head, it should be set to head and tail', function () {
    linkedList.addToHead('first')
    expect(linkedList.head.value).toBe('first')
    expect(linkedList.head).toBe(linkedList.tail)
    expect(linkedList.head.next).toBe(null)
    expect(linkedList.head.previous).toBe(null)
  })

  it('if a single node is inserted to head, it should be set to head and tail', function () {
    linkedList.insert('first')
    expect(linkedList.head.value).toBe('first')
    expect(linkedList.head).toBe(linkedList.tail)
    expect(linkedList.head.next).toBe(null)
    expect(linkedList.head.previous).toBe(null)
  })

  it('should make sure the previous of any newly appointed HEAD is null', function () {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.head.previous).toBe(null)
  })

  it('should make sure the next of any newly appointed TAIL is null', function () {
    linkedList.addToTail('first')
    linkedList.addToTail('second')
    linkedList.addToTail('third')
    expect(linkedList.removeTail()).toBe('third')
    expect(linkedList.tail.next).toBe(null)
  })

  it('should be able to add to head or tail', function () {
    linkedList.addToTail('second')
    linkedList.addToHead('first')
    linkedList.addToTail('third')
    expect(linkedList.removeHead()).toBe('first')
    expect(linkedList.removeHead()).toBe('second')
    expect(linkedList.removeHead()).toBe('third')
  })

  it('should return the tail on a removeTail', function () {
    linkedList.addToTail('second')
    linkedList.addToHead('third')
    linkedList.addToTail('first')
    expect(linkedList.removeTail()).toBe('first')
    expect(linkedList.removeTail()).toBe('second')
    expect(linkedList.removeTail()).toBe('third')
  })

  it('should delete nodes from the linked list', function () {
    linkedList.insert('first')
    linkedList.insert('second')
    expect(linkedList.head.value).toBe('first')
    expect(linkedList.tail.value).toBe('second')
    linkedList.delete('second')
    expect(linkedList.head).toBe(linkedList.tail)
    linkedList.insert('third')
    linkedList.insert('fourth')
    linkedList.delete('first')
    expect(linkedList.head.value).toBe('third')
    linkedList.insert('fifth')
    linkedList.insert('sixth')
    linkedList.delete('fourth')
    expect(linkedList.head.next.value).toBe('fifth')
  })

  it('should remove head and tail when last node is removed', function () {
    expect(linkedList.removeHead()).toBeFalsy()
    linkedList.addToTail('one')
    expect(linkedList.removeHead()).toBe('one')
    expect(linkedList.removeHead()).toBeFalsy()
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.tail).toBeFalsy()
  })

  it('should return the correct values for search and size', function () {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    linkedList.addToTail('three')
    linkedList.addToTail('four')
    linkedList.addToTail('one')
    expect(linkedList.size()).toBe(5)
    expect(linkedList.search('two')).toBe('two')
    expect(linkedList.search('sdd')).toBe(null)
    expect(linkedList.search('one')).toBe('one')
    expect(linkedList.search('four')).toBe('four')
  })

  it('should be able to take strings and functions both as search inputs', function () {
    linkedList.addToTail('one')
    linkedList.addToTail('two')
    expect(linkedList.search(function (nodeValue) {
      return nodeValue === 'two'
    })).toBe('two')
  })

  it('should therefore be able to store and search for objects, not just strings', function () {
    function UserNode (name, email, city) {
      this.name = name
      this.email = email
      this.city = city
    }

    linkedList.addToHead(new UserNode('Alistar', 'alistar@lol.com', 'Runeterra'))
    linkedList.addToHead(new UserNode('Amumu', 'amumu@lol.com', 'Shurima'))
    linkedList.addToHead(new UserNode('Anivia', 'anivia@lol.com', 'Freljord'))

    expect(linkedList.search(function (userNode) {
      return userNode.name === 'Alistar'
    }).email).toBe('alistar@lol.com')

    expect(linkedList.search(function (userNode) {
      return userNode.email === 'amumu@lol.com'
    }).city).toBe('Shurima')

    expect(linkedList.search(function (userNode) {
      return userNode.city === 'Freljord'
    }).name).toBe('Anivia')
  })

  it('should throw a TypeError if the remove value is not in the linked list', function () {
    linkedList.insert('one')
    expect(function () { linkedList.delete('two') }).toThrowError(TypeError, `Could not delete: 'one' from the linked list`)
  })
})

describe('Reverse a linked list', function () {
  it('should reverse a singlely linked list', function () {
    let singlelyLL = new SinglelyLinkedList(5)
    let testArray = [1, 2, 3, 4]
    testArray.forEach(num => {
      singlelyLL.next = new SinglelyLinkedList(num)
      singlelyLL = singlelyLL.next
    })
    expect(reverseLinkedList(singlelyLL).value).toBe(4)
  })

  it('should reverse a doublely linked list', function () {
    let linkedList1 = new Node('first')
    let linkedList2 = new Node('second')
    let linkedList3 = new Node('third')
    linkedList1.next = linkedList2
    linkedList2.next = linkedList3
    linkedList2.previous = linkedList1
    linkedList3.previous = linkedList2
    expect(reverseLinkedList(linkedList1).value).toBe('third')
  })
})
