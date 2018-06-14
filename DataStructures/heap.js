class Heap {
  constructor (array, comparisonFunc) {
    this.compFunc = comparisonFunc
    this.heap = this.buildHeap(array)
    this.length = this.heap.length
  }

  buildHeap (array) {
    const firstParentIndex = Math.floor((array.length - 2) / 2)
    for (let i = firstParentIndex; i >= 0; --i) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  siftDown (currentIndex, endIndex, heap) {
    let childOneIndex = currentIndex * 2 + 1
    while (childOneIndex <= endIndex) {
      let childTwoIndex = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1
      let indexToSwap
      if (childTwoIndex !== -1) {
        if (this.compFunc(heap[childTwoIndex], heap[childOneIndex])) {
          indexToSwap = childTwoIndex
        } else {
          indexToSwap = childOneIndex
        }
      } else {
        indexToSwap = childOneIndex
      }

      if (this.compFunc(heap[indexToSwap], heap[currentIndex])) {
        this.swap(currentIndex, indexToSwap, heap)
        currentIndex = indexToSwap
        childOneIndex = currentIndex * 2 + 1
      } else {
        return
      }
    }
  }

  siftUp (currentIndex, heap) {
    let parentIndex = Math.floor((currentIndex - 1) / 2)
    while (currentIndex > 0) {
      if (this.compFunc(heap[currentIndex], heap[parentIndex])) {
        this.swap(currentIndex, parentIndex, heap)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      } else {
        return
      }
    }
  }

  peek () {
    return this.heap[0]
  }
  // remove: O(log(n))
  remove () {
    this.swap(0, this.length - 1, this.heap)
    const valueRemoved = this.heap.pop()
    --this.length
    this.siftDown(0, this.length - 1, this.heap)
    return valueRemoved
  }
  // insert: O(log(n))
  insert (value) {
    this.heap.push(value)
    ++this.length
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap (index1, index2, heap) {
    let temp = heap[index1]
    heap[index1] = heap[index2]
    heap[index2] = temp
  }
}

module.exports = {Heap}
