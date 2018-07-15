const {swap} = require('./swap')

const selectionSort = (array) => {
  let startIndex = 0

  while (startIndex < array.length) {
    let smallestIndex = startIndex
    for (let i = startIndex; i < array.length; ++i) {
      if (array[smallestIndex] > array[i]) smallestIndex = i
    }
    swap(array, smallestIndex, startIndex)
    ++startIndex
  }
  return array
}

module.exports = {selectionSort}
