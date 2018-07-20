/*
  Write a method that takes a sorted array and a key and returns the index of the
  first occurrence of that key in the array.
*/

// Time: O(log(n)) | Space: O(1)
const firstOccurrenceK = (array, k) => {
  let low = 0
  let high = array.length - 1
  let first = null

  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2)
    if (k > array[middle]) low = middle + 1
    else if (k < array[middle]) high = middle - 1
    else {
      first = middle
      high = middle - 1
    }
  }
  return first
}

module.exports = {firstOccurrenceK}
