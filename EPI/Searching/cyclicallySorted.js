/*
  An array is said to be cyclically sorted if it is possible to cyclically shift its entries so
  that it becomes sorted. Design an O(log n) algorithm for finding the position of the
  smallest element in a cyclically sorted array. Assume all elements are distinct.
*/

// Time: O(n) | Space: O(n) | n = length of array
const cyclicallySorted = (array) => {
  let left = 0
  let right = array.length - 1
  let middle = 0

  while (left < right) {
    middle = left + Math.floor((right - left) / 2)
    const lastValue = array[right]
    if (array[middle] < lastValue) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return array[left]
}

module.exports = {cyclicallySorted}
