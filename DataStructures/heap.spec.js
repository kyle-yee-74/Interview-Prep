const {Heap} = require('./heap')

describe('A heap', function () {
  let heap1
  let heap2
  function maxHeapFunc (a, b) {
    return a > b
  }
  function minHeapFunc (a, b) {
    return a < b
  }

  beforeEach(function () {
    heap1 = new Heap([8, 12, 23, 17, 31, 30, 44, 102, 18], minHeapFunc)
    heap2 = new Heap([9, 8, 7, 6, 5, 4, 3], maxHeapFunc)
  })

  it('has methods', function () {
    expect(typeof heap1.buildHeap).toBe('function')
    expect(typeof heap1.remove).toBe('function')
    expect(typeof heap1.peek).toBe('function')
    expect(typeof heap1.insert).toBe('function')
  })

  it('returns the head value of the heap', function () {
    expect(heap1.peek()).toBe(8)
    expect(heap2.peek()).toBe(9)
  })

  it('inserts a value and sifts up to fix the heap', function () {
    heap1.insert(7)
    expect(heap1.peek()).toBe(7)
    heap2.insert(10)
    expect(heap2.peek()).toBe(10)
  })

  it('removes a value and sifts down to fix the heap', function () {
    expect(heap1.remove()).toBe(8)
    expect(heap1.peek()).toBe(12)
    expect(heap2.remove()).toBe(9)
    expect(heap2.peek()).toBe(8)
  })
})
