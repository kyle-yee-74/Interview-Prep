const {swap} = require('../utils/swap')
/*
  Write a program that takes an array A and an index i into A, and rearranges the
  elements such that all elements less than A[i] (the "pivot") appear first, followed by
  elements equal to the pivot, followed by elements greater than the pivot.
*/

// Time: O(n) | Space: O(1)
const dutchNationalFlag = (array, i) => {
  if (i >= array.length) return 'Invalid input for i'

  let start = 0
  const pivot = array[i]
  for (let j = 0; j < array.length; ++j) {
    if (array[j] < pivot) {
      swap(array, j, start)
      ++start
    }
  }

  for (let k = start; k < array.length; ++k) {
    if (array[k] === pivot) {
      swap(array, k, start)
      ++start
    }
  }
  return array
}

module.exports = {dutchNationalFlag}
