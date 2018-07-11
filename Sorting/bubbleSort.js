import {swap} from './swap'

const bubbleSort = (array) => {
  let isSorted = false
  let count = 0

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - count; ++i) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        isSorted = false
      }
    }
    ++count
  }
  return array
}

module.exports = {bubbleSort}
