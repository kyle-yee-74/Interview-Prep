const {swap} = require('../utils/swap')
/*
  Your input is an array of integers, and you have to reorder
  its entries so that the even entries appear first. However,
  you are required to solve it without allocating additional
  storage.
*/

// Time: O(n) | Space: O(1)
const reorderEvenEntries = (array) => {
  if (array.length < 2) return array

  let even = 0
  let odd = array.length - 1
  while (even < odd) {
    if (array[even] % 2 === 0) {
      ++even
    } else {
      swap(array, even, odd)
      --odd
    }
  }
  return array
}

module.exports = {reorderEvenEntries}
