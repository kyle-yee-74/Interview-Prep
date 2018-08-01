const {Heap} = require('../../DataStructures/heap')
/*
  You want to compute the running median of a sequence of numbers. The sequence is
  presented to you in a streaming fashion—you cannot back up to read an earlier value,
  and you need to output the median after reading in each new element. For example,
  if the input is [1, 0, 3, 5, 2, 0, 1] the output is [1, 0.5, 1, 2, 2, 1.5, 1].
  Design an algorithm for computing the running median of a sequence.
*/

// Time: O(n) | Space: O(n) | n = length of array
const continuousMedian = (array) => {
  const maxHeap = new Heap([], maxFunc)
  const minHeap = new Heap([], minFunc)
  const output = []

  if (array.length < 2) return array

  for (let i = 0; i < array.length; ++i) {
    if (!maxHeap.length || array[i] < maxHeap.peek()) {
      maxHeap.insert(array[i])
    } else {
      minHeap.insert(array[i])
    }
    rebalanceHeaps(minHeap, maxHeap)
    output.push(updateMedian(minHeap, maxHeap))
  }
  return output
}

const rebalanceHeaps = (minHeap, maxHeap) => {
  if (minHeap.length - maxHeap.length === 2) {
    maxHeap.insert(minHeap.remove())
  } else if (maxHeap.length - minHeap.length === 2) {
    minHeap.insert(maxHeap.remove())
  }
}

const updateMedian = (minHeap, maxHeap) => {
  if (minHeap.length === maxHeap.length) {
    return (minHeap.peek() + maxHeap.peek()) / 2
  } else if (minHeap.length > maxHeap.length) return minHeap.peek()
  else return maxHeap.peek()
}

const maxFunc = (val1, val2) => {
  return val1 > val2
}

const minFunc = (val1, val2) => {
  return val1 < val2
}

module.exports = {continuousMedian}
