const {swap} = require('./swap')

const quickSort = (array) => {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

const quickSortHelper = (array, start, end) => {
  if (start < end) {
    let pivot = partition(array, start, end)
    quickSortHelper(array, start, pivot - 1)
    quickSortHelper(array, pivot + 1, end)
  }
}

const partition = (array, start, end) => {
  let pivot = array[end]
  let i = start - 1

  for (let j = start; j <= end - 1; ++j) {
    if (array[j] <= pivot) {
      ++i
      swap(array, j, i)
    }
  }
  swap(array, end, i + 1)
  return i + 1
}

module.exports = {quickSort}
