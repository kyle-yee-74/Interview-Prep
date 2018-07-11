
const mergeSort = (array, start = 0, end = array.length - 1) => {
  if (start === end) return [array[start]]

  let middle = start + Math.floor((end - start) / 2)
  let left = mergeSort(array, start, middle)
  let right = mergeSort(array, middle + 1, end)

  return merge(left, right)
}

const merge = (left, right) => {
  let i = 0
  let j = 0
  let output = []

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i])
      ++i
    } else {
      output.push(right[j])
      ++j
    }
  }

  while (i < left.length) {
    output.push(left[i])
    ++i
  }

  while (j < right.length) {
    output.push(right[j])
    ++j
  }

  return output
}

module.exports = {mergeSort}
